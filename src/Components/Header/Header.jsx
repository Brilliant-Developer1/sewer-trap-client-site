import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@material-ui/core';
import { styled } from '@mui/material';
import sewertruck1 from '../../Assets/Images/sewer-truck-1.jpeg';

const Header = () => {
  const StyledHeroText = styled(Typography)({
    fontWeight: 700,
  });
  return (
    <Box sx={{}}>
      <Box
        sx={{
          backgroundImage: `url(${sewertruck1})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundColor: 'white',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: 600,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: '60%', md: '40%' }, padding: 0 }}>
          <Box sx={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
            <Typography align="center" variant="h5" pt={8}>
              Let Us Service Your Tanks
            </Typography>
            <StyledHeroText pb={8} align="center" variant="h5">
              WE ARE SPECIALIZE IN RESTAURANT, GREASE TRAPS & INTERCEPTORS.
            </StyledHeroText>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
