import p1 from '../images/multi-xray.png'

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

  const procText = `Transforaminal Epidural Steroid Injection
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

  const style: React.CSSProperties = {
    whiteSpace: 'pre-line',
    textAlign: 'left',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
  };

  const columnStyle: React.CSSProperties = {
    margin: '1em',
    flexGrow: 1,
  };


  return (
    <div id="page-wrapper">

      <section id="main" className="container moveup ">
        <section id="main" className=" box special">
          <header>
            <h2>Diagnoses & Procedures</h2>
            <p>Learn more about our diagnoses and procedures</p>
          </header>
          <div className="box">
            <span className="image featured"><img src={p1} alt="" /></span>

            <div style={containerStyle}>
              <div style={columnStyle}>
                <h3 style={style}>Diagnoses & Conditions</h3>
                <p style={style}>{diagText}</p>
              </div>
              <div style={columnStyle}>
                <h3 style={style}>Procedures</h3>
                <p style={style}>{procText}</p>
              </div>
            </div>

          </div>
        </section>
      </section>
    </div>
  )
}

export default Procedures