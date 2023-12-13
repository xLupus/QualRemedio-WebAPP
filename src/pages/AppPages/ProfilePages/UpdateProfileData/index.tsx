    import { zodResolver } from "@hookform/resolvers/zod"
    import { Box, CardContent, CircularProgress, FormHelperText, Grid, MenuItem, Paper, Select, Snackbar, SnackbarContent, Stack, TextField, Typography } from "@mui/material"
    import { SubmitHandler, useForm } from 'react-hook-form'
    import z from 'zod'
    import User, { UserData } from "../../../../services/User"
    import { useQuery } from "@tanstack/react-query"
    import { useEffect, useState } from "react"
    import validator from "validator"
    import { useNavigate } from "react-router-dom"
    import { grey } from "@mui/material/colors"
    import { useCurrentUserContext } from "../../../../hooks/CurrentUserContext"
    import Cookies from "js-cookie";
    import { AppButton } from '../../../../components/Button';
    import { AppInput } from "../../../../components/Input"
    import { AppCard } from "../../../../components/Card"
    import { AppSelectInput } from "../../../../components/Input/InputSelect"
    import { State } from "../../../../types/type"

    const UpdateProfileSchema = z.object({
    name: z.string()
        .min(1, 'Preencha o Campo')
        .optional(),

    birth_day: z.string()
        .min(1, 'Preencha o Campo')
        .optional(),

    telephone: z.string()
        .min(1, 'Preencha o Campo')
        .length(11, 'O campo deve ter 11 caracteres')
        .refine(
        (phone) => validator.isMobilePhone(phone, "pt-BR"),
        { message: 'Formato de telefone invalido' }
        )
        .optional(),

    profile: z.object({
        bio: z.string()
        .min(1, 'Preencha o Campo')
    }).optional(),
    })

    export const UpdateProfileData = () => {
    const currentUser = useCurrentUserContext();
    const user_id = Number(currentUser?.user_id);
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, setValue, setError } = useForm<UserData>({
        resolver: zodResolver(UpdateProfileSchema)
    })

        const [state, setState] = useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
            message: ''
        });
        const { vertical, horizontal, message, open } = state;

    const { data, isLoading, isFetching } = useQuery({
        queryKey: ['user_data'],
        queryFn: () => User.show({id: user_id})
    })

    const user_data: UserData = data?.data

    useEffect(() => {
        if (user_data) {
        const date = new Date(user_data.birth_day)

        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Os meses começam do zero, então adicionamos 1
        const day = String(date.getUTCDate()).padStart(2, '0');

        setValue('name', user_data.name)
        setValue('telephone', user_data.telephone)
        setValue('profile.bio', user_data.profile?.bio ?? '')
        setValue('birth_day', `${year}-${month}-${day}`)
        }
    }, [user_data, setValue])
    
    const handleClose = () => {
        setState({ ...state, open: false });
    };


const handleFormSubmit: SubmitHandler<UserData> = async (form_data) => {
        const response = await User.updateProfile(user_id, form_data)

        if (!response.data.success) {
            const { errors } = response.data

            if (errors.telephone) {
                setError('telephone', errors.telephone[0])
            }

            if (errors.name) {
                setError('name', errors.name[0])
            }

            if (errors.birth_day) {
                setError('birth_day', errors.birth_day[0])
            }

            if (errors.profile.bio) {
                setError('profile.bio', errors.profile.bio[0])
            }
        }

        if (response?.data.success) {
            Cookies.set('user_name', response?.data.user_data.name)

            setState({ vertical: 'top', horizontal: 'center', message: 'Informações atualizadas com sucesso!', open: true });

            setTimeout(() => {
                navigate('/profile/account-config', { replace: true })
            }, 4200)
        }
    }

    return (
        <>
            <Typography mb={4}>Informações de Conta</Typography>

            {isLoading && isFetching && (
                <Paper sx={{ bgcolor: grey[50] }}>
                    <Stack width='100%' minHeight={400} justifyContent={'center'} alignItems={'center'}>
                        <CircularProgress color="primary" />
                    </Stack>
                </Paper>
            )}

            {!isLoading && !isFetching && (
                <Box component='form' onSubmit={handleSubmit(handleFormSubmit)}>      
                    <AppCard sx={{p: 1.5}}>
                        <CardContent>
                            <Stack spacing={4}>
                                <Stack>
                                    <Typography typography='h4' fontSize='1.125rem' mb={2}>Nome</Typography>
                                    <AppInput 
                                        id='name-field'
                                        color='primary'
                                        variant='filled'
                                        type='text'
                                        label='Nome'
                                        {...register('name')}
                                        error={errors.name ? true : false}
                                        helperText={errors.name?.message}
                                        fullWidth
                                        autoComplete='off'
                                    />
                                </Stack>
                                <Stack>
                                    <Typography typography='h4' fontSize='1.125rem' mb={2}>Nascimento</Typography>
                                    <AppInput 
                                        id='nasc-field'
                                        color='primary'
                                        variant='filled'
                                        type='date'
                                        label='Nascimento'
                                        {...register('birth_day')}
                                        error={errors.birth_day ? true : false}
                                        helperText={errors.birth_day && errors.birth_day.message}
                                        fullWidth
                                        autoComplete='off'
                                    />
                                </Stack>
                                <Stack>
                                    <Typography typography='h4' fontSize='1.125rem' mb={2}>Telefone</Typography>
                                    <AppInput 
                                        id='tel-field'
                                        color='primary'
                                        variant='filled'
                                        type="tel"
                                        label='Telefone'
                                        {...register('telephone')}
                                        error={errors.telephone ? true : false}
                                        helperText={errors.telephone && errors.telephone.message}
                                        fullWidth
                                        autoComplete='off'
                                    />
                                </Stack>
                                <Stack>
                                    <Typography typography='h4' fontSize='1.125rem' mb={2}>Bio</Typography>
                                    <AppInput 
                                        id='bio-field'
                                        color='primary'
                                        variant='filled'
                                        type='text'
                                        label='Bio'
                                        {...register('profile.bio')}
                                        error={errors.profile?.bio ? true : false}
                                        helperText={errors.profile?.bio && errors.profile?.bio.message}
                                        multiline
                                        maxRows={20}
                                        fullWidth
                                        autoComplete='off'
                                    /> 
                                </Stack>
                            </Stack>
                        </CardContent>
                    </AppCard> 
                    

                    <Box mt={8}>
                            <AppButton
                                sx={{ width: '18.5rem', height: '2.5rem', backgroundColor: '#404040', color: '#FFF',
                                                '&:hover': {
                                                backgroundColor: '#525252'
                                    }}}

                                            id='btn-updade-profile'
                                            variant='contained'
                                            type="submit"
                                        >
                                        Atualizar Dados
                            </AppButton>
                    </Box>
                </Box>
                )}
                <Box>
                    <Snackbar
                        anchorOrigin={{ vertical, horizontal }}
                        autoHideDuration={4000}
                        open={open}
                        onClose={handleClose}
                        key={vertical + horizontal}
                    >
                        <SnackbarContent  message={message} sx={{ bbackgroundColor: '#404040',  color: '#FFF' }}/>
                    </Snackbar>
                </Box>
            </>
        )
}