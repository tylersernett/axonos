// import { Typography } from '@mui/material'
import p1 from '../images/spinefish.png'
import headshot from '../images/headshot.jpg'
import { Box } from '@mui/material'

const About = () => {
  return (
    <div id="page-wrapper">
      <section id="main" className="container moveup">

        {/* ??? delete "special" classname? */}
        <section id="main" className="box special">
          {/* <section id="main" className="container"> */}
          <header>
            <h2 id='about'>About</h2>
            <p>Read more about our clinic and expertise</p>
          </header>
          {/* <div className="box"> */}
          <div className="box" >
            <span className="image featured">
              {/* <img src={p1} alt="" style={{ maxHeight: '290px', overflow: 'hidden'  }} /> */}
              {/* <div style={{ overflow: 'hidden' }}> */}
              <img src={p1} alt="" style={{ filter: 'grayscale(0%)' }} />
              {/* </div> */}
            </span>
            <h3 style={{ marginBottom: '1.5em' }}>Our Physician</h3>
            <Box display={'flex'} gap={'1em'} className='contact-flex'>

              <div style={{ flex: '1 1 50%', }}>
                <div id='physician-text' style={{ textAlign: 'left' }}>
                  <p>
                    Riley Johnson, DO, is a fellowship-trained interventional pain management physician.
                  </p>
                  <p>
                    A Texas native, he attended Churchill High School in San Antonio. He earned an undergraduate degree in Civil Engineering at the University of Texas at Austin. He went on to study medicine at the University of North Texas Health Science Center in Fort Worth, where he earned a Master's Degree and his Doctorate.
                  </p>
                  <p>
                    He completed his Physical Medicine and Rehabilitation residency training at Baylor University Medical Center in Dallas, Texas, where he was named outstanding resident of the year in his second year of training.
                  </p>
                  <p>
                    He went on to complete a fellowship in Interventional Pain Management at Virginia Commonwealth University in Richmond, Virginia.
                  </p>
                  <p>
                    Dr. Johnson has interests in neuromodulation and regenerative medicine. He enjoys spending time with his wife and daughter, weight lifting, playing blues guitar, and enjoying live music.
                  </p>
                </div>
              </div>

              <div style={{ flex: '1 1 50%',}}>
                <img src={headshot} alt="" style={{ filter: 'grayscale(0%)', width: '100%', transform: 'scaleX(-1)' }} />
              </div>

            </Box>

            {/* <div className="row">
              <div className="row-6 row-12-mobilep">
                <h3>And now a subheading</h3>
                <p>Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae lorem ipsum adipiscing ac. Vivamus ornare laoreet odio vis praesent.</p>
              </div>
              <div className="row-6 row-12-mobilep">
                <h3>And another subheading</h3>
                <p>Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae lorem ipsum adipiscing ac. Vivamus ornare laoreet odio vis praesent.</p>
              </div>
            </div> */}
          </div>
        </section>
      </section>
    </div>
  )
}

export default About