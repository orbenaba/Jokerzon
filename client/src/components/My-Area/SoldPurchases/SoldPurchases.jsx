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
        console.log("arrived - ",arrived);
        console.log("delivered - ",delivered);
    },[])
    return (<div>
            <Title name="my sold" title="products"></Title>
            <div className="container" style={{alignItems:'center'}}>
            <div class="fas fa-arrow-right fa-5x" aria-hidden="true" style={{marginLeft:'45%', color:'rgb(102,0,51)'}}></div>
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
