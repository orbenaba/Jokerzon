import React, {useState, useEffect} from 'react'
import Title from "../../Shared/Title";
import Purchase from "../Purchase";

import separateArrivedAndDelivered from "../../../Helper/separateArrivedAndDelivered";


// Delivered products are product which have already purchased but not yet arrived
// However, arrived products are products which have already purchases and arrived after the estimated days from the purchased date.
export default function SoldPurchases(props) {
    const [arrived, setArrived] = useState([]);
    const [delivered, setDelivered] = useState([]);

    useEffect(()=>{
        let {delivered, arrived} = separateArrivedAndDelivered(props.purchases);
        setDelivered(delivered);
        setArrived(arrived);
    },[]);

    return (<div>
            <Title name="my bought" title="products"></Title>
            <div className="container" style={{alignItems:'center'}}>
                <div className="row">
                    <span className="dates-title">Estimated</span>
                    <span class="fas fa-arrow-left fa-5x" aria-hidden="true" style={{marginLeft:'33%', color:'rgb(102,0,51)'}}></span>
                    <span class="dates-title" style={{marginLeft:'30%'}}>Delivered</span> 
                </div>
                    {arrived.map(arr=>{
                        return (
                                <Purchase isArrived purchase={arr} opposite></Purchase>
                            )
                    })}
                    {delivered.map(del=>{
                        return (
                                <Purchase purchase={del} opposite></Purchase>
                        )
                    })}
            </div>
        </div>
    )
}
