import { Box, Typography, CardContent, Divider, Stack, CardActionArea } from '@mui/material';
import { AppCard } from '../../../../components/Card';

export function ProfilePlans() {
    const plansOptions = [
        {
            type: 'Gratuito',
            desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores excepturi doloribus dicta at? 
                Enim nobis incidunt dolor perspiciatis temporibus 
                dolorum quasi! Tempora earum architecto recusandae iusto fugiat laboriosam pariatur vel.`
        },
        {
            type: 'Básico',
            desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores excepturi doloribus dicta at? 
                Enim nobis incidunt dolor perspiciatis temporibus 
                dolorum quasi! Tempora earum architecto recusandae iusto fugiat laboriosam pariatur vel.`
        },
        {
            type: 'Premium',
            desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores excepturi doloribus dicta at? 
                Enim nobis incidunt dolor perspiciatis temporibus 
                dolorum quasi! Tempora earum architecto recusandae iusto fugiat laboriosam pariatur vel.`
        },
        {
            type: 'Enterprise',
            desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores excepturi doloribus dicta at? 
                Enim nobis incidunt dolor perspiciatis temporibus 
                dolorum quasi! Tempora earum architecto recusandae iusto fugiat laboriosam pariatur vel.`
        }, 
    ];

    return (
        <>  
            <Typography typography='h3' fontSize='1.375rem' color='#00000077' fontWeight='bold'>Planos</Typography>
            <Divider sx={{mt: 2, mb: 3}} />
            <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae nihil incidunt numquam 
                delectus vitae architecto! Eum dicta 
                laboriosam accusantium ut inventore earum 
                in odit doloremque, dolorem ad voluptatem similique.
            </Typography>

            {
                plansOptions.map((el, i) => (
                    <Box mt={6.5} key={i}>
                        {
                            el.type === 'Gratuito' ?
                                <Stack direction='row' alignItems='center'>
                                    <Typography typography='h3' fontSize='1.375rem' color='#00000077' fontWeight='bold'>{el.type}</Typography>
                                    <Typography typography='body1' fontSize='.875rem' color='#00000077' ml={8}>Plano atual</Typography>
                                </Stack>
                            :
                            <Typography typography='h3' fontSize='1.375rem' color='#00000077' fontWeight='bold'>{el.type}</Typography>
                        }
                        <AppCard sx={{ height: '7.5rem', mt: 2.5}}>
                            <CardActionArea>
                                <CardContent sx={{height: '7.5rem'}}>
                                    <Typography typography='body1' fontSize='1.125rem' color='#00000077' textAlign='center'>
                                        {el.desc}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </AppCard>
                    </Box>
                ))
            }       
        </>
    )
}