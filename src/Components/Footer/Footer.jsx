import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './Footer.css';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor: '#ef233c',
  transition: 'none',
  boxShadow: 'none',
  color: '#fff',
}));

const Footer = () => {
  return (
    <Box sx={{ background: '#ef233c', marginTop: 8 }}>
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-around"
          spacing={2}
          sx={{
            paddingBottom: 8,
            paddingTop: 10,
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <Item>
            <LocationOnIcon fontSize="large" />
            <Typography variant="h5" fontWeight="bold" paddingTop="6px">
              Address
            </Typography>
            <Typography variant="body1">PO Box 16292</Typography>
            <Typography variant="body1">Savannah, GA. 31416</Typography>
          </Item>
          <Item>
            <LocalPhoneIcon fontSize="large" />
            <Typography variant="h5" fontWeight="bold" paddingTop="6px">
              Emergency (24/7)
            </Typography>
            <Typography variant="body1">Tel: (470) 292-9078</Typography>
            <Typography variant="body1">Mobile: (912) 257-3334</Typography>
          </Item>
          <Item>
            <EmailIcon fontSize="large" />
            <Typography variant="h5" fontWeight="bold" paddingTop="6px">
              Email
            </Typography>

            <a
              href="mailto:service@stpga777.com?subject=Information about STP&body=Hi I would like to know"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              service@stpga777.com
            </a>
          </Item>
          <Item>
            <AccessTimeIcon fontSize="large" />
            <Typography variant="h5" fontWeight="bold" paddingTop="6px">
              Office Hours:
            </Typography>
            <Typography variant="body1">Monday - Friday</Typography>
            <Typography variant="body1">9 AM to 5 PM</Typography>
          </Item>
        </Stack>
      </Container>

      {/*
      <Box sx={{ background: '#bc0411', padding: 1 }}>
        <Typography align="center" variant="body1">
          Made With 🤍 By
          <a
            className="createdBy"
            href="https://abid-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brilliant-Developer
          </a>
        </Typography>
      </Box>
      <MessengerCustomerChat
        pageId="266377000079581"
        appId="2032616256908551"
        />*/}
    </Box>
  );
};

export default Footer;
