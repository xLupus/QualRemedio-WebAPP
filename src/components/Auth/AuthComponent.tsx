import { NavLink } from 'react-router-dom';
import { Theme, useTheme } from '@mui/material/styles';
import { Box, Button, Link } from "@mui/material";

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Unstable_Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';

export function AuthComponent() {
    const accountsType = [
        {
            id: 1,
            type: 'Paciente'
        },
        {
            id: 2,
            type: 'Cuidador'
        },
        {
            id: 3,
            type: 'Médico'
        }
    ];

    const theme: Theme = useTheme();
    const isLargeScreen: boolean = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <Grid container columns={{lg: 12}}>
            <Grid lg={6}>
                <Item style={{
                    backgroundColor: isLargeScreen ? '#303030' : 'none', 
                    height: isLargeScreen ? '100vh' : undefined, 
                    width: isLargeScreen ? '50vw' : undefined
                }}></Item>
            </Grid>

            <Grid style={{
                    height: !isLargeScreen ? '100vh' : undefined,
                    width: !isLargeScreen ? '100vw' : undefined
                }} 
                display='flex' 
                justifyContent='center' 
                alignItems='center' 
                lg={6}
            >
                <Item 
                    style={{
                        width: '31.25rem',
                        backgroundColor: '#E3E3E3'
                    }} 
                    boxShadow={2}
                    borderRadius='0.375rem'
                >
                    <Box p={5} style={{height: '100%'}}>
                        <Box typography='h1' fontSize={'2rem'} color='#00000077'>Bem-Vindo de volta!</Box>
                        <Box typography='body1' fontSize='0.77344rem' color='#00000077' mb={3}>Logue-se para explorar tudo de melhor aqui.</Box>

                        <Box typography='body1' fontSize='0.77344rem' color='#50505080' mb={6}>
                            Não tem uma conta? 
                            <Link component={NavLink} to='/auth/register' ml='0.2rem' color='#50505080' underline='none'>Registre-se</Link>
                        </Box>
                        <Box typography='body1' fontSize='1rem' color='#00000077' textAlign='center' mb={4.3}>Escolha seu tipo de conta antes de prosseguir</Box>

                        <Stack spacing={3}>
                            {
                                accountsType.map((el, i) => (
                                    <Button style={{ height: '2.5rem', backgroundColor: '#BBBBBB'}} variant="text" sx={{ boxShadow: 2, color: '#00000077'}} id={el.id.toString()} key={i}>{el.type}</Button>
                                ))
                            }
                        </Stack>
                    </Box>
                </Item>
            </Grid>
        </Grid>
    )
}