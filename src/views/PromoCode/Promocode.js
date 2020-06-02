
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from '../../components/SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';
import { Button, TablePagination } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import axios from '../../utils/axios';
import PercentageCard from '../PromoCode/PercentageCard/PercentageCard';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import RedeemIcon from '@material-ui/icons/Redeem';
import { Link as RouterLink } from 'react-router-dom';
import FixedCard from './FixedCard/FixedCard';




const useStyles = makeStyles(theme => ({
  indicator: {
    backgroundColor: '#3cb0b3'
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
    marginTop: -8,
    float: 'right'
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

const PromoCode = (props) => {
  const classes = useStyles();
  const [percentagePromos, setPromo] = useState([]);
  const [fixedPromos, setFixedPromo] = useState([]);



  useEffect(() => {
    let mounted = true;

    const fetchPercentagePromo = () => {
      axios.get('/api/percentagepromocode').then(response => {
        if (mounted) {
          setPromo(response.data.percentagePromos);
          console.log(response.data.percentagePromos);
        }
      });
    };

    const fetchFixedPromo = () => {
      axios.get('/api/fixedpromocode').then(response => {
        if (mounted) {
          setFixedPromo(response.data.fixedPromos);
          //   console.log(response.data.percentagePromos);
        }
      });
    };

    fetchPercentagePromo();
    fetchFixedPromo();
    return () => {
      mounted = false;
    };
  }, []);


  return (
    <div className={classes.root1}>
      <Grid>
        <Grid item xs={12} sm={12} md={12} >
          <CustomTabs
            headerColor="success"
            tabs={[
              {
                tabName: "Percentage",
                // tabIcon: '',
                tabContent: (
                  <React.Fragment>
                    <div className={classes.header}>
                      <Grid item xs={12} sm={12} md={12} >
                        <SearchBar
                        // onSearch={e => setSearch(e.target.value)}

                        />
                        <Button
                          className={classes.filterButton}
                          style={{ float: 'right' }}
                          color="primary"
                          size="small"
                          variant="outlined"
                          component={RouterLink}
                          to="/create_promocode"
                        >
                          <RedeemIcon className={classes.filterIcon} /> Create Promo Code
                        </Button>
                      </Grid>
                      {percentagePromos.map(promo => (
                        <Grid
                          item
                          key={promo.id}
                          md={3}
                          sm={3}
                          xs={12}
                        >

                          <PercentageCard promo={promo} />

                        </Grid>
                      ))}
                    </div>
                    {/* <div className={classes.paginate}>
                  <TablePagination
                  component="div"
                  // count={filteredMso.length}
                  // onChangePage={handleChangePage}
                  // onChangeRowsPerPage={handleChangeRowsPerPage}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  rowsPerPageOptions={[5, 10, 25]}
                  />
              </div> */}
                  </React.Fragment>

                )
              },
              {
                tabName: "Flat",
                // tabIcon: '',
                tabContent: (
                  <div className={classes.header}>
                    <Grid item xs={12} sm={12} md={12} >
                      <SearchBar
                      // onSearch={e => setSearch(e.target.value)}

                      />
                      <Button
                        className={classes.filterButton}
                        style={{ float: 'right' }}
                        color="primary"
                        size="small"
                        variant="outlined"
                        component={RouterLink}
                        to="/create_promocode"
                      >
                        <RedeemIcon className={classes.filterIcon} /> Create Promo Code
                   </Button>
                    </Grid>
                    {fixedPromos.map(fixedpromo => (
                      <Grid
                        item
                        key={fixedpromo.id}
                        md={3}
                        sm={3}
                        xs={12}
                      >

                        <FixedCard fixedpromo={fixedpromo} />
                      </Grid>
                    ))}
                  </div>
                )
              },
              {
                tabName: "Unapproved",
                // tabIcon: '',
                tabContent: (
                  <div className={classes.header}>
                    {/* <Grid item xs={12} sm={12} md={12} >
                   <Button
                       className={classes.filterButton}
                       style={{ float:'right' }}
                       color="primary"
                       size="small"
                       variant="outlined"
                       component={RouterLink}
                       to="/create_promocode"
                       >
                       <RedeemIcon className={classes.filterIcon} /> Create Promo Code
                   </Button>
                   </Grid>
                 {fixedPromos.map(fixedpromo => (
                <Grid
                   item
                   key={fixedpromo.id}
                   md={3}
                   sm={3}
                   xs={12}
                   >

                   <FixedCard fixedpromo={fixedpromo}/>
                   </Grid>
                    ))} */}
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
export default PromoCode;




