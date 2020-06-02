
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from '../../utils/axios';
import ProjectCard from './PatientCard/PatientCard'
import Grid from '@material-ui/core/Grid';
import SearchBar from '../SearchBar/SearchBar';


// const handleFilter = () => { };
const handleSearch = () => { };

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f5f5f5'

  },
  indicator: {
    backgroundColor: '#3daa99'
  }
}));

export default function FullWidthTabs() {
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

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          style={{ color: '#3daa99' }}
          classes={{ indicator: classes.indicator }}
          // textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Today's Patient" {...a11yProps(0)} />
          <Tab label="Patient Waiting" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={classes.results}>
            <Grid item xs={12} sm={12} md={12} >
              <SearchBar
                //  onFilter={handleFilter}
                onSearch={handleSearch}
              />
            </Grid>
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
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className={classes.results}>
            <Grid item xs={12} sm={12} md={12} >
              <SearchBar
                //  onFilter={handleFilter}
                onSearch={handleSearch}
              />
            </Grid>
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
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}