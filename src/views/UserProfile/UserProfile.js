
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from '@material-ui/core/Grid';

import CustomInput from '../../components/CustomInput/CustomInput';
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import CardAvatar from '../../components/Card/CardAvatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';

import avatar from "../../assets/img/doctorbio.png";

import DateRangeIcon from '@material-ui/icons/DateRange';
import WcIcon from '@material-ui/icons/Wc';
import TodayIcon from '@material-ui/icons/Today';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ContactlessIcon from '@material-ui/icons/Contactless';
import EmailIcon from '@material-ui/icons/Email';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';




const styles = theme => ({
    root: {
        padding: '16px'

    }
});
const useStyles = makeStyles(styles);

const UserProfile = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ marginTop: '3px' }} >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={9} md={9} >
                    <Card >
                        <CardHeader style={{ width: '147px', padding: '4px' }} color="success" >
                            <CardIcon color="success">
                                <AccountCircleIcon />
                            </CardIcon>
                            <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                        </CardHeader>
                        <CardBody>
                            <form >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={12} >
                                        <CustomInput
                                            required
                                            inputProps={{
                                                autoFocus: true
                                            }}
                                            id="fullName"
                                            name="fullName"
                                            label="First name"
                                            value="Ranjana Sharma"
                                            inputProps={{
                                                disabled: true
                                            }}
                                        // value={values.fullName}
                                        // changed={handleFieldChange}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <CustomInput
                                            required
                                            id="mobile"
                                            name="mobile"
                                            label="Mobile"
                                            value="7017483927"
                                        // value={values.mobile}
                                        // changed={handleFieldChange}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <CustomInput
                                            required
                                            id="email"
                                            name="email"
                                            label="Email"
                                            value="ranjana@gmail.com"
                                        // value={values.email}
                                        // changed={handleFieldChange}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <CustomInput
                                            required
                                            id="age"
                                            name="age"
                                            label="Age"
                                            value="27"
                                        // value={values.mobile}
                                        // changed={handleFieldChange}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <CustomInput
                                            required
                                            id="gender"
                                            name="gender"
                                            label="Gender"
                                            value="Female"
                                            // value={values.email}
                                            // changed={handleFieldChange}
                                            inputProps={{
                                                disabled: true
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <CustomInput
                                            required
                                            id="city"
                                            name="city"
                                            label="City"
                                            value="Male"
                                            // value={values.email}
                                            // changed={handleFieldChange}
                                            inputProps={{
                                                disabled: true
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <CustomInput
                                            required
                                            id="state"
                                            name="state"
                                            label="State"
                                            value="Delhi"
                                            // value={values.email}
                                            // changed={handleFieldChange}
                                            inputProps={{
                                                disabled: true
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <CustomInput
                                            required
                                            id="pincode"
                                            name="pincode"
                                            label="Pincode"
                                            value="247001"
                                        // value={values.email}
                                        // changed={handleFieldChange}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <CustomInput
                                            required
                                            id="emergency_no"
                                            name="emergency_no"
                                            label="Emergency No"
                                            value="7017483927"
                                        // value={values.mobile}
                                        // changed={handleFieldChange}

                                        />
                                    </Grid>
                                    <Divider />
                                    <Grid item xs={12} sm={6} md={6} >
                                        <CustomInput
                                            required
                                            id="curr_pass"
                                            name="curr_pass"
                                            label="Current Password"
                                            value=""
                                        // value={values.mobile}
                                        // changed={handleFieldChange}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <CustomInput
                                            required
                                            id="new_pass"
                                            name="new_pass"
                                            label="New Password"
                                            value=""
                                        // value={values.mobile}
                                        // changed={handleFieldChange}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <CustomInput
                                            required
                                            id="conf_pass"
                                            name="conf_pass"
                                            label="Confirm Password"
                                            value=""
                                        // value={values.mobile}
                                        // changed={handleFieldChange}

                                        />
                                    </Grid>
                                </Grid>
                            </form>
                        </CardBody>
                        <CardFooter>
                            <Button>Update Profile</Button>
                        </CardFooter>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Card style={{ marginTop: '45px',boxShadow:'0 2px 8px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)' }} className={classes.card}>
                        <CardAvatar profile>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img src={avatar} alt="..." />
                            </a>
                        </CardAvatar>
                        <CardBody >
                            <h6 className={classes.cardCategory}
                             style={{ textAlign: 'center',fontSize:17,fontWeight:500 }}>Ranjana Sharma
                            </h6><br />
                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={12} md={12} >
                                    <div className={classes.stats}>
                                        <TodayIcon />
                                        <span style={{ fontWeight: 400 }}>Age:</span>
                                        <span>27</span>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} >
                                    <div className={classes.stats}>
                                        <WcIcon />
                                        <span style={{ fontWeight: 400 }}>Gender:</span>
                                        <span> Female</span>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} >
                                    <div className={classes.stats}>
                                        <LocationOnIcon />
                                        <span style={{ fontWeight: 400 }}>City:</span>
                                        <span>Delhi</span>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} >
                                    <div className={classes.stats}>
                                        <PhoneAndroidIcon />
                                        <span style={{ fontWeight: 400 }}>Number:</span>
                                        <span>7017483927</span>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} >
                                    <div className={classes.stats}>
                                        <ContactlessIcon />
                                        <span style={{ fontWeight: 400 }}>Emergency No:</span>
                                        <span>7017483927</span>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} >
                                    <div className={classes.stats}>
                                        <EmailIcon />
                                        <span style={{ fontWeight: 400 }}>Email:</span>
                                        <span>ranjana@gmail.com</span>
                                    </div>
                                </Grid>
                            </Grid>
                        </CardBody>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default UserProfile;