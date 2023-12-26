// import Header from './Header'
// import Navbar from './Navbar'
import { Button } from '@mui/material'
import { HashLink } from 'react-router-hash-link'

const Home = () => {
  return (
    <>
      {/* <div className="landing is-preload"> */}
      <div id="page-wrapper">

        {/* <!-- Main --> */}
        <section id="main" className="container moveup">

          <section className="box special ">
            <header className="major">
              <h2>Welcome to Axonos</h2>
              <p>
                Discover a path to a pain-free life with our expert team of interventional pain management specialists dedicated to serving the Fort Worth community. At Axonos, we understand that living with chronic pain can impact every aspect of your life. That's why our mission is to provide personalized and comprehensive care to help you regain control and rediscover a life without constant discomfort.
              </p>
            </header>
            <span className="image featured">
              <img
                srcSet="/images/drawings-600w.png 600w, /images/drawings-800w.png 800w,  /images/drawings-1200w.png 1200w, /images/drawings-1600w.png 1600w"
                sizes="(max-width: 600px) 600px, (max-width: 800px) 800px,  (max-width: 1200px) 1200px, (min-width: 1201px) 1600px"
                src="/images/drawings.png"
                alt="Drawings of the bones in the foot, hand, and spine"
              />
            </span>
          </section>

          <section className="box special features" >
            <div className="features-row" style={{ marginTop: '4em' }}>
              <section>
                <span className="icon solid major fa-hospital accent2"></span>
                <h3>Expertise You Can Trust</h3>
                <p>
                  Our team consists of highly skilled interventional pain management specialists with years of experience in diagnosing and treating a wide range of pain conditions. We stay at the forefront of medical advancements to ensure you receive the most effective and innovative treatments available.
                </p>
              </section>
              <section>
                <span className="icon solid major fa-heartbeat accent3"></span>
                <h3>Cutting-Edge Treatments</h3>
                <p>
                  Benefit from the latest advancements in interventional pain management. Our clinic offers a range of minimally invasive procedures, injections, and therapies designed to target and alleviate pain at its source, promoting faster recovery and long-term relief.
                </p>
              </section>
            </div>
            <div className="features-row" style={{ marginBottom: '2em' }}>
              <section>
                <span className="icon solid major fa-stethoscope accent4"></span>
                <h3>Comprehensive Approach</h3>
                <p>
                  We believe in addressing the root cause of pain rather than just managing symptoms. Our comprehensive approach involves thorough evaluations, advanced diagnostics, and personalized treatment plans tailored to your unique needs.
                </p>
              </section>
              <section style={{ marginBottom: '3em' }}>
                <span className="icon solid major fa-briefcase-medical accent5" ></span>
                <h3>Patient-Centered Care</h3>
                <p>Your well-being is our top priority. From the moment you walk through our doors, you'll experience a warm and compassionate environment. We take the time to listen, educate, and involve you in decisions about your care, empowering you to take an active role in your pain management journey.
                </p>
              </section>
            </div>
          </section>

          <div className="row" style={{ marginTop: '2em' }} >
            <div className="col-6 col-12-narrower" style={{ display: 'flex', flexGrow: '1' }}>

              <section className="box special"  >
                <span className="image featured">
                  <img
                    srcSet="/images/doctor-headless-600w.png 600w, /images/doctor-headless-800w.png 800w,  /images/doctor-headless-1200w.png 1200w, /images/doctor-headless-1600w.png 1600w"
                    sizes="(max-width: 600px) 600px, (max-width: 800px) 800px,  (max-width: 1200px) 1200px, (min-width: 1201px) 1600px"
                    src="/images/doctor-headless.png"
                    alt="A doctor and patient sit adjacent to one another in a clinic"
                  />
                </span>
                <h3>Contact Us Today</h3>
                <p>
                  Don't let pain control your life any longer. Take the first step toward a pain-free future by scheduling a consultation with Axonos. Our interventional pain management specialists are here to partner with you on your journey to better health and improved quality of life.
                </p>
                <ul className="actions special">
                  <li>
                    {/* <HashLink smooth to={'/contact#contactForm'} style={{ textDecoration: 'none', color: 'white' }} tabIndex={-1}> */}
                    <Button component={HashLink} smooth to={'/contact#contactForm'} variant='outlined' style={{ textTransform: 'none', fontFamily: "Source Sans Pro, sans-serif", marginBottom: '1em' }}>
                      Reach Out
                    </Button>
                    {/* </HashLink> */}
                  </li>
                </ul>
              </section>

            </div>
            <div className="col-6 col-12-narrower" style={{ display: 'flex', flexGrow: '1' }}>

              <section className="box special">
                <span className="image featured">
                  <img
                    srcSet="/images/doctor-point-600w.png 600w, /images/doctor-point-800w.png 800w,  /images/doctor-point-1200w.png 1200w, /images/doctor-point-1600w.png 1600w"
                    sizes="(max-width: 600px) 600px, (max-width: 800px) 800px,  (max-width: 1200px) 1200px, (min-width: 1201px) 1600px"
                    src="/images/doctor-point.png"
                    alt="A doctor points at various medical imagery of a brain and spine"
                  />
                </span>
                <h3>Two Convenient Locations</h3>
                <p>
                  Axonos is centrally located in Fort Worth, making it easy for members of our community to access the quality care they deserve. Our clinics are designed to be a welcoming space where you can receive top-notch medical attention without hassle.
                </p>
                <ul className="actions special" >
                  <li>
                    {/* <HashLink smooth to={'/contact#offices'} style={{ textDecoration: 'none', color: 'white' }} tabIndex={-1}> */}
                    <Button component={HashLink} smooth to={'/contact#offices'} variant='outlined' style={{ textTransform: 'none', fontFamily: "Source Sans Pro, sans-serif", marginBottom: '1em' }}>
                      View Addresses
                    </Button>
                    {/* </HashLink> */}
                  </li>
                </ul>
              </section>

            </div>
          </div>

        </section>

        {/* <!-- CTA --> */}
        {/* <section id="cta">

          <h2>Sign up for our mailing list</h2>
          <p>Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc.</p>

          <form>
            <div className="row gtr-50 gtr-uniform">
              <div className="col-8 col-12-mobilep">
                <input type="email" name="email" id="email" placeholder="Email Address" />
              </div>
              <div className="col-4 col-12-mobilep">
                <input type="submit" value="Sign Up" className="fit" />
              </div>
            </div>
          </form>

        </section> */}



      </div>
      {/* </div> */}
    </>
  )
}

export default Home