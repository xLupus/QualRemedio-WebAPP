import { Box } from "@mui/material";
import { AppMiniDrawer } from "../components/Sidenav";
import { Outlet } from 'react-router-dom';

export function Profile() {
  return (
    <Box>

      <Box sx={{ flexGrow: 1}}>
        <Outlet />
      </Box>
    </Box>
  )
}