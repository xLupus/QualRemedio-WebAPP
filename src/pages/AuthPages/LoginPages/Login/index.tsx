import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Checkbox, Divider, FormControlLabel, FormGroup, Link, TextField, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import  '../../../../style.css';
//import { AppInput } from '../../../../components/Input';
import { AppButton } from '../../../../components/Button';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Google, Microsoft } from '@mui/icons-material';
import { LoginService } from '../../../../types/type';
import { z } from 'zod';
import AuthService from '../../../../services/Auth/Login/index';

const validator = z.object({
    email: z
    .string({ required_error: "Preencha o Campo", })
      .min(1, 'Preencha o Campo'),
  
    password: z
    .string({ required_error: "Preencha o Campo", })
      .min(1, 'Preencha o Campo'),
  
    role: z.number({ required_error: "Preencha o Campo", })
      .min(1, 'Preencha o Campo'),
});

export function Login() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginService>({
        resolver: zodResolver(validator),
    })

    const handleLogin = async (data: LoginService) => {
        const { email, password, role } = data;

        const loginData = {
            email,
            password,
            role
        }
    
        const result = await AuthService.login(loginData);

        if(result?.status === 200) {
            navigate('/');
        }
    }

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

            <Box component='form' onSubmit={handleSubmit(handleLogin)}>
                <Stack spacing={3}>
                    <TextField 
                        id='email-field'
                        color='primary'
                        variant='filled'
                        type='email'
                        label='E-mail'
                        {...register('email')}
                        required
                        autoComplete="off"
                    />

                    <TextField 
                        id='password-field'
                        color='primary'
                        variant='filled'
                        type='password'
                        label='Senha'
                        {...register('password')}
                        required
                        autoComplete="off"
                    />

                    <TextField 
                        id='hidden-field'
                        type='hidden'
                        {...register('role', { value: 1 })}
                        required
                    />                    
                </Stack>

                <Box display='flex' justifyContent='space-between' alignItems='center' mb={6} mt={2}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox color="default" defaultChecked />} label={<Typography fontSize='0.77344rem' color='#50505080'>Lembrar-me</Typography>} />
                    </FormGroup>
                    <Link component={NavLink} to='/auth/register/select-account' ml='0.2rem' typography='body1' fontSize='0.77344rem' color='#50505080' underline='none'>Esqueceu a senha?</Link>
                </Box>

                <Box display='flex' justifyContent='center'>
                    <AppButton height='2.5rem' width='18.75rem' variant='text' type='submit' fontSize='1rem' className='authButton' color='#00000077' backgroundColor='#BBBBBB' boxShadow={2} id='btn-login' isFullWidth={false}>Login</AppButton>
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
                    <AppButton height='2.5rem' width='18.75rem' variant='text' className='authButton' color='#00000077' backgroundColor='#BBBBBB' boxShadow={2} id='btn-login-google' isFullWidth={false}>
                        <Google />
                        <Typography ml='.5rem' typography='body1' fontSize='1rem' color='00000077'>Continuar com Google</Typography>
                    </AppButton>
                    <AppButton height='2.5rem' width='18.75rem' variant='text' className='authButton' color='#00000077' backgroundColor='#BBBBBB' boxShadow={2} id='btn-login-ms' isFullWidth={false}>
                        <Microsoft />
                        <Typography ml='.5rem' typography='body1' fontSize='1rem' color='#00000077'>Continuar com Microsoft</Typography>
                    </AppButton>
                </Stack>
            </Box>
        </>
    )
}