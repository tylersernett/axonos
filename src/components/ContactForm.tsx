import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
const ccEmails = import.meta.env.VITE_CC_EMAILS

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false)
  const [isError, setIsError] = useState(false)
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const phoneRegEx = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required('required'),
    email: Yup.string().email('invalid email').required('required'),
    phone: Yup.string().matches(phoneRegEx, 'invalid phone number'),
    subject: Yup.string().required('required'),
    message: Yup.string().required('required')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      _replyto: '',
      _cc: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsError(false);
      setIsSent(false);
      values._replyto = values.email;
      values._cc = `${ccEmails}`;
      fetch('https://formsubmit.co/ajax/20e9aaaa43edd9bd7e910cfcef8845d0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(values),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          //successful response:
          formik.resetForm();
          setIsSent(true)
          //return response.text();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('There was a problem with the form submission:', error);
          setIsError(true);
          formik.setSubmitting(false)
        });
    },
  });

  return (
    <Box>
      <h3 id='contactForm'>Email Form</h3>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name='name'
          label='Name'
          fullWidth
          margin='normal'
          sx={{ mt: '0' }}
          variant='outlined'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          name='email'
          label='Email'
          fullWidth
          margin='normal'
          variant='outlined'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name='phone'
          label='Phone'
          fullWidth
          margin='normal'
          variant='outlined'
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <TextField
          name='subject'
          label='Subject'
          fullWidth
          margin='normal'
          variant='outlined'
          value={formik.values.subject}
          onChange={formik.handleChange}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={formik.touched.subject && formik.errors.subject}
        />
        <TextField
          name='message'
          label='Message'
          fullWidth
          margin='normal'
          multiline
          rows={4}
          variant='outlined'
          sx={{ backgroundColor: '#f8f8f8' }}
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Button
          type='submit'
          variant='contained'
          sx={{ 
            mt: '16px', 
            width: '100%', 
            '@media (max-width: 736px)': { width: '100%' } 
          }}
          disabled={formik.isSubmitting}
          fullWidth={!isNonMobile}
        >
          {formik.isSubmitting ? (
            <>
              Submitting{' '}
              <CircularProgress size={20} thickness={5} style={{ marginLeft: '5px' }} />
            </>
          ) : (
            'Submit'
          )}
        </Button>
      </form>

      {/* display the following confirmation once server response is received & isSent is true */}
      {isSent && (
        <Typography variant="subtitle1" >
          Your message has been received!&nbsp;
          <br />
          A member of our team will reach out soon.
        </Typography>
      )}
      {isError && (
        <Typography variant="subtitle1" color='red' >
          There was an error sending your message.&nbsp;
          <br />
          Please try again.
        </Typography>
      )}

    </Box>
  );
};

export default ContactForm;