import React, {useState} from 'react'
import {Redirect} from "react-router-dom";
import styled from "styled-components";
import {  Button } from 'react-bootstrap';

import { COUNTRY, DESCRIPTION, ESTIMATED_DAYS, IS_SOLD, PRODUCT_NAME, SELLER_ADDRESS, SELLER_FULL_NAME,PRICE,CITY, PRODUCT_ID } from '../../../Magic';



export default function MyProduct(props) {
    const sellerFullName = props.prd[SELLER_FULL_NAME];
    const productName = props.prd[PRODUCT_NAME];
    const description = props.prd[DESCRIPTION];
    const price = props.prd[PRICE];
    const city = props.prd[CITY];
    const country = props.prd[COUNTRY];
    const estimatedDays = props.prd[ESTIMATED_DAYS];
    const sellerAddress = props.prd[SELLER_ADDRESS];
    const productID = props.prd[PRODUCT_ID];
    const isSold = props.prd[IS_SOLD];   

    const [isRedirected, setIsRedirected] = useState(false);

    if(isRedirected === true){
        return <Redirect to={`/shopping/details/${productID}`}/>;
    }

    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card" style={{fontFamily:'cursive'}}>
                <div>
                    <Button variant="flat" size="customized-size" onClick={()=>{setIsRedirected(true)}}>{productName}</Button>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <h3>{price} eth</h3>
                </div>
            </div>
        </ProductWrapper>
    )
}



const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover {
        .card {
            border: 0.1rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
        }
        .card-footer {
            background-color: rgb(224, 224, 224);
        }
    }
    .color-container {
        position: relative;
        overflow: hidden;
    }

    .color-container:hover .card-img-top {
        transform: scale(10);
    }

    .btn-flat {
        background-color: none;
        color: red;
    }

    .btn-customized-size {
        font-size: 1.5rem;
        color:rgb(224,224,224);
        font-weight: bolder;
        width: 15.7rem;
        background-color: rgb(102,0,51);
        height:8rem;
    }

    .btn-customized-size:hover {
        background-color: rgb(224, 224, 224);
        color:rgb(102,0,51);
    }

    .btn-customized-size:focus,.btn-customized-size:active:focus,.btn-customized-size.active:focus,
    .btn-customized-size.focus,.btn-customized-size:active.focus,.btn-customized-size.active.focus {
        outline: none;
    }

`;