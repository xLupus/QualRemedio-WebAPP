import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Checkbox, Divider, FormControlLabel, FormGroup, IconButton, InputAdornment, Link, Typography, Stack } from "@mui/material";
import { AppButton } from '../../../../components/Button';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Google, Microsoft, Visibility, VisibilityOff } from '@mui/icons-material';
import { LoginService } from '../../../../types/type';
import { z } from 'zod';
import { AppInput } from '../../../../components/Input';
import { useState } from 'react';
import { AppInputAdornment } from '../../../../components/Input/InputAdornment';

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
    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginService>({
        resolver: zodResolver(validator),
    })

    //password
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (e: any) => e.preventDefault();

    const handleLogin = (data: LoginService) => {
        const { email, password, role } = data;
        console.log('2')
        const loginData = {
            email,
            password,
            role
        }
    
      /*   const result = await AuthService.login(loginData);

        if(result?.status === 200) {
            navigate('/');
        } */
    }
    
    return (
        <>
            <Box typography='h1' fontSize='2rem' color='#00000077' mb={1.25}>Bem-Vindo de volta!</Box>
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
                    <AppInput 
                        id='email-field'
                        color='primary'
                        variant='filled'
                        type='email'
                        label='E-mail'
                        {...register('email')}
                        required
                        fullWidth
                        autoComplete='off'
                    />

                    <AppInputAdornment
                        id='password-field'
                        variant='filled'
                        color='primary'
                        type={showPassword ? 'text' : 'password'}
                        label='Senha'
                        {...register('password')}
                        required
                        fullWidth
                        autoComplete='off'
                        endAdornment={
                            <InputAdornment position='end'>
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge='end'
                                        sx={{marginRight: '.25rem'}}
                                        size='small'
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                            </InputAdornment>
                        }
                    />

                    <AppInput 
                        id='role-field'
                        color='primary'
                        variant='filled'
                        type='hidden'
                        {...register('role', { value: 1 })}
                        fullWidth
                        sx={{display: 'none'}}
                    />
                </Stack>

                <Box display='flex' justifyContent='space-between' alignItems='center' mb={6} mt={2}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox color="default" defaultChecked />} label={<Typography fontSize='0.77344rem' color='#50505080'>Lembrar-me</Typography>} />
                    </FormGroup>
                    <Link component={NavLink} to='/recover-password/email-verification' ml='0.2rem' typography='body1' fontSize='0.77344rem' color='#50505080' underline='none'>Esqueceu a senha?</Link>
                </Box>

                <Box display='flex' justifyContent='center'>
                    <AppButton 
                        sx={{ width: '18.75rem', height: '2.5rem' }}
                        id='btn-login'
                        variant='text'
                        type='submit'
                        className='authButton'
                    >
                        Login
                    </AppButton>
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
                    <AppButton 
                        sx={{ width: '18.75rem', height: '2.5rem' }}
                        id='btn-login-google'
                        variant='text'
                        className='authButton' 
                        fullWidth
                    >
                        <Google />
                        <Typography ml='.5rem' typography='body1' fontSize='1rem' color='00000077'>Continuar com Google</Typography>
                    </AppButton>

                    <AppButton 
                        sx={{ width: '18.75rem', height: '2.5rem' }}
                        id='btn-login-ms'
                        variant='text'
                        className='authButton'
                        fullWidth
                    >
                        <Microsoft />
                        <Typography ml='.5rem' typography='body1' fontSize='1rem' color='#00000077'>Continuar com Microsoft</Typography>
                    </AppButton>
                </Stack>
            </Box>
        </>
    )
}