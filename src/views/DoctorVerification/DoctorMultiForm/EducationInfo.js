import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Educational Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} >
        <TextField
        fullWidth
          inputProps={{
            readOnly:true
          }}
          id="registrationnumber"
          name="registrationnumber"
          label="Registration Number"
          value="112233654"
          // changed={handleChange}

        />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            required
            inputProps={{
              readOnly:true
            }}
            id="course"
            name="course"
            label="Course Name"
            value="MD, MBBS"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            required
            inputProps={{
              readOnly:true
            }}
            id="speciality"
            name="speciality"
            label="Speciality"
            value="Family Medicine"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            required
            inputProps={{
              readOnly:true
            }}
            id="experiance"
            name="experiance"
            label="Work Experiance"
            value="6 years"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            required
            inputProps={{
              readOnly:true
            }}
            id="college"
            name="college"
            label="college"
            value="All India Institute Of Medical Sciences, New Delhi"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
