import React from 'react'
import styled from "styled-components";

import generateRandomColor from "../../Helper/generateRandomColor";
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
    const sellerFullName = props.prd[0];
    const productName = props.prd[1];
    const description = props.prd[2];
    const price = props.prd[3];
    const city = props.prd[4];
    const country = props.prd[5];
    const estimatedDays = props.prd[6];
    const sellerAddress = props.prd[7];
    const isSold = props.prd[8];
    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <div
                style={{background: generateRandomColor()}}
                className="img-container p-5"
                onClick={() => {}}
                />
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">{productName}</p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">ETH </span>
                        {price}
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
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;









