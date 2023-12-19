import { Box } from '@mui/material'

const About = () => {
  return (
    <div id="page-wrapper">
      <section id="main" className="container moveup">

        <section  className="box special">
          <header className='major'>
            <h2 id='about' className='hashtitle'>About</h2>
            <p>Read more about our clinic and expertise</p>
          </header>
            <span className="image featured">
              <img
                srcSet="../src/images/spinefish-600w.png 600w, ../src/images/spinefish-800w.png 800w,  ../src/images/spinefish-1200w.png 1200w, ../src/images/spinefish-1600w.png 1600w"
                sizes="(max-width: 600px) 600px, (max-width: 800px) 800px,  (max-width: 1200px) 1200px, (min-width: 1201px) 1600px"
                src="../src/images/spinefish.png"
                alt="A white and yellow medical model of the sacral region of the spine sits on a wooden surface"
              />
            </span>
            <div className="box" >

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
                    He completed his Physical Medicine and Rehabilitation residency training at Baylor University Medical Center in Dallas, Texas, where he was named outstanding resident of the year in his second year of training. Dr. Johnson also served as chief resident at Baylor during his fourth year of residency.
                  </p>
                  <p>
                    He went on to complete a fellowship in Interventional Pain Management at Virginia Commonwealth University in Richmond, Virginia.
                  </p>
                  <p>
                    Dr. Johnson serves as medical director at the Parkinson's Mind Body Institute (MIND), a non-profit serving patients with Parkinson's Disease. To learn more about the MIND program <a href='https://www.balancetherapytoday.com/mindandbody/'>click here</a>.
                  </p>
                  <p>
                    Dr. Johnson has interests in neuromodulation and regenerative medicine. He enjoys spending time with his wife and daughter, weight lifting, playing blues guitar, and enjoying live music.
                  </p>
                </div>
              </div>

              <div style={{ flex: '1 1 50%', }}>
                <img
                  srcSet="../src/images/riley-portrait-480w.png 480w, ../src/images/riley-portrait-600w.png 600w, ../src/images/riley-portrait-736w.png 736w,  ../src/images/riley-portrait.png 911w"
                  sizes="(max-width: 480px) 480px, (max-width: 600px) 600px, (max-width: 736px) 736px, (min-width: 737px) 911px"
                  src="../src/images/riley-portrait.png"
                  alt="A portrait of Dr. Johnson smiling while wearing a navy blue suit in front of the Ft. Worth skyline"
                  style={{  width: '100%', borderRadius: '6px' }}
                />
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