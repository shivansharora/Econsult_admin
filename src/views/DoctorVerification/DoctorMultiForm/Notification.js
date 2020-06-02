import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { green,red } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const RedRadio = withStyles({
  root: {
    color: red[400],
    '&$checked': {
      color: red[600],
    },
  },
  checked: {},
})((props) => <Radio color="default"  {...props} />);

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

 const Notification=()=> {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Notification
      </Typography>
      <Grid container spacing={2}>
       <label style={{ marginTop:8 }}>Reject</label>
      <RedRadio
        checked={selectedValue === 'Reject'}
        onChange={handleChange}
        value="Reject"
        name="reject"
        inputProps={{ 'aria-label': 'A' }}
      />
      <label style={{ marginTop:8 }}>Accept</label>
       <GreenRadio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
      />
        <Grid item xs={12} sm={12} md={12}>
         <TextField
          id="standard-multiline-flexible"
          label="Message"
          multiline
          rowsMax="4"
       // value={value}
       // onChange={handleChange}
          fullWidth
          />
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}
export default Notification;