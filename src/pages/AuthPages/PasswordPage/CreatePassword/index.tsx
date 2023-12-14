import { Box, Unstable_Grid2 as Grid, IconButton, InputAdornment, Stack, Typography, FormHelperText } from "@mui/material";
import { AppButton } from '../../../../components/Button';
import { Square, Visibility, VisibilityOff } from '@mui/icons-material';
import { AppInputAdornment } from "../../../../components/Input/InputAdornment";
import { NavLink, useNavigate } from "react-router-dom";
import { RegisterContext } from "../../../../hooks/RegisterContext";
import { useForm } from "react-hook-form";
import AuthService from '../../../../services/Auth';
import { useState, useContext } from "react";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterCreatePassword } from '../../../../types/type';

const validator = z.object({
    password: z
        .string({ 
            required_error: 'Este campo deve ser especificado',
            invalid_type_error: 'O campo informado deve ser texto'
        })
        .min(8, { message: 'Este campo deve ter no mínimo 8 caracteres' })
        .min(1, { message: 'Preencha este campo' }),
  
    confirm_password: z
        .string({ required_error: "Este campo deve ser especificado" })
        .min(8, { message: 'Este campo deve ter no mínimo 8 caracteres' })
        .min(1, { message: 'Preencha este campo' })
}).superRefine((val, ctx) => {
    if(val.password !== val.confirm_password) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'As senhas informadas não coincidem',
            fatal: true
        });

        return z.NEVER;
    }
});


export function CreatePassword({ isFromPath }: { isFromPath: string}) {
    const passwordValidationText: string[] = ['Letras maiúsculas', 'Caracteres especiais', 'Letras minúsculas', 'Mínimo de 8 caracteres', 'Números'];
    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    const { registerUserCredentials } = useContext(RegisterContext);
    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterCreatePassword>({
        resolver: zodResolver(validator),
    })

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

        if(result?.status === 201) navigate('/auth/register/email-send');

        if(result?.status === 200) navigate('/auth/register/account-created')
    }


    return (
        <>
            {
                isFromPath === 'register' 
                ? 
                    <>
                        {/* <Box typography='body1' mb={6} textAlign='center'>STEP</Box> */}
                        <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={6}>Quase lá, agora crie uma senha</Box>
                    </>
                :
                    <>
                        <Box typography='h1' fontSize={'2rem'} color='#00000077' textAlign='center' mb={1.25}>Recuperação de Senha</Box>
                        <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={6}>Escolha uma nova senha para sua conta</Box>
                    </>
            }
 
            <Typography typography='body1' fontSize='0.875rem' color='#00000077' mb={3}>Sua senha deve conter:</Typography>

            <Grid container spacing={1} px={2} key={1}>
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
                            aria-label="password input"
                            {...register('password')}
                            error={errors.password ? true : false}
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
                        <FormHelperText error={errors.password ? true : false}>{errors.password && errors.password.message}</FormHelperText>

                        <AppInputAdornment
                            id='confirm-pass-field'
                            variant='filled'
                            color='primary'
                            type={showPassword ? 'text' : 'password'}
                            label='Confirmar senha'
                            aria-label="confirm_password input"
                            {...register('confirm_password')}
                            error={errors.confirm_password ? true : false}
                           // helperText={errors.confirm_password && errors.confirm_password.message}
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
                        <FormHelperText error={errors.confirm_password ? true : false}>{errors.confirm_password && errors.confirm_password.message}</FormHelperText>
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
                            sx={{width: '5rem', height: '1.875rem', fontSize: '.75rem', backgroundColor: '#404040', color: '#FFF', ml: 2,
                            '&:hover': {
                                backgroundColor: '#525252'
                            }}}
                            id='btn-login'
                            variant='text'
                            type='submit'
                        >
                            Avançar
                        </AppButton>
                    </Box>
                </Box>
            </Box>
        </>
    )
}