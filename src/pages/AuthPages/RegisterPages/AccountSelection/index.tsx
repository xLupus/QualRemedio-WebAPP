import { Box, Link, Stack } from "@mui/material";
import { AppButton } from '../../../../components/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { RegisterContext } from "../../../../hooks/RegisterContext";

export function RegisterAccountSelection() {
    const navigate = useNavigate();
    const { registerUserCredentials, setRegisterUserCredentials } = useContext(RegisterContext);

    const accountsType = [
        {
            id: 1,
            type: 'Paciente',
            desc: `Gerencie recursos personalizados para sua saúde com eficiência.`
        },
        {
            id: 2,
            type: 'Médico',
            desc: `Use ferramentas, gerencie recursos, otimize o seu dia a dia com seus pacientes`
        },
        {
            id: 3,
            type: 'Cuidador',
            desc: `Use recursos essenciais para o dia a dia, monitore e ofereça suporta vital aos seus pacientes.`
        }
    ];

    const handleSelectAccount = (e: HTMLElement) => {
        setRegisterUserCredentials([
            ...registerUserCredentials,
            {
                name: 'account_type_selected',
                value: e.id
            }
        ]);

        navigate('/auth/register/email-verification');
    }

    return (
        <>
            <Box typography='h1' fontSize='2rem' color='#00000077' textAlign='center' mb={1.25} >Criar uma conta</Box>
            
            <Box typography='body1' fontSize='0.77344rem' color='#50505080' textAlign='center'>Já possui uma conta? 
                <Link component={NavLink} to='/auth/login/select-account' ml='0.2rem' color='#50505080' underline='none'>Logue-se</Link>
            </Box>

            <Box typography='body1' mt={6} mb={3.5} textAlign='center'></Box>
            <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={4.3}>Antes de começar, selecione o tipo de conta que deseja criar</Box>

            <Stack spacing={3}>
                {
                    accountsType.map((el, i) => (
                        <AppButton 
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '6rem', padding: 2, backgroundColor: '#484848', color: '#FFF', 
                                '&:hover': {
                                    backgroundColor: '#696969'
                                }
                            }}
                            id={String(el.id)}
                            key={i}
                            variant='text'
                            type='submit'
                            onClick={e => handleSelectAccount(e.target as HTMLElement)}
                        >
                            <Box textTransform='none' fontSize='.875rem'>
                                {el.type}
                            </Box>
                            <Box textTransform='none' fontSize='.875rem' mt={1.9} textAlign='left' sx={{textAlign: 'justify'}}>
                                {el.desc}
                            </Box>
                        </AppButton>
                    ))
                }
            </Stack>

            <Box display='flex' justifyContent='end' alignItems='center' mt={8}>
                <AppButton
                    sx={{width: '5rem', height: '1.875rem', fontSize: '.75rem', boxShadow: 'none', backgroundColor: 'transparent' }}
                    id='btn-login'
                    variant='text'
                    type='submit'
                    component={NavLink}
                    to='/auth/login/select-account'
                    className='authBackButton' 
                    disableRipple
                >
                    Voltar
                </AppButton>
            </Box>
        </>
    )
}