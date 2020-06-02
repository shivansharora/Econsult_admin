import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Divider, CardContent, CardHeader, Grid } from '@material-ui/core';
import Card from '../../../components/Card/Card';

import PerformanceChart from './Chart/PerformanceChart';
import PatientChart from './Chart/PatientChart'

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
  const { className, ...rest } = props;

  const classes = useStyles();

  const data = {
    thisWeek: {
      data: [],
      labels: []
    },
    thisMonth: {
      data: [],
      labels: []
    },
    thisYear: {
      data: [50, 230, 80, 300, 250, 160, 105, 250, 120, 280, 100, 400],
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    }
  };

  return (
    <div >
          <Card
            {...rest}
            className={clsx(classes.root, className)}
          >
            <CardHeader
              title="Patient Viewed"
            />
            <Divider />
            <CardContent className={classes.content}>
              <PerfectScrollbar>
                <div className={classes.inner}>
                  <PatientChart
                    className={classes.chart}
                    data={data.thisYear.data}
                    labels={data.thisYear.labels}
                  />
                </div>
              </PerfectScrollbar>
            </CardContent>
          </Card>
    </div>
  );
};

PerformanceOfDoctor.propTypes = {
  className: PropTypes.string
};

export default PerformanceOfDoctor;
