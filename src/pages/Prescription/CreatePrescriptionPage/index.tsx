import { NavLink, useNavigate, useParams } from "react-router-dom"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Stack, Typography, Link, Box, CardContent, Snackbar, SnackbarContent } from "@mui/material"
import Prescription from "../../../services/Prescription"
import { AppButton } from "../../../components/Button"
import { AppCard } from "../../../components/Card"
import { AppInput } from "../../../components/Input"
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from "react"
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
        const [state, setState] = useState<State>({
            open: false,
            vertical: 'top',
            horizontal: 'center',
            message: ''
        });
        const { vertical, horizontal, message, open } = state;

        const { register, handleSubmit, formState: { errors }, setError } = useForm<CreatePrescriptionData>({
            resolver: zodResolver(CreatePrescriptionFormSchema)
        })

        const handleFormSubmit: SubmitHandler<CreatePrescriptionData> = async (data) => {
            const response = await Prescription.store(Number(consultation_id), data, data.digital)

            if (response.status == 422) {
            console.log(response.data);
            setError('digital', { message: response.data })
            }

            if (response.status == 200) {
                setState({ vertical: 'top', horizontal: 'center', message: 'Presrição criada com sucesso!', open: true });

                setTimeout(() => {
                    navigate(`/consultations/${consultation_id}`, { replace: true })
                }, 4200)
    
            }
                
    }

    
    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return (
        <>
        <Typography typography='h1' fontSize='1.75rem' color='#00000077' mb={6}>Criar prescrição da consulta</Typography>

            <Box component='form' onSubmit={handleSubmit(handleFormSubmit)}>      
                <AppCard sx={{p: 1.5}}>
                    <CardContent>
                        <Grid container spacing={4}>
                            <Grid xs={12}>
                                <Typography typography='h4' fontSize='1.125rem' mb={2}>Rôtulo</Typography>
                                <AppInput 
                                    id='name-field'
                                    color='primary'
                                    variant='filled'
                                    label='Rôtulo'
                                    type="text"
                                    {...register('label')}
                                    multiline
                                    maxRows={20}
                                    error={errors.label ? true : false}
                                    helperText={errors.label && errors.label.message}
                                    fullWidth
                                    autoComplete='off'
                                />
                            </Grid>

                            <Grid xs={12}>
                                <Typography typography='h4' fontSize='1.125rem' mb={2}>Observação</Typography>

                                <AppInput 
                                    id='observation-field'
                                    color='primary'
                                    variant='filled'
                                    type='text'
                                    label='Observação'
                                    multiline
                                    maxRows={20}
                                    {...register('observation')}
                                    error={errors.observation ? true : false}
                                    helperText={errors.observation && errors.observation.message}
                                    fullWidth
                                    autoComplete='off'
                                /> 
                            </Grid>
              
                            <Grid xs={6}>
                                <Typography typography='h4' fontSize='1.125rem' mb={2}>Versão física</Typography>
                                <AppInput 
                                    id='physical-prescription-field'
                                    color='primary'
                                    variant='filled'
                                    type='text'
                                    label='Versão Física'
                                    {...register('physical')}
                                    multiline
                                    maxRows={20}
                                    error={errors.physical ? true : false}
                                    helperText={errors.physical && errors.physical.message}
                                    fullWidth
                                    autoComplete='off'
                                /> 
                            </Grid>

                            <Grid xs={6}>
                                <Typography typography='h4' fontSize='1.125rem' mb={2} >
                                    Versão Digital:  <Typography component='span' variant="body2">Extensões Suportadas: PDF, PNG e JPEG</Typography>
                                </Typography>

                                <AppInput 
                                    id='digital-prescription-field'
                                    color='primary'
                                    variant='filled'
                                    type='file'
                                    label='Versão Digital'
                                    {...register('physical')}
                                    {...register('digital')}
                                    error={errors.digital ? true : false}
                                    helperText={errors.digital && errors.digital.message}
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
                                Adicionar prescrição
                    </AppButton>

                    <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to={`/consultations/${consultation_id}`} underline="none" px={2.25} py={1.25} fontSize='1'>Voltar</Link>
                </Stack>
            </Box>

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