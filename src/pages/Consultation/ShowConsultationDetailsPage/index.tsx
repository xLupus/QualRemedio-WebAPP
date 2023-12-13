import { useMutation, useQuery } from "@tanstack/react-query"
import Consultations from "../../../services/Consultations"
import { NavLink, useParams } from "react-router-dom"
import { Box, Button, CircularProgress, Modal, Paper, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography, Link, CardContent } from "@mui/material"
import { grey } from "@mui/material/colors"
import Prescription from "../../../services/Prescription"
import { useState } from "react"
import { ShowPrescriptionDetailsPage } from "../../Prescription/ShowPrescriptionDetailsPage"
import moment from "moment"
import { AppCard } from "../../../components/Card"
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { AppButton } from "../../../components/Button"

export const ShowConsultationDetailsPage = () => {
  const { consultation_id } = useParams()
  const [prescriptionToDelete, setPrescriptionToDelete] = useState<number | null>(null)
  const [prescriptionToShowDetails, setPrescriptionToShowDetails] = useState<number | null>(null)

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['consultation'],
    queryFn: async () => await Consultations.show(Number(consultation_id)),
  })

  const consultation = data?.data

  const date = moment(consultation?.date_of_consultation, 'YYYY-MM-DD').format('DD-MM-YYYY');

  const formated_data = date;

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
    <>
        <Stack flexDirection='row'>
            <Typography typography='h1' fontSize='1.75rem' color='#00000077' mb={6}  mr={'auto'}>Consulta #{consultation?.id}</Typography>
            <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/consultations' underline="none" px={2.25} py={1.25} fontSize='1'>Voltar</Link>
        </Stack>

        {isLoading || isFetching && (
            <Paper sx={{ bgcolor: grey[50] }}>
                <Stack width='100%' minHeight={600} justifyContent={'center'} alignItems={'center'}>
                <CircularProgress />
                </Stack>
            </Paper>
        )}

      {
        !isLoading && !isFetching && (
            <>
                <Stack spacing={4}>
                <AppCard sx={{ p: 1.5 }}>
                <CardContent>
                                <Grid container spacing={4}>
                                    <Grid xs={6}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Especialidade</Typography>

                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>
                                            {consultation?.specialty.name}
                                        </Paper>
                                    </Grid>

                                    <Grid xs={6}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Profissional</Typography>

                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>
                                            {consultation?.bond.to.name}
                                        </Paper>
                                    </Grid>

                                    <Grid xs={6}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Data da Consulta </Typography>

                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>
                                            {formated_data}
                                        </Paper>
                                    </Grid>

                                    <Grid xs={6}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Status</Typography>

                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>
                                          {consultation?.status.status}
                                        </Paper>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Motivo</Typography>

                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>
                                           {consultation?.reason}
                                        </Paper>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Observação</Typography>

                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>
                                            {consultation?.observation}
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </CardContent>
            </AppCard>

            <Typography typography='h3' fontSize='1.15rem' color='#00000077' mb={6} mt={12}>Minhas prescrições da consulta</Typography>

            <AppCard sx={{ height: '23.9375rem', p: 1.5 }}>
                <CardContent>
                            <Grid container spacing={4}>
                                <Grid xs={12}>
                                    <Stack alignItems='flex-end'>
                                            <AppButton
                                            sx={{ width: '18.5rem', height: '2.5rem', backgroundColor: '#404040', color: '#FFF',
                                                            '&:hover': {
                                                            backgroundColor: '#525252'
                                                }}}

                                                        id='btn-add-prescription'
                                                        component={NavLink}
                                                        to={`prescription/create`}
                                                        variant='contained'
                                                        type="submit"
                                                    >
                                                Adicionar Prescrição
                                    </AppButton>
                                    </Stack>
                                </Grid>

                                <Grid xs={12}>
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
                                            <Button component={NavLink} to={`prescription/${prescription.id}/edit`} variant='contained' color="success">Atualizar</Button>
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
                                </Grid>    
                            </Grid>
                        </CardContent>
             </AppCard>
                </Stack>
            </>
        )
      }
    </>
  )
}