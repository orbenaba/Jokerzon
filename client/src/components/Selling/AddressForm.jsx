import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import DatePicker from "./DatePicker";



export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="ProductName"
            name="productName"
            label="Product Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            required
            id="price"
            name="price"
            label="price"
            InputProps={{
              inputProps:{
                max:100000000,min:0.01
              }
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="shipping-country"
            name="shipping-country"
            label="Shipping Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {DatePicker()}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}