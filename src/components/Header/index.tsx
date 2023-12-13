import { useState, MouseEvent } from 'react'
import { AppBar, Button, Menu, MenuItem, Box, Link, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { AppButton } from '../Button';
import { Logo } from '../Logo';
import { useCurrentUserContext } from "../../hooks/CurrentUserContext"
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/Auth';

import HiMenu from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';

export function AppHeader() {
    const navigate = useNavigate();
    const currentUser = useCurrentUserContext();

    const handleLogout = async () => {
        const result = await AuthService.logout();
    
        if(result?.status === 200) {
            navigate('/auth/login/select-account');
        }
    }

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMenu: boolean = Boolean(anchorEl);

    const handleClickMenu = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const handleCloseMenu = () => setAnchorEl(null);

    return (
        <AppBar position="fixed" sx={{backgroundColor: '#424242'}}>
            <Container maxWidth='xl'>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                    <Link component={NavLink} to='/' underline="none" color='inherit'>
                        <Logo />
                    </Link>
                       
                    {/* Mobile Menu */}
                        <Box display={{ md: 'none' }}>
                            <Button id="mobile-menu-button" color="inherit" onClick={handleClickMenu}>
                                <HiMenu scale={24} />
                            </Button>

                            <Menu id="mobile-menu" anchorEl={anchorEl} open={openMenu} onClose={() => handleCloseMenu()}>
                                <MenuItem onClick={handleCloseMenu} key='menu-link1'>
                                    <Link sx={{color: 'inherit'}} component={NavLink} to='/functionalities' underline="none" px={2} fontSize='1.25rem'>Funcionalidades</Link>
                                </MenuItem>
                                        
                                <MenuItem onClick={handleCloseMenu} key='menu-link2'>
                                            <Link sx={{color: 'inherit'}} component={NavLink} to='/prices' underline="none" px={2} fontSize='1.25rem'>Preços</Link>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMenu} key='menu-link3'>
                                            <Link sx={{color: 'inherit'}} component={NavLink} to='/about' underline="none" px={2} fontSize='1.25rem'>Sobre</Link>
                                        </MenuItem>

                                        <Divider />
                                        
                                        {
                                            currentUser 
                                            ? 
                                            <>
                                                <MenuItem onClick={handleCloseMenu} key='menu-link1'>
                                                    <Link sx={{color: 'inherit'}} component={NavLink} to='/dashboard' underline="none" px={2} fontSize='1.25rem'>Dashboard</Link>
                                                </MenuItem>

                                                <MenuItem onClick={handleLogout} key='menu-link3'>
                                                    <Link sx={{color: 'inherit'}} component={NavLink} to='/auth/login/select-account' underline="none" px={2} fontSize='1.25rem'>Logout</Link>
                                                </MenuItem>
                                            </>

                                            :
                                            [   
                                                <MenuItem onClick={handleCloseMenu} key='menu-link3'>
                                                    <Link sx={{color: 'inherit'}} component={NavLink} to='/auth/login/select-account' underline="none" px={2} fontSize='1.25rem'>Entrar</Link>
                                                </MenuItem>,

                                                <MenuItem onClick={handleCloseMenu} key='menu-link4'>
                                                    <Link sx={{color: 'inherit'}} component={NavLink} to='/auth/register/select-account'  underline="none" pl={2} fontSize='1.25rem'>Cadastrar</Link>
                                                </MenuItem>
                                            ]
                                    }  
                                </Menu>
                            </Box>

                            {/* Full Menu */}
                            <Box component='nav' display={{ xs: 'none', md: 'flex'}} alignItems={{xs: 'none', md: 'center'}}>
                               {/*  <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/functionalities' underline="none" px={2.25} py={1.25} fontSize='1.15rem'>Funcionalidades</Link> */}
                                <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/' underline="none" px={2.25} py={1.25} fontSize='1.15rem'>Home</Link>
                                <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/prices' underline="none" px={2.25} py={1.25} fontSize='1.15rem'>Preços</Link>
                             {/* <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/about' underline="none" px={2.25} py={1.25} fontSize='1.15rem'>Sobre</Link> */}
                                {
                                    currentUser 
                                    ? 
                                        <>
                                            <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/dashboard' underline="none" px={2.25} py={1.25} fontSize='1.15rem'>Dashboard</Link>
                                            <AppButton 
                                                sx={{ height: '2.5rem', backgroundColor: '#f7f7f7', fontSize:'1.15rem', color: '#212121', borderRadius: '.625rem', px: 2.25, py: 1.25, 
                                                    '&:hover': {
                                                        backgroundColor: '#ededed'
                                                    } 
                                                }}
                                                variant='text'
                                                onClick={handleLogout}
                                            >
                                            Logout
                                        </AppButton>
                                        </>
                                    :
                                    <>
                                        <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/auth/login/select-account' underline="none" px={2.25} py={1.25} fontSize='1.15rem'>Entrar</Link>
                                        <AppButton 
                                            sx={{ height: '2.5rem', backgroundColor: '#f7f7f7', fontSize:'1.15rem', color: '#212121', borderRadius: '.625rem', px: 2.25, py: 1.25, ml: 2,
                                                '&:hover': {
                                                backgroundColor: '#ededed'
                                            } 
                                        }}
                                        variant='text'
                                        component={NavLink}
                                        to='/auth/register/select-account'
                                    >
                                        Cadastrar
                                    </AppButton>
                            </>
                        }
                    </Box>
                </Toolbar> 
            </Container>
        </AppBar>
    );
}