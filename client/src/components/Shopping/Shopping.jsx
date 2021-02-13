import React,{useState, useEffect} from 'react';
import styled from "styled-components";

import Spinner from "../Shared/Spinner";
import Product from "./Product";
import Title from "../Shared/Title";
/**
 * 
 * @param {The Address of the current meta - mask wallet in the browser} props.myAccount
 * @param {The Jokerzon DApp contract} props.jokerzonContract 
 */

//props.jokerzonContract.methods.getAllProducts().call()
export default function Shopping(props) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchData(){
            let allProducts = await props.jokerzonContract.methods.getAllProducts().call();
            setProducts(allProducts);
            setIsLoading(false);    
        }
        fetchData();
    }, []);
    if(isLoading === true){
        return <Spinner></Spinner>
    }
    else{
        return(
            <React.Fragment>
                <ProductWrapper className="py-5">
                    <div className="container">
                    <Title name="Browse" title="all the products" />
                        <div className="row">
                            {products.map(prd => {
                                return <Product prd={prd} />;
                            })}
                        </div>
                    </div>
                </ProductWrapper>
            </React.Fragment>
        )
    }
}




const ProductWrapper = styled.section``;

