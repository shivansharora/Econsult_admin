import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';


import Card from "../../../components/Card/Card";
import CardAvatar from "../../../components/Card/CardAvatar";
import CardBody from "../../../components/Card/CardBody";
import avatar from "../../../assets/img/patient.png";
import styles from "../../../assets/jss/material-dashboard-react/views/DoctorBio";
import StarIcon from '@material-ui/icons/Star';

import DateRangeIcon from '@material-ui/icons/DateRange';
import WcIcon from '@material-ui/icons/Wc';
import TodayIcon from '@material-ui/icons/Today';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';





const useStyles = makeStyles(styles);

const MsoDetail = () => {
  const classes = useStyles();
  const stat = {
    color: '#352e2e',
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "26px",
    marginLeft: '-10px',
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  }

  return (
    <div className={classes.root}>

      <Grid container spacing={2} >

        <Grid item xs={12} sm={3} md={3} >
          <div>
            <Card profile className={classes.card} >
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody style={{ marginTop: '-15px' }}>

                <h6 className={classes.cardCategory} style={{ textAlign: 'center' }}>Anmol Jain
            </h6><br />
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={12} md={12} >
                    <div style={stat}>
                      <TodayIcon />
                      <span style={{ fontWeight: 400 }}>Age:</span>
                      <span>27</span>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} >
                    <div style={stat}>
                      <WcIcon />
                      <span style={{ fontWeight: 400 }}>Gender:</span>
                      <span> Male</span>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} >
                    <div style={stat}>
                      <DateRangeIcon />
                      <span style={{ fontWeight: 400 }}>DOB:</span>
                      <span>20/06/1995</span>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} >
                    <div style={stat}>
                      <SupervisedUserCircleIcon />
                      <span style={{ fontWeight: 400 }}>Marital Status:</span>
                      <span>Single</span>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} >
                    <div style={stat}>
                      <LocationOnIcon />
                      <span style={{ fontWeight: 400 }}>City:</span>
                      <span>Delhi</span>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} >
                    <div style={stat}>
                      <PhoneAndroidIcon />
                      <span style={{ fontWeight: 400 }}>Number:</span>
                      <span>7017483927</span>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} >
                    <div style={stat}>
                      <EmailIcon />
                      <span style={{ fontWeight: 400 }}>Email:</span>
                      <span>arorashivansh@gmail.com</span>
                    </div>
                  </Grid><br />
                  <Grid item xs={12} sm={12} md={12} >
                    <div style={{ marginLeft: '63px' }} className={classes.stats}>
                      {/* <CustomButton>Edit</CustomButton> */}
                    </div>
                  </Grid>
                </Grid>
              </CardBody>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={9} md={9} >
          <Card style={{ marginLeft: '-1px', boxShadow: '0 2px 8px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)' }} >
            <CardBody>
              <form >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={6} >
                    <div className={classes.stats}>
                      <Typography className={classes.typo} variant="body2">Mso ID</Typography>
                      <br />
                      <Typography className={classes.typoResult} variant="h6">
                        12345
                      </Typography>

                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} >
                    <div className={classes.stats}>
                      <Typography className={classes.typo} variant="body2">Total Patient Registered</Typography>
                      <br />
                      <Typography className={classes.typoResult} variant="h6">
                        25
                      </Typography>

                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} >
                    <div className={classes.stats}>
                      <Typography className={classes.typo} variant="body2">Avg Time For Registration</Typography>
                      <br />
                      <Typography className={classes.typoResult} variant="h6">
                        5 hours
                       </Typography>

                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} >
                    <div className={classes.stats}>
                      <Typography className={classes.typo} variant="body2">Performance Rating</Typography>
                      <br />
                      <Typography className={classes.typoResult} variant="h6">
                        <ul>
                          <li><StarIcon style={{ backgroundColor: '#FF9529', fontSize: 'inherit' }} />4.5</li>
                          <li><StarIcon style={{ backgroundColor: '#FF9529', fontSize: 'inherit' }} />4.2</li>
                          <li><StarIcon style={{ backgroundColor: '#FF9529', fontSize: 'inherit' }} />4</li>
                        </ul>
                      </Typography>

                    </div>
                  </Grid>
                </Grid>
              </form>
            </CardBody>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default MsoDetail;