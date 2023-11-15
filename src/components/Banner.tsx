import { Box, Button, Typography, } from "@mui/material"
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
  const axStyle: React.CSSProperties = {
    color: "white",
    // fontWeight: 'bold',
    fontFamily:'Galvji' ,
    fontSize: '1em',
    letterSpacing: "0.5em",
  };
  return (
    <div className="landing is-preload">

      <section id="banner">
        {/* <h2>Axonos</h2> */}
        <Typography variant='h1' color='white' fontFamily={'Galvji'} fontWeight={'bold'} sx={{letterSpacing:'0.2em'}} >AXONOS</Typography>
        <p style={axStyle}>PAIN MANAGEMENT</p>
        {/* <Typography  sx={axStyle}>PAIN MANAGEMENT</Typography> */}
        <p>Interventional pain management specialists serving the Fort Worth community</p>
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