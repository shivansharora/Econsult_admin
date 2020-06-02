import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import clsx from 'clsx';
import {

  colors
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  dropZone: {
    border: `1px dashed #bab2b2`,
    padding: 20,
    width: 160,
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: colors.grey[50],
      opacity: 0.5,
      cursor: 'pointer'
    }
  },
  // dragActive: {
  //   backgroundColor: colors.grey[50],
  //   opacity: 0.5
  // },
  image: {
    width: 130
  },
  info: {
    marginTop: theme.spacing(1)
  },
  list: {
    maxHeight: 320
  },
  actions: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}));

export default function Certificate(props) {
  const classes = useStyles();
  const { className, ...rest } = props;


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Uploaded Certificates
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div
            {...rest}
            className={clsx(classes.root, className)}
          >
            <div
              className={clsx({
                [classes.dropZone]: true,
              })}
            >
              <div>
                <img
                  alt="Select file"
                  className={classes.image}
                  src="/images/undraw_add_file2_gvbb.svg"
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            {...rest}
            className={clsx(classes.root, className)}
          >
            <div
              className={clsx({
                [classes.dropZone]: true,
              })}
            >
              <div>
                <img
                  alt="Select file"
                  className={classes.image}
                  src="/images/undraw_add_file2_gvbb.svg"
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            {...rest}
            className={clsx(classes.root, className)}
          >
            <div
              className={clsx({
                [classes.dropZone]: true,
              })}
            >
              <div>
                <img
                  alt="Select file"
                  className={classes.image}
                  src="/images/undraw_add_file2_gvbb.svg"
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            {...rest}
            className={clsx(classes.root, className)}
          >
            <div
              className={clsx({
                [classes.dropZone]: true,
              })}
            >
              <div>
                <img
                  alt="Select file"
                  className={classes.image}
                  src="/images/undraw_add_file2_gvbb.svg"
                />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}