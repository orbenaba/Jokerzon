import React,{useState} from 'react'
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import {DATE_OF_PURCHASE, ESTIMATED_DAYS, BUYER_ADDRESS, SELLER_ADDRESS, COUNTRY, CITY, PRICE, PRODUCT_ID, DESCRIPTION, PRODUCT_NAME} from "../../Magic";


const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor:'rgba(102,0,51,0.1)',
      color: 'black',
      fontSize: '1.2rem'
    }
}));

export default function Details(props) {
    const [purchase, setPurchase] = useState(props.purchase);
    const classes = useStyles();

    return (
        <div style={{backgroundColor:'rgba(0, 0, 0, 0.5)', borderRadius:'3rem'}}>
        <Grid container spacing={1} style={{marginBottom:'0.5rem'}}>
            <Grid item xs>
                <Paper className={classes.paper} style={{fontSize:'2rem'}}>Order details - {purchase[PRODUCT_NAME]}</Paper>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <Paper className={classes.paper} style={{backgroundColor:'rgba(0, 44, 255, 0.1)'}}>Buyer Address</Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper} style={{backgroundColor:'rgba(0, 178, 255, 0.1)'}}>{purchase[BUYER_ADDRESS]}</Paper>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={2.5}>
                <Paper className={classes.paper} style={{backgroundColor:'rgba(0, 178, 255, 0.1)'}}>Seller Address</Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper} style={{backgroundColor:'rgba(0, 44, 255, 0.1)'}}>{purchase[SELLER_ADDRESS]}</Paper>
            </Grid>
        </Grid>
        <Grid container spacing={4}>
            <Grid item xs={2.5}>
                <Paper className={classes.paper} style={{backgroundColor:'rgba(0, 44, 255, 0.1)'}}>Shipped from</Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper} style={{backgroundColor:'rgba(0, 178, 255, 0.1)'}}>{purchase[COUNTRY]}, {purchase[CITY]}</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper} style={{backgroundColor:'rgba(0, 44, 255, 0.1)'}}>Estimated days</Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper} style={{backgroundColor:'rgba(0, 178, 255, 0.1)'}}>{purchase[ESTIMATED_DAYS]}</Paper>
            </Grid>
        </Grid>
        <Grid container spacing={4}>
            <Grid item xs={2.5}>
                <Paper className={classes.paper} style={{backgroundColor:'rgba(0, 178, 255, 0.1)'}}>Price</Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper} style={{backgroundColor:'rgba(0, 44, 255, 0.1)'}}>{purchase[PRICE]}</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper} style={{backgroundColor:'rgba(0, 178, 255, 0.1)'}}>Product ID</Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper} style={{backgroundColor:'rgba(0, 44, 255, 0.1)'}}>{purchase[PRODUCT_ID]}</Paper>
            </Grid>
        </Grid>
        <Grid container spacing={2} style={{marginTop:'0.5rem'}}>
            <Grid item xs={2}>
                <Paper className={classes.paper} style={{backgroundColor:'rgba(0, 178, 255, 0.1)'}}>Description</Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper} style={{backgroundColor:'rgba(0, 44, 255, 0.1)'}}>{purchase[DESCRIPTION]}</Paper>
            </Grid>
        </Grid>
    </div>    )
}