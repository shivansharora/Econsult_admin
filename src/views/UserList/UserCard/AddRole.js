import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Checkbox, FormControlLabel } from '@material-ui/core';
import '../../RoleList/divider.css';
import { green } from '@material-ui/core/colors';
import validate from '../../RoleList/Validation'
import Button from '../../../components/CustomButtons/Button'
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";
import CardIcon from '../../../components/Card/CardIcon';
import styles from "../../../assets/jss/material-dashboard-react/views/DoctorBio";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useForm from '../../../customHooks/useForm';
import { Link as RouterLink } from 'react-router-dom';


const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const useStyles = makeStyles(styles);

const AddRole = () => {
  const classes = useStyles();


  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(create, validate);

  function create() {
    const formData = {
      role: values.role,
      role_title: values.role_title,
      status: values.status,
    }

    // console.log(formData);

    //   Router.History.goBack();
    // props.history.goBack()
  }

  return (
    <div className={classes.root}>

      <Grid container spacing={2} style={{ marginTop: '41px' }}>
        <Grid item xs={12} sm={9} md={9} >
          <Card style={{ marginLeft: '13px', boxShadow: '0 2px 8px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)' }} >
            <CardHeader style={{ width: '147px', padding: '4px' }} color="success" >
              <CardIcon color="success">
                <AddCircleIcon />
              </CardIcon>
              <h4 className={classes.cardTitleWhite}>Add Role</h4>
            </CardHeader>
            <CardBody>
              <form >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} >
                    <div className={classes.stats}>
                      <Typography className={classes.typo} variant="body2">Role ids</Typography>
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} >
                    <FormControlLabel
                      control={<GreenCheckbox
                        checked={values.nurse || false}
                        style={{ marginLeft: '-6px' }}
                        color="primary"
                        name="nurse"
                        onChange={handleChange}
                      />}
                      label="Nurse"
                    />
                  </Grid>

                  <div className="h-divider">
                    <div className="shadow"></div>
                    <div style={{ fontSize: 18 }}>
                      <h2 style={{ fontWeight: 600 }}>Section ids</h2>
                    </div>
                  </div>
                  <Grid item xs={12} sm={6} md={6} >
                    <FormControlLabel
                      control={<GreenCheckbox
                        checked={values.promo || false}
                        style={{ marginLeft: '-6px' }}
                        color="primary"
                        name="promo"
                        onChange={handleChange}
                      />}
                      label="Meetings New"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} >
                    <FormControlLabel
                      control={<GreenCheckbox
                        checked={values.meetings_create || false}
                        style={{ marginLeft: '-6px' }}
                        color="primary"
                        name="meetings_create"
                        onChange={handleChange}
                      />}
                      label="Meetings Create"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} >
                    <FormControlLabel
                      control={<GreenCheckbox
                        checked={values.meetings_join_meeting || false}
                        style={{ marginLeft: '-6px' }}
                        color="primary"
                        name="meetings_join_meeting"
                        onChange={handleChange}
                      />}
                      label="Meetings Join Meeting"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} >
                    <FormControlLabel
                      control={<GreenCheckbox
                        checked={values.meetings_index || false}
                        style={{ marginLeft: '-6px' }}
                        color="primary"
                        name="meetings_index"
                        onChange={handleChange}
                      />}
                      label="Meetings Index"
                    />
                  </Grid>
                </Grid>
                <CardFooter style={{ float: 'right' }}>
                  <Button type="submit">Add</Button>
                  <Button
                    component={RouterLink}
                    to="/user_list"
                  >Cancel</Button>
                </CardFooter>
              </form>
            </CardBody>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddRole;