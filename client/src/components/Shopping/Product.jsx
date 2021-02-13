import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

import generateRandomColor from "../../Helper/generateRandomColor";
import "../../Magic";
import { COUNTRY, DESCRIPTION, ESTIMATED_DAYS, IS_SOLD, PRODUCT_NAME, SELLER_ADDRESS, SELLER_FULL_NAME,PRICE,CITY } from '../../Magic';
/**
 * 
 * @param {The name of the product} props.productName
 * @param {The name of the seller} props.sellerFullName
 * @param {Description about the product} props.description
 * @param {The city where the product is delivered from} props.city
 * @param {The country where the product is shipped from} props.country
 * @param {The estimated days which the product will be arrived to the buyer destination} props.estimatedDays
 * @param {The seller Address} props.sellerAddress
 */
export default function Product(props) {
    const sellerFullName = props.prd[SELLER_FULL_NAME];
    const productName = props.prd[PRODUCT_NAME];
    const description = props.prd[DESCRIPTION];
    const price = props.prd[PRICE];
    const city = props.prd[CITY];
    const country = props.prd[COUNTRY];
    const estimatedDays = props.prd[ESTIMATED_DAYS];
    const sellerAddress = props.prd[SELLER_ADDRESS];
    const isSold = props.prd[IS_SOLD];
    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <div
                style={{background: generateRandomColor()}}
                className="color-container p-5"
                onClick={() => {}}
                >
                
                    <Link to={{
                      pathname:'/shopping/details',
                      state: {
                        sellerFullName,productName,description,price,city,country,estimatedDays,sellerAddress,isSold
                      }
                    }}>
                        <h1>_________________________________</h1>
                    </Link>
                </div>
                <div className="card-footer d-flex justify-content-between">
                <p className="align-self-center mb-0">{productName}</p>
                    <h5 className="text-blue font-italic mb-0">
                        {price}
                        <span className="mr-1"> ETH</span>
                    </h5>
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
      border: 0.4rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(255, 255, 51);
    }
  }
  .color-container {
    position: relative;
    overflow: hidden;
  }

  .color-container:hover .card-img-top {
    transform: scale(10);
  }
`;









