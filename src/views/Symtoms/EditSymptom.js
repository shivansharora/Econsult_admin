import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from 'react-router-dom';

import ReactDOM from "react-dom";
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import {

  TextField,
  Grid,
} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

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
  icon: {
    marginTop: 24
  }
});


const useStyles = makeStyles(styles);


const EditSymptom = () => {
  const classes = useStyles();

  const { register, control, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      test: [{ associated_symptom: "", english: "", hindi: "", }]
    }
  });
  const { fields, append, remove } = useFieldArray(
    {
      control,
      name: "test"
    }
  );

  const onSubmit = data => console.log("data", data);


  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={8} >
          <Card style={{ marginTop: '24px' }}>
            <CardHeader style={{ width: '147px', padding: '14px' }} color="success" >
              <h4 className={classes.cardTitleWhite}>Edit Symptom</h4>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ul>
                  {fields.map((item, index) => {
                    return (
                      <li key={item.id}>
                        <Controller
                          as={<TextField />}
                          name={`test[${index}].associated_symptom`}
                          label="Associated Symptom"
                          defaultValue={`${item.associated_symptom}`}
                          control={control}
                        />&nbsp;&nbsp;&nbsp;
  
                      <Controller
                          as={<TextField />}
                          name={`test[${index}].english`}
                          control={control}
                          label="English"
                          defaultValue=""
                        />&nbsp;&nbsp;&nbsp;
                    <Controller
                          as={<TextField />}
                          name={`test[${index}].hindi`}
                          control={control}
                          label="Hindi"
                          defaultValue=""
                        />
                        <HighlightOffIcon
                          className={classes.icon}
                          onClick={() => remove(index)}
                        />
                      </li>
                    );
                  })}
                </ul>
                <section>
                  <AddCircleIcon
                    onClick={() => {
                      append({ associated_symptom: "", english: "", hindi: "" });
                    }}
                  />
                </section>
                <Grid item xs={12} sm={8} md={8} >
                  <CardFooter style={{ float: 'left' }}>
                    <Button type="submit">Add</Button>
                    <Button
                      component={RouterLink}
                      to="/associated_symptoms"
                    >Cancel</Button>
                  </CardFooter>
                </Grid>
              </form>
            </CardBody>
          </Card>

        </Grid>
      </Grid>
    </div>
  );
}


export default EditSymptom;
