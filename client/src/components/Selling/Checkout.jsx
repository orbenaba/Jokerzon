import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import Review from './Review';
import Spinner from "../Shared/Spinner";
import Title from "../Shared/Title";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Fill details', 'Review your product'];

function getStepContent(step, onFullNameChange, onProductNameChange, onDescriptionChange, onPriceChange, onCityChange, onCountryChange, onEstimatedDaysChange, fullName, productName, description, price, city, country, estimatedDays) {
  switch (step) {
    case 0:
      return <AddressForm onFullNameChange={onFullNameChange} onProductNameChange={onProductNameChange} 
            onDescriptionChange={onDescriptionChange} onPriceChange={onPriceChange} onCityChange={onCityChange} 
            onCountryChange={onCountryChange} onEstimatedDaysChange={onEstimatedDaysChange}
            fullName={fullName} productName={productName} description={description} price={price} city={city} country={country} estimatedDays={estimatedDays}/>;
    case 1:
      return <Review fullName={fullName} productName={productName} description={description} price={price} city={city} country={country} estimatedDays={estimatedDays}/>;
    default:
      throw new Error('Unknown step');
  }
}

/**
 * 
 * @param {The Address of the current meta - mask wallet in the browser} props.myAccount
 * @param {The Jokerzon DApp contract} props.jokerzonContract 
 */

export default function Checkout(props) {
  const [fullName, setFullName] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [estimatedDays, setEstimatedDays] = useState(0);
  const [jokerzonContract, setJokezonContract] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(()=>{
    async function fetchData(){
      await setJokezonContract(props.jokerzonContract);
      setIsLoading(false);  
    }
    fetchData();
  }, [])

  const onFullNameChange = (fullName) =>{
    setFullName(fullName);
  }
  
  const onProductNameChange = (productName) =>{
    setProductName(productName);
  }
  
  const onDescriptionChange = (description) =>{
    setDescription(description);
  }
  
  const onPriceChange = (price)=>{
    setPrice(price);
  }
  
  const onCityChange = (city) =>{
    setCity(city);
  }     
  
  const onCountryChange = (country)=>{
    setCountry(country);
  }
  
  const onEstimatedDaysChange = (estimatedDays)=>{
    setEstimatedDays(estimatedDays);
  }
  
  function validateAllTheFields(){
      if(fullName.length < 4 || fullName.length > 20){
          return "Full name must be in length [4, 20]";
      }
      if(productName.length < 3 || productName.length > 40){
        return "Product name must be in length [3, 40]";
      }
      let descriptionLength = description.split(' ').length;
      if(descriptionLength < 2 || descriptionLength > 100){
        return "Description must contain at least 2 words and at most 100 words";
      }
      if(price <= 0 || price >= 1000000){
        return "Price must be positive and at the most 1,000,000";
      }
      if(city === "" || country === ""){
        return "All the fields are required";
      }
      if(estimatedDays < 1 || estimatedDays > 60){
        return "Estimated Days must be in range [1, 60]";
      }
      return true;
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = async() => {
    let res = validateAllTheFields();
    if(res === true){
      setActiveStep(activeStep + 1);
      //When publishing the new Product, we need to add it to the jokerzon contract
      if(activeStep === 1){
          await jokerzonContract.methods.addProduct(fullName,productName, description,price,city,country,estimatedDays).send({from:props.myAccount});
      }
    }
    else
      alert(res);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  if(isLoading){
    return <Spinner></Spinner>
  }
  else{
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="center" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap style={{marginLeft:'51rem', alignItems:'center'}}>
              Jokerzon
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Title name="contract" title="Selling"></Title>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for collaborating with Jokerzon.
                  </Typography>
                  <Typography variant="subtitle1">
                      Your product has been successfully published, Your Wallet will be paid as soon as someone will be interested in the item.
                  </Typography>
                  {/**Here, we need to create the contract */}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep, onFullNameChange, onProductNameChange, onDescriptionChange, onPriceChange, onCityChange, onCountryChange, onEstimatedDaysChange, fullName, productName, description, price, city, country, estimatedDays)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Publish' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </React.Fragment>
    );
  
  }
}


