import {
  Box,
  Button,
  Card,
  CardActionArea,
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
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

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
          fontWeight={700}
          align="center"
          variant="h4"
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
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://dmsplumbing.co.za/wp-content/uploads/2020/10/grease_trap_before_after.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Grease Trap: Standing
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Grease traps fill up fast, so you must have a regular
                    cleaning and maintenance schedule. As the grease trap fills
                    up, it becomes less effective at preventing grease from
                    getting into your pipes. A good rule of thumb for grease
                    trap cleaning is every 1-3 months. Note that the longer you
                    leave it between..
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
                          Grease traps fill up fast, so you must have a regular
                          cleaning and maintenance schedule. As the grease trap
                          fills up, it becomes less effective at preventing
                          grease from getting into your pipes. A good rule of
                          thumb for grease trap cleaning is every 1-3 months.
                          Note that the longer you leave it between cleanings,
                          the more chance the grease will harden and be far more
                          challenging to remove – increasing the time required
                          and price of service. The effectiveness of the trap
                          also diminishes as it fills up with grease. Regular
                          cleaning will keep your grease trap performing
                          effectively and reduce the chances of costly
                          blockages. Contact us today for a free consultation!
                        </Typography>
                      </Box>
                    </Modal>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>

          <Item>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://hulseyenvironmental.com/wp-content/uploads/2020/09/Hulsey-Environmental-Grease-Trap-Cleaning-Partner.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Grease Trap: in the Floor
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The problem with FOGs is that they clog pipes. When fat
                    hardens, it adheres to the inside of sewer pipes and builds
                    up over time. This creates a blockage that can cause sewage
                    to back up into homes and businesses through floor drains
                    and toilets. In addition, it can also lead to overflows at
                    treatment facilities..
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
                          The problem with FOGs is that they clog pipes. When
                          fat hardens, it adheres to the inside of sewer pipes
                          and builds up over time. This creates a blockage that
                          can cause sewage to back up into homes and businesses
                          through floor drains and toilets. In addition, it can
                          also lead to overflows at treatment facilities during
                          wet weather events when too much water enters the
                          system at one time.There is nothing worse than a
                          restaurant that smells like a grease trap, so let our
                          technicians service and clean your grease trap. We
                          will work around your hours so your customers are not
                          inconvenienced during the cleaning process. Let us
                          take care of all your grease trap needs – from
                          cleaning and maintenance to inspections and repairs.
                          We’ll make sure it’s always up to code and functioning
                          properly so you don’t have to worry about it. Contact
                          us today for a free consultation!
                        </Typography>
                      </Box>
                    </Modal>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
          <Item>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://modernrestaurantmanagement.com/assets/media/2020/01/greasetrap.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Grease Trap: in the Kitchen
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Any commercial store or restaurant that prepares food needs
                    a grease trap to separate FOG (Fats, Oils and Greases) from
                    water that is returned to city wastewater and sewer lines.
                    Failure to keep these clogging materials out of the city
                    sewer lines can have unwanted consequences..
                    <Button onClick={handleOpen2}>See More</Button>
                    <Modal open={open2} onClose={handleClose2}>
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h5"
                          component="h2"
                          sx={{ paddingLeft: { xs: 2, sm: 0 } }}
                        >
                          Grease Trap in the kitchen
                        </Typography>
                        <Typography
                          id="modal-modal-description"
                          sx={{
                            mt: 2,
                            paddingLeft: { xs: 2, sm: 0 },
                            paddingRight: { xs: 2, sm: 0 },
                          }}
                        >
                          Any commercial store or restaurant that prepares food
                          needs a grease trap to separate FOG (Fats, Oils and
                          Greases) from water that is returned to city
                          wastewater and sewer lines. Failure to keep these
                          clogging materials out of the city sewer lines can
                          have unwanted consequences such as unpleasant odors,
                          trap blockages or overflow. Our grease trap cleaning
                          services, primarily grease trap cleaning and pumping,
                          will help ensure you avoid those consequences, and
                          your working environment runs smoothly while
                          maintaining cleanliness. Regular grease trap service
                          with a licensed and knowledgeable provider like SEWER
                          TRAP PROFESSIONALS, will help you avoid any issues or
                          potential shutdown stemming from overflows or
                          citations.
                        </Typography>
                      </Box>
                    </Modal>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
          <Item>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://mastinsepticandwell.com/images/Commercial-Grease-Trap-Pumping.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Grease Trap: Outside
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Grease traps are no place to cut corners, especially when
                    you’re choosing a service provider. Improper grease trap
                    cleaning, pumping, and maintenance can create huge problems
                    for your business, potentially causing closure or heavy
                    fines due to blockages, overflows, or environmental..
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
                          Grease traps are no place to cut corners, especially
                          when you’re choosing a service provider. Improper
                          grease trap cleaning, pumping, and maintenance can
                          create huge problems for your business, potentially
                          causing closure or heavy fines due to blockages,
                          overflows, or environmental damage. All commercial
                          kitchens face regulations that dictate how grease is
                          handled and for good reason. Left unchecked, fats,
                          oils, and grease (FOG) that enter sewage systems can
                          plug drain lines, block pipes, and eventually clog the
                          region’s sewers or cause other serious issues. Grease
                          traps protect waterways by significantly reducing the
                          amount of FOG that enters water treatment systems, and
                          they are required by law. Our professional grease trap
                          services keep your traps in peak condition so you can
                          focus on your business without worrying about
                          regulatory problems. Contact us today for a free
                          consultation!
                        </Typography>
                      </Box>
                    </Modal>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Stack>
      </Container>
    </div>
  );
};

export default Services;
