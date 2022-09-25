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
      'Sewer Trap Pros did an AWESOME  job in my home! They arrived on time and did everything they said they would! Highly recommended!!!',
    personName: '- Byron Paul',
  },
  {
    Comments:
      'These guys helped us out when we were in a pinch. I called early on Friday and they came out same day and saved our weekend.They are very professional and did a great job and I would use them again, if needed in the future. Thanks guys.',
    personName: '- Sidney Cole',
  },
  {
    Comments:
      'I Loved that their prices were reasonable, I was prepared to pay a lot more. They called before arriving and gave me the exact cost so no surprises there. I highly recommend them.',
    personName: '- Tyler Pascall',
  },
  {
    Comments:
      'Fantastic service. Very clear about the issues. Professional demeanor friendly and reasonably priced. They were thorough on the job as well. I have actually recommended them to all of my family friends .',
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
      }}
    >
      <Typography
        color={'#ef233c'}
        fontWeight={700}
        align="center"
        variant="h4"
        sx={{
          marginTop: 3,
          marginBottom: 3,
          fontSize: { xs: '2rem', sm: '2.5rem' },
        }}
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
            textAlign: { xs: 'center', sm: 'left' },
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
