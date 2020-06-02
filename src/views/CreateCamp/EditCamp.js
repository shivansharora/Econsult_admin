import React, { useState } from "react";
// @material-ui/core components
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

// core components
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import { Link as RouterLink } from 'react-router-dom';
import MultiSelect from "react-multi-select-component";
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

  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
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

const EditCamp = (props) => {
  const options = [
    { label: "Arvind Sharma", value: "Arvind Sharma" },
    { label: "Ashok Gupta", value: "Ashok Gupta" },
    { label: "Shreya Singh", value: "Shreya Singh" },
    { label: "Aman Kumar", value: "Aman Kumar" },
    { label: "Mayank Jain", value: "Mayank Jain" },
    { label: "Seema Aggarwal", value: "Seema Aggarwal" }
  ];
  const [selected, setSelected] = useState([]);
  // const theme = useTheme();
  const validationMsg = "Please select doctor"


  const classes = useStyles();

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(create, validate);

  function create() {
    const formData = {
      camp_type: values.camp_type,
      camp_location: values.camp_location,
      camp_description: values.camp_description,
      doctor: selected,
      mso: values.mso,
      title: values.title,
      type: values.type,
      percentage: values.percentage,
      fixed: values.fixed,
      start_datetime: values.start_datetime,
      end_datetime: values.end_datetime,
      note: values.note

    }

    // console.log(formData);

    //   Router.History.goBack();
    props.history.goBack()
  }
  // console.log(values);
  const percentage = () => {
    return (
      <Grid item xs={12} sm={6} md={6} >
        <TextField
          required
          fullWidth
          id="percentage"
          name="percentage"
          label="Discount(%)"
          placeholder="%"
          value={values.percentage || ''}
          onChange={handleChange}

        />
        {errors.percentage && (
          <p className="help is-danger">{errors.percentage}</p>
        )}
      </Grid>
    )
  }

  const fixed = () => {
    return (
      <Grid item xs={12} sm={6} md={6} >
        <TextField
          required
          fullWidth
          id="fixed"
          name="fixed"
          label="Discount"
          placeholder="Rs"
          value={values.fixed || ''}
          onChange={handleChange}

        />
        {errors.fixed && (
          <p className="help is-danger">{errors.fixed}</p>
        )}
      </Grid>
    )
  }
  const addPromo = () => {
    return (
      <React.Fragment>
        <Grid item xs={12} sm={12} md={12} >
          <CustomInput
            required
            inputProps={{
              autoFocus: true
            }}
            id="title"
            name="title"
            label="Promo Code Title"
            value={values.title || ''}
            changed={handleChange}

          />
          {errors.title && (
            <p className="help is-danger">{errors.title}</p>
          )}

        </Grid>
        <Grid item xs={12} sm={6} md={6} >
          <TextField style={{ minWidth: 204 }}
            id="type"
            select
            name="type"
            label="Discount Type"
            value={values.type || ''}
            onChange={handleChange}

          >
            <MenuItem value={10}>Percentage</MenuItem>
            <MenuItem value={20}>Flat</MenuItem>

          </TextField>
          {errors.type && (
            <p className="help is-danger">{errors.type}</p>
          )}
        </Grid>
        {/* <Grid item xs={12} sm={6} md={6} > */}
        {values.type === 20
          ? fixed()
          : percentage()}
        {/* </Grid> */}
      </React.Fragment>
    )
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={8} >
          <Card style={{ marginTop: '24px' }}>
            <CardHeader style={{ width: '147px', padding: '14px' }} color="success" >
              <CardIcon color="success">
                <PersonAddIcon />
              </CardIcon>
              <h4 className={classes.cardTitleWhite}>Edit Camp</h4>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit} noValidate required>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={6} >
                    <TextField style={{ minWidth: 290 }}
                      id="camp_type"
                      select
                      name="camp_type"
                      label="Camp Type"
                      value={values.camp_type || ''}
                      onChange={handleChange}

                    >
                      <MenuItem value={10}>Awareness Camp</MenuItem>
                      <MenuItem value={20}>Inauguration Camp</MenuItem>
                      <MenuItem value={30}>Pathology Camp</MenuItem>
                      ))}
										</TextField>
                    {errors.camp_type && (
                      <p className="help is-danger">{errors.camp_type}</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} >
                    <CustomInput
                      className={`input ${errors.camp_location && 'is-danger'}`}
                      required
                      id="camp_location"
                      name="camp_location"
                      label="Camp Location"
                      value={values.camp_location || ''}
                      changed={handleChange}

                    />
                    {errors.camp_location && (
                      <p className="help is-danger">{errors.camp_location}</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} >
                    <TextField
                      id="camp_description"
                      name="camp_description"
                      label="Camp Description"
                      multiline
                      rowsMax="4"
                      value={values.camp_description}
                      onChange={handleChange}
                      fullWidth
                    />
                    {errors.camp_description && (
                      <p className="help is-danger">{errors.camp_description}</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} style={{ marginTop: 9, marginLeft: -3 }} >
                    <label>Doctors</label>
                    <MultiSelect
                      required
                      id="doctor"
                      options={options}
                      value={selected}

                      onChange={setSelected}
                      labelledBy="Doctors"
                      validationMessage={validationMsg}
                    />

                  </Grid>

                  <Grid item xs={12} sm={12} md={12} >
                    <TextField style={{ minWidth: 290 }}
                      id="mso"
                      select
                      name="mso"
                      label="MSO"
                      value={values.mso || ''}
                      onChange={handleChange}

                    >
                      <MenuItem value={10}>Anil Kumar</MenuItem>
                      <MenuItem value={20}>Puneet Singh</MenuItem>
                      <MenuItem value={30}>Shivam Gupta</MenuItem>
                      ))}
										</TextField>
                    {errors.mso && (
                      <p className="help is-danger">{errors.mso}</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} >
                    <FormControlLabel
                      control={<GreenCheckbox
                        checked={values.promo || false}
                        style={{ marginLeft: '-6px' }}
                        color="primary"
                        name="promo"
                        onChange={handleChange}
                      />}
                      label="Click to Add Promo Code"
                    />
                  </Grid>

                  {values.promo === true ?
                    addPromo() : null}

                  <Grid item xs={12} sm={6} md={6} >
                    <TextField
                      style={{ width: 290 }}
                      id="start_datetime"
                      label="Start Date"
                      type="date"
                      name="start_datetime"
                      value={values.start_datetime || ''}
                      onChange={handleChange}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                    {errors.start_datetime && (
                      <p className="help is-danger">{errors.start_datetime}</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} >
                    <TextField
                      style={{ width: 290 }}
                      id="end_datetime"
                      label="End Date"
                      type="date"
                      name="end_datetime"
                      value={values.end_datetime || ''}
                      onChange={handleChange}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                    {errors.end_datetime && (
                      <p className="help is-danger">{errors.end_datetime}</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} >
                    <TextField
                      id="note"
                      name="note"
                      label="Note"
                      multiline
                      rowsMax="4"
                      value={values.note || ''}
                      onChange={handleChange}
                      fullWidth
                    />
                    {errors.note && (
                      <p className="help is-danger">{errors.note}</p>
                    )}
                  </Grid>
                </Grid>
                <CardFooter style={{ float: 'right' }}>
                  <Button type="submit">Save</Button>
                  <Button
                    component={RouterLink}
                    to="/camp_list"
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

export default EditCamp;