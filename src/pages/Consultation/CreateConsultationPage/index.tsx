import { Button, FormHelperText, InputLabel, MenuItem, Select, Stack, TextField, Typography, Link as MUILink } from "@mui/material"
import { useQueries } from "@tanstack/react-query"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Specialty from "../../../services/Specialty"
import Bond from "../../../services/Bond"
import Consultations, { CreateConsultationParams } from "../../../services/Consultations"
import { Link, useNavigate } from "react-router-dom"

interface ConsultationCreateFormData {
  reason: string,
  observation: string,
  date: string,
  professional: number,
  specialty: number,
  consultation_status: number
}

interface SpecialtiesResponseData {
  id: number
  name: string
}

const CreateConsultationSchema = z.object({
  reason: z.string({ required_error: "Preencha o Campo", })
    .min(1, 'Preencha o Campo'),

  observation: z.string({ required_error: "Preencha o Campo", })
    .min(1, 'Preencha o Campo'),

  date: z.string({ required_error: "Preencha o Campo", })
    .min(1, 'Preencha o Campo'),

  professional: z.coerce.number({ required_error: "Preencha o Campo", })
    .min(1, 'Preencha o Campo'),

  specialty: z.coerce.number({ required_error: "Preencha o Campo", })
    .min(1, 'Preencha o Campo'),

  consultation_status: z.coerce.number({ required_error: "Preencha o Campo", })
    .min(1, 'Preencha o Campo'),

})

export const CreateConsultationPage = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<ConsultationCreateFormData>({
    resolver: zodResolver(CreateConsultationSchema),
  })

  const results = useQueries({
    queries: [
      { queryKey: ['specialties'], queryFn: () => Specialty.index() },
      { queryKey: ['bonds'], queryFn: () => Bond.index({ filter: { status: 2 } }) }, //Mudar para o 2
      { queryKey: ['consultation_status'], queryFn: () => Consultations.status() }
    ]
  })

  const specialties = results[0].data
  const bonds = results[1].data ?? []
  const consultation_status = results[2].data

  console.log(bonds);

  const handleFormSubmit: SubmitHandler<ConsultationCreateFormData> = async (form_data) => {
    const { consultation_status, date, observation, professional, reason, specialty } = form_data

    const create_consultation_request_data: CreateConsultationParams = {
      consultation_status: Number(consultation_status),
      date,
      observation,
      reason,
      created_by_user: 14, //TODO - Pegar do Storage DEPOIS
      department_id: Number(specialty),
    }

    const response = await Consultations.create(Number(professional), create_consultation_request_data)

    if (response.status == 200)
      navigate('/consultations', { replace: true })
  }

  return (
    <Stack spacing={3} maxWidth='md'>
      <Typography variant='h5' component='h1'>Registrar Consulta</Typography>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Stack direction={'row'} spacing={3} useFlexGap>
          <Stack spacing={1}>
            <Typography>Data da Consulta*</Typography>

            <TextField
              type="date"
              variant='outlined'
              sx={{ minWidth: 200 }}
              {...register('date')}
              error={errors.date ? true : false}
              helperText={errors.date && errors.date.message}
            />
          </Stack>

          <Stack>
            <InputLabel htmlFor='professional' sx={{ marginBottom: 1.1 }}>Profissional*</InputLabel>

            <Select
              labelId="professional"
              sx={{ minWidth: 200 }}
              {...register('professional')}
              error={errors.professional ? true : false}
              defaultValue={0}
            >
              <MenuItem value={0} disabled>Selecionar</MenuItem>

              {bonds?.data?.length > 0 && bonds?.data.map((bond) => (
                <MenuItem value={bond.id} key={bond.id}>{bond.to.name}</MenuItem>
              ))}

            </Select>

            {errors.professional && (
              <FormHelperText error sx={{ paddingX: 1.5 }} >{errors.professional.message}</FormHelperText>
            )}
          </Stack>

          <Stack>
            <InputLabel htmlFor='specialty' sx={{ marginBottom: 1.1 }}>Especialidade*</InputLabel>

            <Select
              labelId="specialty"
              sx={{ minWidth: 200 }}
              {...register('specialty')}
              error={errors.specialty ? true : false}
              defaultValue={0}
            >
              <MenuItem value={0} disabled>Selecionar</MenuItem>

              {specialties?.data.map((specialty: SpecialtiesResponseData) => (
                <MenuItem value={specialty.id} key={specialty.id}>{specialty.name}</MenuItem>
              ))}
            </Select>

            {errors.specialty && (
              <FormHelperText error sx={{ paddingX: 1.5 }} >{errors.specialty.message}</FormHelperText>
            )}
          </Stack>

          <Stack>
            <InputLabel htmlFor='status' sx={{ marginBottom: 1.1 }}>Status*</InputLabel>

            <Select
              labelId="status"
              sx={{ minWidth: 200 }}
              {...register('consultation_status')}
              error={errors.consultation_status ? true : false}
              defaultValue={0}
            >
              <MenuItem value={0} disabled>Selecionar</MenuItem>

              {consultation_status?.data.map((status) => (
                <MenuItem value={status.id} key={status.id}>{status.status}</MenuItem>
              ))}
            </Select>

            {errors.consultation_status && (
              <FormHelperText error sx={{ paddingX: 1.5 }} >{errors.consultation_status.message}</FormHelperText>
            )}
          </Stack>
        </Stack >

        <Stack spacing={3} useFlexGap marginTop={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor='reason'>Motivo da Consulta*</InputLabel>

            <TextField
              id="reason"
              type="text"
              multiline
              maxRows={20}
              {...register('reason')}
              error={errors.reason ? true : false}
              helperText={errors.reason && errors.reason.message}
            />

          </Stack>

          <Stack spacing={1}>
            <InputLabel htmlFor='observation'>Observação*</InputLabel>

            <TextField
              id="observation"
              type="text"
              multiline
              maxRows={20}
              {...register('observation')}
              error={errors.observation ? true : false}
              helperText={errors.observation && errors.observation.message}
            />
          </Stack>

          <Stack direction='row' alignItems={'center'} spacing={3}>
            <Button type="submit" variant="contained" sx={{ width: 'fit-content' }}>
              Registrar Consulta
            </Button>

            <MUILink component={Link} to='/consultations'>Voltar</MUILink>
          </Stack>
        </Stack>
      </form >
    </Stack >
  )
}