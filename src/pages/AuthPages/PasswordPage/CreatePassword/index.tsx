import { Box, Unstable_Grid2 as Grid, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { AppButton } from '../../../../components/Button';
import { Square, Visibility, VisibilityOff } from '@mui/icons-material';
import { AppInputAdornment } from "../../../../components/Input/InputAdornment";
import { NavLink, useNavigate } from "react-router-dom";
import { RegisterContext } from "../../../../hooks/RegisterContext";
import { useForm } from "react-hook-form";
import AuthService from '../../../../services/Auth';
import { useState, useContext } from "react";

export function CreatePassword({ isFromPath }: { isFromPath: string}) {
    const passwordValidationText: string[] = ['Letras maiúsculas', 'Caracteres especiais', 'Letras minúsculas', 'Mínimo de 8 caracteres', 'Números'];
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const { registerUserCredentials } = useContext(RegisterContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (e) => e.preventDefault();
    
    const handleCreateUser = async (data) => {
        const userData: {[key: string]: {
            value: string
        }} = {}
        const { password } = data;

        registerUserCredentials.forEach(el => {
            userData[el.name] = {
                value: el.value
            }
        })
        console.log(userData)

        const { user_name, user_email, user_cpf, user_telephone, user_birth_day, account_type_selected, user_crm_state, user_crm, user_specialty_name} = userData;

        const result = await AuthService.register({ 
            name: user_name.value, 
            email: user_email.value, 
            password,
            cpf: user_cpf.value, 
            telephone: user_telephone.value,
            birth_day: user_birth_day.value, 
            account_type: Number(account_type_selected.value),
            crm_state: user_crm_state?.value, 
            crm: user_crm?.value,
            specialty_name: user_specialty_name?.value
        });

        if(result?.status === 200) navigate('/auth/register/email-send');
    }


    return (
        <>
            {
                isFromPath === 'register' 
                ? 
                    <>
                        <Box typography='body1' mb={6} textAlign='center'>STEP</Box>
                        <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={6}>Quase lá, agora crie uma senha</Box>
                    </>
                :
                    <>
                        <Box typography='h1' fontSize={'2rem'} color='#00000077' textAlign='center' mb={1.25}>Recuperação de Senha</Box>
                        <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={6}>Escolha uma nova senha para sua conta</Box>
                    </>
            }
 
            <Typography typography='body1' fontSize='0.875rem' color='#00000077' mb={3}>Sua senha deve conter:</Typography>

            <Grid container spacing={1} px={2}>
                {
                    passwordValidationText.map((el: string) => (
                        <Grid xs={6}>
                            <Box display='flex' alignItems='center'>
                                <Square sx={{backgroundColor: '#FFFFFF', color: '#FFFFFF', borderRadius: '0.0625rem', width: '.5rem', height: '.5rem'}} />
                                <Typography typography='body1' fontSize='0.875rem' color='#00000077' ml={2}>{el}</Typography>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>

            <Box component='form' onSubmit={handleSubmit(handleCreateUser)}>
                <Stack spacing={3} mt={5}>
                    <AppInputAdornment
                            id='password-field'
                            variant='filled'
                            color='primary'
                            type={showPassword ? 'text' : 'password'}
                            label='Senha'
                            {...register('password')}
                            error={errors.password ? true : false}
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

                        <AppInputAdornment
                            id='confirm-pass-field'
                            variant='filled'
                            color='primary'
                            type={showPassword ? 'text' : 'password'}
                            label='Confirmar senha'
                            //{...register('password')}
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
                </Stack>

                <Box display='flex' justifyContent='flex-end' alignItems='center' mt={8}>
                    <Box>
                        <AppButton
                            sx={{ width: '5rem', height: '1.875rem', fontSize: '.75rem', boxShadow: 'none', backgroundColor: 'none' }}
                            id='btn-login'
                            variant='text'
                            component={NavLink}
                            to='/auth/register/account-info'
                            className='authBackButton' 
                            disableRipple
                        >
                            Voltar
                        </AppButton>

                        <AppButton 
                            sx={{ width: '5rem', height: '1.875rem', fontSize: '.75rem' }}
                            id='btn-login'
                            variant='text'
                            type='submit'
                            className='authButton authNextButton'
                        >
                            Avançar
                        </AppButton>
                    </Box>
                </Box>
            </Box>
        </>
    )
}