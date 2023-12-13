import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom"
import Prescription from "../../../services/Prescription";
import {  CircularProgress, Link as MUILink, Modal, Stack, Typography, Paper, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { AppButton } from "../../../components/Button";

interface ShowPrescriptionDetailsProps {
  consultation_id: number
  prescription_id: number
  openModal: boolean
  handleCloseModal: () => void
}

export const ShowPrescriptionDetailsPage = ({ consultation_id, prescription_id, openModal, handleCloseModal }: ShowPrescriptionDetailsProps) => {

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['prescription_details'],
    queryFn: () => Prescription.show(Number(consultation_id), Number(prescription_id))
  })

  const prescription = data?.data.prescription
  const digital_link = data?.data.digital_link

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2   }}
    >

      <Stack minWidth={500} maxWidth={'md'} sx={{ bgcolor: 'white', borderRadius: '.50rem', boxShadow: 2 }} padding={3} spacing={5} >
      <Typography typography='h4' fontSize='1.125rem' mb={2}>Detalhes da receita - # {prescription?.id}</Typography>
      <Divider />
       
        {isLoading || isFetching
          ? (
            <Stack alignItems='center'>
              <CircularProgress sx={{color: '#000'}}/>
            </Stack>
          )
          : (
            <>
              {prescription && (
                <Stack sx={{ whiteSpace: 'pre-wrap' }} spacing={3}>
                  <Stack>
                      <Typography typography='h4' fontSize='1.125rem' mb={2}>Rotulo</Typography>

                      <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077', bgcolor: grey[300] }} elevation={2}>{prescription.label}</Paper>
                  </Stack>

                  <Stack>
                    <Typography typography='h4' fontSize='1.125rem' mb={2}>Observação</Typography>

                    <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077', bgcolor: grey[300] }} elevation={2}>{prescription.observation}</Paper>
                  </Stack>

                  <Stack>
                    <Typography typography='h4' fontSize='1.125rem' mb={2}>Versão Escrita</Typography>

                    {prescription.physical ? (
                      <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077', bgcolor: grey[300] }} elevation={2}>{prescription.physical}</Paper>
                      ) : (
                      <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077', bgcolor: grey[300] }} elevation={2}>Não possui</Paper>
                    )}
                  </Stack>

                  <Stack>
                  <Typography typography='h4' fontSize='1.125rem' mb={2}>Versão Digital</Typography>

                    {digital_link ? (
                      <MUILink component={Link} to={digital_link}>Baixar versão digital</MUILink>
                    ) : (
                      <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077', bgcolor: grey[300] }} elevation={2}>Não possui</Paper>
                    )}
                  </Stack>
                </Stack>

              )}
            </>
          )}

      <AppButton
            sx={{ height: '2.5rem', backgroundColor: '#404040', color: '#FFF',
               '&:hover': {
                     backgroundColor: '#525252'
          }}}

         onClick={handleCloseModal}
                       id='btn-close-modal'
                       variant='contained'
            >
                                                                                   Fechar
                                                                        </AppButton>
      </Stack>
    </Modal>
  )
}