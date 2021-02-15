import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";
import Default from "../../Default/Default";
import getWeb3 from "../../../getWeb3";
import JokerzonContract from "../../../contracts/Jokerzon.json";




export default function Details(props) {
    const [product,setProduct] = useState();
    const [pid, setPid] = useState(-1);
    useEffect(()=>{ 
        async function fetchData(){
            let temp = Number(window.location.pathname.slice('/shopping/details/'.length,window.location.pathname.length));
            try{
                let prd = await props.jokerzonContract.methods.getProductById(temp).call();
                if(prd.isSold){
                    setProduct(null);
                }
                else{
                    setProduct(prd);
                    setPid(temp);    
                }
            }catch(err){
                setPid(-1);
            }
        }
        fetchData();
    }, []);

    const handleBuyClick = async(pid)=>{
        console.log("In handle buy click().",pid);
        try{
            await props.web3.eth.sendTransaction({from: props.myAccount, to: product.sellerAddress,value:props.web3.utils.toWei(product.price,'ether')},(err, transactionHash)=>{
                if(!err){
                    console.log(transactionHash,"success");
                }
            })
            await props.jokerzonContract.methods.addPurchase(product.sellerFullName,product.productName,product.description,
            product.price, product.city, product.country, product.estimatedDays, product.sellerAddress, product.productID).send({from:props.myAccount});
            setProduct(null);
        }catch(err){
            console.log(" ------------------------------\n");
            console.log(err);
            console.log(" ------------------------------\n");
        }

    }
    if(product === null){
        return <h1>Sold</h1>
    }

    if(pid !== -1){
        return (<div className="container py-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h1>{product.productName}</h1>
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        Seller's name: <span className="text-uppercase">{product.sellerFullName}</span>
                        <br></br>
                        Owner's address: <span className="text-uppercase">{product.sellerAddress}</span>

                        </h4>
                        <h4 className="text-blue">
                        <strong>
                            price:                 {product.price} <span>ETH</span>

                        </strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            Description:
                        </p>
                        <p className="text-muted lead">{product.description}</p>

                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            Source shipping:
                        </p>
                        <p className="text-muted lead">{product.country}, {product.city}</p>

                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            Estimated Days:
                        </p>
                        <p className="text-muted lead">{product.estimatedDays}</p>
                    </div>
                </div>
                <div className="row">
                    <Button className="col-10 mx-auto col-md-6 my-3 text-capitalize" variant="contained" color="secondary" onClick={()=>{handleBuyClick(pid)}}>
                            Buy
                    </Button>
                </div>
            </div>
        );
    }
    else{
        return <Default location={{pathname:`/shopping/details`}}>
        </Default>
    }
}