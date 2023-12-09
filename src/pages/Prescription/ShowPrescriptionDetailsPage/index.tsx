import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom"
import Prescription from "../../../services/Prescription";
import { Box, Button, CircularProgress, Link as MUILink, Modal, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

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
      <Stack minWidth={500} maxWidth={'md'} sx={{ bgcolor: 'white' }} padding={3} spacing={5}>
        {isLoading || isFetching
          ? (
            <Stack alignItems='center'>
              <CircularProgress />
            </Stack>
          )
          : (
            <>
              {prescription && (
                <Stack sx={{ whiteSpace: 'pre-wrap' }} spacing={3}>
                  <Stack>
                    <Typography fontWeight='bold'>Rotulo:</Typography>
                    <Typography sx={{ bgcolor: grey[300] }} paddingY={1.5} paddingX={2} borderRadius={2}>{prescription.label}</Typography>
                  </Stack>

                  <Stack>
                    <Typography fontWeight='bold'>Observação:</Typography>
                    <Typography sx={{ bgcolor: grey[300] }} paddingY={1.5} paddingX={2} borderRadius={2}>{prescription.observation}</Typography>
                  </Stack>

                  <Stack>
                    <Typography fontWeight='bold'>Versão Escrita:</Typography>

                    {prescription.physical ? (
                      <Typography sx={{ bgcolor: grey[300] }} paddingY={1.5} paddingX={2} borderRadius={2}>{prescription.physical}</Typography>
                    ) : (
                      <Typography borderRadius={2}>Não Possui</Typography>
                    )}
                  </Stack>

                  <Stack>
                    <Typography fontWeight='bold'>Versão Digital:</Typography>

                    {digital_link ? (
                      <MUILink component={Link} to={digital_link}>Baixar versão digital</MUILink>
                    ) : (
                      <Typography borderRadius={2}>Não Possui</Typography>
                    )}
                  </Stack>
                </Stack>

              )}
            </>
          )}

        <Button onClick={handleCloseModal} variant='contained'>Fechar</Button>
      </Stack>
    </Modal>
  )
}