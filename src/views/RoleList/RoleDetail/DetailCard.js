import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  colors
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: theme.spacing(6)
  },
  marginTop: {
    marginTop: theme.spacing(4)
  },
  dates: {
    padding: theme.spacing(2),
    backgroundColor: colors.grey[100]
  }
}));

const Details = props => {
  const { invoice, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <Grid
          container
        //   justify="space-between"
        >
          <Grid item>
            <Typography
              //   align="right"
              component="h5"
              variant="h3"
            >
              Role
            </Typography>
          </Grid>
        </Grid>
        <Grid
          className={clsx(classes.marginTop, classes.dates)}
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              component="h4"
              gutterBottom
              variant="overline"
            >
              Role
            </Typography>
            <Typography>admin</Typography>
          </Grid>
          <Grid item>
            <Typography
              component="h4"
              gutterBottom
              variant="overline"
            >
              Role title
            </Typography>
            <Typography>Admin</Typography>
          </Grid>
          <Grid item>
            <Typography
              component="h4"
              gutterBottom
              variant="overline"
            >
              Status
            </Typography>
            <Typography>Active</Typography>
          </Grid>
        </Grid>
        <Table className={classes.marginTop}>
          <TableHead>
            <TableRow>
              <TableCell>Role Sections</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow >
              <TableCell>Meetings New</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Meetings Create</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Meetings Join Meeting</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Meetings Index</TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </CardContent>
    </Card>
  );
};

Details.propTypes = {
  className: PropTypes.string,
  //   Details: PropTypes.object.isRequired
};

export default Details;
