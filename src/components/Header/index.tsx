import { AppBar, Container, Toolbar, Box, Button, Menu, MenuItem } from "@mui/material"
import { NavLink } from "react-router-dom"
import { useState, MouseEvent } from 'react'
import { Logo } from "../Logo"
import { HiMenu } from 'react-icons/hi'
import { useAuthContext } from "../../hooks/authContext"
import AuthService from '../../services/Auth/Login';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {

    const result = await AuthService.logout();
  
      if(result?.status === 200) {
        navigate('/auth/login');
      }
  }

  const currentUser = useAuthContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClickMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='sticky'>
      <Container maxWidth='xl'>
        <Toolbar>
          <NavLink to='/'>
            <Logo />
          </NavLink>

          <Box display='flex' flexGrow={1}></Box>

          {/* Mobile Menu */}
          <Box display={{ md: 'none' }}>
            <Button id="mobile-menu-button" color="inherit" onClick={handleClickMenu}>
              <HiMenu size={24} />
            </Button>

            <Menu id="mobile-menu" anchorEl={anchorEl} open={open} onClose={() => handleCloseMenu()}>
              <MenuItem onClick={handleCloseMenu}>
                <NavLink to='/funcionalidades'>Funcionalidades</NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                  <NavLink to='/precos'>Preços</NavLink>
              </MenuItem>
              {
                currentUser ? 
                  <>
                    <MenuItem onClick={handleLogout}>
                      <NavLink to='/auth/select-account'>Logout</NavLink>
                    </MenuItem>
                  </>
                  :
                  <>
                    <MenuItem onClick={handleCloseMenu}>
                      <NavLink to='/auth/login/select-account'>Entrar</NavLink>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMenu}>
                      <NavLink to=''>Cadastrar</NavLink>
                    </MenuItem>
                  </>
                }  
            </Menu>
          </Box>

          {/* Full Menu */}
          <Box component='nav' display={{ xs: 'none', md: 'initial' }}>
            <Button color='inherit' component={NavLink} to='/funcionalidades'>Funcionalidades</Button>
            <Button color='inherit' component={NavLink} to='/precos'>Preços</Button>
            {
                currentUser ? 
                  <>
                    <Button color='inherit' onClick={handleLogout}>Logout</Button>
                  </>
                  :
                  <>
                    <Button color='inherit' component={NavLink} to='/auth/login/select-account'>Entrar</Button>
                    <Button color='inherit' component={NavLink} to=''>Cadastrar</Button>
                  </>
              }  
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}