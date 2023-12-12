import logoSVG from '../../assets/logo.svg'
import { Box } from '@mui/material'

export function Logo() {
  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Box mr='2'></Box>
      <img src={logoSVG} height='40' alt="" />
    </Box>
  )
}