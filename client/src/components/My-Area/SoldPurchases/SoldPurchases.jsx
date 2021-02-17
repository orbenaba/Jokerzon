import React, {useState, useEffect} from 'react'
import Title from "../../Shared/Title";


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
        </div>
    )
}
