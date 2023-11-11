// import Header from './Header'
// import Navbar from './Navbar'
import p1 from '../images/bigspinepartial.png'
import p2 from '../images/doctor-headless.png'
import p3 from '../images/doctor-point.png'
import { Button } from '@mui/material'

const Home = () => {
  return (
    <>
      {/* <div className="landing is-preload"> */}
      <div id="page-wrapper">

        {/* <!-- Main --> */}
        <section id="main" className="container moveup">

          <section className="box special ">
            <header className="major">
              <h2>Integer volutpat ante et accumsan</h2>
              <p>Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc ornare</p>
            </header>
            <span className="image featured"><img src={p1} alt="" style={{ filter: 'grayscale(0%)', transform: 'scaleX(-1)' }} /></span>
          </section>

          <section className="box special features" >
            <div className="features-row" style={{ marginTop: '4em' }}>
              <section>
                <span className="icon solid major fa-hospital accent2"></span>
                <h3>Magna etiam</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
              </section>
              <section>
                <span className="icon solid major fa-syringe accent3"></span>
                <h3>Ipsum dolor</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
              </section>
            </div>
            <div className="features-row" style={{ marginBottom: '2em' }}>
              <section>
                <span className="icon solid major fa-stethoscope accent4"></span>
                <h3>Sed feugiat</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
              </section>
              <section style={{ marginBottom: '3em' }}>
                <span className="icon solid major fa-wheelchair accent5" ></span>
                <h3>Enim phasellus</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
              </section>
            </div>
          </section>

          <div className="row" style={{ marginTop: '2em' }} >
            <div className="col-6 col-12-narrower" >

              <section className="box special"  >
                <span className="image featured"><img src={p2} alt="" /></span>
                <h3>Sed lorem adipiscing</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
                <ul className="actions special">
                  <li><Button variant='outlined' style={{ textTransform: 'none', fontFamily: "Source Sans Pro, sans-serif", marginBottom: '1em' }}>Learn More</Button></li>
                </ul>
              </section>

            </div>
            <div className="col-6 col-12-narrower" >

              <section className="box special">
                <span className="image featured"><img src={p3} alt="" /></span>
                <h3>Accumsan integer</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
                <ul className="actions special" >
                  <li><Button variant='outlined' style={{ textTransform: 'none', fontFamily: "Source Sans Pro, sans-serif", marginBottom: '1em' }}>Learn More</Button></li>
                </ul>
              </section>

            </div>
          </div>

        </section>

        {/* <!-- CTA --> */}
        <section id="cta">

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

        </section>



      </div>
      {/* </div> */}
    </>
  )
}

export default Home