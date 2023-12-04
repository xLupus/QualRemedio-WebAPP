import { Box } from "@mui/material";
import { AppButton } from '../../../../components/Button';

export function SendMail({ isFromPath }: { isFromPath: string }) {
    return (
        <>
            {
                isFromPath === 'register' && <Box typography='body1' mb={8} textAlign='center'>STEP</Box>
            }

            <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={1.25}>Enviamos uma verificação em seu e-mail:</Box>
            <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={9} width='80%' mx='auto'>t***e@g***l.com</Box>

            <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' width='80%' mx='auto'>Não recebeu o e-mail? Olhe em `spam`, `pasta de promoções` ou</Box>
            
            <Box display='flex' justifyContent='center' mt={4}>
                <AppButton height='2.5rem' width="100%" variant='contained' className='authButton' fontSize='0.875rem' backgroundColor='#BBBBBB' isRippleDisabled={true}>Reenviar verificação</AppButton>
            </Box>

            <Box display='flex' justifyContent='flex-end' mt={8}>
                <AppButton height='1.875rem' width='5rem' variant='text' fontSize='0.75rem' isRippleDisabled={true}>Voltar</AppButton>
            </Box>
        </>
    )
}