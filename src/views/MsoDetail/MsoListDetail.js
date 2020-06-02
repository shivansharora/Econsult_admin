import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from '@material-ui/core';

import { Page } from 'components';
import MsoDetail from './MsoDetail/MsoDetail';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    marginTop: '-33px',
    padding: '8px'
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const MsoListDetail = props => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="MSO Detail"
    >
      <MsoDetail></MsoDetail>


    </Page>
  );
};



export default MsoListDetail;
