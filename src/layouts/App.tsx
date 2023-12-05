import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Box } from "@mui/material";

export function App() {
  return (
    <Box display='flex' flexDirection='column' height='100vh'>
      <Header />

      <Box sx={{flexGrow: 1}} component='main' mt={{xs: '3.5rem', sm: '4rem'}}>
        <Outlet />
      </Box>

      <Footer />

      <ScrollRestoration />
    </Box>
  )
}