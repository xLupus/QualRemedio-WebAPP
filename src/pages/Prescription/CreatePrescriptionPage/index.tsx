import { useNavigate, useParams } from "react-router-dom"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, FormControl, OutlinedInput, Stack, TextField, Typography } from "@mui/material"
import Prescription from "../../../services/Prescription"

interface CreatePrescriptionData {
  label: string,
  observation: string,
  digital?: FileList,
  physical: string | null,
}

const CreatePrescriptionFormSchema = z.object({
  label: z.string()
    .min(1, 'Preencha esse campo'),

  observation: z.string()
    .min(1, 'Preencha esse campo'),

  physical: z.string()
    .optional(),

  digital: z.unknown()
    .optional()
})

export const CreatePrescriptionPage = () => {
  const { consultation_id } = useParams()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, setError } = useForm<CreatePrescriptionData>({
    resolver: zodResolver(CreatePrescriptionFormSchema)
  })

  const handleFormSubmit: SubmitHandler<CreatePrescriptionData> = async (data) => {
    const response = await Prescription.store(Number(consultation_id), data, data.digital)

    if (response.status == 422) {
      console.log(response.data);
      setError('digital', { message: response.data })
    }

    if (response.status == 200)
      navigate(`/d/consultas/${consultation_id}`)

    console.log({ response, data, consultation_id });
  }

  return (
    <Stack maxWidth={'md'}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Stack spacing={3}>
          <Stack spacing={1} >
            <Typography fontWeight='bold'>Label</Typography>

            <TextField
              type="text"
              {...register('label')}
              multiline
              maxRows={20}
              error={errors.label ? true : false}
              helperText={errors.label && errors.label.message}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography fontWeight='bold'>Observation</Typography>

            <TextField
              type="text"
              {...register('observation')}
              multiline
              maxRows={20}
              error={errors.observation ? true : false}
              helperText={errors.observation && errors.observation.message}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography fontWeight='bold'>Versão Fisica</Typography>

            <TextField
              type="text"
              {...register('physical')}
              multiline
              maxRows={20}
              error={errors.physical ? true : false}
              helperText={errors.physical && errors.physical.message}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography fontWeight='bold'>
              Versão Digital: <Typography component='span' variant="body2">Extensões Suportadas: PDF, PNG e JPEG</Typography>
            </Typography>

            <TextField
              type="file"
              {...register('digital')}
              error={errors.digital ? true : false}
              helperText={errors.digital && errors.digital.message}
            />
          </Stack>

          <Button type="submit" variant='contained' sx={{ width: 'fit-content' }}>Adicionar Prescrição</Button>
        </Stack>
      </form>
    </Stack>
  )
}