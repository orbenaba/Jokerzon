import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

//import DatePicker from "./DatePicker";



export default function AddressForm(attributes) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Seller details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            value={attributes.fullName}
            required
            id="sellerName"
            name={attributes.fullName}
            label="Your Full name"
            fullWidth
            autoComplete="given-name"
            onChange={e => attributes.onFullNameChange(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            value={attributes.productName}
            id="ProductName"
            name={attributes.productName}
            label="Product Name"
            fullWidth
            onChange={e => attributes.onProductNameChange(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            value={attributes.description}
            id="description"
            name={attributes.description}
            label="Description"
            fullWidth
            onChange={e => attributes.onDescriptionChange(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            value={attributes.price}
            required
            id="price"
            name={attributes.price}
            label="price"
            InputProps={{
              inputProps:{
                max:100000000,min:0.01
              }
            }}
            onChange={e => attributes.onPriceChange(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={attributes.city}
            id="city"
            name={attributes.city}
            label="City"
            fullWidth
            onChange={e => attributes.onCityChange(e.target.value)}
            autoComplete="shipping address-level2"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="shipping-country"
            name={attributes.country}
            value={attributes.country}
            label="Shipping Country"
            fullWidth
            autoComplete="shipping country"
            onChange={e => attributes.onCountryChange(e.target.value)}
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
          value={attributes.estimatedDays}
          name={attributes.estimatedDays}
          label="Estimated Days"
          fullWidth
          onChange={e => attributes.onEstimatedDaysChange(e.target.value)}
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