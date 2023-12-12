import { Outlet } from "react-router-dom"
import { ProfileInfo } from "../components/ProfileInfo"
import { Stack } from "@mui/material"

export const ProfileCard = () => {

  return (
    <Stack direction={'row'} justifyContent={'space-between'} spacing={8} useFlexGap maxWidth={'xl'} marginX={'auto'}>
      <Outlet />

      <ProfileInfo />
    </Stack>
  )
}