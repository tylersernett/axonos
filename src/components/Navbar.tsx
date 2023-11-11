import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box, Button, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom'; // If you're using React Router
// import useMediaQuery from '../hooks/useMediaQuery';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  // const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  // const navObj = [{ text: "Home", link: '/' }, { text: "About", link: '/about' }, { text: "Diagnoses & Symptoms", link: '/diagnoses' }, { text: "Procedures", link: '/procedures' }, { text: "Contact", link: '/contact' }];
  const navObj = [{ text: "Home", link: '/' }, { text: "About", link: '/about' }, { text: "Diagnoses & Procedures", link: '/procedures' }, { text: "Contact", link: '/contact' }];
  // let selectedPage = null;

  const isSmallScreen = useMediaQuery('(max-width:736px)');

  return (
    <Box sx={{ display: 'flex' }}>

      {/* linear-gradient( top color, bottom color )*/}
      {/* <AppBar  style={{ background: 'linear-gradient(rgba(0, 150, 136, 1.0), rgba(0, 150, 136, 0.8))'}}> */}
      <AppBar position='absolute'
        style={{
          maxHeight: '60px',
          // background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
          // background: 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))',
          background: 'rgba(0, 0, 0, 0.0)',
          boxShadow: 'none',
        }}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleMenuClick}
            size='large'
            sx={{ mr: 2, display: isSmallScreen ? 'flex' : 'none' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            sx={{ flexGrow: 1, display: isSmallScreen ? 'none' : 'block' }}
          >
            AXONOS
          </Typography>
          <Box sx={{ display: isSmallScreen ? 'none' : 'flex' }}>
            {navObj.map((page) => (
              // <Link key={page} page={page} selectedPage={selectedPage} />
              <NavLink key={page.text} to={page.link} style={{ textDecoration: 'none', color: 'white' }} tabIndex={-1}>
                <Button
                  variant='contained'
                  onClick={handleMenuClose} //to ensure scroll doesn't get locked if user transitions from small to large window
                  sx={{ color: 'white', backgroundColor: 'transparent', boxShadow: 'none' }}
                >
                  {page.text}
                </Button>
              </NavLink>
            ))}
          </Box>

          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            {navObj.map((page) => (
              <MenuItem key={page.text} onClick={handleMenuClose}>
                <NavLink to={page.link} tabIndex={-1}>
                  {page.text}
                </NavLink>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
