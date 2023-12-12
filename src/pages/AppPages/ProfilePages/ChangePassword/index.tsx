import { zodResolver } from "@hookform/resolvers/zod"
import { Button, CircularProgress, Paper, Stack, TextField, Typography } from "@mui/material"
import { SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod'
import User from "../../../../services/User"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { grey } from "@mui/material/colors"

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
                
                    navigate('/profile/config')
                }
            }
        }
    }

    return (
        <Stack maxWidth={'md'} width='100%'>

        {isLoading && (
            <Paper sx={{ bgcolor: grey[50] }}>
            <Stack width='100%' minHeight={400} justifyContent={'center'} alignItems={'center'}>
                <CircularProgress color="primary" />
            </Stack>
            </Paper>
        )}
        {!isLoading && (
            <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Stack spacing={3}>
                <Stack spacing={1}>
                <Typography>Senha Atual</Typography>

                <TextField
                    type='password'
                    {...register('current_password')}
                    error={Boolean(errors.current_password)}
                    helperText={errors.current_password && (errors.current_password.message)}
                />
                </Stack>

                <Stack spacing={1}>
                <Typography>Nova Senha</Typography>

                <TextField
                    type='password'
                    {...register('new_password')}
                    error={errors.new_password ? true : false}
                    helperText={errors.new_password && errors.new_password.message}
                />
                </Stack>

                <Stack spacing={1}>
                <Typography>Confirme a Nova Senha</Typography>

                <TextField
                    type='password'
                    {...register('confirm_new_password')}
                    error={errors.confirm_new_password ? true : false}
                    helperText={errors.confirm_new_password && errors.confirm_new_password.message}
                />
                </Stack>

                <Button type='submit' sx={{ width: 'fit-content' }} variant='contained'>
                <Typography>Mudar Senha</Typography>
                </Button>
            </Stack>
            </form>
        )}
        </Stack>
    )
}