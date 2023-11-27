
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Unstable_Grid2';
import { Box, Button, Link } from "@mui/material";
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';

const accounts: string[] = [
    'paciente',
    'médico',
    'cuidador'
]

export function AccountSelectionPage() {
    return (
        <Grid container>
            <Grid xl={6}>
                <Item style={{backgroundColor: '#303030', height: '100vh', width: '50vw'}}></Item>
            </Grid>
            <Grid display='flex' justifyContent='center' alignItems='center' xl={6} justifySelf='center'>
                <Item style={{width: '31.25rem', height: '28.125rem', backgroundColor: '#E3E3E3'}} boxShadow={2} borderRadius='0.375rem'>
                    <Box p={5}>
                        <Box typography='h1' fontSize='2rem' color='#00000077'>Bem-Vindo de volta!</Box>
                        <Box typography='body1' fontSize='0.77344rem' color='#00000077' mb={3}>Logue-se para explorar tudo de melhor aqui.</Box>

                        <Box typography='body1' fontSize='0.77344rem' color='#50505077' mb={7}>
                            Não tem uma conta? 
                            <Link component={NavLink} to='/auth/register' ml='0.2rem' color='#50505077' underline='none'>Registre-se</Link>
                        </Box>
                        <Box typography='body1' fontSize='1rem' color='#00000077' textAlign='center' mb={5}>Escolha seu tipo de conta antes de prosseguir</Box>

                        <Stack spacing={2}>
                            {
                                accounts.map((el) => (
                                    <Button style={{ height: '2.5rem', backgroundColor: '#BBBBBB'}} variant="text" sx={{ boxShadow: 2, color: '#00000077'}} >{el}</Button>
                                ))
                            }
                        </Stack>
                    </Box>
                </Item>
            </Grid>
        </Grid>
    )
}