import { Theme, useTheme } from '@mui/material/styles';
import { Box } from "@mui/material";
import { Outlet } from 'react-router-dom';

import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Unstable_Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../assets/auth.css';

//page
export function Auth() {
    const theme: Theme = useTheme();
    const isLargeScreen: boolean = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <Grid container>
            <Grid lg={6}>
                <Item sx={{
                    backgroundColor: isLargeScreen ? '#303030' : 'none', 
                    minHeight: isLargeScreen ? '100vh' : undefined, 
                    minWidth: isLargeScreen ? '50vw' : undefined,
                }} />
            </Grid>

            <Grid 
                style={{
                    minHeight: !isLargeScreen ? '100vh' : undefined,
                    minWidth: !isLargeScreen ? '100vw' : undefined,
                }} 
                display='flex' 
                justifyContent='center' 
                alignItems='center' 
                lg={6}
            >
               <Item 
                    sx={{
                        width: '31.25rem',
                        backgroundColor: '#E3E3E3',
                    }} 
                    boxShadow={2}
                    borderRadius='0.375rem'
                >
                    <Box p={5}>
                        <Outlet />
                    </Box>
               </Item>
            </Grid>
        </Grid>
    )
}