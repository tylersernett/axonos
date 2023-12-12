import { useMediaQuery } from '@mui/material';
import p1 from '../images/multi-xray.png'
import machine from '../images/riley-machine.jpeg'

const Procedures = () => {
  const isSmallScreen = useMediaQuery('(max-width:736px)');

  const diagText = `Osteoarthritis
  Chronic pain syndrome
  CRPS
  Diabetic neuropathy
  Degenerative disc disease
  Post-laminectomy syndrome
  Compression fracture
  Trigger points
  Lumbar and cervical radiculopathy
  Peripheral neuropathy
  Spondylosis
  Neuralgia
  Migraines
  Spasticity
  Piriformis syndrome
  Muscle spasm
  Sciatica
  Meralgia paresthetica
  Paresthesia and numbness
  Neck and back pain
  Knee, hip, and shoulder pain
  Rib pain
  Tailbone pain
  Phantom limb pain
  Pain following stroke, spinal cord injury or brain injury`

  const procText = `Transforminal epidural steroid injection
  Interlaminar epidural steroid injection
  Peripheral joint injection
  Facet joint injection
  Trigger point injection
  Stellate ganglion block
  Sympathetic block
  Radiofrequency ablation
  Medial branch block
  Sacral lateral branch block
  Peripheral nerve block
  Basivertebral nerve ablation
  Spinal cord stimulation (<a href='https://www.medtronic.com/us-en/patients/treatments-therapies/spinal-cord-stimulation-chronic-pain.html'>learn more</a>)
  Intrathecal pump
  Kyphoplasty
  Regenerative medicine procedures`

  const style: React.CSSProperties = {
    whiteSpace: 'pre-line',
    textAlign: 'left',
  };

  const firstStyle: React.CSSProperties = {
    ...style,
    marginBottom: isSmallScreen ? '0' : '',
  }

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row',
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
            <h2>Services</h2>
            <p>Learn more about our diagnoses and procedures</p>
          </header>
          <div className="box">
            <span className="image featured"><img src={p1} alt="" /></span>
            <div style={{margin:'1em'}}>
              At Axonos, we are committed to ensuring you have access to the information you need to make informed decisions about your health. Our facilities feature state of the art technology, including C-arm guidance. Whether you're seeking insights into your diagnosis or exploring treatment options, we're here to guide you through your medical journey. If you have any questions or would like to schedule a consultation, please don't hesitate to contact us. Your well-being is our priority.
            </div>

            <div style={containerStyle}>
              <div style={columnStyle}>
                <h3 style={style}>Diagnoses & Conditions</h3>
                <p style={firstStyle}>{diagText}</p>
              </div>
              <div style={columnStyle}>
                <h3 style={style}>Procedures</h3>
                <p style={style} dangerouslySetInnerHTML={{ __html: procText }}></p>
              </div>
            </div>

            <div style={{ flex: '1 1 50%', }}>
              <img src={machine} alt="" style={{ filter: 'grayscale(0%)', width: '100%', transform: 'scaleX(1)', borderRadius: '6px' }} />
            </div>

          </div>
        </section>
      </section>
    </div>
  )
}

export default Procedures