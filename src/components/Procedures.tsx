import { useMediaQuery } from '@mui/material';

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
  <a href='https://www.medtronic.com/us-en/patients/treatments-therapies/spinal-cord-stimulation-chronic-pain.html' style='text-decoration: underline;'>Spinal cord stimulation</a>
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
    margin: '1em 0',
    flexGrow: 1,
  };


  return (
    <div id="page-wrapper">

      <section id="main" className="container moveup ">
        <section  className="box special">
          <header className='major'>
            <h2 id='services' className='hashtitle'>Services</h2>
            <p>Learn more about our diagnoses and procedures</p>
          </header>
            <span className="image featured">
              <img
                srcSet="/images/multi-xray-600w.png 600w, /images/multi-xray-800w.png 800w,  /images/multi-xray-1200w.png 1200w, /images/multi-xray-1600w.png 1600w"
                sizes="(min-width: 1700px) 1280px, (min-width: 1300px) 1040px, (min-width: 1020px) 880px, (min-width: 740px) calc(81.92vw + 61px), (min-width: 400px) calc(90.94vw + 36px), calc(75vw + 95px)"                src="/images/multi-xray.png"
                alt="Medical imagery of the lower spine"
              />
            </span>
            <div className="box" >
            <h3 style={{ marginBottom: '1.5em' }}>Our Mission</h3>
            <div style={{ margin: '0 0 1em 0', textAlign:'left' }}>
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
              <img
                srcSet="/images/riley-machine-600w.jpg 600w, /images/riley-machine-800w.jpg 800w,  /images/riley-machine-1200w.jpg 1200w, /images/riley-machine-1600w.jpg 1600w"
                sizes="(min-width: 1700px) 1152px, (min-width: 1300px) 936px, (min-width: 1020px) 792px, (min-width: 740px) calc(70.77vw + 84px), (min-width: 500px) calc(100vw - 88px), (min-width: 380px) calc(100vw - 29px), calc(66.67vw + 91px)"                src="/images/riley-machine.jpeg"
                alt="Dr. Johnson wearing dark blue scrubs standing beside a C-arm medical imaging machine"
                style={{ width: '100%', borderRadius: '6px', marginBottom: isSmallScreen ? '0' : '2em', }}
              />
            </div>

          </div>
        </section>
      </section>
    </div>
  )
}

export default Procedures