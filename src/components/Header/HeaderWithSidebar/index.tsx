import { useState, MouseEvent } from 'react'
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { Toolbar, Button, Menu, MenuItem, Box, Link, Typography, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, IconButton, List } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { AppButton } from '../../Button';
import { Logo } from '../../Logo';
/* import { useCurrentUserContext } from "../../../hooks/CurrentUserContext"
import AuthService from '../../../services/Auth'; */
//import { useNavigate } from 'react-router-dom';
import { Add, Inbox, Mail, MenuOpen } from '@mui/icons-material';
import HiMenu from '@mui/icons-material/Menu';
import { AppBarProps } from '../../../types/type';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
        })<AppBarProps>(({ theme }) => ({
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
        }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
            ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
            ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export function AppHeaderWithSideBar() {
    const [open, setOpen] = useState(false);
  //  const navigate = useNavigate();

/*     const currentUser = useCurrentUserContext();

    const handleLogout = async () => {
        const result = await AuthService.logout();
    
        if(result?.status === 200) {
            navigate('/auth/login');
        }
    }
 */
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMenu: boolean = Boolean(anchorEl);

    const handleClickMenu = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const handleCloseMenu = () => setAnchorEl(null);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box display='flex' alignItems='center'>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={!open ? handleDrawerOpen : handleDrawerClose}
                            edge="start"
                        >
                               {!open? <HiMenu scale={24}/> : <MenuOpen scale={24} />}
                        </IconButton>
                        <Box ml={3}>
                            <Link component={NavLink} to='/' underline="none" color='inherit' sx={{display: {xs: 'none', lg: 'block'}}}>
                                <Logo /> 
                            </Link>
                            <Link variant='body2' component={NavLink} to='/' underline="none" color='inherit' sx={{display: {xs: 'block', lg: 'none'}}}>
                                QR
                            </Link>
                        </Box>
                        <Typography ml={12}>NOME</Typography>
                    </Box>

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

                                        <Divider />
                                       
                                    </Menu>
                                </Box>

                                {/* Full Menu */}
                                <Box component='nav' display={{ xs: 'none', md: 'initial' }}>
                                    <AppButton 
                                        sx={{ height: '2.5rem', backgroundColor: '#404040', color: 'inherit', borderRadius: '.625rem', px: 2.25, py: 1.25, 
                                            '&:hover': {
                                             backgroundColor: '#525252'
                                            } 
                                        }}
                                        variant='text'
                                        component={NavLink}
                                        to='/auth/register/select-account'
                                    >
                                        <Add />
                                    <Typography ml='.5rem' typography='body1' fontSize='1.15rem' color='inherit'>Vincular</Typography>
                                </AppButton>
                            <Link variant='body2' sx={{color: 'inherit'}} underline="none" px={2.25} py={1.25} fontSize='1.15rem'>///</Link>                               
                    </Box>
                </Toolbar> 
            </AppBar>
            
            <Drawer variant="permanent" open={open}>
            <DrawerHeader />
            <Divider />
                <Box sx={{ overflowX: 'clip', overflowY: 'auto' }}>
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                                >
                                {index % 2 === 0 ? <Inbox /> : <Mail />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                                >
                                {index % 2 === 0 ? <Inbox /> : <Mail />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                                </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}
