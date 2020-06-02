import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import { Page } from 'components';

import styles from "../../assets/jss/material-dashboard-react/views/DoctorBio";


const useStyles = makeStyles(styles);

const Review = () => {
    const classes = useStyles();
    const review={
         
        transform: 'rotate(330deg)',
           fontSize: '30px',
           color: 'rgba(187, 29, 29, 0.38)',
           position: 'absolute',
           textTransform: 'uppercase',
           paddingLeft: '32%',
        //    margin:125
       }

    return (
        <Page
            className={classes.root}

        >
          <p style={review}>Reviewed</p>   
        </Page>
    );
};

export default Review;
