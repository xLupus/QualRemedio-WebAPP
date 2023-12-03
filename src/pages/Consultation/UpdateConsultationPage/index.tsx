import { Button, CircularProgress, FormHelperText, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { useQueries } from "@tanstack/react-query"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Specialty from "../../../services/Specialty"
//import Bond from "../../../services/Bond"
import Consultations, { UpdateConsultationParams } from "../../../services/Consultations"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"

interface ConsultationUpdateFormData {
  reason: string,
  observation: string,
  date: string,
  //professional: number,
  specialty: number,
  consultation_status: number
}

interface SpecialtiesResponseData {
  id: number
  name: string
}

interface ConsultationStatusResponseData {
  id: number
  status: string
}

const UpdateConsultationSchema = z.object({
  reason: z.string({ required_error: "Preencha o Campo", })
    .min(1, 'Preencha o Campo'),

  observation: z.string({ required_error: "Preencha o Campo", })
    .min(1, 'Preencha o Campo'),

  date: z.string({ required_error: "Preencha o Campo", })
    .min(1, 'Preencha o Campo'),

  /*
    professional: z.coerce
      .number({ required_error: "Preencha o Campo" })
      .min(1, 'Preencha o Campo'),
  */

  specialty: z.coerce
    .number({ required_error: "Preencha o Campo", })
    .min(1, 'Preencha o Campo'),

  consultation_status: z.coerce
    .number({ required_error: "Preencha o Campo", })
    .min(1, 'Preencha o Campo'),
})

export const UpdateConsultationPage = () => {
  const navigate = useNavigate()
  const { consultation_id } = useParams()

  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm<ConsultationUpdateFormData>({
    resolver: zodResolver(UpdateConsultationSchema)
  })

  const results = useQueries({
    queries: [
      { queryKey: ['specialties'], queryFn: Specialty.index },
      { queryKey: ['consultation_status'], queryFn: Consultations.status },
      { queryKey: ['consultation_data'], queryFn: () => Consultations.show(Number(consultation_id)) }
      //{ queryKey: ['bonds'], queryFn: () => Bond.index() },
    ]
  })

  const specialties = results[0].data
  //const bonds = results[1].data
  const consultation_status = results[1].data
  const consultation_data = results[2].data
  const consultation_data_loading = results[2].isLoading

  useEffect(() => {
    if (consultation_data) {
      const { data } = consultation_data
      const date = new Date(data.date_of_consultation)

      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Os meses começam do zero, então adicionamos 1
      const day = String(date.getUTCDate()).padStart(2, '0');

      setValue('reason', data.reason)
      setValue('observation', data.observation)
      setValue('date', `${year}-${month}-${day}`)
    }
  }, [consultation_data, setValue])

  const handleFormSubmit: SubmitHandler<ConsultationUpdateFormData> = async (form_data) => {
    const { consultation_status, date, observation, reason, specialty } = form_data

    const update_consultation_request_data: UpdateConsultationParams = {
      reason,
      observation,
      date,
      consultation_status: consultation_status,
      department_id: specialty,
    }

    const response = await Consultations.update(Number(consultation_id), update_consultation_request_data)

    if (response.status == 200)
      navigate(`/d/consultas/${consultation_id}`, { replace: true })
  }

  return (
    <Stack spacing={3} maxWidth='md'>
      <Typography variant='h5' component='h1'>Editar Consultas</Typography>

      {consultation_data_loading && (
        <CircularProgress />
      )}

      {!consultation_data_loading && (
        <form onSubmit={handleSubmit(handleFormSubmit, (e) => { console.log(e) })}>
          <Stack direction={'row'} spacing={3} useFlexGap>
            <Stack spacing={1}>
              <Typography>Data da Consulta*</Typography>

              <TextField
                placeholder="Data da Consulta"
                type="date"
                variant='outlined'
                sx={{ minWidth: 200 }}
                {...register('date')}
                error={errors.date ? true : false}
                helperText={errors.date && errors.date.message}
              />
            </Stack>

            <Stack>
              <InputLabel htmlFor='specialty' sx={{ marginBottom: 1.1 }}>Especialidade*</InputLabel>

              <Select
                labelId="specialty"
                sx={{ minWidth: 200 }}
                {...register('specialty')}
                error={errors.specialty ? true : false}
                defaultValue={Number(consultation_data?.data.specialty.id)}
              >
                {specialties?.data.map((specialty: SpecialtiesResponseData) => (
                  <MenuItem value={specialty.id} key={specialty.id}>{specialty.name}</MenuItem>
                ))}
              </Select>

              {errors.specialty && (
                <FormHelperText error sx={{ paddingX: 1.5 }} >{errors.specialty.message}</FormHelperText>
              )}
            </Stack>

            <Stack>
              <InputLabel htmlFor='status' sx={{ marginBottom: 1.1 }}>Status</InputLabel>

              {!consultation_data_loading && (
                <Select
                  labelId="status"
                  sx={{ minWidth: 200 }}
                  {...register('consultation_status')}
                  error={errors.consultation_status ? true : false}
                  defaultValue={consultation_data?.data.status.id}
                >
                  {consultation_status?.data.map((status: ConsultationStatusResponseData) => (
                    <MenuItem value={status.id} key={status.id}>{status.status}</MenuItem>
                  ))}
                </Select>
              )}

              {errors.consultation_status && (
                <FormHelperText error sx={{ paddingX: 1.5 }} >{errors.consultation_status.message}</FormHelperText>
              )}
            </Stack>
          </Stack>

          <Stack spacing={3} useFlexGap marginTop={3}>
            <Stack spacing={1}>
              <InputLabel htmlFor='reason'>Motivo da Consulta</InputLabel>

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
              <InputLabel htmlFor='observation'>Observação</InputLabel>

              <TextField
                id="observation"
                type="text"
                maxRows={20}
                multiline
                {...register('observation')}
                error={errors.observation ? true : false}
                helperText={errors.observation && errors.observation.message}
              />
            </Stack>

            <Button type="submit" variant="contained" sx={{ width: 200 }}>
              {isSubmitting ? <CircularProgress color="inherit" size={30} /> : 'Atualizar Consulta'}
            </Button>
          </Stack>
        </form>
      )}
    </Stack>
  )
}

/*
<Stack>
<InputLabel htmlFor='professional'>Profissional</InputLabel>

<Select
  labelId="professional"
  sx={{ minWidth: 200 }}
  {...register('professional')}
  error={errors.professional ? true : false}
>
  {bonds?.data.map((bond) => (
    <MenuItem
      value={bond.id}
      key={bond.id}
      selected={consultation_data?.data.bond.to.id == bond.id ? true : false}
    >
      {bond.to.name}
    </MenuItem>
  ))}
</Select>

{errors.professional && (
  <Typography marginTop={1} variant='subtitle2' color='error' sx={{ fontWeight: 'bold' }} >
    {errors.professional.message}
  </Typography>
)}
</Stack>
*/