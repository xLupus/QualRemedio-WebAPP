import { Outlet } from "react-router-dom"
import { ProfileInfo } from "../components/ProfileInfo"
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Unstable_Grid2';

export const ProfileCard = () => {
    return (
        <Grid container  columnSpacing={12}>
            <Grid lg={8}>
                <Item>
                    <Outlet />
                </Item>
            </Grid>

            <Grid lg={4}>
                <Item>
                    <ProfileInfo />
                </Item>
            </Grid>
        </Grid>
    )
}