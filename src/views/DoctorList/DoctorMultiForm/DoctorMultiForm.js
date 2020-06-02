
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';


import AddressForm from './PersonalInfo';
import PaymentForm from './EducationInfo';
import Certificates from './Certificates';

import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import StepConnector from '@material-ui/core/StepConnector';
import avatar from "../../../assets/img/task.png";
import Button from '../../../components/CustomButtons/Button';

import clsx from 'clsx';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import DescriptionIcon from '@material-ui/icons/Description';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <GroupAddIcon />,
    2: < MenuBookIcon />,
    3: <DescriptionIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 750,
      //   marginLeft: 'auto',
      marginRight: 'auto',
      marginTop:-22
    },
  },
  paper: {
    // marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: 19,
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    // padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  card: {
    boxShadow: '0 2px 8px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)',
    // marginTop:'110px'
    // marginLeft:'-10px',
    paddingRight: '3px',
    textAlign: 'unset',
    backgroundColor: '#fbfafa',
    // marginLeft:'11px',
    marginTop: '65px'
  }
}));

const steps = ['Personal Info', 'Education Info', 'Certificates/ID'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Certificates />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className={classes.root}>

      <Grid container>

        <Grid item xs={12} sm={9} md={9} >
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" style={{ color: '#3d8588',marginTop:-20 }} align="center">
                Doctor Details
          </Typography>
              <Stepper style={{ color: '#3d8588' }} activeStep={activeStep} connector={<ColorlibConnector />} className={classes.stepper}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      Finish
                </Typography>
                    <div style={{ marginLeft: 225 }}>
                      <img src={avatar} alt="..." />
                    </div>

                    <Button
                      component={RouterLink}
                      to="/doctor_list"
                    >Back
               </Button>
                  </React.Fragment>
                ) : (
                    <React.Fragment>
                      {getStepContent(activeStep)}
                      <div className={classes.buttons}>
                        {activeStep !== 0 && (
                          <Button onClick={handleBack} className={classes.button}>
                            Back
                    </Button>
                        )}
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </React.Fragment>
                  )}
              </React.Fragment>
            </Paper>
          </main>
        </Grid>
      </Grid>
    </div>
  );
}


