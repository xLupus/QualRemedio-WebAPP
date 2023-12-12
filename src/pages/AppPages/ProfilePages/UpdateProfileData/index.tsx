import { zodResolver } from "@hookform/resolvers/zod"
import { Button, CircularProgress, Paper, Stack, TextField, Typography } from "@mui/material"
import { SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod'
import User, { UserData } from "../../../../services/User"
import { useQuery } from "@tanstack/react-query"
import { user_id } from "../ShowProfileDetails"
import { useEffect } from "react"
import validator from "validator"
import { useNavigate } from "react-router-dom"
import { grey } from "@mui/material/colors"

const UpdateProfileSchema = z.object({
  name: z.string()
    .min(1, 'Preencha o Campo')
    .optional(),

  birth_day: z.string()
    .min(1, 'Preencha o Campo')
    .optional(),

  telephone: z.string()
    .min(1, 'Preencha o Campo')
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
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, setValue, setError } = useForm<UserData>({
    resolver: zodResolver(UpdateProfileSchema)
  })

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['user_data'],
    queryFn: () => User.show(user_id)
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

    if (response.data.success)
      navigate('/profile/account-config', { replace: true })
  }

  return (
    <Stack maxWidth={'md'} width='100%' spacing={3}>
      <Typography>Informações de Conta</Typography>

      {isLoading && isFetching && (
        <Paper sx={{ bgcolor: grey[50] }}>
          <Stack width='100%' minHeight={400} justifyContent={'center'} alignItems={'center'}>
            <CircularProgress color="primary" />
          </Stack>
        </Paper>
      )}

      {!isLoading && !isFetching && (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Stack spacing={3}>
            <Stack>
              <Typography>Nome</Typography>

              <TextField
                {...register('name')}
                error={errors.name ? true : false}
                helperText={errors.name && errors.name.message}
              />
            </Stack>

            <Stack>
              <Typography>Nascimento</Typography>

              <TextField
                type="date"
                {...register('birth_day')}
                error={errors.birth_day ? true : false}
                helperText={errors.birth_day && errors.birth_day.message}
              />
            </Stack>

            <Stack>
              <Typography>Telefone</Typography>

              <TextField
                type="tel"
                {...register('telephone')}
                error={errors.telephone ? true : false}
                helperText={errors.telephone && errors.telephone.message}
              />
            </Stack>

            <Stack>
              <Typography>Bio</Typography>

              <TextField
                {...register('profile.bio')}
                error={errors.profile?.bio ? true : false}
                helperText={errors.profile?.bio && errors.profile.bio.message}
                multiline
                maxRows={20}
              />
            </Stack>

            <Button type="submit" variant='contained' sx={{ width: 'fit-content' }}>Atualizar Dados</Button>
          </Stack>
        </form>
      )}
    </Stack>
  )
}