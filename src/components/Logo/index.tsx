import logoSVG from '../../assets/logo.svg'
import { Box, Typography } from '@mui/material'

export function Logo() {
  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <img src={logoSVG} height='60' alt="" />

      <Typography sx={{ color: 'black' }} >HealthSync</Typography>
    </Box>
  )
}