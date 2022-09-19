import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Modal,
  Paper,
  Stack,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

import './Services.css';
import greaseTrapOutside from '../../Assets/Images/GreaseTrapOutside.jpg';
import greaseTrapintheFloor from '../../Assets/Images/GreaseTrapintheFloor.png';
import greaseTrapStanding from '../../Assets/Images/GreaseTrapStanding.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '100%', sm: 450 },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Services = () => {
  const [open, setOpen] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  return (
    <div>
      <Toolbar id="services" />
      <Container sx={{ mt: 1 }}>
        <Typography
          color={'#ef233c'}
          fontWeight={600}
          align="center"
          sx={{ fontSize: { xs: '1.3rem', sm: '2rem' } }}
        >
          Grease trap cleaning solutions for: <br /> RESTAURANT • COMMERCIAL &
          INDUSTRIAL TANKS
        </Typography>
        <Typography align="center" variant="h6">
          Get Complete Grease Trap Services
        </Typography>
        <Stack
          sx={{ mt: 3 }}
          justifyContent={'center'}
          alignItems={'center'}
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image={greaseTrapStanding}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Grease Trap: Standing
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The effectiveness of the grease trap diminishes as it fills up
                  with grease. Regular cleaning will keep your grease trap
                  performing effectively and reduce the chances of costly
                  blockages.A good rule of thumb for regular grease trap
                  cleaning is every 1-3 months.Regular grease trap service with
                  a licenced..
                  <Button onClick={handleOpen}>See More</Button>
                  <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title-2"
                        variant="h5"
                        component="h2"
                        sx={{ paddingLeft: { xs: 2, sm: 0 } }}
                      >
                        Standing Grease Trap
                      </Typography>
                      <Typography
                        id="modal-modal-description-2"
                        sx={{
                          mt: 2,
                          paddingLeft: { xs: 2, sm: 0 },
                          paddingRight: { xs: 2, sm: 0 },
                        }}
                      >
                        The effectiveness of the grease trap diminishes as it
                        fills up with grease. Regular cleaning will keep your
                        grease trap performing effectively and reduce the
                        chances of costly blockages.A good rule of thumb for
                        regular grease trap cleaning is every 1-3 months.
                        Regular grease trap service with a licenced and
                        knowledgeable provider like SEWER TRAP PROFESSIONALS,
                        will help you avoid costly problems.
                      </Typography>
                    </Box>
                  </Modal>
                </Typography>
              </CardContent>
            </Card>
          </Item>

          <Item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image={greaseTrapOutside}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Grease Trap: Outside
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  All commercial kitchens face regulations that dictate how
                  grease is handled and for good reason. If left unchecked,
                  fats, oils, and grease (FOG) that enter the sewage systems can
                  plug drain lines, block pipes, and clog the regions sewers.
                  Proper grease trap cleaning, pumping and maintenance..
                  <Button onClick={handleOpen4}>See More</Button>
                  <Modal open={open4} onClose={handleClose4}>
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title-2"
                        variant="h5"
                        component="h2"
                        sx={{ paddingLeft: { xs: 2, sm: 0 } }}
                      >
                        Outside Grease Trap
                      </Typography>
                      <Typography
                        id="modal-modal-description-2"
                        sx={{
                          mt: 2,
                          paddingLeft: { xs: 2, sm: 0 },
                          paddingRight: { xs: 2, sm: 0 },
                        }}
                      >
                        All commercial kitchens face regulations that dictate
                        how grease is handled and for good reason. If left
                        unchecked, fats, oils, and grease (FOG) that enter the
                        sewage systems can plug drain lines, block pipes, and
                        clog the regions sewers. Proper grease trap cleaning,
                        pumping and maintenance can prevent problems for you
                        business such as blockages, overflows, bad odors, and
                        potential fines or closures.
                      </Typography>
                    </Box>
                  </Modal>
                </Typography>
              </CardContent>
            </Card>
          </Item>

          <Item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image={greaseTrapintheFloor}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Grease Trap: in the Floor
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  There is nothing worse than a restaurant that smells like a
                  grease trap. When fats and oils harden, it begins to stick to
                  the insides of the sewer pipes and build up over time. Let our
                  technicians service and clean your grease trap and jet your
                  pipes. We will work around your hours so your customers are
                  not..
                  <Button onClick={handleOpen3}>See More</Button>
                  <Modal open={open3} onClose={handleClose3}>
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title-2"
                        variant="h5"
                        component="h2"
                        sx={{ paddingLeft: { xs: 2, sm: 0 } }}
                      >
                        Grease Trap in the floor
                      </Typography>
                      <Typography
                        id="modal-modal-description-2"
                        sx={{
                          mt: 2,
                          paddingLeft: { xs: 2, sm: 0 },
                          paddingRight: { xs: 2, sm: 0 },
                        }}
                      >
                        There is nothing worse than a restaurant that smells
                        like a grease trap. When fats and oils harden, it begins
                        to stick to the insides of the sewer pipes and build up
                        over time. Let our technicians service and clean your
                        grease trap and jet your pipes. We will work around your
                        hours so your customers are not inconvenienced during
                        the cleaning process.
                      </Typography>
                    </Box>
                  </Modal>
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Stack>
      </Container>
    </div>
  );
};

export default Services;
