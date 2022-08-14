import * as React from 'react';
import './HideAppBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { styled } from '@mui/material';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {
  const StyledToolBar = styled(Toolbar)({
    minHeight: 45,
  });
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          className="hidebar_show"
          sx={{
            alignItems: 'center',
            bgcolor: 'white',
            color: '#404B55',
          }}
        >
          <Container className="hidebar_close">
            <StyledToolBar
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              id="hidebar"
              className="hidebar"
            >
              <Typography display={{ xs: 'none', sm: 'block' }} component="div">
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <AccessTimeIcon sx={{ mr: 0.5 }}></AccessTimeIcon>
                  <Typography
                    variant="h6"
                    sx={{ display: 'inline' }}
                    style={{
                      fontFamily: 'Lato',
                      fontSize: '1rem',
                      fontWeight: 700,
                    }}
                  >
                    Office Hours:
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ display: 'inline', marginLeft: '6px' }}
                    style={{ fontFamily: 'Lato', fontSize: '1rem' }}
                  >
                    Mon-Sat 8:00-18:00, Sun 8:00-14:00
                  </Typography>
                </Box>
              </Typography>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  style={{
                    fontFamily: 'Lato',
                    fontSize: '1rem',
                    fontWeight: 700,
                    display: 'flex',
                  }}
                  className="contacts"
                >
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: '20px',
                    }}
                  >
                    <PhoneIcon sx={{ mr: 0.5 }}></PhoneIcon>
                    <span>+1 234 567 8910</span>
                  </Box>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <MailOutlineIcon sx={{ mr: 0.5 }}></MailOutlineIcon>
                    info@sewertrap.com
                  </Box>
                </Typography>
              </Box>
            </StyledToolBar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
