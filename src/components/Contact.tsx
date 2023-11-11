import p1 from '../images/greenmodel.png'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div id="page-wrapper">

      <section id="main" className="container moveup ">
        <section id="main" className=" box special">
          <header>
            <h2>Contact</h2>
            <p>Reach out online or visit us in person</p>
          </header>
          <div className="box">
            <span className="image featured"><img src={p1} alt="" style={{ filter: 'grayscale(50%)' }} /></span>
            <div className='contact-flex' style={{ display: 'flex',  }}>
              <div style={{ flex: '1 1 50%', margin: '1em' }}>
                <ContactForm />
              </div>
              <hr/>
              <div style={{ flex: '1 1 50%', margin: '1em' }}>
                <h3>Address</h3>
                <iframe width='100%' height='80%' style={{ border: 0, minHeight:'300px' }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.8849963541834!2d-97.328424!3d32.742244299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e711294d5df0b%3A0x6f937f80b9ee35a3!2s209%20St%20Louis%20Ave%20%23100%2C%20Fort%20Worth%2C%20TX%2076104!5e0!3m2!1sen!2sus!4v1699201243834!5m2!1sen!2sus" ></iframe>
                <p>209 St Louis Ave #100
                  <br />Fort Worth, TX 76104
                  <br />(817)-XXX-XXXX
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