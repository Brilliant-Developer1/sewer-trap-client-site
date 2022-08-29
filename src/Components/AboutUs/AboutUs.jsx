import {
  Box,
  Button,
  Container,
  Paper,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import sewertruck1 from '../../Assets/Images/sewer-truck-1.jpeg';
import Callgif from '../../Assets/Images/58-call-phone-solid.gif';

const Item = styled(Paper)(({ theme }) => ({}));

const AboutUs = () => {
  return (
    <div>
      <Toolbar id="aboutus" />
      <Box
        sx={{
          backgroundImage: `url(${sewertruck1})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundColor: 'white',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: { xs: '100%', sm: '60%', md: '40%' },
          width: '100%',
        }}
      >
        <Container
          sx={{
            mt: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            paddingRight: { xs: '0px', sm: '0px', md: '24px' },
            paddingLeft: { xs: '0px', sm: '0px', md: '24px' },
            paddingBottom: '35px',
          }}
        >
          <Typography
            color={'#ef233c'}
            fontWeight={700}
            align="center"
            variant="h3"
            style={{ paddingTop: '35px' }}
          >
            About Us
          </Typography>

          <Box sx={{ mt: 3 }} justifyContent={'center'} alignItems={'center'}>
            <Item>
              <Box
                sx={{
                  padding: '20px',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography
                  align="center"
                  variant="h5"
                  fontWeight={'700'}
                  component="div"
                  width={{ xs: '100%', sm: '90%', md: '65%' }}
                >
                  WE SPECIALIZE IN PUMPING GREASE TRAPS, WHERE ALL WORK IS DONE
                  WITH PRIDE AND PERFECTION.
                </Typography>
                <Typography
                  align="center"
                  variant="h5"
                  fontWeight={'500'}
                  component="div"
                  sx={{ padding: '15px', color: '#ef233c' }}
                >
                  RESTAURANT • COMMERCIAL & INDUSTRIAL
                </Typography>
                <Typography variant="h5" fontWeight={'500'} component="div">
                  <ul>
                    <li>We are located in Savannah, Georgia</li>
                    <li>We are certified, licensed and insured</li>
                    <li>
                      We will pump, clean & save your business thousands of
                      dollars
                    </li>
                  </ul>
                </Typography>
                <Typography variant="h5" fontWeight={'500'} component="div">
                  <b>
                    <Typography
                      variant="h5"
                      align="center"
                      fontWeight={'700'}
                      style={{ color: '#ef233c' }}
                    >
                      Here's What we do, that no other company does:
                    </Typography>
                    <ol>
                      <li>
                        We don't charge our clients extra for emergency calls
                      </li>
                      <li>We are AVAILABLE DAY & NIGHT</li>
                      <li>
                        We pressure wash the grease trap at NO EXTRA COST to our
                        clients
                      </li>
                      <li>We jet your pipes at NO EXTRA COST</li>
                    </ol>
                  </b>
                </Typography>

                <Typography
                  align="center"
                  variant="h5"
                  fontWeight={'700'}
                  component="div"
                  sx={{ padding: '0px', color: '#ef233c' }}
                >
                  WHY WAIT?
                </Typography>
                <Typography
                  align="center"
                  variant="h5"
                  fontWeight={'700'}
                  component="div"
                  sx={{ padding: '20px', color: 'black' }}
                >
                  GIVE US A CALL TODAY!
                </Typography>
                <a
                  href="tel:+91 123 456 78910"
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    className="phone-call"
                    type="call"
                    sx={{ background: '#ef233c' }}
                    variant="contained"
                  >
                    <img src={Callgif} alt="call" width={25} height={25} />
                    (470) 292-9078
                  </Button>
                </a>
              </Box>
            </Item>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default AboutUs;
