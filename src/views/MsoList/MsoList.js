import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { Grid, Button, TablePagination } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import axios from '../../utils/axios';
import SearchBar from '../../components/SearchBar/SearchBar';
import MsoCard from './MsoCard/MsoCard';
import { Link as RouterLink } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';



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

const MsoList = () => {
  const classes = useStyles();
  const [msos, setProjects] = useState([]);
  const [search, setSearch] = useState('');
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
      axios.get('/api/msolist').then(response => {
        if (mounted) {
          setProjects(response.data.msos);
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
    setFilteredMso(
      msos.filter(mso => {
        return Object.keys(mso).some(key =>
          mso[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, msos]);


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
            to="/create_mso"
          >
            <PersonAddIcon className={classes.filterIcon} /> Create MSO
        </Button>
        <Button
            className={classes.filterButton}
            style={{ float: 'right',marginRight:3 }}
            color="primary"
            size="small"
            variant="outlined"
            component={RouterLink}
            to="/add_mso_role"
          >
            <AddCircleIcon className={classes.filterIcon} /> Add Role
        </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} >
          <div className={classes.results}>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default MsoList;
