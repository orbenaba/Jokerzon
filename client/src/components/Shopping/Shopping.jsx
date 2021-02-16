import React,{useState, useEffect} from 'react';
import styled from "styled-components";

import Spinner from "../Shared/Spinner";
import Product from "./Product";
import Title from "../Shared/Title";
import {filterByAddressAndNotSold} from "../../Helper/filterFunctions";
/**
 * 
 * @param {The Address of the current meta - mask wallet in the browser} props.myAccount
 * @param {The Jokerzon DApp contract} props.jokerzonContract 
 */

//props.jokerzonContract.methods.getAllProducts().call()
export default function Shopping(props) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [myAccount, setMyAccount] = useState(props.myAccount);
    const [jokerzonContract, setJokerzonContract] = useState();
    useEffect(() => {
        async function fetchData(){
            let allProducts = await props.jokerzonContract.methods.getAllProducts().call();
            setProducts(filterByAddressAndNotSold(allProducts, myAccount));
            setJokerzonContract(props.jokerzonContract);
            console.log("products.length = ",products.length);
            setIsLoading(false);    
        }
        fetchData();
    }, []);
    if(isLoading === true){
        return <Spinner></Spinner>
    }
    else{
        if(products.length === 0){
            return <Title name="No items" title="Sell by yourself!"/>
        }
        return(
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <Title name="Browse" title="all the products" />
                        <div className="row">
                            {products.map(prd => {
                                return <Product prd={prd} key={prd.productID} jokerzonContract={jokerzonContract}/>;
                            })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
