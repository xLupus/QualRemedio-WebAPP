import { Box, Button, Container, Stack, Typography, Link } from '@mui/material'
import { Logo } from '../Logo'
import { BsInstagram, BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { blue } from '@mui/material/colors'
import moment from 'moment';

export function AppFooter() {
    return (
        <Box paddingY={6} sx={{ bgcolor: blue[900], color: 'white' }}>
            <Container>
                <Box display='flex' flexDirection={{xs: 'column', md: 'row'}} mb={{xs: 5, md: 3}} justifyContent='space-between'>
                    <Link component={NavLink} to='/' underline="none" color='inherit' mb={{xs: 4, md: 0}}>
                        <Logo />
                    </Link>

                    <Box component='nav' alignSelf='center'>
                        <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/functionalities' underline="none" px={2.25} py={1.25} fontSize='1rem'>Funcionalidades</Link>
                        <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/prices' underline="none" px={2.25} py={1.25} fontSize='1rem'>Preços</Link>
                        <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/about' underline="none" px={2.25} py={1.25} fontSize='1rem'>Sobre</Link>
                        <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/auth/login/select-account' underline="none" px={2.25} py={1.25} fontSize='1rem'>Entrar</Link>
                        <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/auth/register/select-account' underline="none" px={2.25} py={1.25} fontSize='1rem'>Cadastrar</Link>
                    </Box>
                </Box>

                <Box display='flex' flexDirection={{xs: 'column', md: 'row'}} justifyContent={{ xs: 'center', md: 'space-between' }} gap={1}>
                    <Box display='flex' justifyContent='center' alignItems='center' flexDirection={{xs: 'column', md: 'row'}}>
                        <Typography mb={{xs: 3, md: 0}} textAlign={{xs: 'center', md: 'initial'}}>Copyright © {moment().format('YYYY')} Qual Remedio ltd.</Typography>
                        <Typography ml={2} textAlign={{xs: 'center', md: 'initial'}}>Todos os direitos reservados.</Typography>
                    </Box>

                    <Stack direction='row' mt={{xs: 4, md: 0}} mx={{xs: 'auto', lg: 'none'}}>
                        <Button component={NavLink} to={''}><BsInstagram size={20} /></Button>
                        <Button component={NavLink} to={''}><BsTwitter size={20} /></Button>
                        <Button component={NavLink} to={''}><BsLinkedin size={20} /></Button>
                        <Button component={NavLink} to={''}><BsGithub size={20} /></Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}