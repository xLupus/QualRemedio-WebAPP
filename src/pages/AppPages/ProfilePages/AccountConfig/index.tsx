import { Box, Stack, Typography, CardContent, CardActions, Divider, Paper, CircularProgress } from '@mui/material';
import { AppCard } from '../../../../components/Card';
import { useQuery } from '@tanstack/react-query';
import { grey } from '@mui/material/colors';
import { useCurrentUserContext } from '../../../../hooks/CurrentUserContext';
import { AppButton } from '../../../../components/Button';
import User, { UserData } from '../../../../services/User';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

export function ProfileAccountConfiguration() {
    //const [accountToDelete, setAccountToDelete] = useState<number | null>(null)
    //const navigate = useNavigate()
    const currentUser = useCurrentUserContext()

    const { data, isLoading, isFetching } = useQuery({
        queryKey: ['user_profile'],
        queryFn: () => User.show({id: Number(currentUser?.user_id), role: Number(currentUser?.user_role)})
    })

    const user: UserData = data?.data

    const formated_data = moment(user?.birth_day).format('LL')

    const user_role_info = user?.role.filter(role => role.id == Number(currentUser?.user_role))[0]

    return (
        <>
            {isLoading && isFetching && (
                <Paper sx={{ bgcolor: grey[50] }}>
                    <Stack width='100%' minHeight={400} justifyContent={'center'} alignItems={'center'}>
                        <CircularProgress color="primary" />
                    </Stack>
                </Paper>
            )}

            {!isLoading && !isFetching && (
                <>
                    <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={2}>Informações de conta</Typography>

                    <Divider sx={{ mt: 2, mb: 3 }} />

                    <Stack spacing={4}>
                        <AppCard sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1.5 }}>
                            <CardContent>
                                <Stack spacing={3} sx={{ whiteSpace: 'pre-wrap' }}>
                                    <Typography variant="h5" component="div">
                                        Bio
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        {user?.profile?.bio}
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </AppCard>

                        <AppCard sx={{ height: '23.9375rem', p: 1.5 }}>
                            <CardContent>
                                <Grid container spacing={4}>
                                    <Grid xs={7}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Nome</Typography>

                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>{user?.name}</Paper>
                                    </Grid>

                                    <Grid xs={5}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>CPF</Typography>

                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>{user?.cpf}</Paper>
                                    </Grid>

                                    <Grid xs={4}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Idade</Typography>

                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>{moment(user?.birth_day).format('LL')}</Paper>
                                    </Grid>

                                    <Grid xs={4}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Telefone</Typography>

                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>{user?.telephone}</Paper>
                                    </Grid>

                                    <Grid xs={4}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Nascimento</Typography>

                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>{formated_data}</Paper>
                                    </Grid>

                                    <Grid xs={6}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>E-mail</Typography>

                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>{user?.email}</Paper>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </AppCard>

                        <Box display='flex' justifyContent='flex-end' mt={6}>
                        <AppButton
                        sx={{ width: '18.5rem', height: '2.5rem', backgroundColor: '#404040', color: '#FFF',
                            '&:hover': {
                            backgroundColor: '#525252'
                        }}}
                        component={NavLink} 
                        to={'update'}
                        id='btn-updade-profile'
                        variant='contained'
                    >
                        Atualizar informações
                    </AppButton>
                        </Box>
                    </Stack>

                    <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={12}>Configurações de perfil</Typography>

                    <Divider sx={{ mt: 2, mb: 3 }} />

                    <AppCard sx={{ height: '9.375rem', p: 1.5 }}>
                        <CardContent>
                            {/* Paciente */}
                            {user_role_info?.id == 1 && (
                                <Grid container spacing={4}>
                                    <Grid xs={4}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Tipo de conta</Typography>
                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>{user_role_info.name}</Paper>
                                    </Grid>
                                </Grid>
                            )}

                            {/* Medico */}
                            {user_role_info?.id == 2 && (
                                <Grid container spacing={4}>
                                    <Grid xs={4}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Tipo de conta</Typography>
                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>{user_role_info.name}</Paper>
                                    </Grid>

                                    <Grid xs={4}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Especialidade</Typography>
                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>{user?.doctor[0].specialty.name}</Paper>
                                    </Grid>

                                    <Grid xs={4}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>CRM</Typography>
                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>{user?.doctor[0].crm_state} / {user?.doctor[0].crm}</Paper>
                                    </Grid>
                                </Grid>
                            )}

                            {/* Cuidador */}
                            {user_role_info?.id == 3 && (
                                <Grid container spacing={4}>
                                    <Grid xs={4}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Tipo de conta</Typography>
                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>{user_role_info.name}</Paper>
                                    </Grid>

                                    <Grid xs={4}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Especialidade</Typography>
                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>{user?.carer[0].specialty.name}</Paper>
                                    </Grid>
                                </Grid>
                            )}
                        </CardContent>
                    </AppCard>

                    {/*
                    {user?.doctor[0].id == currentUser?.user_id && (
                        <AppCard sx={{ height: '9.375rem', p: 1.5 }}>
                            <CardContent>
                                <Grid container spacing={4}>
                                    <Grid xs={4}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Tipo de conta</Typography>
                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>{user_role_info.name}</Paper>
                                    </Grid>

                                    <Grid xs={4}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>Especialidade</Typography>
                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>Otorrinolaringologia</Paper>
                                    </Grid>

                                    <Grid xs={4}>
                                        <Typography typography='h4' fontSize='1.125rem' mb={2}>CRM</Typography>
                                        <Paper sx={{ height: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color: '#00000077' }} elevation={2}>SP / 4756432</Paper>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </AppCard>
                    )}
*/}

                    <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={12}>Área restrita</Typography>
                    <Divider sx={{ mt: 2, mb: 3 }} />

                    <AppCard sx={{ height: '13.25rem', p: 1.5, mt: 5, backgroundColor: '#FF55554A' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" fontSize='1.125rem' fontWeight='bold' mb={2}>Remover Conta</Typography>
                            <Typography variant="body1" component="div" fontSize='.875rem' width='70%'>ATENÇÃO, A REMOÇÃO DE CONTA NÃO PODE SER DESFEITA, POR ISSO, TENHA CERTEZA DESTA OPERAÇÃO.</Typography>
                        </CardContent>

                        <CardActions>
                            <AppButton
                                sx={{
                                    width: '13.75rem', height: '2.8125rem', fontSize: '1.125rem',  backgroundColor: '#606060', color: '#FFF',
                                    '&:hover': {
                                    backgroundColor: '#525252'
                                }}}
                                id='btn-updade-profile'
                                variant='text'
                            >
                                Remover sua conta
                            </AppButton>
                        </CardActions>
                    </AppCard>

                    {/*
            
            <Divider sx={{ mt: 2, mb: 3 }} />
                        <AppCard sx={{height: '13.125rem', p: 1.5}}>
                    <CardContent>
                        <Typography variant="h5" component="div" fontSize='1.125rem' fontWeight='bold' mb={2}>Transferir conta</Typography>
                        <Typography variant="body1" component="div" fontSize='.875rem'>Se você deseja transferir o seu tipo atual da conta para outra</Typography>
                        <Typography variant="body1" component="div" fontSize='.875rem'>Apenas os dados básicos serão transferidos</Typography>
                    </CardContent>

                    <CardActions>
                        <AppButton
                            sx={{ width: '13.75rem', height: '2.8125rem', backgroundColor: '#D9D9D9', fontSize: '1.125rem',
                                '&:hover': {
                                        backgroundColor: '#C6C6C6'
                                    }
                                }}
                            id='btn-updade-profile'
                            variant='text'       
                        >
                            Transferir sua conta
                        </AppButton>
                    </CardActions>
            </AppCard> 
            */}
                </>
            )}

        </>
    )
}