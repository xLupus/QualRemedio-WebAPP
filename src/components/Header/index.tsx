import { AppBar, Container, Toolbar, Box, Button, Menu, MenuItem } from "@mui/material"
import { NavLink } from "react-router-dom"
import { useState, MouseEvent } from 'react'
import { Logo } from "../Logo"
import { HiMenu } from 'react-icons/hi'

export function Header() {
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
                <NavLink to='/precos'>Planos</NavLink>
              </MenuItem>

              <MenuItem onClick={handleCloseMenu}>
                <NavLink to=''>Entrar</NavLink>
              </MenuItem>

              <MenuItem onClick={handleCloseMenu}>
                <NavLink to=''>Cadastrar</NavLink>
              </MenuItem>
            </Menu>
          </Box>

          {/* Full Menu */}
          <Box component='nav' display={{ xs: 'none', md: 'initial' }}>
            <Button color='inherit' component={NavLink} to='/precos'>Planos</Button>
            <Button color='inherit' component={NavLink} to=''>Entrar</Button>
            <Button color='inherit' component={NavLink} to=''>Cadastrar</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}