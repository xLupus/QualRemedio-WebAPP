import { Box, Typography } from "@mui/material";
import { AppButton } from '../../../../components/Button';
import { TaskAlt } from '@mui/icons-material';

export function RegisterAccountCreated() {
    return (
        <>
            <Box typography='body1' mb={6} textAlign='center'>STEP</Box>
            <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={1}>Tudo Certo!</Box>

            <Typography typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center'>Sua conta foi registrada com sucesso!</Typography>

            <Box display='flex' justifyContent='center' my={6}>
                <TaskAlt sx={{height: '140px', width: '140px'}} />
            </Box>

            <Typography typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={1}>Estamos felizes em ter você conosco</Typography>
            <Typography typography='body1' fontSize='0.875rem' color='#00000077'  textAlign='center'>Aproveite sua experiência em nossa plataforma</Typography>

            <Box display='flex' justifyContent='flex-end' alignItems='center' mt={8}>
                <AppButton height='1.875rem' width='5rem' variant='contained' className='authButton authNextButton' backgroundColor='#BBBBBB' boxShadow={2} fontSize='0.75rem'>Avançar</AppButton>
            </Box>
        </>
    )
}