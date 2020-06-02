import React,{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
import Grid from '@material-ui/core/Grid';
import CustomInput from '../CustomInput/CustomInput';
import SearchBar from '../SearchBar/SearchBar'; 
import axios from '../../utils/axios';
import ProjectCard from './PatientCard/PatientCard';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow:1,
    backgroundColor: '#eaeaea',
    // width: 1020,
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  indicator: {
    backgroundColor: '#3daa99'
  }

}));

export default function VerticalTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [rowsPerPage] = useState(10);
  const [page] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchProjects = () => {
      axios.get('/api/projects').then(response => {
        if (mounted) {
          setProjects(response.data.projects);
        }
      });
    };

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        style={{ color:'#3daa99' }}
        indicatorColor="primary"
        classes={{ indicator: classes.indicator }}
      //   textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Today's Patient" {...a11yProps(0)} />
        <Tab label="Patient Waiting" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0} >
         {/* <Grid container  spacing={2}>
        <Grid item xs={12} sm={12} md={12} > */}
        <div className={classes.results}>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="body2"
                >
                  {projects.length} Records found. Page {page + 1} of{' '}
                  {Math.ceil(projects.length / rowsPerPage)}
                </Typography>
                {projects.map(project => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                ))}
              </div>
        {/* </Grid>
        </Grid>  */}
        </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
}