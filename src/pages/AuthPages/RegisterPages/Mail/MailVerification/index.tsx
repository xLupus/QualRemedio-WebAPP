import { Box, TextField } from "@mui/material";
import { AppButton } from '../../../../../components/Button';

export function MailVerification() {
    return (
        <>
            <Box typography='body1' mb={3.5} textAlign='center'>STEP</Box>

            <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={1.25}>Muito bem, agora informe o seu e-mail</Box>
            <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={4.3} width='80%' mx='auto'>Faremos uma verificação após o seu cadastro para fins de segurança</Box>

            <Box component='form'>
                <TextField label="Email" variant="filled" name="email" sx={{backgroundColor: '#FFF'}} fullWidth required autoComplete="off"/>
            </Box>
            
            <Box display='flex' justifyContent='end' mt={8}>
                <AppButton height='1.875rem' width='5rem' variant='text' className='authBackButton' fontSize='0.75rem' isRippleDisabled={true}>Voltar</AppButton>
                <AppButton height='1.875rem'  width='5rem' variant='contained' className='authButton authNextButton' backgroundColor='#BBBBBB' boxShadow={2} fontSize='0.75rem'>Avançar</AppButton>
            </Box>
        </>
    )
}