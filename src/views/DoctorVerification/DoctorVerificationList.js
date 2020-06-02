import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TablePagination } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import axios from '../../utils/axios';
import Paginate from '../../components/Paginate/Paginate';
import SearchBar from '../../components/SearchBar/SearchBar';
import DoctorCard from './DoctorCard/DoctorCard';


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

const DoctorVerificationList = () => {
  const classes = useStyles();
  const [doctors, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);


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
      axios.get('/api/doctorlist').then(response => {
        if (mounted) {
          setProjects(response.data.doctors);
        }
      });
    };

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    setFilteredDoctors(
      doctors.filter(doctor => {
        return Object.keys(doctor).some(key =>
          doctor[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, doctors]);


  return (
    <div className={classes.root} style={{ marginTop: '13px' }} >
      <Grid >
        <Grid item xs={12} sm={12} md={12} >
          <SearchBar
            onSearch={e => setSearch(e.target.value)}
          />
          <div className={classes.results}>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              {filteredDoctors.length} Records found. Page {page + 1} of{' '}
              {Math.ceil(filteredDoctors.length / rowsPerPage)}
            </Typography>
            {filteredDoctors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(doctor => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
              />
            ))}
          </div>
          <div className={classes.paginate}>
            <TablePagination
              component="div"
              count={filteredDoctors.length}
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

export default DoctorVerificationList;
