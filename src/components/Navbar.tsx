import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box, Button, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { theme } from '../theme';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const isSmallScreen = useMediaQuery('(max-width:736px)');

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (menuAnchorEl) {
      htmlElement.style.overflow = 'hidden';
    } else {
      htmlElement.style.overflow = 'visible';
    }

    // Cleanup function to remove the style when the component is unmounted
    return () => {
      htmlElement.style.overflow = 'visible';
    };
  }, [menuAnchorEl]);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const navObj = [{ text: "Home", link: '/' }, { text: "About", link: '/about' }, { text: "Services", link: '/procedures' }, { text: "Contact & Locations", link: '/contact' }];

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
            fontFamily={'Galvji'}
            fontWeight={'bold'}
            // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            sx={{ letterSpacing: '0.2em', flexGrow: 1, display: isSmallScreen ? 'none' : 'block' }}
          >
            AXONOS
          </Typography>

          {/* DESKTOP NAVBAR */}
          <Box sx={{ display: isSmallScreen ? 'none' : 'flex' }}>
            {navObj.map((page) => (
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

          {/* MOBILE NAV MENU */}
          <Menu
            id='mobile-nav'
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
            sx={{ zIndex: '20001' }}
          >
            {navObj.map((page) => (
              <MenuItem
                key={page.text}
                onClick={handleMenuClose}
                component={NavLink}
                to={page.link}
                sx={{ color: theme.palette.primary.main, zIndex: '20002' }}
              >
                {page.text}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
