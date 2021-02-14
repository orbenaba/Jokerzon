import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";
import Default from "../../Default/Default";

export default function Details(props) {
    const prd = props.location.state;
    if(typeof props.location.state !== 'undefined'){
        return (<div className="container py-5">

        <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h1>{prd.productName}</h1>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                Seller's name: <span className="text-uppercase">{prd.sellerFullName}</span>
                <br></br>
                Owner's address: <span className="text-uppercase">{prd.sellerAddress}</span>

                </h4>
                <h4 className="text-blue">
                <strong>
                    price:                 {prd.price} <span>ETH</span>

                </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Description:
                </p>
                <p className="text-muted lead">{prd.description}</p>

                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Source shipping:
                </p>
                <p className="text-muted lead">{prd.country}, {prd.city}</p>

                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Estimated Days:
                </p>
                <p className="text-muted lead">{prd.estimatedDays}</p>
            </div>

        </div>
        <div className="row">
            <Button className="col-10 mx-auto col-md-6 my-3 text-capitalize" variant="contained" color="secondary">
                    Buy
            </Button>
        </div>
    </div>
    );
    }
    else{
        return <Default location={{pathname:"/shopping/details"}}>1234567890
        </Default>
    }
}





