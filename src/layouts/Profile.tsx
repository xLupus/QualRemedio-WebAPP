import { Box, CardActionArea, CardContent, Typography } from "@mui/material";
import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Unstable_Grid2';
import { AppCard } from "../components/Card";

export function Profile() {
    const navigate: NavigateFunction = useNavigate();

    const configOptions = [
        {
            name: 'Configurações de conta',
            desc: 'Lizards are a widespread group of squamate reptiles.',
            path: '/profile/account-config'
        },
        {
            name: 'Senha e segurança',
            desc: 'Lizards are a widespread group of squamate reptiles.',
            path: '/profile/security'
        },
        {
            name: 'Aparência e acessibilidade',
            desc: 'Lizards are a widespread group of squamate reptiles.',
            path: ''
        },
        {
            name: 'Planos',
            desc: 'Lizards are a widespread group of squamate reptiles.',
            path: '/profile/plans'
        }
    ];

    return (
        <>
            <Box typography='h1' fontSize='1.75rem' color='#00000077' mb={6}>
                Configurações de senha e segurança
            </Box>
            
            <Grid container columnSpacing={12}>
                <Grid lg={8}>
                    <Item>
                        <Outlet />
                    </Item>
                </Grid>
    
                <Grid lg={4} key='options'>
                    {
                        configOptions.map((el, i) => (
                                <Item mb={2.5}>
                                    <AppCard sx={{height: '5.625rem'}} key={i}>
                                        <CardActionArea sx={{height: '5.625rem'}} onClick={() => navigate(`${el.path}`)}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h4" component="div" fontSize='1.375rem'>
                                                    {el.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" fontSize='.75rem'>
                                                    {el.desc}
                                                </Typography>
                                            </CardContent>
                                    </CardActionArea>
                                </AppCard>
                            </Item>
                        ))
                    }
                </Grid>
            </ Grid>
        </>
    )
}