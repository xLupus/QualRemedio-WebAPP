import { NavLink, NavigateFunction, useNavigate } from 'react-router-dom';
import { Box, Checkbox, Divider, FormControlLabel, FormGroup, IconButton, InputAdornment, Link, Typography, Stack, CircularProgress, Snackbar, SnackbarContent } from "@mui/material";
import { AppButton } from '../../../../components/Button';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Google, Microsoft, Visibility, VisibilityOff } from '@mui/icons-material';
import { LoginContextType, LoginService, State } from '../../../../types/type';
import { z } from 'zod';
import { AppInput } from '../../../../components/Input';
import { MouseEvent, useContext, useState } from 'react';
import { AppInputAdornment } from '../../../../components/Input/InputAdornment';
import { LoginContext } from '../../../../hooks/LoginContext';
import AuthService from '../../../../services/Auth'

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
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { currentAccountType } = useContext<LoginContextType>(LoginContext);
    const [state, setState] = useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        message: ''
    });
    const { vertical, horizontal, message, open } = state;
    
    const navigate: NavigateFunction = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginService>({
        resolver: zodResolver(validator),
    })

    //password
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (e: MouseEvent<HTMLButtonElement>) => e.preventDefault();

    const handleLogin = async (data: LoginService) => {
        const { email, password, role } = data;
    
        setIsLoading(true);
        const result = await AuthService.login({email, password, role});
        setIsLoading(false);

        if(result?.status === 200) {
            navigate('/');
            return;
        };

        if(result?.code === 'ERR_NETWORK') {
            setState({ vertical: 'top', horizontal: 'center', message: 'Ocorreu um erro ao logar', open: true });
            return;
        }

        setState({ vertical: 'top', horizontal: 'center', message: result?.response.data.message, open: true });
    }
    
    const handleClose = () => {
        setState({ ...state, open: false });
    };
     
    
    return (
        <>
            <Box typography='h1' fontSize='2rem' color='#00000077' mb={1.25}>Bem-Vindo de volta!</Box>
            <Box typography='body1' fontSize='0.77344rem' color='#00000077' mb={3}>Logue-se para explorar tudo de melhor aqui.</Box>

            <Box display='flex' justifyContent='space-between' alignItems='center' mb={5}>
                <Typography typography='body1' fontSize='0.77344rem' color='#50505080'>
                        Não tem uma conta?
                    <Link component={NavLink} to='/auth/register/select-account' ml='0.2rem' color='#50505080' underline='none'>Registre-se</Link>
                </Typography>
                <Typography typography='body1' fontSize='0.77344rem' color='#50505080'>Opção: {currentAccountType === '1' ? 'Paciente' : (currentAccountType === '2' ? 'Cuidador' : 'Médico')}</Typography>
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
                        error={errors.email ? true : false}
                       // helperText={errors.email}
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
                        error={errors.password ? true : false}
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
                        {...register('role', { value: Number(currentAccountType) })}
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
                        disabled={isLoading ? true : false}
                    >
                    {
                        isLoading? (
                            <CircularProgress
                                size={24}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-12px',
                                    marginLeft: '-12px',
                                }}
                            />
                        )
                        : 'Login'
                    }
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
            <Box >
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    autoHideDuration={4000}
                    open={open}
                    onClose={handleClose}
                    key={vertical + horizontal}
                >
                    <SnackbarContent  message={message} sx={{ backgroundColor: '#D4D4D4',  color: '#50505080' }}/>
                </Snackbar>
            </Box>
        </>
    )
}