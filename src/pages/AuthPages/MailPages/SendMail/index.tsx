import { Box } from "@mui/material";
import { AppButton } from '../../../../components/Button';
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import MailService from '../../../../services/Mail'

export function SendMail({ isFromPath }: { isFromPath: string }) {
    const email = Cookies.get('user_email') || '';

    const handeSendMail = async () => {
        await MailService.send({ email, urlContext: 'http://localhost:5173' });
    }
    
    handeSendMail();

    return (
        <>
            {
                isFromPath === 'register' && <Box typography='body1' mb={8} textAlign='center'>STEP</Box>
            }

            <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={1.25}>Enviamos uma verificação em seu e-mail:</Box>
            <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={9} width='80%' mx='auto'>{email}</Box>

            <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' width='80%' mx='auto'>Não recebeu o e-mail? Olhe em `spam`, `pasta de promoções` ou</Box>
            
            <Box display='flex' justifyContent='center' mt={4}>
                <AppButton 
                    sx={{ width: '22.8125rem', height: '2.5rem', fontSize: '.875rem' }}
                    id='btn-login'
                    variant='contained'
                    type='submit'
                    className='authButton'
                    disableRipple
                    fullWidth
                >
                    Reenviar verificação
                </AppButton>
            </Box>

            <Box display='flex' justifyContent='flex-end' mt={8}>
                <AppButton
                    sx={{ width: '5rem', height: '1.875rem', fontSize: '.75rem', boxShadow: 'none', backgroundColor: 'none' }}
                    id='btn-login'
                    variant='text'
                    component={NavLink}
                    to='/auth/register/create-password'
                    className='authBackButton' 
                    disableRipple
                >
                    Voltar
                </AppButton>
            </Box>
        </>
    )
}