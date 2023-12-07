import { Box, Typography, CardContent, CardActions, Divider, Paper, Switch, Stack, IconButton } from '@mui/material';
import { AppCard } from '../../../../components/Card';
import { AppButton } from '../../../../components/Button';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Devices, Close } from '@mui/icons-material';

export function ProfileAccountSecurity() {
    return (
        <>  
            <Typography typography='h3' fontSize='1.375rem' color='#00000077' fontWeight='bold'>Senha</Typography>
            <Divider sx={{mt: 2, mb: 3}} />
            
            <AppCard sx={{ height: '7.5rem', mt: 8}}>
                <Grid container>
                    <Grid xs={6}> 
                        <CardContent sx={{height: '50%'}}>
                            <Typography typography='h4' fontSize='1.125rem' mb={2}>Nome</Typography>
                            <Paper sx={{ height: '2.8125rem', display:'flex', alignItems: 'center', typography: 'body1', color:'#00000077', p: 2}} elevation={2}>*********************</Paper>
                        </CardContent>
                    </Grid>

                    <Grid xs={6} alignItems='center'>
                        <CardActions sx={{display: 'flex', justifyContent: 'center', mt: 6}}>
                            <AppButton
                                sx={{ width: '12.5rem', height: '2.8125rem', backgroundColor: 'transparent', boxShadow: 'none', fontSize: '1.125rem', mr: 3,
                                    '&:hover': {
                                            backgroundColor: 'transparent'
                                        }
                                    }}
                                    id='btn-upd-pass'
                                    variant='text'   
                                    disableRipple    
                                >
                                    Alterar minha senha
                            </AppButton>

                            <AppButton
                                sx={{ width: '12.5rem', height: '2.8125rem', backgroundColor: 'transparent', boxShadow: 'none', fontSize: '1.125rem',
                                '&:hover': {
                                        backgroundColor: 'transparent'
                                 }
                                }}
                                id='btn-forgot-pass'
                                variant='text'   
                                disableRipple    
                            >
                                Esqueci minha senha
                            </AppButton>       
                        </CardActions>
                    </Grid>
                </Grid>
            </AppCard>

            <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={8}>Segurança</Typography>
            <Divider sx={{mt: 2, mb: 3}} />

            {/*  */}
            <Typography typography='h3' fontSize='1.375rem' color='#00000077' fontWeight='bold' mt={8}>Verificação em dois fatores</Typography>
            <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae nihil incidunt numquam 
                delectus vitae architecto! Eum dicta 
                laboriosam accusantium ut inventore earum 
                in odit doloremque, dolorem ad voluptatem similique.
            </Typography>
                
            <AppCard sx={{height: '6.125rem', mt: 5}}>
                <CardContent>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Typography typography='h3' fontSize='1.125rem'>E-mail</Typography>
                        <Switch size='medium' aria-label='two-factor-email-switch' defaultChecked color="default" />
                    </Stack>

                    <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={.5}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae nihil incidunt numquam.
                    </Typography>
                </CardContent>                              
            </AppCard>

            <AppCard sx={{height: '6.125rem', mt: 5}}>
                <CardContent>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Typography typography='h3' fontSize='1.125rem'>Aplicativo de autenticação</Typography>
                        <Switch size='medium' aria-label='two-factor-email-switch' defaultChecked color="default" />
                    </Stack>

                    <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={.5}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae nihil incidunt numquam.
                    </Typography>
                </CardContent>                              
            </AppCard>

            {/*  */}
            <Typography typography='h3' fontSize='1.375rem' color='#00000077' fontWeight='bold' mt={8}>Sessões ativas</Typography>
            <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={4} mb={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae nihil incidunt numquam 
                delectus vitae architecto! Eum dicta 
                laboriosam accusantium ut inventore earum 
                in odit doloremque, dolorem ad voluptatem similique.
            </Typography>
                
            <AppCard sx={{height: '6.125rem', mt: 2}}>
                <CardContent>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                       <Stack direction='row' alignItems='center'>
                            <Devices sx={{width: 70, height: 70}} />
                            <Stack ml={6}>
                                <Typography typography='h3' fontSize='1.125rem' mb={2}>São Paulo, Brasil - 255.255.255.1</Typography>
                                <Typography typography='h3' fontSize='1.125rem'>Sessão Atual</Typography>
                            </Stack>
                       </Stack>

                        <Stack direction='row' alignItems='center'>
                            <Typography typography='h3' fontSize='1.125rem' alignSelf='flex-start' mr={6}>Sistema Operacional - Windows</Typography>
                            <Box position='relative' bottom='1.5rem'>
                                <IconButton
                                    color="inherit"
                                    aria-label="close-active-session"
                                    edge="start"
                                >
                                    <Close />
                                </IconButton>
                            </Box>
                        </Stack>
                    </Stack>
                </CardContent>                              
            </AppCard>

            <AppCard sx={{height: '6.125rem', mt: 2}}>
                <CardContent>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                       <Stack direction='row' alignItems='center'>
                            <Devices sx={{width: 70, height: 70}} />
                            <Stack ml={6}>
                                <Typography typography='h3' fontSize='1.125rem' mb={2}>São Paulo, Brasil - 255.255.255.2</Typography>
                                <Typography typography='h3' fontSize='1.125rem'>Sessão Atual</Typography>
                            </Stack>
                       </Stack>

                        <Stack direction='row' alignItems='center'>
                            <Typography typography='h3' fontSize='1.125rem' alignSelf='flex-start' mr={6}>Sistema Operacional - Linux</Typography>
                            <Box position='relative' bottom='1.5rem'>
                                <IconButton
                                    color="inherit"
                                    aria-label="close-active-session"
                                    edge="start"
                                >
                                    <Close />
                                </IconButton>
                            </Box>
                        </Stack>
                    </Stack>
                </CardContent>                              
            </AppCard>

            <AppCard sx={{height: '6.125rem', mt: 2}}>
                <CardContent>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                       <Stack direction='row' alignItems='center'>
                            <Devices sx={{width: 70, height: 70}} />
                            <Stack ml={6}>
                                <Typography typography='h3' fontSize='1.125rem' mb={2}>São Paulo, Brasil - 255.255.255.2</Typography>
                                <Typography typography='h3' fontSize='1.125rem'>Sessão Atual</Typography>
                            </Stack>
                       </Stack>

                        <Stack direction='row' alignItems='center'>
                            <Typography typography='h3' fontSize='1.125rem' alignSelf='flex-start' mr={6}>Sistema Operacional - Linux</Typography>
                            <Box position='relative' bottom='1.5rem'>
                                <IconButton
                                    color="inherit"
                                    aria-label="close-active-session"
                                    edge="start"
                                >
                                    <Close />
                                </IconButton>
                            </Box>
                        </Stack>
                    </Stack>
                </CardContent>                              
            </AppCard>

            <Box display='flex' justifyContent='flex-end' mt={8}>
                <AppButton
                    sx={{ width: '18.5rem', height: '2.5rem', backgroundColor: '#D9D9D9', 
                        '&:hover': {
                        backgroundColor: '#C6C6C6'
                    }}}
                    id='btn-logout-all-sessions'
                    variant='text'
                >
                    Deslogar de todas as sessões
                </AppButton>
            </Box>
        </>
    )
}