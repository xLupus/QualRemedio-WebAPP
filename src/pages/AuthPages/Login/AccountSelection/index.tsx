import { NavLink } from 'react-router-dom';
import { Box, Link } from "@mui/material";
import Stack from '@mui/material/Stack';
import  '../../../../style.css';
import { AppButton } from '../../../../components/Button';

export function AccountSelection() {
    const accountsType = [
        {
            id: 1,
            type: 'Paciente'
        },
        {
            id: 2,
            type: 'Cuidador'
        },
        {
            id: 3,
            type: 'Médico'
        }
    ];

    return (
        <>
            <Box typography='h1' fontSize={'2rem'} color='#00000077' mb={1.25}>Bem-Vindo de volta!</Box>
            <Box typography='body1' fontSize='0.77344rem' color='#00000077' mb={3}>Logue-se para explorar tudo de melhor aqui.</Box>

            <Box typography='body1' fontSize='0.77344rem' color='#50505080' mb={6}>
                    Não tem uma conta? 
                <Link component={NavLink} to='/auth/register/select-account' ml='0.2rem' color='#50505080' underline='none'>Registre-se</Link>
            </Box>
            <Box typography='body1' fontSize='1rem' color='#00000077' textAlign='center' mb={4.3}>Escolha seu tipo de conta antes de prosseguir</Box>

            <Stack spacing={3}>
                {
                    accountsType.map((el, i) => (
                        <AppButton height='2.5rem' variant='text' className='authButton' color='#00000077' backgroundColor='#BBBBBB' boxShadow={2} id={el.id} key={i}>
                            {el.type}
                        </AppButton>
                    ))
                }
            </Stack>
        </>
    )
}