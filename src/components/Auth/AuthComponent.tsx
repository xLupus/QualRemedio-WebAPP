import { Theme, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Unstable_Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Outlet } from 'react-router-dom';

export function Auth() {
    const theme: Theme = useTheme();
    const isLargeScreen: boolean = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <Grid container>
            <Grid lg={6}>
                <Item style={{
                    backgroundColor: isLargeScreen ? '#303030' : 'none', 
                    minHeight: isLargeScreen ? '100vh' : undefined, 
                    minWidth: isLargeScreen ? '50vw' : undefined
                }} />
            </Grid>

            <Grid 
                style={{
                    minHeight: !isLargeScreen ? '100vh' : undefined,
                    minWidth: !isLargeScreen ? '100vw' : undefined
                }} 
                display='flex' 
                justifyContent='center' 
                alignItems='center' 
                lg={6}
            >
               <Outlet />
            </Grid>
        </Grid>
    )
}