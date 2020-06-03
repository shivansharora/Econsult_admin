import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

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
import MenuItem from '@material-ui/core/MenuItem';
import CustomInput from '../../components/CustomInput/CustomInput';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import AssociatedSymptoms from '../Symtoms/AddSymptoms'



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
  noLabel: {
    marginTop: theme.spacing(3),
  },
  fieldset: {
    // width: '500px',
    border: '1px solid black',
    // padding: '1Opx'
},
legend :{
    fontWeight: 'bold'
}
});


const useStyles = makeStyles(styles);

const AddPhrase = (props) => {
  const options = [
    { label: "Complaint Title", value: "Complaint Title" },
    { label: "Allergy Title", value: "Allergy Title" },
    { label: "Verb", value: "Verb" },
    { label: "Generic", value: "Generic" },
    { label: "Time of day", value: "Time of day" },
    { label: "Intake Pattern", value: "Intake Pattern" },
    { label: "Associated Sysmtom Title", value: "Associated Sysmtom Title" }
  ];

  const complaint = [
    { label: "Fever", value: "Fever" },
    { label: "Cold", value: "Cold" },
    { label: "Cough", value: "Cough" },
  ];


  const classes = useStyles();

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(create, validate);

  function create() {

    console.log(values);

    // props.history.goBack()
  }
  const Complaint = () => {
    return (
      <Grid item xs={12} sm={6} md={6} >
        <TextField style={{ minWidth: 290 }}
          id="medical_phrases"
          select
          name="medical_phrases"
          label="Complaint"
          value={values.medical_phrases || ''}
          onChange={handleChange}

        >
          {complaint.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {errors.medical_phrases && (
          <p className="help is-danger">{errors.pharse_category}</p>
        )}

      </Grid>
    )
  }

  const AssociatedSymptom=()=>{
    return(
      <fieldset className={classes.fieldset}>
           <legend className={classes.legend}>Associated Symptom</legend>
           <AssociatedSymptoms/>
      </fieldset>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={8} >
          <Card style={{ marginTop: '24px' }}>
            <CardHeader style={{ width: '147px', padding: '14px' }} color="success" >
              <CardIcon color="success">
                <SortByAlphaIcon />
              </CardIcon>
              <h4 className={classes.cardTitleWhite}>Add Phrase</h4>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit} noValidate required>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={6} >
                    <TextField style={{ minWidth: 290 }}
                      id="pharse_category"
                      select
                      name="pharse_category"
                      label="Pharse Category"
                      value={values.pharse_category || ''}
                      onChange={handleChange}

                    >
                      {options.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    {errors.pharse_category && (
                      <p className="help is-danger">{errors.pharse_category}</p>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} >
                    {values.pharse_category === 'Associated Sysmtom Title' ?
                      Complaint() : null}
                  </Grid>

                 

                  <Grid item xs={12} sm={6} md={6} >
                    <CustomInput
                      required
                      id="phrase_english"
                      name="phrase_english"
                      label="Phrase English"
                      value={values.phrase_english || ''}
                      changed={handleChange}

                    />
                    {errors.phrase_english && (
                      <p className="help is-danger">{errors.phrase_english}</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} >
                    <CustomInput
                      required
                      id="phrase_hindi"
                      name="phrase_hindi"
                      label="Phrase Hindi"
                      value={values.phrase_hindi || ''}
                      changed={handleChange}

                    />
                    {errors.phrase_hindi && (
                      <p className="help is-danger">{errors.phrase_hindi}</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} >
                    <TextField
                      id="description_english"
                      name="description_english"
                      label="English Description"
                      multiline
                      rows={4}
                      value={values.description_english || ''}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                    {errors.description_english && (
                      <p className="help is-danger">{errors.description_english}</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} >
                    <TextField
                      id="description_hindi"
                      name="description_hindi"
                      label="Hindi Description"
                      multiline
                      rows={4}
                      value={values.description_hindi || ''}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                    {errors.description_hindi && (
                      <p className="help is-danger">{errors.description_hindi}</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} >
                    {values.pharse_category === 'Complaint Title' ?
                      AssociatedSymptom() : null}
                  </Grid>
                </Grid>
                <CardFooter style={{ float: 'right' }}>
                  <Button type="submit">Add</Button>
                  <Button
                    component={RouterLink}
                    to="/medical_phrase"
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

export default AddPhrase;