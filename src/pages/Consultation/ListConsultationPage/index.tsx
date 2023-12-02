import { Box, Button, CircularProgress, Link as MUILink, Modal, Pagination, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Link, NavLink } from 'react-router-dom'
import Consultations from '../../../services/Consultations'
import { useState } from 'react'

//<IResponseRequest, Error>
export const ListConsultationPage = () => {
  const [selectedConsultation, setSelectedConsultation] = useState<number | null>(null)

  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10) // * Item por pagina

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['consultations', page],

    queryFn: () => Consultations.index({
      filter: { created_by: 14 }, //TODO - Pegar do Storage
      paginate: {
        skip: ((page - 1) * rowsPerPage),
        take: rowsPerPage
      }
    }),
  })

  const request_data = data?.data

  const deleteConsultation = useMutation({
    mutationFn: (consultation_id: number) => Consultations.destroy(consultation_id),

    onSuccess: (response) => {
      response.data.success ? refetch() : console.log('Não foi possivel apagar');
    },

    onError: (err) => console.log(err),
  })

  const openDeleteModalConfirm = (consultation_id: number | null) => {
    setSelectedConsultation(consultation_id)
  }

  const handleDeleteConsultation = (consultation_id: number) => {
    deleteConsultation.mutate(consultation_id)
    openDeleteModalConfirm(null)
  }

  const handleChangePage = (e: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage)
    refetch()
  }

  return (
    <Stack spacing={3} maxWidth={'lg'} padding={2} >
      <Typography variant='h5' component='h1'>Lista de Consultas</Typography>

      <Box alignSelf='end'>
        <NavLink to={'criar'}>
          <Button variant='contained'>+ Consulta</Button>
        </NavLink>
      </Box>

      <Table size="small">
        <TableHead color=''>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Razão</TableCell>
            <TableCell>Especialidade</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Profissional</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {isLoading
            ? (
              <TableRow>
                <TableCell colSpan={6} align='center'>
                  <CircularProgress />
                </TableCell>
              </TableRow>
            )

            : <>
              {request_data?.total_consultations == 0
                ? (
                  <TableRow>
                    <TableCell colSpan={6} align='center'>Voce não possui consultas registradas.</TableCell>
                  </TableRow>
                )
                : (
                  <>
                    {request_data?.consultations.map(consultation => (
                      <TableRow key={consultation.id}>
                        <TableCell>
                          <MUILink component={Link} to={`${consultation.id}`}>#{consultation.id}</MUILink>
                        </TableCell>
                        <TableCell>{consultation.reason}</TableCell>
                        <TableCell>{consultation.specialty.name}</TableCell>
                        <TableCell>{consultation.status.status}</TableCell>
                        <TableCell>{consultation.bond.to.name}</TableCell>

                        <TableCell>
                          <Stack direction='row' spacing={1}>
                            <Button color='info' variant='contained' component={Link} to={`${consultation.id}/editar`}>Atualizar</Button>
                            <Button color='error' variant='contained' onClick={() => openDeleteModalConfirm(consultation.id)}>Apagar</Button>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                )}
            </>
          }
        </TableBody>
      </Table>

      {request_data?.number_of_pages && (
        <Stack alignItems={'center'} padding={2}>
          <Pagination
            count={request_data.number_of_pages}
            page={page}
            onChange={handleChangePage}
            hidePrevButton={page == 1}
            hideNextButton={page == request_data.number_of_pages}
          />
        </Stack>
      )}

      {selectedConsultation && (
        <Modal
          open={selectedConsultation ? true : false}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
          onClose={() => setSelectedConsultation(null)}
        >
          <Stack maxWidth={500} sx={{ bgcolor: 'white' }} padding={3} spacing={5}>
            <Typography>Tem certeza que deseja remover essa consulta?</Typography>

            <Stack direction={'row'} spacing={2} justifyContent={'center'}>
              <Button color='error' variant='contained' onClick={() => openDeleteModalConfirm(null)}>Cancelar</Button>
              <Button color='primary' variant='contained' onClick={() => handleDeleteConsultation(selectedConsultation)}>Apagar Consulta</Button>
            </Stack>
          </Stack>
        </Modal>
      )}
    </Stack>
  )
}



