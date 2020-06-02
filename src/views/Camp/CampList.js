import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { Grid, Button, TablePagination } from '@material-ui/core';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import axios from '../../utils/axios';
import Paginate from '../../components/Paginate/Paginate';
import SearchBar from '../../components/SearchBar/SearchBar';
import CampCard from './CampCard/CampCard';
import { Link as RouterLink } from 'react-router-dom';


const styles = theme => ({
  root: {
    padding: '16px'

  },
  results: {
    marginTop: theme.spacing(2)
  },
  paginate: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  }
});
const useStyles = makeStyles(styles);

const CampList = () => {
  const classes = useStyles();
  const [camps, setCamp] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCamps, setFilteredCamps] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };




  useEffect(() => {
    let mounted = true;

    const fetchProjects = () => {
      axios.get('/api/camps').then(response => {
        if (mounted) {
          setCamp(response.data.camps);
          // console.log(response.data.msos)
        }
      });
    };

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    setFilteredCamps(
      camps.filter(camp => {
        return Object.keys(camp).some(key =>
          camp[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, camps]);

  return (
    <div className={classes.root} style={{ marginTop: '13px' }} >
      <Grid >
        <Grid item xs={12} sm={12} md={12} >
          <SearchBar
            onSearch={e => setSearch(e.target.value)}
          />
          <Button
            className={classes.filterButton}
            style={{ float: 'right' }}
            color="primary"
            size="small"
            variant="outlined"
            component={RouterLink}
            to="/create_camp"
          >
            <LocalPharmacyIcon className={classes.filterIcon} /> Create Camp
        </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} >
          <div className={classes.results}>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              {filteredCamps.length} Records found. Page {page + 1} of{' '}
              {Math.ceil(filteredCamps.length / rowsPerPage)}
            </Typography>
            {filteredCamps.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(camp => (
              <CampCard
                key={camp.id}
                camp={camp}

              />
            ))}
          </div>
          <div className={classes.paginate}>
            <TablePagination
              component="div"
              count={filteredCamps.length}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              page={page}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
            />
          </div>
        </Grid>

      </Grid>
    </div>
  );
};

export default CampList;
