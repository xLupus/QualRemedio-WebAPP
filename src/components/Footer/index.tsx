import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Logo } from '../Logo'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { blue } from '@mui/material/colors'

export function Footer() {
  return (
    <Box paddingY={6} sx={{ bgcolor: blue[900], color: 'white' }}>
      <Container maxWidth='xl'>
        <Box display='flex' flexWrap='wrap' marginBottom={3} justifyContent={{ xs: 'center', md: 'space-between' }} >
          <Logo />

          <Box component='nav' sx={{ marginLeft: { md: 8 } }}>
            <Button color='inherit' component={NavLink} to=''>Funcionalidades</Button>
            <Button color='inherit' component={NavLink} to=''>Preços</Button>
            <Button color='inherit' component={NavLink} to=''>Entrar</Button>
            <Button color='inherit' component={NavLink} to=''>Cadastrar</Button>
          </Box>
        </Box>

        <Box display='flex' flexWrap='wrap' justifyContent={{ xs: 'center', md: 'space-between' }} gap={1} >
          <Box display='flex' flexWrap='wrap' justifyContent='center' alignItems='center'>
            <Typography>Copyright © 2023 Qual Remedio ltd.</Typography>
            <Typography>Todos os direitos reservados.</Typography>
          </Box>

          <Stack direction='row'>
            <Button component={NavLink} to={''}><BsInstagram size={20} /></Button>
            <Button component={NavLink} to={''}><BsLinkedin size={20} /></Button>
            <Button component={NavLink} to={''}><BsGithub size={20} /></Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}