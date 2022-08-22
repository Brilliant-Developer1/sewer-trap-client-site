import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Paper,
  Stack,
  styled,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactUsTruck from '../../Assets/Images/contactUs-truck.png';
import swal from 'sweetalert';
import './ContactUs.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ContactUs = () => {
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9i57ktj',
        'template_oipl5o8',
        form.current,
        '17Mzf6LReVSjZSeM2'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    form.current.reset();
    swal('Thank you For Messaging us, we will Contact you within 24 Hours');
  };
  return (
    <div>
      <Toolbar id="contactus" />

      <Container sx={{ mt: 3 }}>
        <Typography
          color={'#ef233c'}
          fontWeight={700}
          align="center"
          variant="h3"
        >
          Contact Us
        </Typography>
        <Typography color={'textSecondary'} align="center" variant="h6">
          Fill up the form and we will get back to you within 24 Hours.
        </Typography>

        <Stack
          sx={{ mt: 3 }}
          justifyContent={'space-around'}
          alignItems={'center'}
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          spacing={{ xs: 1, sm: 2 }}
        >
          <Box
            sx={{
              height: { xs: '100', sm: '100%', md: '410px' },
              boxShadow: 1,
              display: 'flex',
              padding: { xs: 2, sm: 3 },
              alignItems: 'center',
            }}
          >
            <Card sx={{ maxWidth: 545 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="Auto"
                  image={contactUsTruck}
                  alt="Grease-trap"
                />
              </CardActionArea>
            </Card>
          </Box>

          <Item sx={{ width: { xs: '96%', sm: '80%', md: '50%' } }}>
            <Box>
              <form ref={form} onSubmit={sendEmail}>
                <Stack padding={3} direction="column" spacing={2}>
                  <Box>
                    <TextField
                      label="Full Name"
                      variant="filled"
                      placeholder="Enter your Name"
                      fullWidth
                      required
                      name="name"
                    />
                  </Box>
                  <Box>
                    <TextField
                      type="email"
                      label="Email"
                      placeholder="Enter your Email"
                      variant="filled"
                      fullWidth
                      required
                      name="email"
                    />
                  </Box>
                  <Box>
                    <TextField
                      type="number"
                      placeholder="Enter your Number"
                      label="Number"
                      variant="filled"
                      fullWidth
                      required
                      name="number"
                    />
                  </Box>
                  <Box>
                    <TextField
                      placeholder="Type your Message"
                      label="Message"
                      variant="filled"
                      fullWidth
                      multiline
                      rows={4}
                      name="message"
                    />
                  </Box>

                  <input
                    type="submit"
                    value="SUBMIT"
                    style={{
                      background: '#ef233c',
                      border: 'none',
                      padding: 10,
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '1.1rem',
                      color: 'white',
                    }}
                  />
                </Stack>
              </form>
            </Box>
          </Item>
        </Stack>
      </Container>
    </div>
  );
};

export default ContactUs;
