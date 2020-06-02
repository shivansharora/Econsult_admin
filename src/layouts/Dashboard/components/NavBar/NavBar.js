import React, { Fragment, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme  } from '@material-ui/styles';
import { Drawer, Divider, Paper,  Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import useRouter from 'utils/useRouter';
import { Navigation } from 'components';
import navigationConfig from './navigationConfig';
import Notify from '../../../../assets/img/notify2.png'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PricingModal from './Notes/NotesModal'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    // overflowY: 'auto'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - 189px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    width: '145px'
  },
  drawerPaper: {
    // width: drawerWidth,
    width:192,
    backgroundColor:'#3cb0b3',
    overflowY: 'hidden'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
 
    padding: '11px',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    // marginLeft:'-14px' 
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(2)
  },
  navigation: {
    // marginTop: theme.spacing(2),
    marginTop: "20px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none",
    position: "unset"
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  profile: {
    cursor:'pointer',
    fontSize: '30px'
  }
}));
const drawerWidth = 240;
const NavBar = props => {
  const { openMobile, onMobileClose, className} = props;

  const classes = useStyles();
  const router = useRouter();
  // const session = useSelector(state => state.session);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [pricingModalOpen, setPricingModalOpen] = React.useState(false);
  
  const handlePricingOpen = () => {
    setPricingModalOpen(true);
  };

  const handlePricingClose = () => {
    setPricingModalOpen(false);
  };



  const handleToggle = () => {
    setOpen1((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen1(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen1(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open1);
  React.useEffect(() => {
    if (prevOpen.current === true && open1 === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open1;
  }, [open1]);




  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const back=()=>{
  //   props.history.goBack();
  // }
  useEffect(() => {
    if (openMobile) {
      onMobileClose && onMobileClose();
    }
  }, [router.location.pathname]);

  const navbarContent = (
    <div style={{   marginLeft:'1px',padding:'0px' }} className={classes.content}>
      <nav className={classes.navigation}>
        {navigationConfig.map(list => (
          <Navigation
            style={{ fontSize:'12px' }}
            component="div"
            key={list.pages}
            pages={list.pages}
            // title={list.title}
          />
        ))}
      </nav>
    </div>
  );

  return (
    <Fragment>
      <div className={classes.root}>
     
      <AppBar
      style={{ backgroundColor:'#3cb0b3' }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
       
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
         
          <Typography variant="h6" noWrap>
         
          </Typography>
          <div>
            <ArrowBackIcon onClick={()=>props.history.goBack()}/>
          </div>
          
          
         <div style={{ position:'absolute',left:'78%' }}>
         <Button
         style={{ marginTop:'-22px' }}
        variant="contained"
        color="secondary"
        onClick={handlePricingOpen}
        className={classes.button}
        startIcon={<NoteAddIcon />}
      >
        Notes
      </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <RouterLink to="/">
          <img
            alt="Logo"
            src={Notify}
            style={{ width:33,marginTop:10 }}
          />
         
        </RouterLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
        <AccountCircleIcon
         className={classes.profile}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        />
        
        <Popper open={open1} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              // style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open1} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

         </div>
         
        </Toolbar>
        <PricingModal
        onClose={handlePricingClose}
        open={pricingModalOpen}
      />
       
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
        <div style={{  minWidth:0,width:0 }}
            // {...rest}
            className={clsx(classes.root, className)}
          >
            {navbarContent}
          </div>
        <Divider />
       
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
    </Fragment>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default withRouter(NavBar) ;

