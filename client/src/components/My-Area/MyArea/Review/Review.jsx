import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import {  Button } from 'react-bootstrap';
 
export default function Review(props) {
    const [product, setProduct] = useState(props.product);
    const [isOpened, setIsOpened] = useState(true);
    if(isOpened === true){
        return (
            <ProductContainer>
                <div className="container">
                    <div className="row">
                    <div className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize text-danger" id="modal" style={{fontWeight:'bolder'}}>
                            <h5>{product.productName}</h5>
                            <h4>Description:</h4>
                            <h5>{product.description}</h5>
                            <h5>price: {product.price} eth</h5>
                            <h5>Estimated days: {product.estimatedDays}</h5>
                            <h5 className="text-success">Sold? {product.isSold === true?"Yes":"No"}</h5>
                            <Button variant="danger" size="lg" onClick={()=> {setIsOpened(false); props.setReviewedProduct(null);}}>Close</Button>
                        </div>
                    </div>
                </div>
            </ProductContainer>
        );
    }
    else{
        return null;//the review has closed
    }
}

const ProductContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
