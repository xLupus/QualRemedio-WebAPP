import logoDarSVG from '../../assets/logo_dark.svg'
import { Box } from '@mui/material'

export function LogoDark() {
  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Box mr='2'></Box>
      <img src={logoDarSVG} height='40' alt="" />
    </Box>
  )
}