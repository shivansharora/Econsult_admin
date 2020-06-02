import { makeStyles } from '@material-ui/core/styles';


import SearchBar from '../../components/SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';
import { Typography, TablePagination } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import axios from '../../utils/axios';
import DoctorCard from './DoctorReport/DoctorCard';
import MsoCard from './MsoReport/MsoCard';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import StoreIcon from '@material-ui/icons/Store';



const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#eaeaea',
  },
  indicator: {
    backgroundColor: '#3cb0b3'
  },
  root1: {
    padding: '16px',
    marginTop: 22

  },
  results: {
    // marginTop: theme.spacing(2)
  },
  paginate: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const Report = (props) => {
  const classes = useStyles();
  const [doctors, setProjects] = useState([]);
  const [msos, setMso] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [filteredMso, setFilteredMso] = useState([]);



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
      axios.get('/api/doctorreportlist').then(response => {
        if (mounted) {
          setProjects(response.data.doctors);
        }
      });
    };
    const fetchmso = () => {
      axios.get('/api/msoreportlist').then(response => {
        if (mounted) {
          setMso(response.data.msos);
        }
      });
    };

    fetchProjects();
    fetchmso();

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

  useEffect(() => {
    setFilteredMso(
      msos.filter(mso => {
        return Object.keys(mso).some(key =>
          mso[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, msos]);




  return (
    <div className={classes.root1}>
      <Grid item xs={12} sm={12} md={12} >
        <CustomTabs
          headerColor="success"
          tabs={[
            {
              tabName: "Doctor",
              tabIcon: LocalHospitalIcon,
              tabContent: (
                <div className={classes.results}>
                  <Grid item xs={12} sm={12} md={12} >
                    <SearchBar
                      onSearch={e => setSearch(e.target.value)}
                    />
                  </Grid>
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
                </div>

              )
            },
            {
              tabName: "MSO",
              tabIcon: StoreIcon,
              tabContent: (
                <div className={classes.results}>
                  <Grid item xs={12} sm={12} md={12} >
                    <SearchBar
                      onSearch={e => setSearch(e.target.value)}
                    />
                  </Grid>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    {filteredMso.length} Records found. Page {page + 1} of{' '}
                    {Math.ceil(filteredMso.length / rowsPerPage)}
                  </Typography>

                  {filteredMso.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(mso => (
                    <MsoCard
                      key={mso.id}
                      mso={mso}
                    />
                  ))}
                  <div className={classes.paginate}>
                    <TablePagination
                      component="div"
                      count={filteredMso.length}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                      page={page}
                      rowsPerPage={rowsPerPage}
                      rowsPerPageOptions={[5, 10, 25]}
                    />
                  </div>
                </div>
              )
            },
          ]}
        />
      </Grid>
    </div>
  );
}
export default Report;