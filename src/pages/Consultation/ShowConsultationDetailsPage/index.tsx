import { useMutation, useQuery } from "@tanstack/react-query"
import Consultations from "../../../services/Consultations"
import { Link, useParams } from "react-router-dom"
import { Box, Button, CircularProgress, Modal, Paper, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography, Link as MUILink } from "@mui/material"
import { grey } from "@mui/material/colors"
import Prescription from "../../../services/Prescription"
import { useState } from "react"
import { ShowPrescriptionDetailsPage } from "../../Prescription/ShowPrescriptionDetailsPage"

export const ShowConsultationDetailsPage = () => {
  const { consultation_id } = useParams()
  const [prescriptionToDelete, setPrescriptionToDelete] = useState<number | null>(null)
  const [prescriptionToShowDetails, setPrescriptionToShowDetails] = useState<number | null>(null)

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['consultation'],
    queryFn: async () => await Consultations.show(Number(consultation_id)),
  })

  const consultation = data?.data

  const date = new Date(consultation?.date_of_consultation)

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');

  const formated_data = `${day}/${month}/${year}`

  const deletePrescription = useMutation({
    mutationFn: (prescription_id: number) => Prescription.destroy(Number(consultation_id), prescription_id),

    onSuccess: (response) => {
      openDeleteModalConfirm(null)

      response.data.success ? refetch() : console.log('Não foi possivel apagar')
    },

    onError: (err) => console.log(err),
  })

  const openDeleteModalConfirm = (prescription_id: number | null) => {
    setPrescriptionToDelete(prescription_id)
  }

  const openDetailsModal = (prescription_id: number | null) => {
    setPrescriptionToShowDetails(prescription_id)
  }

  const handleDeletePerscription = (prescription_id: number) => {
    deletePrescription.mutate(prescription_id)
  }

  return (
    <Stack width='100%' maxWidth='md' paddingY={2} spacing={2} borderRadius={2}>
      <MUILink component={Link} to='/consultations'>Voltar</MUILink>

      <Typography variant="h6" component='h1'>Consulta #{consultation?.id}</Typography>

      <Box>
        {isLoading || isFetching && (
          <Paper sx={{ bgcolor: grey[50] }}>
            <Stack width='100%' minHeight={600} justifyContent={'center'} alignItems={'center'}>
              <CircularProgress />
            </Stack>
          </Paper>
        )}

        {!isLoading && !isFetching && (
          <Stack spacing={3}>
            <Stack spacing={3} padding={2} sx={{ whiteSpace: 'pre-wrap', bgcolor: grey[50] }}>
              <Stack spacing={1}>
                <Typography fontWeight='bold'>Especialidade:</Typography>

                <Typography sx={{ bgcolor: grey[200] }} paddingY={1.5} paddingX={2} borderRadius={2}>
                  {consultation?.specialty.name}
                </Typography>
              </Stack>

              <Stack spacing={1}>
                <Typography fontWeight='bold'>Profissional:</Typography>

                <Typography sx={{ bgcolor: grey[200] }} paddingY={1.5} paddingX={2} borderRadius={2}>
                  {consultation?.bond.to.name}
                </Typography>
              </Stack>

              <Stack direction='row' spacing={4}>
                <Stack spacing={1}>
                  <Typography fontWeight='bold'>Data da Consulta: </Typography>

                  <Typography sx={{ bgcolor: grey[200] }} paddingY={1.5} paddingX={2} borderRadius={2}>{formated_data}</Typography>
                </Stack>

                <Stack spacing={1}>
                  <Typography fontWeight='bold'>Status: </Typography>

                  <Typography sx={{ bgcolor: grey[200] }} paddingY={1.5} paddingX={2} borderRadius={2}>{consultation?.status.status}</Typography>
                </Stack>
              </Stack>

              <Stack spacing={1}>
                <Typography fontWeight='bold'>Motivo: </Typography>
                <Typography sx={{ bgcolor: grey[200] }} paddingY={1.5} paddingX={2} borderRadius={2}>{consultation?.reason}</Typography>
              </Stack>

              <Stack spacing={1}>
                <Typography fontWeight='bold'>Observação: </Typography>
                <Typography sx={{ bgcolor: grey[200] }} paddingY={1.5} paddingX={2} borderRadius={2}>{consultation?.observation}</Typography>
              </Stack>
            </Stack>

            <Stack padding={2} sx={{ bgcolor: grey[50] }}>
              <Typography variant="h6">Prescrições:</Typography>

              <Button
                component={Link}
                to={`prescription/create`}
                variant='contained'
                sx={{ width: 'fit-content', alignSelf: 'end' }}
              >
                Adicionar Prescrição
              </Button>

              {consultation?.prescription.length == 0
                ? (
                  <Typography>
                    Você não possui prescrições para essa consulta.
                  </Typography>
                )
                : (
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Rotulo</TableCell>
                        <TableCell>Ações</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {consultation?.prescription.map(prescription => (
                        <TableRow key={prescription.id}>
                          <TableCell onClick={() => openDetailsModal(prescription.id)}>
                            <Typography>#{prescription.id}</Typography>
                          </TableCell>

                          <TableCell>{prescription.label}</TableCell>

                          <TableCell>
                            <Stack direction={'row'} spacing={1}>
                              <Button onClick={() => openDetailsModal(prescription.id)} variant='contained' color="info">Visualizar</Button>
                              <Button onClick={() => openDeleteModalConfirm(prescription.id)} variant='contained' color="error" >Apagar</Button>
                              <Button component={Link} to={`prescription/${prescription.id}/edit`} variant='contained' color="success">Atualizar</Button>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )
              }

              {prescriptionToDelete && (
                <Modal
                  open={prescriptionToDelete ? true : false}
                  sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                  onClose={() => openDeleteModalConfirm(null)}
                >
                  <Stack maxWidth={500} sx={{ bgcolor: 'white' }} padding={3} spacing={4}>
                    <Typography>Tem certeza que deseja apagar essa prescripção?</Typography>

                    <Stack spacing={2} >
                      <Button color='error' variant='contained' onClick={() => openDeleteModalConfirm(null)}>Cancelar</Button>
                      <Button color='success' variant='contained' onClick={() => handleDeletePerscription(prescriptionToDelete)}>Apagar Consulta</Button>
                    </Stack>
                  </Stack>
                </Modal>
              )}

              {prescriptionToShowDetails && (
                <ShowPrescriptionDetailsPage
                  consultation_id={Number(consultation_id)}
                  prescription_id={prescriptionToShowDetails}
                  openModal={typeof prescriptionToShowDetails == 'number'}
                  handleCloseModal={() => openDetailsModal(null)}
                />
              )}

            </Stack>
          </Stack>
        )}
      </Box>

    </Stack>
  )
}