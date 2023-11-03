import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom'; // If you're using React Router
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import useMediaQuery from '../hooks/useMediaQuery';
import { NavLink } from 'react-router-dom';

const Link = ({ page, selectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow underline underline-offset-2" : ""}
       hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
    // onClick={() => {
    //   setIsMenuOpen(false)
    // }}
    >
      {page}
    </AnchorLink>
  )
}

const NavBar = () => {
  // const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const navPages = ["Home", "About", "Diagnoses & Symptoms", "Procedures", "Contact"];
  const navObj = [{ text: "Home", link: '/' }, { text: "About", link: '/about' }, { text: "Diagnoses & Symptoms", link: '/diagnoses' }, { text: "Procedures", link: '/procedures' }, { text: "Contact", link: '/contact' }];
  let selectedPage = null;

  return (
    <Box sx={{ display: 'flex' }}>

      <AppBar >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleMenuClick}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            AXONOS
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navObj.map((page) => (
              // <Link key={page} page={page} selectedPage={selectedPage} />
              <NavLink key={page.text} to={page.link} style={{ textDecoration: 'none', color: 'white' }} tabIndex={-1}>
                <Button
                  onClick={handleMenuClose} //to ensure scroll doesn't get locked if user transitions from small to large window
                  sx={{ my: 2, color: 'white', display: 'block', backgroundColor: 'transparent' }}
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
                <NavLink to={page.link}  tabIndex={-1}>
                  {page.text}
                </NavLink>
                {/* <Link page={page} selectedPage={selectedPage} /> */}
              </MenuItem>
            ))}
            {/* <MenuItem onClick={handleMenuClose}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/about">About</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/diagnoses">Diagnoses & Symptoms</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/procedures">Procedures</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/contact">Contact</Link>
            </MenuItem> */}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
