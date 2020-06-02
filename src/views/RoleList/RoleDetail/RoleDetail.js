import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import DetailCard from './DetailCard';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

const Detail = () => {
  const classes = useStyles();




  return (
    <Page
      className={classes.root}
      title="Invoice Details"
    >
      <DetailCard />
    </Page>
  );
};

export default Detail;
