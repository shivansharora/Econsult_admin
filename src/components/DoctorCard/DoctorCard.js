import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import WorkIcon from '@material-ui/icons/Work';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import StarIcon from '@material-ui/icons/Star';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Link as RouterLink } from 'react-router-dom';

import Card from "../Card/Card";
import CardAvatar from "../Card/CardAvatar";
import CardBody from "../Card/CardBody";
import CardFooter from "../Card/CardFooter";
import avatar from "../../assets/img/mask2.png";
import styles from "../../assets/jss/material-dashboard-react/views/doctorCategory";
import Custombuttons from '../CustomButtons/Button';

const useStyles = makeStyles(styles);
const DoctorCard = () => {
  const classes = useStyles();
  return (
    <Card profile className={classes.card} >
      <CardAvatar profile>
        <a href="#pablo" onClick={e => e.preventDefault()}>
          <img src={avatar} alt="..." />
        </a>
      </CardAvatar>
      <CardBody profile>
        <h6 className={classes.cardCategory}> Dr Avinash Jain(MBBS)
            </h6>
        {/* <h6 className={classes.cardCategory}>MBBS</h6> */}
        <div className={classes.stats}>
          <WorkIcon />6+ yrs of Experience
            </div> <br />
        <div className={classes.stats}>
          <AccountBalanceWalletIcon /> Rs 200
            </div><br />

        <div className={classes.stats}>
          <ScheduleIcon />Consultation Time :11 AM
            </div><br />
        {/* <div className={classes.stats}>
              <AssignmentIcon/>Slots :
            </div><br/> */}
        <div className={classes.stats}>
          <StarIcon style={{ backgroundColor: '#FF9529' }} />4.5/5
            </div><br />
      </CardBody>
      <CardFooter>
        <Custombuttons
          style={{ padding: '8px 3px', fontSize: '14px' }}
          component={RouterLink}
          to="book_appointment"
        >Book Appointment</Custombuttons>
        <Custombuttons
          style={{ padding: '8px 17px', fontSize: '14px' }}
          component={RouterLink}
          to="/doctor_category/1"
        >View Bio</Custombuttons>
      </CardFooter>
    </Card>
  );
}

export default DoctorCard;