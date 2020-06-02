import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Performence from './performance';
import Patient from './Patient';

const useStyles = makeStyles(theme => ({
  root: {
  },
  content: {},
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      marginLeft: theme.spacing(1)
    }
  },
  inner: {
    height: 375,
    minWidth: 500
  },
  chart: {
    height: '100%'
  }
}));

const PerformanceOfDoctor = props => {
  const { className } = props;

  const classes = useStyles();

  return (
    <div >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} >
         <Performence/>
        </Grid>
        <Grid item xs={12} sm={6} md={6} >
         <Patient/>
        </Grid>
      </Grid>
    </div>
  );
};

PerformanceOfDoctor.propTypes = {
  className: PropTypes.string
};

export default PerformanceOfDoctor;
