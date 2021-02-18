import React, {useState, useEffect} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';



import calculatePercentageProgress from "../../Helper/calculatePercentageProgress";
import {DATE_OF_PURCHASE, ESTIMATED_DAYS, BUYER_ADDRESS, SELLER_ADDRESS, COUNTRY, CITY, PRICE, PRODUCT_ID, DESCRIPTION, PRODUCT_NAME} from "../../Magic";
import getDateFormatted from "../../Helper/getDateFormatted";
import getEstimatedDateFormatted from "../../Helper/getEstimatedDateFormatted";





const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor:'rgba(102,0,51,0.1)',
      color: 'black',
      fontSize: '1.2rem'
    }
}));



// Orange progress bar symbolizes "On the way" namely, currently delivered
// Green progress bar symbolizes Arrived
export default function Purchase(props) {
    const classes = useStyles();

    const [variant, setVariant] = useState(props.isArrived?"success":"warning");
    const [purchase, setPurchase] = useState(props.purchase.purchase);
    const [percentage, setPercentage] = useState(0);
    const [arrowDirection, setArrowDirection] = useState("down");
    
    useEffect(()=>{
        async function fetchData(){
            let temp = Number(calculatePercentageProgress(props.purchase.purchase[DATE_OF_PURCHASE], props.purchase.purchase[ESTIMATED_DAYS]));
            if(temp >= 100 || props.isArrived){
                setPercentage(100);
            }
            else{
                setPercentage(temp);
            }
        }
        fetchData();
    }, []);

    const showDetails = ()=>{
        // Flipping the arrow when click on it
        setArrowDirection(arrowDirection === "down"? "up":"down");
    }

    let purchaseDetails = (
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
        </div>);

    console.log("props.purchase -\n",props.purchase.purchase);

    let added = arrowDirection === "up"?purchaseDetails:null;

    return (
        <div className="py-5">
            <div className="container" style={{fontFamily:'cursive'}}>
                <div className="row">
                    <h4 style={{color:'rgb(102,0,51)', marginRight:'1rem'}}>{getDateFormatted(Number(props.purchase.purchase[DATE_OF_PURCHASE])*1000)}</h4>
                    <ProgressBar variant={variant} now={percentage + 30} label={`${percentage}%`} style={{height:'2.5rem',width:'50rem',fontSize:'1.6rem', fontWeight:'bolder', background:'rgba(102,0,51,0.1)', borderRadius:'10rem', marginRight:'1rem'}}/>            
                    <h4 style={{color:'rgb(102,0,51)', marginRight:'1rem'}}>{getEstimatedDateFormatted(props.purchase.purchase[DATE_OF_PURCHASE], props.purchase.purchase[ESTIMATED_DAYS])}</h4>
                </div>
                <p><i class={`arrow ${arrowDirection}`} onClick={()=>{showDetails()}}></i></p>
                {added}
            </div>
        </div>
    )
}