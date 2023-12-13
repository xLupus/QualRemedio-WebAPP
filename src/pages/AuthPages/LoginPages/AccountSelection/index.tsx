import { NavLink, NavigateFunction, useNavigate } from 'react-router-dom';
import { Box, Link } from "@mui/material";
import Stack from '@mui/material/Stack';
import { AppButton } from '../../../../components/Button';
import { useContext } from 'react';
import { LoginContext } from '../../../../hooks/LoginContext';
import { LoginContextType } from '../../../../types/type';

export function LoginAccountSelection() {
    const navigate: NavigateFunction = useNavigate();
    const { setCurrentAccountType } = useContext<LoginContextType>(LoginContext);

    const accountsType = [
        {
            id: 1,
            type: 'Paciente'
        },
        {
            id: 2,
            type: 'Médico'
        },
        {
            id: 3,
            type: 'Cuidador'
        }
    ];

    const handleSelectAccount = (e: HTMLElement) => {
        setCurrentAccountType(e.id);
        navigate('/auth/login');
    }

    return (
        <>
            <Box typography='h1' fontSize='2rem' color='#00000077' mb={1.25}>Bem-Vindo de volta!</Box>
            <Box typography='body1' fontSize='0.77344rem' color='#00000077' mb={3}>Logue-se para explorar tudo de melhor aqui.</Box>

            <Box typography='body1' fontSize='0.77344rem' color='#50505080' mb={6}>
                    Não tem uma conta? 
                <Link component={NavLink} to='/auth/register/select-account' ml='0.2rem' color='#50505080' underline='none'>Registre-se</Link>
            </Box>
            <Box typography='body1' fontSize='1rem' color='#00000077' textAlign='center' mb={4.3}>Escolha seu tipo de conta antes de prosseguir</Box>

            <Stack spacing={3}>
                {
                    accountsType.map((el, i) => (
                        <AppButton 
                            sx={{ height: '2.5rem', backgroundColor: '#484848', color: '#FFF', 
                                '&:hover': {
                                    backgroundColor: '#696969'
                                }
                            }}
                            id={String(el.id)}
                            key={i}
                            variant='text'
                            onClick={e => handleSelectAccount(e.target as HTMLElement)}
                        >
                            {el.type}
                        </AppButton>
                    ))
                }
            </Stack>
        </>
    )
}