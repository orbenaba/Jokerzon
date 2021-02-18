import React, {useState, useEffect} from 'react'
import Title from "../../Shared/Title";
import Purchase from "../Purchase";

import separateArrivedAndDelivered from "../../../Helper/separateArrivedAndDelivered";
import "./SoldPurchases.css";

// Delivered products are product which have already purchased but not yet arrived
// However, arrived products are products which have already purchases and arrived after the estimated days from the purchased date.
export default function SoldPurchases(props) {
    const [arrived, setArrived] = useState([]);
    const [delivered, setDelivered] = useState([]);

    useEffect(()=>{
        let {delivered, arrived} = separateArrivedAndDelivered(props.purchases);
        setDelivered(delivered);
        setArrived(arrived);
    },[])
    return (<div>
            <Title name="my sold" title="products"></Title>
            <div className="container" style={{alignItems:'center'}}>
                <div className="row">
                    <span className="dates-title">Delivered</span>
                    <span class="fas fa-arrow-right fa-5x" aria-hidden="true" style={{marginLeft:'33%', color:'rgb(102,0,51)'}}></span>
                    <span class="dates-title" style={{marginLeft:'30%'}}>Estimated</span> 
                </div>
                    {arrived.map(arr=>{
                        return (
                                <Purchase isArrived purchase={arr}></Purchase>
                            )
                    })}
                    {delivered.map(del=>{
                        return (
                                <Purchase purchase={del}></Purchase>
                        )
                    })}
            </div>
        </div>
    )
}
