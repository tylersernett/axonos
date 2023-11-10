import { Box, Button, Typography, } from "@mui/material"
import { NavLink } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
  return (
    <div className="landing is-preload">

      <section id="banner">
        {/* <h2>Axonos</h2> */}
        <Typography variant='h1' color='white'>Axonos</Typography>
        <p>Spinal specialists serving the Fort Worth community</p>
        <Box >
          <HashLink smooth to={'/contact#contactForm'} style={{ textDecoration: 'none', color: 'white' }} tabIndex={-1}>
            <Button variant="contained" sx={{ '@media (max-width: 415px)': { width: '100%' }}}>Book Appointment</Button>
          </HashLink>
          <HashLink smooth to={'/about#about'} tabIndex={-1}>
            <Button variant="outlined" sx={{ color: 'white', borderColor: '#e5e5e5', '@media (max-width: 415px)': { width: '100%' } }}>
              Learn More
            </Button>
          </HashLink>
        </Box>
      </section>
    </div>
  )
}

export default Banner