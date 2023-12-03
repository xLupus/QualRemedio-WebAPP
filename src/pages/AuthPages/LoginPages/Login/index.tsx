import { NavLink } from 'react-router-dom';
import { Box, Checkbox, Divider, FormControlLabel, FormGroup, Link, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import  '../../../../style.css';
import { AppInput } from '../../../../components/Input';
import { AppButton } from '../../../../components/Button';

import { Google, Microsoft } from '@mui/icons-material';

export function Login() {
    return (
        <>
            <Box typography='h1' fontSize={'2rem'} color='#00000077' mb={1.25}>Bem-Vindo de volta!</Box>
            <Box typography='body1' fontSize='0.77344rem' color='#00000077' mb={3}>Logue-se para explorar tudo de melhor aqui.</Box>

            <Box display='flex' justifyContent='space-between' alignItems='center' mb={5}>
                <Typography typography='body1' fontSize='0.77344rem' color='#50505080'>
                        Não tem uma conta? 
                    <Link component={NavLink} to='/auth/register/select-account' ml='0.2rem' color='#50505080' underline='none'>Registre-se</Link>
                </Typography>
                <Typography typography='body1' fontSize='0.77344rem' color='#50505080'>Opção: Paciente</Typography>
            </Box>

            <Stack spacing={3}>
                <AppInput 
                    id='email-field'
                    color='primary'
                    variant='filled'
                    type='email'
                    label='E-mail'
                    isRequired={true}
                />

                <AppInput 
                    id='password-filed'
                    color='primary'
                    variant='filled'
                    type='password'
                    label='Senha'
                    isRequired={true}
                />
            </Stack>

            <Box display='flex' justifyContent='space-between' alignItems='center' mb={6} mt={2}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox color="default" defaultChecked />} label={<Typography fontSize='0.77344rem' color='#50505080'>Lembrar-me</Typography>} />
                </FormGroup>
                <Link component={NavLink} to='/auth/register/select-account' ml='0.2rem' typography='body1' fontSize='0.77344rem' color='#50505080' underline='none'>Esqueceu a senha?</Link>
            </Box>

            <Box display='flex' justifyContent='center'>
                <AppButton height='2.5rem' width='18.75rem' variant='text' fontSize='1rem' className='authButton' color='#00000077' backgroundColor='#BBBBBB' boxShadow={2} id='btn-login' key={1} isFullWidth={false}>Login</AppButton>
            </Box>
            
            <Divider sx={{
                marginTop: 5, 
                marginBottom: 5, 
                typography: 'body1', 
                fontSize: '0.625rem', 
                color: '#00000077', 
                '::before': {
                    borderTop: 2
                },
                '::after': {
                    borderTop: 2
                }
            }}>Ou</Divider>

            <Stack spacing={2.5} alignItems="center">
                <AppButton height='2.5rem' width='18.75rem' variant='text' className='authButton' color='#00000077' backgroundColor='#BBBBBB' boxShadow={2} id='btn-login' key={1} isFullWidth={false}>
                    <Google />
                    <Typography ml='.5rem' typography='body1' fontSize='1rem' color='00000077'>Continuar com Google</Typography>
                </AppButton>
                <AppButton height='2.5rem' width='18.75rem' variant='text' className='authButton' color='#00000077' backgroundColor='#BBBBBB' boxShadow={2} id='btn-login' key={1} isFullWidth={false}>
                    <Microsoft />
                    <Typography ml='.5rem' typography='body1' fontSize='1rem' color='#00000077'>Continuar com Microsoft</Typography>
                </AppButton>
            </Stack>
        </>
    )
}