import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import './Testimonials.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const allComments = [
  {
    Comments:
      'They did a Awesome job at my home. Arrived on time and did everything they said they would. Highly recommended!!!',
    personName: '- Byron Paul',
  },
  {
    Comments:
      'These guys helped us out when we were in a pinch. Called early on Friday and they came out same day and saved our weekend. They are very professional, did a great job and would highly recommend them to anyone!!!',
    personName: '- Sidney Cole',
  },
  {
    Comments:
      'I Loved that there prices were reasonable, I was prepared to pay a lot more . They called before arriving and gave me exact cost so no surprises. I highly recommend Bob and William Elliott .',
    personName: '- Tyler Pascall',
  },
  {
    Comments:
      'Fantastic service. Very clear about the issues. Professional demeanor. Friendly. Reasonably priced. Thorough and complete job. Highly recommended.',
    personName: '- Miranda Noble',
  },
];

const Testimonials = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = allComments.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setTimeout(() => {
      setActiveStep(step);
    }, 4000);
  };

  return (
    <Box
      sx={{
        background: '#f8f9fa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 6,
        marginBottom: 10,
      }}
    >
      <Typography
        color={'#ef233c'}
        fontWeight={700}
        align="center"
        variant="h3"
        sx={{ paddingTop: 4, paddingBottom: 4 }}
      >
        Testimonials
      </Typography>
      <Box sx={{ maxWidth: 500, paddingBottom: 6 }}>
        <Paper
          square
          elevation={0}
          sx={{
            height: { xs: '100%', md: '230px' },
            backgroundColor: '#e9ecef',
            padding: 3,
          }}
        >
          <Typography variant="h5">
            {allComments[activeStep].Comments}
          </Typography>

          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {allComments.map((step, index) => (
              <div key={step.Comments}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Typography
                    variant="h6"
                    sx={{
                      maxWidth: 500,

                      width: '100%',
                    }}
                  >
                    {' '}
                    {step.personName}{' '}
                  </Typography>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Paper>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              sx={{ color: '#ef233c' }}
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              sx={{ color: '#ef233c' }}
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Previous
            </Button>
          }
        />
      </Box>
    </Box>
  );
};

export default Testimonials;
