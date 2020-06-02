import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CardAvatar from '../../../components/Card/CardAvatar';
import avatar from "../../../assets/img/doctorbio.png";


export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} >
      <CardAvatar profile style={{ marginTop:-15 }}> 
        <a href="#pablo" onClick={e => e.preventDefault()}>
            <img src={avatar} alt="..." />
        </a>
       </CardAvatar>
       </Grid>
        <Grid item xs={12} sm={12} md={12} >
        <TextField
        fullWidth
          inputProps={{
            readOnly:true
          }}
          id="name"
          name="name"
          label="Full Name"
          value="Rajesh Kumar"
          // changed={handleChange}

        />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            required
            inputProps={{
              readOnly:true
            }}
            id="mobile"
            name="mobile"
            label="Number"
            value="7894561230"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            required
            inputProps={{
              readOnly:true
            }}
            id="email"
            name="email"
            label="Email"
            value="rajesh@gmail.com"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            required
            inputProps={{
              readOnly:true
            }}
            id="gender"
            name="gender"
            label="Gender"
            value="Male"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            required
            inputProps={{
              readOnly:true
            }}
            id="age"
            name="age"
            label="Age"
            value="45"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            required
            inputProps={{
              readOnly:true
            }}
            id="address"
            name="address"
            label="Address"
            value="Delhi"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
