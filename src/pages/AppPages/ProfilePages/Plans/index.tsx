import { Box, Typography, CardContent, Divider, Stack, CardActionArea } from '@mui/material';
import { AppCard } from '../../../../components/Card';

export function ProfilePlans() {
    const plansOptions = [
        {
            type: 'Básico',
            desc: `Nosso Plano Gratuito oferece um ponto de partida acessível para o gerenciamento de consultas e prescrições médicas. Desfrute da facilidade de registrar suas consultas e gerenciar prescrições, tudo sem nenhum custo.`
        },
        {
            type: 'Premium',
            desc: `Além das funcionalidades do plano gratuito, desbloqueie recursos avançados como, lembretes ilimitados e permissões detalhadas entre vínculos. Para quem busca um gerenciamento mais completo e personalizado.`
        },
        {
            type: 'Enterprise',
            desc: `Para organizações e equipes médicas. Além das funcionalidades dos planos anteriores, obtenha ferramentas avançadas para gerenciar consultas, colaborar eficientemente e analisar resultados de exames. Uma solução integrada para otimizar o cuidado em escala.`
        }, 
    ];

    return (
        <Box maxWidth={'lg'}>  
            <Typography typography='h3' fontSize='1.375rem' color='#00000077' fontWeight='bold'>Planos</Typography>

            <Divider sx={{mt: 2, mb: 3}} />

            <Typography typography='h3' fontSize='1.125rem' color='#00000077' mt={4}>
                Atualize seu plano, veja entre nossas opções o que mais se adequa as suas necessidades:
            </Typography>

            {
                plansOptions.map((el, i) => (
                    <Box mt={6.5} key={i}>
                        {
                            el.type === 'Gratuito' ?
                                <Stack direction='row' alignItems={'center'}>
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
        </Box>
    )
}