import * as React from 'react';
import Box from '@mui/material/Box';
import './Navbar.css';
import logo from '../../Assets/Images/logo-2.2.png';
import logo1 from '../../Assets/Images/Logo-1.1.png';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Callgif from '../../Assets/Images/58-call-phone-solid.gif';

import { Toolbar, AppBar, styled, Menu, MenuItem, Button } from '@mui/material';

const Navbar = props => {
  const [open, SetOpen] = React.useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });
  const StyledSocial = styled(Box)({
    display: 'flex',
    gap: 10,
  });
  const StyledMenu = styled(Box)({
    display: 'flex',
    gap: 30,
    alignItems: 'center',
  });
  const StyledLogo = styled(Box)({
    display: 'flex',
    gap: 30,
  });
  const MenuItems = [
    { Name: 'Home', Link: 'home' },
    { Name: 'Services', Link: 'services' },
    { Name: 'About Us', Link: 'aboutus' },
    { Name: 'Contact Us', Link: 'contactus' },
  ];

  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ background: 'white', color: 'black' }}>
        <StyledToolbar>
          <StyledLogo sx={{ width: { xs: '65px', sm: '180px', md: '215px' } }}>
            <picture>
              <source media="(min-width: 480px)" width={'100%'} srcset={logo} />
              <img width={'60px'} src={logo1} alt="sewerlogo" />
            </picture>
          </StyledLogo>
          <StyledMenu sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            {MenuItems.map(item => (
              <a
                key={item.Name}
                className="Nav-links"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontSize: '1.2rem',
                }}
                href={`#${item.Link}`}
              >
                {item.Name}
              </a>
            ))}
          </StyledMenu>
          <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
            <a href="tel:+91 123 456 78910" style={{ textDecoration: 'none' }}>
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
          <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
            <StyledSocial>
              <FacebookIcon></FacebookIcon>
              <InstagramIcon></InstagramIcon>
              <TwitterIcon></TwitterIcon>
            </StyledSocial>
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}>
            <a href="tel:+91 123 456 78910" style={{ textDecoration: 'none' }}>
              <Button
                className="phone-call"
                type="call"
                sx={{ background: '#ef233c' }}
                variant="contained"
              >
                <img
                  src={Callgif}
                  alt="call"
                  width={20}
                  height={20}
                  style={{ paddingRight: '5px' }}
                />
                CALL NOW
              </Button>
            </a>
          </Box>

          <MenuIcon
            sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
            onClick={() => SetOpen(!open)}
          ></MenuIcon>
        </StyledToolbar>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={() => SetOpen(!open)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Box sx={{ width: 340, height: '60vh' }}>
            {MenuItems.map(item => (
              <MenuItem sx={{ cursor: 'pointer' }}>
                <a
                  key={item.Name}
                  className="Nav-links"
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontSize: '1.2rem',
                  }}
                  href={`#${item.Link}`}
                  onClick={() => SetOpen(!open)}
                >
                  {item.Name}
                </a>
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default Navbar;
