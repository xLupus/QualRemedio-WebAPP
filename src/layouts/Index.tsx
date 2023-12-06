import { Box } from "@mui/material";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { AppHeader } from "../components/Header";
import { AppFooter } from "../components/Footer";

export function Index() {
    return (
        <Box display='flex' flexDirection='column' height='100vh'>
            <AppHeader />

                <Box component='main' mt={{xs: '3.5rem', sm: '4rem'}}>
                    <Outlet />
                </Box>

            <AppFooter />
            
            <ScrollRestoration />
        </Box>
    )
}