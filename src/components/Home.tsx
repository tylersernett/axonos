import React from 'react'
// import Header from './Header'
// import Navbar from './Navbar'
import p1 from '../images/pic01.jpg'
import p2 from '../images/pic02.jpg'
import p3 from '../images/pic03.jpg'
// import banner from '../images/banner2.jpg'

const Home = () => {
  return (
    <div className="landing is-preload">
      <div id="page-wrapper">

        {/* <!-- Banner --> */}
        <section id="banner">
          <h2>Axonos</h2>
          <p>Spinal specialists serving the Dallas community</p>
          <ul className="actions special">
            <li><a href="#" className="button primary">Book Appointment</a></li>
            <li><a href="#" className="button">Learn More</a></li>
          </ul>
        </section>

        {/* <!-- Main --> */}
        <section id="main" className="container">

          <section className="box special">
            <header className="major">
              <h2>Integer volutpat ante et accumsan
                <br />
                commophasellus sed aliquam feugiat lorem aliquet </h2>
              <p>Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc ornare<br />
                adipiscing nunc adipiscing. Condimentum turpis massa.</p>
            </header>
            <span className="image featured"><img src={p1} alt="" /></span>
          </section>

          <section className="box special features">
            <div className="features-row">
              <section>
                <span className="icon solid major fa-bolt accent2"></span>
                <h3>Magna etiam</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
              </section>
              <section>
                <span className="icon solid major fa-chart-area accent3"></span>
                <h3>Ipsum dolor</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
              </section>
            </div>
            <div className="features-row">
              <section>
                <span className="icon solid major fa-cloud accent4"></span>
                <h3>Sed feugiat</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
              </section>
              <section>
                <span className="icon solid major fa-lock accent5"></span>
                <h3>Enim phasellus</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
              </section>
            </div>
          </section>

          <div className="row">
            <div className="col-6 col-12-narrower">

              <section className="box special">
                <span className="image featured"><img src={p2} alt="" /></span>
                <h3>Sed lorem adipiscing</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
                <ul className="actions special">
                  <li><a href="#" className="button alt">Learn More</a></li>
                </ul>
              </section>

            </div>
            <div className="col-6 col-12-narrower">

              <section className="box special">
                <span className="image featured"><img src={p3} alt="" /></span>
                <h3>Accumsan integer</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
                <ul className="actions special">
                  <li><a href="#" className="button alt">Learn More</a></li>
                </ul>
              </section>

            </div>
          </div>

        </section>

        {/* <!-- CTA --> */}
        <section id="cta">

          <h2>Sign up for beta access</h2>
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

        {/* <!-- Footer --> */}
        <footer id="footer">
          <ul className="icons">
            <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
            <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
            <li><a href="#" className="icon brands fa-google-plus"><span className="label">Google+</span></a></li>
          </ul>
          <ul className="copyright">
            <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </footer>

      </div>
    </div>
  )
}

export default Home