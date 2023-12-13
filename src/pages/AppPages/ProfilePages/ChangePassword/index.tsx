import { zodResolver } from "@hookform/resolvers/zod"
import { Box, CardContent, CircularProgress, Paper, Stack, Link, Typography, Snackbar, SnackbarContent } from "@mui/material"
import { SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod'
import User from "../../../../services/User"
import {  NavLink, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { grey } from "@mui/material/colors"
import { AppButton } from "../../../../components/Button"
import { AppCard } from "../../../../components/Card"
import { AppInput } from "../../../../components/Input"
import Grid from '@mui/material/Unstable_Grid2';
import { State } from "../../../../types/type"

const user_id = 14

interface IChangePassword {
    current_password: string,
    new_password: string,
    confirm_new_password: string
}

const ChangePasswordSchema = z.object({
    current_password: z.string({
        required_error: 'Preencha o Campo'
    })
        .min(1, 'Preencha o Campo'),

    new_password: z.string({
        required_error: 'Preencha o Campo',
    })
        .min(1, { message: 'Preencha o Campo' })
        .min(8, { message: 'A senha deve ter no minímo 8 caracteres', })
        .max(24, { message: 'A senha deve ter no máximo 24 caracteres' }),

    confirm_new_password: z.string({
        required_error: 'Preencha o Campo',
    })
        .min(1, { message: 'Preencha o Campo' })
        .min(8, { message: 'A senha deve ter no minímo 8 caracteres', })
        .max(24, { message: 'A senha deve ter no máximo 24 caracteres' })
})

export const ChangePassword = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [isFetching, setIsFetching] = useState(false)
    const { register, handleSubmit, formState: { errors }, setError, setValue } = useForm<IChangePassword>({
        resolver: zodResolver(ChangePasswordSchema)
    })

    const [state, setState] = useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        message: ''
    });
    const { vertical, horizontal, message, open } = state;
    

    useEffect(() => {
        setIsLoading(false)
    }, [setIsLoading])

    const handleFormSubmit: SubmitHandler<IChangePassword> = async (form_data) => {
        const { current_password, new_password, confirm_new_password } = form_data

        if (new_password != confirm_new_password) {
            setError('confirm_new_password', { message: "Senhas não conhecidem" })
        } else {
            setIsFetching(true)

            const response = await User.changePassword(user_id, current_password, new_password)

            setIsFetching(false)
            if (!response.data.status) {
                const { errors, success } = response.data

                if (!success) {
                setValue('current_password', '')
                setValue('new_password', '')
                setValue('confirm_new_password', '')

                if (errors.new_password)
                    setError('new_password', { message: errors.new_password[0] })

                if (errors.change_password)
                    setError('new_password', {
                    message: Array.isArray(errors.change_password) ? errors.change_password[0] : errors.change_password
                    })

                } else {
                    setState({ vertical: 'top', horizontal: 'center', message: 'senha alterada com sucesso!', open: true });

                    setTimeout(() => {
                        navigate('/profile/config');
                    }, 4200)
                }
            }
        }
    }

        
    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return (
        <>
            {isLoading && (
                <Paper sx={{ bgcolor: grey[50] }}>
                <Stack width='100%' minHeight={400} justifyContent={'center'} alignItems={'center'}>
                    <CircularProgress color="primary" />
                </Stack>
                </Paper>
            )}

            {
                !isLoading && (
                    <Box component='form' onSubmit={handleSubmit(handleFormSubmit)}>      
                        <AppCard sx={{p: 1.5}}>
                            <CardContent>
                                <Grid container spacing={4}>
                                    <Grid xs={12}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Senha Atual</Typography>
                                        <AppInput 
                                            id='current-password-field'
                                            color='primary'
                                            variant='filled'
                                            label='Senha'
                                            type="password"                            
                                            {...register('current_password')}
                                            error={Boolean(errors.current_password)}
                                            helperText={errors.current_password && (errors.current_password.message)}
                                            fullWidth
                                            autoComplete='off'
                                        />
                                    </Grid>

                                    <Grid xs={12}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Senha</Typography>

                                        <AppInput 
                                            id='password-field'
                                            color='primary'
                                            variant='filled'
                                            label='Senha'
                                            type="password"                            
                                            {...register('new_password')}
                                            error={errors.new_password ? true : false}
                                            helperText={errors.new_password && errors.new_password.message}
                                            fullWidth
                                            autoComplete='off'
                                        /> 
                                    </Grid>
                    
                                    <Grid xs={12}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Confirmar senha</Typography>
                                        <AppInput 
                                            id='confirm-password-field'
                                            color='primary'
                                            variant='filled'
                                            type='text'
                                            label='Nova senha'
                                            {...register('confirm_new_password')}
                                            error={errors.confirm_new_password ? true : false}
                                            helperText={errors.confirm_new_password && errors.confirm_new_password.message}
                                            fullWidth
                                            autoComplete='off'
                                        /> 
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </AppCard> 

                        <Stack direction='row' alignItems={'center'} spacing={3} mt={8}>
                <AppButton
                        sx={{ width: '18.5rem', height: '2.5rem', backgroundColor: '#404040', color: '#FFF',
                                        '&:hover': {
                                        backgroundColor: '#525252'
                            }}}

                                    id='btn-updade-profile'
                                    variant='contained'
                                    type="submit"
                                >
                            Atualizar senha
                </AppButton>

                        <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to={`/profile/account-config`} underline="none" px={2.25} py={1.25} fontSize='1'>Voltar</Link>
                    </Stack>
                    </Box>
                )
            }

        <Box>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                autoHideDuration={4000}
                open={open}
                onClose={handleClose}
                key={vertical + horizontal}
            >
                <SnackbarContent  message={message} sx={{ backgroundColor: '#FFF',  color: '#000' }}/>
            </Snackbar>
        </Box>
        </>
    )
}