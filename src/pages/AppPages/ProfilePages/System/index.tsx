import { Typography, CardContent, Divider, Paper, InputBase, Switch, Stack, IconButton, CardActionArea } from '@mui/material';
import { AppCard } from '../../../../components/Card';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

export function ProfileSystem() {
    return (
        <>  
            <Typography typography='h3' fontSize='1.375rem' color='#00000077' fontWeight='bold'>Aparência</Typography>
            <Divider sx={{mt: 2, mb: 3}} />

            <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae nihil incidunt numquam 
                delectus vitae architecto! Eum dicta 
                laboriosam accusantium ut inventore earum 
                in odit doloremque, dolorem ad voluptatem similique.
            </Typography>
           
            <Grid container spacing={3} justifyContent='space-between' mt={5}>
                {
                    ['Claro', 'Escuro', 'Sistema'].map((el, i) => (
                        <Grid xs={3.5} key={i}>
                            {
                                el === 'Claro' ? 
                                <Stack direction='row' alignItems='center'>
                                    <Typography typography='h3' fontSize='1.375rem' color='#00000077' fontWeight='bold'>{el}</Typography>
                                    <Typography typography='body1' fontSize='.875rem' color='#00000077' ml={8}>Tema atual</Typography>
                                </Stack>
                                :
                                <Typography typography='h3' fontSize='1.375rem' color='#00000077' fontWeight='bold'>{el}</Typography>
                            }

                            <AppCard sx={{height: '8rem', mt: 2}}>
                                <CardActionArea sx={{height: '8rem'}}>
                                    <CardContent>
                                    </CardContent>  
                                </CardActionArea>                            
                            </AppCard>
                        </Grid>
                    ))
                }
            </Grid>
            
            <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={8}>Acessibilidade</Typography>
            <Divider sx={{mt: 2, mb: 3}} />

            <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae nihil incidunt numquam 
                delectus vitae architecto! Eum dicta 
                laboriosam accusantium ut inventore earum 
                in odit doloremque, dolorem ad voluptatem similique.
            </Typography>

            {/*  */}
            <Typography typography='h3' fontSize='1.375rem' color='#00000077' fontWeight='bold' mt={8}>Cores</Typography>
            <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae nihil incidunt numquam 
                delectus vitae architecto! Eum dicta 
                laboriosam accusantium ut inventore earum 
                in odit doloremque, dolorem ad voluptatem similique.
            </Typography>
                
            <Grid container mt={5} spacing={4} justifyContent='space-between'>
                {
                    ['Alto Contraste', 'Protonatopia', 'Deutaronopia', 'Tritanopia'].map((el, i ) => (
                        <Grid xs={5} key={i}>
                            <AppCard sx={{height: '4.3375rem'}}>
                                <CardContent>
                                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                                        <Typography typography='h3' fontSize='1.125rem'>{el}</Typography>
                                        <Switch size='medium' aria-label='two-factor-email-switch' color="default"  />
                                    </Stack>
                                </CardContent>        
                            </AppCard>
                        </Grid>
                    ))
                }
            </Grid>

            <Typography typography='h3' fontSize='1.375rem' color='#00000077' fontWeight='bold' mt={8}>Preferências do sistema</Typography>
            <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae nihil incidunt numquam 
                delectus vitae architecto! Eum dicta 
                laboriosam accusantium ut inventore earum 
                in odit doloremque, dolorem ad voluptatem similique.
            </Typography>

            <AppCard sx={{height: '6.025rem', mt: 5}}>
                <CardContent>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Typography typography='h3' fontSize='1.125rem'>Tamanho de fonte</Typography>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '8.625rem', height: '2.275rem', backgroundColor: '#D9D9D9' }}
                        >
                            <IconButton sx={{ p: '10px' }} aria-label="substract-font-size">
                                <ArrowBackIos />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                inputProps={{ 'aria-label': 'font-size-adjust' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="add-font-size">
                                <ArrowForwardIos />
                            </IconButton>
                        </Paper>
                    </Stack>

                    <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={.5}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae nihil incidunt numquam.
                    </Typography>
                </CardContent>                              
            </AppCard>

            <AppCard sx={{height: '6.125rem', mt: 5}}>
                <CardContent>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Typography typography='h3' fontSize='1.125rem'>Navegação por voz</Typography>
                        <Switch size='medium' aria-label='two-factor-email-switch' color="default" />
                    </Stack>

                    <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={.5}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae nihil incidunt numquam.
                    </Typography>
                </CardContent>                              
            </AppCard>
        </>
    )
}