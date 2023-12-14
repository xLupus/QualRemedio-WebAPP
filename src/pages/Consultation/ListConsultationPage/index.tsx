import { Box, Button, CircularProgress, Link as MUILink, Modal, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Link, NavLink } from 'react-router-dom'
import Consultations from '../../../services/Consultations'
import { useState } from 'react'
import { useCurrentUserContext } from '../../../hooks/CurrentUserContext'

interface ListConsultationProps {
  actions?: boolean,

  query?: { //TODO - Rever
    auth_user?: number,
    bond_id?: number
  }
}

export const ListConsultationPage = ({ actions, query }: ListConsultationProps) => {
  const currentUser = useCurrentUserContext();
  const [selectedConsultation, setSelectedConsultation] = useState<number | null>(null)

  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10) // * Item por pagina

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['consultations', page],

    queryFn: () => Consultations.index({
      filter: {
  
        bond: query?.bond_id
      }, //TODO - Pegar do Storage
      paginate: {
        skip: ((page - 1) * rowsPerPage),
        take: rowsPerPage
      }
    }),
  })

  const request_data = data?.data;

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
    <>
      <Box>
      <Typography typography='h1' fontSize='1.75rem' color='#00000077' mb={6}>Minhas consultas</Typography>

        {actions && (
            <Box alignSelf='end'>
                <NavLink to={'create'}>
                <Button variant='contained'>+ Consulta</Button>
                </NavLink>
            </Box>
        )}
      </Box>

        <Paper sx={{ width: '100%', overflow: 'hidden' }} id='table'>
        <TableContainer sx={{ maxHeight: 590 }}>
            <Table>
                <TableHead  sx={{backgroundColor: '#C6C6C6'}} aria-label="normal table">
                <TableRow>
                    <TableCell align='center'>ID</TableCell>
                    <TableCell  align='center'>Razão</TableCell>
                    <TableCell  align='center'>Especialidade</TableCell>
                    <TableCell  align='center'>Status</TableCell>
                    <TableCell  align='center'>Vinculado a</TableCell>
                    {actions && (
                    <TableCell  align='center'>Ações</TableCell>
                    )}
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
                                <TableCell align='center'>
                                <MUILink color='#000' underline='none' fontWeight='bold' component={Link} to={`${consultation.id}`}>#{consultation.id}</MUILink>
                                </TableCell>
                                <TableCell align='center'>{consultation.reason}</TableCell>
                                <TableCell align='center'>{consultation.specialty.name}</TableCell>
                                <TableCell align='center'>{consultation.status.status}</TableCell>
                                <TableCell align='center'>{consultation.bond.to.id === Number(currentUser?.user_id) ? consultation.bond.from.name : consultation.bond.to.name}</TableCell>

                                {actions && (
                                <TableCell>
                                    <Stack direction='row' spacing={1}>
                                    <Button color='info' variant='contained' component={Link} to={`${consultation.id}/edit`}>Atualizar</Button>
                                    <Button color='error' variant='contained' onClick={() => openDeleteModalConfirm(consultation.id)}>Apagar</Button>
                                    </Stack>
                                </TableCell>
                                )}
                            </TableRow>
                            ))}
                        </>
                        )}
                    </>
                }
                </TableBody>
                </Table>
            </TableContainer>
                            {request_data?.number_of_pages > 0 && (
            <Stack alignItems={'center'} padding={2}>
            <Pagination
                count={!request_data.number_of_pages ? 1 : request_data.number_of_pages }
                page={page === 0 ? 1 : page}
                onChange={handleChangePage}
                hidePrevButton={page === 1}
                hideNextButton={page === request_data.number_of_pages}
                color='primary'
            />
            </Stack>
        )}
        </Paper>  

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
    </>
  )
}



