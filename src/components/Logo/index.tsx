import iconBranch from '../../assets/icon_branch.svg'
import { Box, Typography } from '@mui/material'

export function Logo() {
  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <img src={iconBranch} alt="" />
      <Typography marginLeft={2}>Qual Remedio?</Typography>
    </Box>
  )
}