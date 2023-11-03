// import { Typography } from '@mui/material'
import React from 'react'
import p1 from '../images/pic01.jpg'

const About = () => {
  return (
    <section id="main" className="container">
      <header>
        <h2>About</h2>
        <p>A generic page for every non-generic situation.</p>
      </header>
      <div className="box">
        <span className="image featured"><img src={p1} alt="" /></span>
        <h3>Our Physician</h3>
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
        <div className="row">
          <div className="row-6 row-12-mobilep">
            <h3>And now a subheading</h3>
            <p>Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae lorem ipsum adipiscing ac. Vivamus ornare laoreet odio vis praesent.</p>
          </div>
          <div className="row-6 row-12-mobilep">
            <h3>And another subheading</h3>
            <p>Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae lorem ipsum adipiscing ac. Vivamus ornare laoreet odio vis praesent.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About