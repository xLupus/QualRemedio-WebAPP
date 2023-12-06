import { Box } from "@mui/material";
import { AppHeaderWithSideBar } from "../components/Header/HeaderWithSidebar";

export function App() {
    return (
        <Box display='flex'>
            <AppHeaderWithSideBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }} mt='4rem'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur esse porro cum maxime atque, sapxime atque, sapxime atque, sapxime atque, sapiente perspiciatis, alias ea amet possimus recusandae, accusamus voluptatem sed vel consequuntur. Consequatur possimus ipsa cum? 
                Tenetur esse porro cum maxime atque, sapxime atque, sapximeTenetur esse porro cum maxime atque, sapxime atque, sapximeTenetur esse porro cum maxime atque, sapxime atque, sapximeTenetur esse porro cum maxime atque, sapxime atque, sapxime
            </Box>
        </Box>
    )
}