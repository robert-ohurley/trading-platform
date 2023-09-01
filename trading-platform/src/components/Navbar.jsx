import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToggleForSale = () => {
    setShowForSale(prevState => { return !prevState})
  }
  return (
    <AppBar position="sticky" sx={{backgroundColor: "black", zIndex: 10 }}>
      <Container maxWidth="2xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/ForSale"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CRYPTOBROTHA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <NavLink to="/ForSale" style={({ isActive }) => ({ color: isActive ? '#EFBAFF' : 'black' })}>
                  <MenuItem key={"For Sale"} >
                    <Typography textAlign="center">{"For Sale"}</Typography>
                  </MenuItem>
                </NavLink>
                <NavLink to="/TransactionHistory" style={({ isActive }) => ({ color: isActive ? '#efbaff' : 'black' })}>
                  <MenuItem key={"Transactions"}>
                    <Typography textAlign="center">{"Transactions"}</Typography>
                  </MenuItem>
                </NavLink>
                 <NavLink to="/MyProfile" style={({ isActive }) => ({ color: isActive ? '#EFBAFFs' : 'black' })}>
                  <MenuItem key={"MyProfile"}>
                    <Typography textAlign="center">{"My Profile"}</Typography>
                  </MenuItem>
                </NavLink>           
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CRYPTOBROTHA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <NavLink to="/ForSale" style={({ isActive }) => ({ backgroundColor: isActive ? '#c477c8' : 'black' })}>
                <Button
                  key={"For Sale"}
                  onClick={() => setShowForSale(prevState => !prevState)}
                  sx={{ my: 2, color: 'white', }}
                >
                  {"For Sale"}
                </Button>
              </NavLink>
              <NavLink to="/TransactionHistory" style={({ isActive }) => ({ backgroundColor: isActive ? '#c477c8' : 'black' })}>
                <Button
                  key={"Transactions"}
                  onClick={() => setShowTransactions(prevState => !prevState)}
                  sx={{ my: 2, color: 'white', }}
                  >
                  {"Transactions"}
                </Button>
              </NavLink>
               <NavLink to="/MyProfile" style={({ isActive }) => ({ backgroundColor: isActive ? '#c477c8' : 'black' })}>
                <Button
                  key={"MyProfile"}
                  onClick={() => setShowTransactions(prevState => !prevState)}
                  sx={{ my: 2, color: 'white', }}
                  >
                  {"My Profile"}
                </Button>
              </NavLink>        
             </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}