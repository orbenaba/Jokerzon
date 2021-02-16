import React,{useState, useEffect} from 'react';

import MyProduct from "./MyProduct";
import Title from "../../Shared/Title";
/**
 * 
 * @param {The Address of the current meta - mask wallet in the browser} props.myAccount
 * @param {The Jokerzon DApp contract} props.jokerzonContract 
 */

//props.jokerzonContract.methods.getAllProducts().call()
export default function MyProducts(props) {
    const [products, setProducts] = useState(props.products);
    if(products.length === 0){
        return <Title name="No items" title="Sell by yourself!"/>
    }
    return(
        <div className="py-5">
            <div className="container">
            <Title name="" title="repo" />
                <div className="row">
                    {products.map(prd => {
                        return <MyProduct prd={prd}/>;
                    })}
                </div>
            </div>
        </div>
    )
}