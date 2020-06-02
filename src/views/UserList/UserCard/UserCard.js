import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from "@material-ui/core/styles";
import Card from '../../../components/Card/Card'
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import {
  Avatar,
  CardContent,
  Link,
  Typography,
  // colors
} from '@material-ui/core';

import getInitials from '../../../utils/getInitials';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(76, 175, 80,.4)'
  },
  fab: {
    margin: 2,
    backgroundColor: '#66a668',
    width: 50,
    height: 42
  },
  fab1: {
    margin: 2,
    backgroundColor: '#65b5c7',
    width: 50,
    height: 42
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

const UserCard = props => {
  const { user, className, ...rest } = props;

  const classes = useStyles();

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
            src={user.author.avatar}
          >
            {getInitials(user.author.name)}
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
              {user.name}
            </Link>
          </div>
        </div>
        <div className={classes.stats}>
          <Typography style={{ fontWeight: 500 }} variant="body2">Role</Typography>
          <Typography style={{ fontSize: 'unset', fontWeight: 300 }} variant="h6">
            {user.role}
          </Typography>

        </div>
        <div className={classes.stats}>
          <Typography style={{ fontWeight: 500 }} variant="body2">Age</Typography>
          <Typography style={{ fontSize: 'unset', fontWeight: 300 }} variant="h6">
            {user.age}
          </Typography>

        </div>
        <div className={classes.stats}>
          <Typography style={{ fontWeight: 500 }} variant="body2">Number</Typography>
          <Typography style={{ fontSize: 'unset', fontWeight: 300 }} variant="h6">{user.number}</Typography>

        </div>
        <div className={classes.stats}>
          <Typography style={{ fontWeight: 500 }} variant="body2">User Name</Typography>
          <Typography style={{ fontSize: 'unset', fontWeight: 300 }} variant="h6">{user.user_name}</Typography>

        </div>
        <div className={classes.stats}>
          <Typography style={{ fontWeight: 500 }} variant="body2">Mode</Typography>
          <Typography style={{ fontSize: 'unset', fontWeight: 500, color: '#5c8e2b' }} variant="h6">{user.mode}</Typography>

        </div>
        <div className={classes.stats}>
          <Typography style={{ fontWeight: 500 }} variant="body2">Registered Date</Typography>
          <Typography style={{ fontSize: 'unset', fontWeight: 300 }} variant="h6">
            {moment(user.registered_date).format('DD MMMM YYYY')}
          </Typography>

        </div>
        {/* <div className={classes.stats}>
        <Typography style={{ fontWeight:500 }} variant="body2">Last Visit Date</Typography>
          <Typography style={{ fontSize:'unset',fontWeight:300 }} variant="h6">
            {moment(project.end_date).format('DD MMMM YYYY')}
          </Typography>
          
        </div> */}
        <div className={classes.actions}>
          <Typography style={{ fontWeight: 500, marginLeft: 32 }} variant="body2">Action</Typography>
          <Link
            color="inherit"
            component={RouterLink}
            to={`/edit_user/${user.id}`}
            variant="h6"
          >
            <Tooltip title="Edit" aria-label="Edit">
              {/* <IconButton aria-label="Edit">  */}
              <Fab className={classes.fab}>

                <EditIcon />
              </Fab>
              {/* </IconButton> */}
            </Tooltip>
          </Link>
          <Link
            color="inherit"
            component={RouterLink}
            to={`/add_user_role/${user.id}`}
            variant="h6"
          >
            <Tooltip title="Add Role" aria-label="Add Role">
              <Fab className={classes.fab}>

                <AddCircleIcon />
              </Fab>
            </Tooltip>
          </Link>

        </div>
      </CardContent>
    </Card>
  );
};

UserCard.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default UserCard;
