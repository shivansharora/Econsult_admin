import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

// core components
import Button from '../../../components/CustomButtons/Button';
import Card from '../../../components/Card/Card';
import CardHeader from '../../../components/Card/CardHeader';
import CardIcon from '../../../components/Card/CardIcon';
import CardBody from '../../../components/Card/CardBody';
import CardFooter from '../../../components/Card/CardFooter';
import { Link as RouterLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import useForm from '../../../customHooks/useForm';
import validate from './Validation'
import MenuItem from '@material-ui/core/MenuItem';
import PieChartIcon from '@material-ui/icons/PieChart';
import CustomInput from '../../../components/CustomInput/CustomInput';



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





const useStyles = makeStyles(styles);

const CreateSection = (props) => {
  const classes = useStyles();

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(create, validate);

  function create() {
    const formData = {
      section: values.section,
      section_title: values.section_title,
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
                <PieChartIcon />
              </CardIcon>
              <h4 className={classes.cardTitleWhite}>Create Section</h4>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit} noValidate required>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={6} >
                    <CustomInput
                      required
                      id="section"
                      name="section"
                      label="Section "
                      value={values.section || ''}
                      changed={handleChange}

                    />
                    {errors.section && (
                      <p className="help is-danger">{errors.section}</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} >
                    <CustomInput
                      required
                      id="section_title"
                      name="section_title"
                      label="Section Title"
                      value={values.section_title || ''}
                      changed={handleChange}

                    />
                    {errors.section_title && (
                      <p className="help is-danger">{errors.section_title}</p>
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

                </Grid>
                <CardFooter style={{ float: 'right' }}>
                  <Button type="submit">Create</Button>
                  <Button
                    component={RouterLink}
                    to="/section_list"
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

export default CreateSection;