import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form"
import { Button, Stack, TextField, Typography, Link as MUILink } from "@mui/material";
import Prescription from "../../../services/Prescription";
import { useEffect } from "react";

interface UpdatePrescriptionData {
  label: string,
  observation: string,
  digital?: FileList,
  physical: string | null,
}

const UpdatePrescriptionFormSchema = z.object({
  label: z.string()
    .min(1, 'Preencha esse campo'),

  observation: z.string()
    .min(1, 'Preencha esse campo'),

  physical: z.string()
    .optional(),

  digital: z.unknown()
    .optional()
})

export const UpdatePrescriptionPage = () => {
  const { consultation_id, prescription_id } = useParams()
  const navigate = useNavigate()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['consultation'],
    queryFn: async () => await Prescription.show(Number(consultation_id), Number(prescription_id)),
  })

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<UpdatePrescriptionData>({
    resolver: zodResolver(UpdatePrescriptionFormSchema)
  })

  useEffect(() => {
    if (data?.data) {
      const { label, observation, physical } = data.data.prescription

      setValue('label', label)
      setValue('observation', observation)
      setValue('physical', physical ?? '')
    }
  }, [data?.data, setValue])

  const handleFormSubmit: SubmitHandler<UpdatePrescriptionData> = async (form_data) => {
    const response = await Prescription.update(Number(consultation_id), Number(prescription_id), form_data, form_data.digital)

    if (response.data.success)
      navigate(`/consultations/${consultation_id}`
      )
    console.log(response);
  }

  return (
    <Stack maxWidth='md' width={'100%'}>
      {isLoading || isFetching
        ? (
          <p>Carregando</p>
        )
        : (
          <form onSubmit={handleSubmit(handleFormSubmit, (e) => { console.log(e) })}>
            <Stack spacing={3}>
              <Stack>
                <Typography fontWeight='bold'>Label</Typography>

                <TextField
                  type="text"
                  {...register('label')}
                  error={errors.label ? true : false}
                  helperText={errors.label && errors.label.message}
                />
              </Stack>

              <Stack>
                <Typography fontWeight='bold'>Observation</Typography>

                <TextField
                  type="text"
                  {...register('observation')}
                  error={errors.observation ? true : false}
                  helperText={errors.observation && errors.observation.message}
                />
              </Stack>

              <Stack>
                <Typography fontWeight='bold'>Versão Fisica</Typography>

                <TextField
                  type="text"
                  {...register('physical')}
                  error={errors.physical ? true : false}
                  helperText={errors.physical && errors.physical.message}
                />
              </Stack>

              <Stack>
                <Typography fontWeight='bold'>
                  Versão Digital: <Typography fontWeight='bold' component='span' variant="body2">Extensões Suportadas: PDF, PNG e JPEG</Typography>
                </Typography>

                <TextField
                  type="file"
                  {...register('digital')}
                  error={errors.digital ? true : false}
                  helperText={errors.digital && errors.digital.message}
                />
              </Stack>

              <Stack direction={'row'} spacing={3} alignItems={'center'} >
                <Button type="submit" sx={{ width: 'fit-content' }} variant='contained'>Atualizar</Button>
                <MUILink component={Link} to={`/consultations/${consultation_id}`} >Voltar</MUILink>
              </Stack>
            </Stack>
          </form>
        )}
    </Stack>
  )
}