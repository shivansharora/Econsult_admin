import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from "@material-ui/core/styles";
// import VisibilityIcon from '@material-ui/icons/Visibility';
import StarIcon from '@material-ui/icons/Star';
import Card from '../../../components/Card/Card'

import {
  Avatar,
  // Button,
  // Card,
  CardContent,
  Link,
  Typography,
  colors
} from '@material-ui/core';

import getInitials from '../../../utils/getInitials';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
    cursor: 'pointer',
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(76, 175, 80,.4)'
    // transition: theme.transitions.create('transform', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen
    // }),
    // '&:hover': {
    //   transform: 'scale(1.1)'
    // }
  },
  content: {
    padding: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexWrap: 'wrap'
    },
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  header: {
    maxWidth: '100%',
    width: 240,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      flexBasis: '100%'
    }
  },
  avatar: {
    marginRight: theme.spacing(2),
    width: '80px',
    height: '80px'
  },
  stats: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  },
  actions: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  }
}));

const DoctorCard = props => {
  const { doctor, className, ...rest } = props;

  const classes = useStyles();

  // const statusColors = {
  //   'In progress': colors.orange[600],
  //   Canceled: colors.grey[600],
  //   Completed: colors.green[600]
  // };

  return (
    <Card
      {...rest}
      style={{ alignItems: 'unset' }}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <Avatar
            alt="Author"
            className={classes.avatar}
            src={doctor.author.avatar}
          >
            {getInitials(doctor.author.name)}
          </Avatar>
          <div>
            <Typography style={{ fontWeight: 500 }} variant="body2">
              Name
            </Typography>
            <Link
              color="textPrimary"
              component={RouterLink}
              noWrap
              to="#"
              variant="h5"
              style={{ fontSize: 'unset', fontWeight: 300 }}
            >
              {doctor.title}
            </Link>
          </div>
        </div>
        <div className={classes.stats}>
          <Typography style={{ fontWeight: 500 }} variant="body2">Age</Typography>
          <Typography style={{ fontSize: 'unset', fontWeight: 300 }} variant="h6">
            {doctor.age}
          </Typography>

        </div>
        <div className={classes.stats}>
          <Typography style={{ fontWeight: 500 }} variant="body2">Number</Typography>
          <Typography style={{ fontSize: 'unset', fontWeight: 300 }} variant="h6">{doctor.number}</Typography>

        </div>
        <div className={classes.stats}>
          <Typography style={{ fontWeight: 500 }} variant="body2">Degree</Typography>
          <Typography style={{ fontSize: 'unset', fontWeight: 300 }} variant="h6">{doctor.degree}</Typography>

        </div>
        <div className={classes.stats}>
          <Typography style={{ fontWeight: 500 }} variant="body2">Registered Date</Typography>
          <Typography style={{ fontSize: 'unset', fontWeight: 300 }} variant="h6">
            {moment(doctor.registered_date).format('DD MMMM YYYY')}
          </Typography>

        </div>
        {/* <div className={classes.stats}>
        <Typography style={{ fontWeight:500 }} variant="body2">Last Visit Date</Typography>
          <Typography style={{ fontSize:'unset',fontWeight:300 }} variant="h6">
            {moment(project.end_date).format('DD MMMM YYYY')}
          </Typography>
          
        </div> */}
        <div className={classes.stats}>
          <Typography style={{ fontWeight: 500 }} variant="body2">Doctor's Rating</Typography>
          <Typography style={{ fontSize: 'unset', fontWeight: 300 }} variant="h6">
            <StarIcon style={{ backgroundColor: '#FF9529', fontSize: 'inherit' }} />
            {doctor.rating}
          </Typography>

        </div>
        {/* <div className={classes.actions}>
        <Typography style={{ fontWeight:500 }} variant="body2">Action</Typography>
            <Link
            color="inherit"
            component={RouterLink}
            to="/doctor_list/1"
            variant="h6"
          >
            <VisibilityIcon />
          </Link>
          
        </div> */}
      </CardContent>
    </Card>
  );
};

DoctorCard.propTypes = {
  className: PropTypes.string,
  doctor: PropTypes.object.isRequired
};

export default DoctorCard;
