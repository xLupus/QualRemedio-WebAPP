import { Box } from "@mui/material";
import { AppHeaderWithSideBar } from "../components/Header/HeaderWithSidebar";
import { Outlet } from "react-router-dom";

export function App() {
    return (
        <Box display='flex'>
            <AppHeaderWithSideBar />
            <Box component="main" sx={{ flexGrow: 1, py: 3, px: 15 }} mt={{xs: '6rem', sm: '8rem'}} mb='2rem'>
                <Outlet />
            </Box>
        </Box>
    )
}