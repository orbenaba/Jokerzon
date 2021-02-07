import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import DatePicker from "./DatePicker";



export default function AddressForm(attributesFunctions) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Seller details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="sellerName"
            name="sellerName"
            label="Your Full name"
            fullWidth
            autoComplete="given-name"
            onChange={e => attributesFunctions.onFullNameChange(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="ProductName"
            name="productName"
            label="Product Name"
            fullWidth
            onChange={e => attributesFunctions.onProductNameChange(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            fullWidth
            onChange={e => attributesFunctions.onDescriptionChange(e.target.value)}
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
            onChange={e => attributesFunctions.onPriceChange(e.target.value)}
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
            onChange={e => attributesFunctions.onCityChange(e.target.value)}
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
            onChange={e => attributesFunctions.onCountryChange(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          type="number"
          InputProps={{
            inputProps:{
              max:60,min:1
            }
          }}
          id="estimatedDays"
          name="estimatedDays"
          label="Estimated Days"
          fullWidth
          onChange={e => attributesFunctions.onEstimatedDaysChange(e.target.value)}
        />
      </Grid>
        {/*
        <Grid item xs={12} sm={6}>
          {DatePicker()}
          </Grid>*/}
      </Grid>
    </React.Fragment>
  );
}