import React from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import './divider.css';
// core components
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import { Link as RouterLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import useForm from '../../customHooks/useForm';
import validate from './Validation'
import { green } from '@material-ui/core/colors';
import MenuItem from '@material-ui/core/MenuItem';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CustomInput from '../../components/CustomInput/CustomInput';

import {
  Checkbox,
  FormControlLabel
} from '@material-ui/core';




const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '17px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "600",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  formControl: {

    minWidth: 290,
  },
  divider: {
    position: 'absolute',
    margin: '12px',
    maxWidth: '60px',
    borderRadius: '100%',
    // border: '1px dashed #aaa',
  },
});



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

const CreateRole = (props) => {
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

    console.log(formData);

    //   Router.History.goBack();
    // props.history.goBack()
  }
  console.log(values);
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={8} >
          <Card style={{ marginTop: '24px' }}>
            <CardHeader style={{ width: '147px', padding: '14px' }} color="success" >
              <CardIcon color="success">
                <PersonAddIcon />
              </CardIcon>
              <h4 className={classes.cardTitleWhite}>Create Role</h4>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit} noValidate required>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={6} >
                    <CustomInput
                      required
                      id="role"
                      name="role"
                      label="Role "
                      value={values.role || ''}
                      changed={handleChange}

                    />
                    {errors.role && (
                      <p className="help is-danger">{errors.role}</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} >
                    <CustomInput
                      required
                      id="role_title"
                      name="role_title"
                      label="Role Title"
                      value={values.role_title || ''}
                      changed={handleChange}

                    />
                    {errors.role_title && (
                      <p className="help is-danger">{errors.role_title}</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} >
                    <TextField style={{ minWidth: 290 }}
                      id="status"
                      select
                      name="status"
                      label="Status"
                      value={values.status || ''}
                      onChange={handleChange}

                    >
                      <MenuItem value={10}>Active</MenuItem>
                      <MenuItem value={20}>Inactive</MenuItem>

                    </TextField>
                    {errors.status && (
                      <p className="help is-danger">{errors.status}</p>
                    )}
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
                  <Button type="submit">Create</Button>
                  <Button
                    component={RouterLink}
                    to="/role_list"
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

export default CreateRole;