import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@material-ui/core';
import { Button, styled } from '@mui/material';
import sewertruck1 from '../../Assets/Images/sewer-truck-1.jpeg';
import Callgif from '../../Assets/Images/58-call-phone-solid.gif';

const Header = () => {
  const StyledHeroText = styled(Typography)({
    fontWeight: 700,
  });
  return (
    <Box id="home">
      <Box
        sx={{
          backgroundImage: `url(${sewertruck1})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundColor: 'white',
          backgroundPosition: { xs: 'cover', sm: 'center center' },
          backgroundSize: { xs: 'contain', sm: 'cover' },
          height: { xs: 0, sm: 800 },
          paddingTop: { xs: '58%', sm: '0' },
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '60%', md: '35%' },
            padding: 0,
            position: { xs: 'absolute', sm: 'static' },

            bottom: 0,
          }}
        >
          <Box
            sx={{
              background: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              padding: '6px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <StyledHeroText pb={8} align="center" variant="h5">
              WE SPECIALIZE IN RESTAURANT GREASE TRAPS & INTERCEPTORS.
            </StyledHeroText>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Box
                sx={{
                  marginTop: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
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
                <Typography variant="h6">CALL NOW!!!</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
