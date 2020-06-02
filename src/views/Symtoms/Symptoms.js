import { makeStyles } from '@material-ui/core/styles';

import SearchBar from '../../components/SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';


import axios from '../../utils/axios';
import AddIcon from '@material-ui/icons/Add';
import { Link as RouterLink } from 'react-router-dom';
import Results from './Approved/Result'



const useStyles = makeStyles(theme => ({
  indicator: {
    marginTop: -10
  },
  root1: {
    padding: '16px',
    marginTop: 22

  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 7,
    marginTop: -30,
    float: 'right'
  },
  results: {
    marginTop: -22
  },
  paginate: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  }

}));

const SymptomList = (props) => {
  const classes = useStyles();
  const [search , setSearch] = useState([]);



  return (
    <div className={classes.root1}>
      <Grid>
        <Grid item xs={12} sm={12} md={12} >
          <div className={classes.results}>
            <Button
              className={classes.filterButton}
              style={{ float: 'right' }}
              color="primary"
              size="small"
              variant="outlined"
              component={RouterLink}
              to="/create_symptoms"
            >
              <AddIcon className={classes.filterIcon} />Add Symptoms
                        </Button>
            <SearchBar
              onSearch={e => setSearch(e.target.value)}
            /><br />
            <Results
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default SymptomList;




