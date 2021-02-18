import React, {useState, useEffect} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Details from "./Details";

import calculatePercentageProgress from "../../Helper/calculatePercentageProgress";
import {DATE_OF_PURCHASE, ESTIMATED_DAYS, BUYER_ADDRESS, SELLER_ADDRESS, COUNTRY, CITY, PRICE, PRODUCT_ID, DESCRIPTION, PRODUCT_NAME} from "../../Magic";
import getDateFormatted from "../../Helper/getDateFormatted";
import getEstimatedDateFormatted from "../../Helper/getEstimatedDateFormatted";


// Orange progress bar symbolizes "On the way" namely, currently delivered
// Green progress bar symbolizes Arrived
export default function Purchase(props) {

    const [variant, setVariant] = useState(props.isArrived?"success":"warning");
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

    let added = arrowDirection === "up"?<Details purchase={props.purchase.purchase}></Details>:null;

    return (
        <div className="py-5">
            <div className="container" style={{fontFamily:'cursive'}}>
                <div className="row">
                    <h4 style={{color:'rgb(102,0,51)', marginRight:'1rem'}}>{getDateFormatted(Number(props.purchase.purchase[DATE_OF_PURCHASE])*1000)}</h4>
                    <ProgressBar variant={variant} now={percentage + 30} label={`${percentage}%`} style={{height:'2.5rem',width:'50rem',fontSize:'1.6rem', fontWeight:'bolder', background:'rgba(102,0,51,0.1)', borderRadius:'10rem', marginRight:'1rem'}}/>            
                    <h4 style={{color:'rgb(102,0,51)', marginRight:'1rem'}}>{getEstimatedDateFormatted(props.purchase.purchase[DATE_OF_PURCHASE], props.purchase.purchase[ESTIMATED_DAYS])}</h4>
                </div>
                <p><i class={`arrow ${arrowDirection}`} style={{cursor:'pointer'}} onClick={()=>{showDetails()}}></i></p>
                {added}
            </div>
        </div>
    )
}