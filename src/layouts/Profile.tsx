import { Box, Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Unstable_Grid2';
import { AppCard } from "../components/Card";

export function Profile() {
    const configOptions = [
        {
            name: 'Configurações de conta',
            desc: 'Lizards are a widespread group of squamate reptiles.'
        },
        {
            name: 'Senha e segurança',
            desc: 'Lizards are a widespread group of squamate reptiles.'
        },
        {
            name: 'Aparência e acessibilidade',
            desc: 'Lizards are a widespread group of squamate reptiles.'
        },
        {
            name: 'Planos',
            desc: 'Lizards are a widespread group of squamate reptiles.'
        }
    ];

    return (
        <>
            <Box typography='h1' fontSize='1.75rem' color='#00000077' mb={4}>Meu Perfil</Box>
            
            <Grid container columnSpacing={12}>
                <Grid lg={8}>
                    <Item>
                        <Outlet />
                    </Item>
                </Grid>
    
                <Grid lg={4}>
                    {
                         configOptions.map((el, i) => (
                                <Item mb={2.5}>
                                    <AppCard sx={{height: '5.625rem'}} key={i}>
                                        <CardActionArea sx={{height: '5.625rem'}}>
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