import { Box } from '@mui/material'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div id="page-wrapper">

      <section id="main" className="container moveup ">
        <section className="box special">
          <header className='major'>
            <h2 id='contact' className='hashtitle'>Contact & Locations</h2>
            <p>Reach out online or visit us in person</p>
          </header>
          <span className="image featured">
            <img
              srcSet="../src/images/greenmodel-600w.png 600w, ../src/images/greenmodel-800w.png 800w,  ../src/images/greenmodel-1200w.png 1200w, ../src/images/greenmodel-1600w.png 1600w"
              sizes="(max-width: 600px) 600px, (max-width: 800px) 800px,  (max-width: 1200px) 1200px, (min-width: 1201px) 1600px"
              src="../src/images/greenmodel-1600w.png"
              alt="A medical model of a spine and ribcage set against a turquoise background"
              style={{ filter: 'grayscale(30%)' }}
            />
          </span>
          
          <div className="box">

            <div className='contact-flex' style={{ display: 'flex', marginTop: '-65px' }}>
              <div style={{ flex: '1 1 50%', margin: '1em' }}>
                <ContactForm />

                <h3 style={{ marginTop: '2em' }} >Phone & Hours</h3>
                <p>
                  Phone: (817)-294-0934
                  <br />Referral Fax: (817)-210-4886
                  <br />Open: Mon–Fri 8am–5pm
                  <br />Closed: Sat & Sun
                </p>
              </div>
              <hr />
              <div style={{ flex: '1 1 50%', margin: '1em' }}>
                <h3 id='offices' className='hashsubtitle'>Offices</h3>
                <iframe className='map-frame' width='100%' height='300px' style={{ border: 0, minHeight: '300px' }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.8849963541834!2d-97.328424!3d32.742244299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e711294d5df0b%3A0x6f937f80b9ee35a3!2s209%20St%20Louis%20Ave%20%23100%2C%20Fort%20Worth%2C%20TX%2076104!5e0!3m2!1sen!2sus!4v1699201243834!5m2!1sen!2sus" ></iframe>
                <p>209 St Louis Ave #100
                  <br />Fort Worth, TX 76104

                </p>

                <Box display="flex" justifyContent="center" mt={-5}>
                  <hr style={{ flex: '0 1 50%' }} />
                </Box>

                <iframe className='map-frame' width='100%' height='300px' style={{ border: 0, minHeight: '300px' }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.685483082773!2d-97.40201859999999!3d32.64119819999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6d04767614cb%3A0x57a67969b4a835ba!2s7148%20Trail%20Lake%20Dr%2C%20Fort%20Worth%2C%20TX%2076123!5e0!3m2!1sen!2sus!4v1700027485087!5m2!1sen!2sus" ></iframe>
                <p>7148 Trail Lake Dr
                  <br />Ft. Worth, TX 76123
                </p>
              </div>

            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Contact