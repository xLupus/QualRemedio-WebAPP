import { AppBar, Container, Toolbar, Box, Button, Menu, MenuItem, Link, Divider } from "@mui/material"
import { NavLink } from "react-router-dom"
import { useState, MouseEvent } from 'react'
import { Logo } from "../Logo"
import { HiMenu } from 'react-icons/hi'
import { useAuthContext } from "../../hooks/AuthContext"
import AuthService from '../../services/Auth/Login';
import { useNavigate } from 'react-router-dom';
import { AppButton } from "../Button"

export function Header() {
    const navigate = useNavigate();
    const currentUser = useAuthContext();

    const handleLogout = async () => {
        const result = await AuthService.logout();
    
        if(result?.status === 200) {
            navigate('/auth/login');
        }
    }


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open: boolean = Boolean(anchorEl);

    const handleClickMenu = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const handleCloseMenu = () => setAnchorEl(null);

    return (
        <AppBar position='fixed'>
            <Container>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Link component={NavLink} to='/' underline="none" color='inherit'>
                        <Logo />
                    </Link>

                    {/* Mobile Menu */}
                    <Box display={{ md: 'none' }}>
                        <Button id="mobile-menu-button" color="inherit" onClick={handleClickMenu}>
                            <HiMenu size={24} />
                        </Button>

                        <Menu id="mobile-menu" anchorEl={anchorEl} open={open} onClose={() => handleCloseMenu()}>
                            <MenuItem onClick={handleCloseMenu} key='menu-link1'>
                                <Link sx={{color: 'inherit'}} component={NavLink} to='/functionalities' underline="none" px={2} fontSize='1.25rem'>Funcionalidades</Link>
                            </MenuItem>
                            
                            <MenuItem onClick={handleCloseMenu} key='menu-link2'>
                                <Link sx={{color: 'inherit'}} component={NavLink} to='/prices' underline="none" px={2} fontSize='1.25rem'>Preços</Link>
                            </MenuItem>

                            <Divider />
                            
                            {
                                currentUser ? 
                                    <MenuItem onClick={handleLogout} key='menu-link3'>
                                        <Link sx={{color: 'inherit'}} component={NavLink} to='/auth/login/select-account' underline="none" px={2} fontSize='1.25rem'>Logout</Link>
                                    </MenuItem>
                          
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
                    <Box component='nav' display={{ xs: 'none', md: 'initial' }}>
                        <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/functionalities' underline="none" px={2.25} py={1.25} fontSize='1.15rem'>Funcionalidades</Link>
                        <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/prices'  underline="none" px={2.25} py={1.25} fontSize='1.15rem'>Preços</Link>
                        {
                            currentUser ? 
                            <>
                                <Link variant='body2' sx={{color: 'inherit'}} onClick={handleLogout}>Logout</Link>
                            </>
                            :
                            <>
                                <Link variant='body2' sx={{color: 'inherit'}} component={NavLink} to='/auth/login/select-account' underline="none" px={2.25} py={1.25} fontSize='1.15rem'>Entrar</Link>
                                <AppButton 
                                    sx={{ height: '2.5rem', backgroundColor: '#525252', fontSize:'1.15rem', color: 'inherit', borderRadius: '.625rem', px: 2.25, py: 1.25, 
                                        '&:hover': {
                                            backgroundColor: '#555555'
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
    )
}