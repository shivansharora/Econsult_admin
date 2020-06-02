import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TablePagination } from '@material-ui/core';
import { Grid, Button } from '@material-ui/core';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import VoiceOverOffIcon from '@material-ui/icons/VoiceOverOff';
import axios from '../../utils/axios';
import SearchBar from '../../components/SearchBar/SearchBar';
import UserCard from './UserCard/UserCard';
import InactiveUserCard from './InactiveUserCard/UserCard';
import { Link as RouterLink } from 'react-router-dom';
import GroupIcon from '@material-ui/icons/Group';

const styles = theme => ({
  root: {
    padding: '12px',
    marginTop: 22

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

const UserList = () => {
  const classes = useStyles();
  const [activeusers, setProjects] = useState([]);
  const [InactiveUsers, setUser] = useState([]);

  const [search, setSearch] = useState('');
  const [filteredActive, setFilteredActive] = useState([]);
  const [filteredInactive, setFilteredInactive] = useState([]);



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
      axios.get('/api/userlist').then(response => {
        if (mounted) {
          setProjects(response.data.activeusers);
          //   console.log(users.length);
        }
      });
    };
    const fetchUser = () => {
      axios.get('/api/inactiveuserlist').then(response => {
        if (mounted) {
          setUser(response.data.InactiveUsers);
          //   console.log(users.length);
        }
      });
    };

    fetchProjects();
    fetchUser();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    setFilteredActive(
      activeusers.filter(activeuser => {
        return Object.keys(activeuser).some(key =>
          activeuser[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, activeusers]);

  useEffect(() => {
    setFilteredInactive(
      InactiveUsers.filter(InactiveUser => {
        return Object.keys(InactiveUser).some(key =>
          InactiveUser[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, InactiveUsers]);



  return (
    <div className={classes.root} >
      <Grid >
        <Grid item xs={12} sm={12} md={12} >

          <CustomTabs
            headerColor="success"
            tabs={[
              {
                tabName: "Active",
                tabIcon: GroupIcon,
                tabContent: (

                  <div className={classes.results}>
                    <Button
                      className={classes.filterButton}
                      style={{ float: 'right', marginTop: -31 }}
                      color="primary"
                      size="small"
                      variant="outlined"
                      component={RouterLink}
                      to="/create_user"
                    >
                      <PersonAddIcon className={classes.filterIcon} /> Create User
                    </Button>
                    <SearchBar
                      onSearch={e => setSearch(e.target.value)}
                    />

                    {filteredActive.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(user => (
                      <UserCard
                        key={user.id}
                        user={user}
                      />
                    ))}
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      {filteredActive.length} Records found. Page {page + 1} of{' '}
                      {Math.ceil(filteredActive.length / rowsPerPage)}
                    </Typography>
                    <div className={classes.paginate}>
                      <TablePagination
                        component="div"
                        count={filteredActive.length}
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
                tabName: "Inactive",
                tabIcon: VoiceOverOffIcon,
                tabContent: (
                  <div className={classes.results}>
                    <Button
                      className={classes.filterButton}
                      style={{ float: 'right', marginTop: -31 }}
                      color="primary"
                      size="small"
                      variant="outlined"
                      component={RouterLink}
                      to="/create_user"
                    >
                      <PersonAddIcon className={classes.filterIcon} /> Create User
                    </Button>
                    <SearchBar
                      onSearch={e => setSearch(e.target.value)}
                    />

                    {filteredInactive.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(user => (
                      <InactiveUserCard
                        key={user.id}
                        user={user}
                      />
                    ))}
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      {filteredInactive.length} Records found. Page {page + 1} of{' '}
                      {Math.ceil(filteredInactive.length / rowsPerPage)}
                    </Typography>
                    <div className={classes.paginate}>
                      <TablePagination
                        component="div"
                        count={filteredInactive.length}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5, 10, 25]}
                      />
                    </div>
                  </div>
                )
              }
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserList;
