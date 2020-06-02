import { makeStyles } from '@material-ui/core/styles';

import SearchBar from '../../components/SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';
// import {useEffectOnce} from 'react-use';
import { Typography, TablePagination } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import axios from '../../utils/axios';
import PTab from '../../components/Tab/tab';
// import axios1 from 'axios';

import DoctorCard from './DoctorCard/DoctorCard';
import MsoCard from './MsoCard/MsoCard';
import StoreIcon from '@material-ui/icons/Store';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#eaeaea',
  },
  indicator: {
    backgroundColor: '#3cb0b3'
  },
  root1: {
    padding: '12px',
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

const Dashboard = (props) => {
  const classes = useStyles();
  const [doctors, setDoctor] = useState([]);
  const [msos, setMso] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [filteredMso, setFilteredMso] = useState([]);
  // const [data, setData] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

 
  // useEffect(() => {
  //   const fetchEmployee = async () => {
  //     try {
  //      await axios1.get(
  //       'http://dummy.restapiexample.com/api/v1/employees',
  //     ).then(result=>{
  //       setData(result.data.data);
  //       console.log(result.data.data)
  //     }) 
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // } 
  //  fetchEmployee();
  //  }, []);


  useEffect(() => {
    let mounted = true;
    const fetchDoctor = () => {
      axios.get('/api/doctorlist').then(response => {
        if (mounted) {
          setDoctor(response.data.doctors);
        }
      });
    };
    const fetchmso = () => {
      axios.get('/api/msolist').then(response => {
        if (mounted) {
          setMso(response.data.msos);
        }
      });
    };
    fetchDoctor();
    fetchmso();

    return () => {
      mounted = false;
    };
  }, []);

  // console.log(age);
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

  // const indexOfLastPost = currentPage * postsPerPage;

  // const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // const currentPosts = msos.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = pageNumber => setCurrentPage(pageNumber);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const handleChangeIndex = index => {
  //   setValue(index);
  // };

  return (
    <div className={classes.root1}>
      <Grid>
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
                      {Math.ceil(doctors.length / rowsPerPage)}
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
              {
                tabName: "Patient",
                tabIcon: SupervisorAccountIcon,
                tabContent: (
                  <div className={classes.results}>

                    <PTab />
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
export default Dashboard;




