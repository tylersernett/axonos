import React from 'react'
import p1 from '../images/pic01.jpg'

const Procedures = () => {
  const diagText = `osteoarthritis
  chronic pain syndrome
  CRPS
  diabetic neuropathy
  degenerative disc disease
  post-laminectomy syndrome
  compression fracture
  trigger points
  lumbar and cervical radiculopathy
  peripheral neuropathy
  spondylosis
  neuralgia
  migraines
  spasticity
  piriformis syndrome
  muscle spasm
  sciatica
  meralgia paresthetica
  paresthesia and numbness
  neck and back pain
  knee, hip, and shoulder pain
  rib pain
  tailbone pain
  phantom limb pain
  pain following stroke, spinal cord injury or brain injury`

  const procText=`Transforaminal Epidural Steroid Injection
  Interlaminar Epidural Steroid Injection
  Peripheral Joint Injection
  Facet Joint Injection
  Trigger Point Injection
  Stellate Ganglion Block
  Sympathetic Block
  Radiofrequency Ablation
  Medial Branch Block
  Sacral Lateral Branch Block
  Peripheral Nerve Block
  Basivertebral Nerve Ablation
  Spinal Cord Stimulator
  Intrathecal Pump
  Kyphoplasty
  Regenerative Medicine Procedures`

  const style = {
    whiteSpace: 'pre-line',
  };

  return (
    <section id="main" className="container">
      <header>
        <h2>Procedures</h2>
        <p>Learn more about our procedures.</p>
      </header>
      <div className="box">
        <span className="image featured"><img src={p1} alt="" /></span>
        <h3>Diagnoses & Conditions</h3>
        <p style={style}>{diagText}</p>
        <h3>Procedures</h3>
        <p style={style}>{procText}</p>
        {/* <div className="row">
          <div className="row-6 row-12-mobilep">
            <h3></h3>
            <p>Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae lorem ipsum adipiscing ac. Vivamus ornare laoreet odio vis praesent.</p>
          </div>
          <div className="row-6 row-12-mobilep">
            <h3>And another subheading</h3>
            <p>Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae lorem ipsum adipiscing ac. Vivamus ornare laoreet odio vis praesent.</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Procedures