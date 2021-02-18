import React, {useState, useEffect} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';


import calculatePercentageProgress from "../../Helper/calculatePercentageProgress";
import {DATE_OF_PURCHASE, ESTIMATED_DAYS} from "../../Magic";


// Orange progress bar symbolizes "On the way" namely, currently delivered
// Green progress bar symbolizes Arrived
export default function Purchase(props) {
    const [variant, setVariant] = useState(props.isArrived?"success":"warning");
    const [purchase, setPurchase] = useState(props.purchase);
    const [percentage, setPercentage] = useState(0);
    
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

    return (
        <div className="py-5">
            <div className="container" style={{fontFamily:'cursive'}}>
                <div className="row">
                    <div class="fa fa-user fa-2x" aria-hidden="true" style={{color:'grey'}}></div>
                    <ProgressBar variant={variant} now={percentage + 30} label={`${percentage}%`} style={{height:'2.5rem',width:'60rem',fontSize:'1.6rem', fontWeight:'bolder', background:'rgba(102,0,51,0.1)', borderRadius:'10rem'}}/>            
                    <div class="fa fa-check fa-2x" aria-hidden="true" style={{marginLeft:'1rem',color:'grey'}}></div>
                </div>
            </div>

        </div>
    )
}