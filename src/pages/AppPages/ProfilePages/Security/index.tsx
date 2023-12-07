import { Box, Stack, Typography, CardContent, CardActions, Avatar, Divider, Paper } from '@mui/material';
import { AppCard } from '../../../../components/Card';
import { AppButton } from '../../../../components/Button';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export function AccountConfiguration() {
    return (
        <>
            <AppCard sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '10.3125rem', p: 5}}>
                <CardContent>
                    <Stack direction="row" alignItems='center' spacing={3}>
                        <Avatar
                            alt=""
                            src=""
                            sx={{ width: 120, height: 120 }}
                        />
                        <Stack>
                            <Typography gutterBottom variant="h5" component="div">
                                Faça upload de uma foto
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Photo.png
                            </Typography>
                        </Stack>
                    </Stack>
                </CardContent>

                <CardActions>
                    <AppButton
                        sx={{ width: '12.5rem', height: '2.8125rem', backgroundColor: '#D9D9D9', fontSize: '1.125rem',
                            '&:hover': {
                                    backgroundColor: '#C6C6C6'
                                }
                            }}
                        id='btn-updade-profile'
                        variant='text'       
                    >
                        Atualizar
                    </AppButton>
                </CardActions>
            </AppCard>

            <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={12}>Informações de conta</Typography>

            <Divider sx={{mt: 2, mb: 3}} />

            <Box>
                <AppCard sx={{height: '23.9375rem', p: 1.5}}>
                    <CardContent>
                        <Grid container spacing={4}>
                            <Grid xs={7}>
                                <Typography typography='h4' fontSize='1.125rem' mb={2}>Nome</Typography>
                                <Paper sx={{height: '2.8125rem', display:'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color:'#00000077'}} elevation={2}>Gustavo Paulo Teixeira</Paper>
                            </Grid>

                            <Grid xs={5}>
                                <Typography typography='h4' fontSize='1.125rem' mb={2}>CPF</Typography>
                                <Paper sx={{height: '2.8125rem', display:'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color:'#00000077'}} elevation={2}>7**.***.***-24</Paper>
                            </Grid>

                            <Grid xs={4}>
                                <Typography typography='h4' fontSize='1.125rem' mb={2}>Idade</Typography>
                                <Paper sx={{height: '2.8125rem', display:'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color:'#00000077'}} elevation={2}>21 Anos</Paper>
                            </Grid>

                            <Grid xs={4}>
                                <Typography typography='h4' fontSize='1.125rem' mb={2}>Sexo</Typography>
                                <Paper sx={{height: '2.8125rem', display:'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color:'#00000077'}} elevation={2}>Masculino</Paper>
                            </Grid>

                            <Grid xs={4}>
                                <Typography typography='h4' fontSize='1.125rem' mb={2}>Nascimento</Typography>
                                <Paper sx={{height: '2.8125rem', display:'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color:'#00000077'}} elevation={2}>12 de Janeiro, 2004</Paper>
                            </Grid>

                            <Grid xs={6}>
                                <Typography typography='h4' fontSize='1.125rem' mb={2}>E-mail</Typography>
                                <Paper sx={{height: '2.8125rem', display:'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color:'#00000077'}} elevation={2}>Gustavo.P.Teixeira@outlook.com.br</Paper>
                            </Grid>

                            <Grid xs={6}>
                                <Typography typography='h4' fontSize='1.125rem' mb={2}>Telefone</Typography>
                                <Paper sx={{height: '2.8125rem', display:'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color:'#00000077'}} elevation={2}>(11) 9 7431-3044</Paper>
                            </Grid>
                        </Grid>
                    </CardContent>
                </AppCard>

                <Box display='flex' justifyContent='flex-end' mt={6}>
                    <AppButton
                            sx={{ width: '18.5rem', height: '2.5rem', backgroundColor: '#D9D9D9', fontSize: '1.125rem',
                                '&:hover': {
                                        backgroundColor: '#C6C6C6'
                                    }
                                }}
                            id='btn-updade-profile'
                            variant='text'       
                        >
                            Atualizar informações
                    </AppButton>
                </Box>
            </Box>

            <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={12}>Configurações de perfil</Typography>

            <Divider sx={{mt: 2, mb: 3}} />

            <AppCard sx={{height: '9.375rem', p: 1.5}}>
                <CardContent>
                        <Grid container spacing={4}>
                            <Grid xs={4}>
                                <Typography typography='h4' fontSize='1.125rem' mb={2}>Tipo de conta</Typography>
                                <Paper sx={{height: '2.8125rem', display:'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color:'#00000077'}} elevation={2}>Médico</Paper>
                            </Grid>

                            <Grid xs={4}>
                                <Typography typography='h4' fontSize='1.125rem' mb={2}>Especialidade</Typography>
                                <Paper sx={{height: '2.8125rem', display:'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color:'#00000077'}} elevation={2}>Otorrinolaringologia</Paper>
                            </Grid>

                            <Grid xs={4}>
                                <Typography typography='h4' fontSize='1.125rem' mb={2}>CRM</Typography>
                                <Paper sx={{height: '2.8125rem', display:'flex', alignItems: 'center', justifyContent: 'center', typography: 'body1', color:'#00000077'}} elevation={2}>SP / 4756432</Paper>
                            </Grid>
                        </Grid>
                </CardContent>
            </AppCard>

            <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={12}>Área restrita</Typography>

            <Divider sx={{mt: 2, mb: 3}} />

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

            <AppCard sx={{height: '13.25rem', p: 1.5, mt: 5, backgroundColor: '#FF55554A'}}>
                <CardContent>
                    <Typography variant="h5" component="div" fontSize='1.125rem' fontWeight='bold' mb={2}>Remover Conta</Typography>
                    <Typography variant="body1" component="div" fontSize='.875rem' width='70%'>ATENÇÃO, A REMOÇÃO DE CONTA NÃO PODE SER DESFEITA, POR ISSO, TENHA CERTEZA DESTA OPERAÇÃO.</Typography>
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
                        Remover sua conta
                    </AppButton>
                </CardActions>
            </AppCard>
        </>
    )
}