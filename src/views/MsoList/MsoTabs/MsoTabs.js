import { makeStyles } from '@material-ui/core/styles';

import React from 'react';
import Grid from '@material-ui/core/Grid';

import EqualizerIcon from '@material-ui/icons/Equalizer';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import MsoInfo from '../../MsoDetail/MsoListDetail';
import Result from '../../MsoDetail/Performance/Result';


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

}));

const MsoFullDetail = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root1}>
      <Grid>
        <Grid item xs={12} sm={12} md={12} >
          <CustomTabs
            headerColor="success"
            tabs={[
              {
                tabName: "Detail",
                tabIcon: ImportContactsIcon,
                tabContent: (
                  <div className={classes.results}>
                   <MsoInfo/>
                  </div>

                )
              },
              {
                tabName: "Performance",
                tabIcon: EqualizerIcon,
                tabContent: (
                  <div className={classes.results}>
                      <Result/>
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
export default MsoFullDetail;




