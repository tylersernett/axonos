import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box, Button, useMediaQuery, Backdrop } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { theme } from '../theme';
// import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

interface NavBarProps {
  isTopOfPage: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isTopOfPage }) => {
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

  const navObj = [{ text: "Home", link: '/#' }, { text: "About", link: '/about#about' }, { text: "Services", link: '/procedures#services' }, { text: "Contact & Locations", link: '/contact#contact' }];

  return (
    <Box sx={{ display: 'flex' }}>

      {/* linear-gradient( top color, bottom color )*/}
      {/* <AppBar  style={{ background: 'linear-gradient(rgba(0, 150, 136, 1.0), rgba(0, 150, 136, 0.8))'}}> */}
      <AppBar
        style={{
          maxHeight: '60px',
          background: (isTopOfPage || isSmallScreen) ? "rgba(0, 0, 0, 0.0)" : theme.palette.primary.main,
          // background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
          // background: 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))',
          // background: 'rgba(0, 0, 0, 0.0)',
          boxShadow: 'none',
          zIndex: (isTopOfPage || isSmallScreen) ? '1' : '30000',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            onClick={handleMenuClick}
            size='large'
            sx={{
              mr: 2,
              display: isSmallScreen ? 'flex' : 'none',
              background: (isTopOfPage && isSmallScreen) ? "rgba(0, 0, 0, 0.0)" : theme.palette.primary.main,
              '&:hover': { background: '#793b20', },
              // background: (isTopOfPage && isSmallScreen) ? "rgba(0, 0, 0, 0.0)" : "rgba(173, 84, 47, 0.95)",
              zIndex: '20001'
            }}
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
          <Box id='desktop-nav' sx={{ display: isSmallScreen ? 'none' : 'flex' }}>
            {navObj.map((page) => (
              <NavHashLink smooth key={page.text} to={page.link} tabIndex={-1}>
                <Button
                  variant='contained'
                  onClick={handleMenuClose} //to ensure scroll doesn't get locked if user transitions from small to large window
                  sx={{
                    color: 'white',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                  }}
                >
                  {page.text}
                </Button>
              </NavHashLink>
            ))}
          </Box>

          {/* MOBILE NAV MENU */}
          <Backdrop
            sx={{ backgroundColor: 'rgba(0,0,0,0.05)', zIndex: '40001', }}
            open={Boolean(menuAnchorEl)}
            onClick={handleMenuClose}
          >
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
                  component={NavHashLink}
                  smooth
                  to={page.link}
                  sx={{ color: theme.palette.primary.main, zIndex: '20002' }}
                >
                  {page.text}
                </MenuItem>
              ))}
            </Menu>
          </Backdrop>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
