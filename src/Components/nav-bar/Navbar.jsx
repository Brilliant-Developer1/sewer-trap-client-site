import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Navbar.css';
import logo from '../../Assets/Images/logo-2.2.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Callgif from '../../Assets/Images/58-call-phone-solid.gif';
import CallIcon from '@mui/icons-material/Call';
import {
  Toolbar,
  AppBar,
  styled,
  Typography,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';

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
    { Name: 'Home', Link: '/' },
    { Name: 'Services', Link: '#' },
    { Name: 'About Us', Link: '#' },
    { Name: 'Contact Us', Link: '#' },
  ];

  return (
    <AppBar position="sticky" sx={{ background: 'white', color: 'black' }}>
      <StyledToolbar>
        <StyledLogo sx={{ width: { xs: '160px', sm: '180px', md: '215px' } }}>
          <img width={'100%'} src={logo} alt="sewerlogo" />
        </StyledLogo>
        <StyledMenu sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
          {MenuItems.map(item => (
            <Typography sx={{ cursor: 'pointer' }}>{item.Name}</Typography>
          ))}
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
        </StyledMenu>
        <StyledSocial>
          <FacebookIcon></FacebookIcon>
          <InstagramIcon></InstagramIcon>
          <TwitterIcon></TwitterIcon>

          <MenuIcon
            sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
            onClick={() => SetOpen(!open)}
          ></MenuIcon>
        </StyledSocial>
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
        <Box sx={{ width: 350, height: '90vh' }}>
          {MenuItems.map(item => (
            <MenuItem sx={{ cursor: 'pointer' }}>{item.Name}</MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
