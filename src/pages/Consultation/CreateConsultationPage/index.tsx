import { Button, FormHelperText, InputLabel, MenuItem, Select, Stack, TextField, Typography, Link, Box, CardContent } from "@mui/material"
import { useQueries } from "@tanstack/react-query"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Specialty from "../../../services/Specialty"
import Bond from "../../../services/Bond"
import Consultations, { CreateConsultationParams } from "../../../services/Consultations"
import { NavLink, useNavigate } from "react-router-dom"
import { useCurrentUserContext } from "../../../hooks/CurrentUserContext"
import { AppButton } from "../../../components/Button"
import { AppCard } from "../../../components/Card"
import { AppInput } from "../../../components/Input"
import { AppSelectInput } from "../../../components/Input/InputSelect"
import Grid from '@mui/material/Unstable_Grid2';

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
    const currentUser = useCurrentUserContext();

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

    const handleFormSubmit: SubmitHandler<ConsultationCreateFormData> = async (form_data) => {
        const { consultation_status, date, observation, professional, reason, specialty } = form_data

        const create_consultation_request_data: CreateConsultationParams = {
            consultation_status: Number(consultation_status),
            date,
            observation,
            reason,
            created_by_user: Number(currentUser?.user_id), //TODO - Pegar do Storage DEPOIS
            created_to_user: bonds?.data[0].to_user,
            department_id: Number(specialty),
        }

        const response = await Consultations.create(Number(professional), create_consultation_request_data)

        if (response.status == 200)
        navigate('/consultations', { replace: true })
    }

    return (
        <>
            <Typography typography='h1' fontSize='1.75rem' color='#00000077' mb={6}>Agendar consulta</Typography>

            <Box component='form' onSubmit={handleSubmit(handleFormSubmit)}>      
                    <AppCard sx={{p: 1.5}}>
                        <CardContent>
                            <Grid container spacing={4}>
                                <Grid xs={3}>
                                    <Typography typography='h4' fontSize='1.125rem' mb={2}>Data da consulta</Typography>
                                    <AppInput 
                                        id='name-field'
                                        color='primary'
                                        variant='filled'
                                        type='date'
                                        label='Data da consulta'
                                        aria-label="consultation-date input"
                                        {...register('date')}
                                        error={errors.date ? true : false}
                                        helperText={errors.date && errors.date.message}
                                        fullWidth
                                        autoComplete='off'
                                    />
                                </Grid>

                                <Grid xs={3}>
                                    <Typography typography='h4' fontSize='1.125rem' mb={2}>Profissional</Typography>
                                    <AppSelectInput                                    
                                        id='select-role-field'
                                        color='primary'
                                        variant='filled'
                                        message="Profissional"
                                        aria-label="profissional input"
                                        error={errors.professional ? true : false}
                                        fullWidth
                                    >
                                        <Select
                                            labelId="select-acc-option"
                                            id="select-acc"
                                            aria-label="Profissional"
                                            label='Profissional'
                                            {...register('professional')}
                                            error={errors.professional ? true : false}
                                            defaultValue={0}
                                        >
                                            <MenuItem value={0} disabled>Selecionar</MenuItem>

                                            {bonds?.data?.length > 0 && bonds?.data.map((bond) => (
                                                <MenuItem value={bond.id} key={bond.id}>{bond.to.name}</MenuItem>
                                            ))}
                                        </Select>
                                        <FormHelperText>{errors.professional && errors.professional.message}</FormHelperText>
                                    </AppSelectInput>
                                </Grid>

                                <Grid xs={3}>
                                    <Typography typography='h4' fontSize='1.125rem' mb={2}>Especialidade</Typography>
                                    <AppSelectInput                                    
                                        id='select-role-field'
                                        color='primary'
                                        variant='filled'
                                        message="Especialidade"
                                        aria-label="specialty input"
                                        error={errors.specialty ? true : false}
                                        fullWidth
                                    >
                                        <Select
                                            labelId="select-acc-option"
                                            id="select-acc"
                                            aria-label="Profissional"
                                            label='Profissional'
                                            {...register('specialty')}
                                            error={errors.specialty ? true : false}
                                            defaultValue={0}
                                        >
                                            <MenuItem value={0} disabled>Selecionar</MenuItem>

                                            {specialties?.data.map((specialty: SpecialtiesResponseData) => (
                                                <MenuItem value={specialty.id} key={specialty.id}>{specialty.name}</MenuItem>
                                            ))}
                                        </Select>
                                        <FormHelperText>{errors.specialty && errors.specialty.message}</FormHelperText>
                                    </AppSelectInput>
                                </Grid>

                                <Grid xs={3}>
                                    <Typography typography='h4' fontSize='1.125rem' mb={2}>Status</Typography>
                                    <AppSelectInput                                    
                                        id='status-field'
                                        color='primary'
                                        variant='filled'
                                        message="Status"
                                        aria-label="status input"
                                        error={errors.consultation_status ? true : false}
                                        fullWidth
                                    >
                                        <Select
                                            labelId="select-acc-option"
                                            id="select-acc"
                                            aria-label="Profissional"
                                            label='Profissional'
                                            {...register('consultation_status')}
                                            error={errors.consultation_status ? true : false}
                                            defaultValue={0}
                                        >
                                            <MenuItem value={0} disabled>Selecionar</MenuItem>

                                            {consultation_status?.data.map((status) => (
                                                <MenuItem value={status.id} key={status.id}>{status.status}</MenuItem>
                                            ))}
                                        </Select>
                                        <FormHelperText>{errors.consultation_status && errors.consultation_status.message}</FormHelperText>
                                    </AppSelectInput>
                                </Grid>
                                
                                <Grid xs={6}>
                                    <Typography typography='h4' fontSize='1.125rem' mb={2}>Motivo da Consulta</Typography>
                                    <AppInput 
                                        id='tel-field'
                                        color='primary'
                                        variant='filled'
                                        type="text"
                                        label='Motivo da consulta'
                                        aria-label="consultation-reason input"
                                        multiline
                                        maxRows={20}
                                        {...register('reason')}
                                        error={errors.reason ? true : false}
                                        helperText={errors.reason && errors.reason.message}
                                        fullWidth
                                        autoComplete='off'
                                    />
                                </Grid>
                                
                                <Grid xs={6}>
                                    <Typography typography='h4' fontSize='1.125rem' mb={2}>Observação</Typography>
                                    <AppInput 
                                        id='bio-field'
                                        color='primary'
                                        variant='filled'
                                        type='text'
                                        label='Observação'
                                        aria-label="observation input"
                                        multiline
                                        maxRows={20}
                                        {...register('observation')}
                                        error={errors.observation ? true : false}
                                        helperText={errors.observation && errors.observation.message}
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
                                    Registrar Consulta
                        </AppButton>

                        <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/consultations' underline="none" px={2.25} py={1.25} fontSize='1'>Voltar</Link>
                    </Stack>
                </Box>
        </>
    )
}