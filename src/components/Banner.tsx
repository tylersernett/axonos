import { Box, Button, Typography, } from "@mui/material"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
  const subtitleStyle: React.CSSProperties = {
    color: "white",
    fontFamily: 'Galvji',
    fontSize: '1em',
    letterSpacing: "0.5em",
  };
  const h1Style: React.CSSProperties = {
    color: "white",
    fontFamily: 'Galvji',
    letterSpacing: "0.2em",
    fontWeight: 'bold',
  };

  return (
    <div className="landing is-preload">

      <section id="banner">
        <Typography variant='h1' sx={{ ...h1Style }} ><Link to={'/'}>AXONOS</Link></Typography>
        <p style={subtitleStyle}>PAIN MANAGEMENT</p>
        <p style={{ marginLeft: '1em', marginRight: '1em' }}>Interventional pain management specialists serving the Fort Worth community</p>
        <Box >
          <HashLink smooth to={'/contact#contactForm'} style={{ textDecoration: 'none', color: 'white' }} tabIndex={-1}>
            <Button variant="contained" sx={{ '@media (max-width: 415px)': { width: '100%' } }}>Book Appointment</Button>
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