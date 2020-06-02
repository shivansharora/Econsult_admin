import { makeStyles } from '@material-ui/core/styles';

import SearchBar from '../../components/SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';


import axios from '../../utils/axios';
import AddIcon from '@material-ui/icons/Add';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import { Link as RouterLink } from 'react-router-dom';
import Results from './Approved/Result'
import Unapproved from './Unapproved/Result'



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

const MedicalPhrase = (props) => {
  const classes = useStyles();
  const [phrases, setPhrases] = useState([]);
  const [unphrases, setUnPhrases] = useState([]);

  const [search, setSearch] = useState('');
  const [filteredPhrases, setFilteredPhrases] = useState([]);

  const [search1, setSearch1] = useState('');
  const [filteredUnPhrases, setFilteredUnPhrases] = useState([]);



  useEffect(() => {
    let mounted = true;

    const fetchPhrases = () => {
      axios.get('/api/medicalphrases').then(response => {
        if (mounted) {
          setPhrases(response.data.phrases);
          //   console.log(response.data.phrases)
        }
      });
    };


    const fetchUnPhrases = () => {
      axios.get('/api/unapprovedphrases').then(response => {
        if (mounted) {
          setUnPhrases(response.data.unphrases);
          //   console.log(response.data.phrases)
        }
      });
    };

    fetchPhrases();
    fetchUnPhrases();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    setFilteredPhrases(
      phrases.filter(phrase => {
        return Object.keys(phrase).some(key =>
          phrase[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, phrases]);


  useEffect(() => {
    setFilteredUnPhrases(
      unphrases.filter(unphrase => {
        return Object.keys(unphrase).some(key =>
          unphrase[key].toString().toLowerCase().includes(search1.toLowerCase())
        );
      })
    );
  }, [search1, unphrases]);

  return (
    <div className={classes.root1}>
      <Grid>
        <Grid item xs={12} sm={12} md={12} >
          <CustomTabs
            headerColor="success"
            tabs={[

              {
                tabName: "Approved Phrases",
                // tabIcon: '',
                tabContent: (
                  <div className={classes.results}>
                    <Button
                      className={classes.filterButton}
                      style={{ float: 'right' }}
                      color="primary"
                      size="small"
                      variant="outlined"
                      component={RouterLink}
                      to="/create_phrase"
                    >
                      <AddIcon className={classes.filterIcon} />Add Phrases
                        </Button>
                    <SearchBar
                      onSearch={e => setSearch(e.target.value)}
                    /><br />
                    {filteredPhrases && (
                      <Results
                        className={classes.results}
                        filteredPhrases={filteredPhrases}
                      />
                    )}


                  </div>
                )
              },
              {
                tabName: "Unapproved Phrases",
                // tabIcon: '',
                tabContent: (
                  <div className={classes.results}>
                    {/* {search1} */}
                    <SearchBar
                      onSearch={e => setSearch1(e.target.value)}
                    /><br />
                    {filteredUnPhrases && (
                      <Unapproved
                        className={classes.results}
                        filteredUnPhrases={filteredUnPhrases}
                      />
                    )}

                  </div>
                )
              }
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default MedicalPhrase;




