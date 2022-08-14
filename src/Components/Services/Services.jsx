import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Stack,
  styled,
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

const Services = () => {
  return (
    <Container sx={{ mt: 3 }}>
      <Typography
        color={'#ef233c'}
        fontWeight={700}
        align="center"
        variant="h4"
      >
        Grease trap cleaning Solutions for Restaurant, Commercial and Industrial
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
                  Standing Grease Trap
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam sapiente magni, in obcaecati provident adipisci quos
                  odit? Saepe incidunt rerum, in neque rem dolorum nostrum magni
                  accusantium ipsam beatae deserunt, autem iusto mollitia
                  necessitatibus repudiandae, consequuntur esse nihil quibusdam
                  blanditiis?
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
                  Grease Trap in the floor
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam sapiente magni, in obcaecati provident adipisci quos
                  odit? Saepe incidunt rerum, in neque rem dolorum nostrum magni
                  accusantium ipsam beatae deserunt, autem iusto mollitia
                  necessitatibus repudiandae, consequuntur esse nihil quibusdam
                  blanditiis?
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
                image="https://thumbs.dreamstime.com/b/drain-cleaning-plumber-repairing-clogged-grease-trap-auger-machine-maintenance-sewage-system-professional-using-231304514.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Grease Trap in the kitchen
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam sapiente magni, in obcaecati provident adipisci quos
                  odit? Saepe incidunt rerum, in neque rem dolorum nostrum magni
                  accusantium ipsam beatae deserunt, autem iusto mollitia
                  necessitatibus repudiandae, consequuntur esse nihil quibusdam
                  blanditiis?
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
                image="https://thumbs.dreamstime.com/b/drain-cleaning-plumber-repairing-clogged-grease-trap-auger-machine-maintenance-sewage-system-professional-using-231304514.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Outside Grease Trap
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam sapiente magni, in obcaecati provident adipisci quos
                  odit? Saepe incidunt rerum, in neque rem dolorum nostrum magni
                  accusantium ipsam beatae deserunt, autem iusto mollitia
                  necessitatibus repudiandae, consequuntur esse nihil quibusdam
                  blanditiis?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Item>
      </Stack>
    </Container>
  );
};

export default Services;
