import React, {useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap';
import {Redirect, Link} from "react-router-dom";

import "./Recap.css";

import Bought from "../../Bought/Bought";
import Sold from "../../Sold/Sold";

export default function Recap(props) {
    const [redirectedToBought, setRedirectedToBought] = useState(false);
    const [redirectedToSold, setRedirectedToSold] = useState(false);

    useEffect(()=> {
        async function fetchData(){
            setRedirectedToSold(false);
            setRedirectedToBought(false);
        }

        fetchData();
    })

    if(redirectedToBought === true){ 
        return <Redirect to="/my-area/bought" component={Bought}/>;
    }
    if(redirectedToSold === true){
        return (
            <Redirect to="/my-area/sold"/>
        )
    }
    else{
        return (
            <div className="col d-flex justify-content-center">
                <Card className="text-center" style={{fontFamily:"cursive", width:"45rem",backgroundColor:"rgb(224, 224, 224)"}}>
                    <Card.Body>
                        <Card.Title style={{color:"blue", fontWeight:"bold"}}>Recap about {props.myAccount}</Card.Title>
                        <Card.Text>Expenditures: <span style={{color:"rgb(100, 0, 0)", fontWeight:"bold"}}>{props.expenditures}</span></Card.Text>
                        <Card.Text>Revenues: <span style={{color:"rgb(100, 0, 0)", fontWeight: "bold"}}>{props.revenues}</span></Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="flat" size="customized-size" onClick={()=>{setRedirectedToSold(true)}}>Sold</Button>
                        <Button variant="flat" size="customized-size" onClick={()=>{setRedirectedToBought(true)}}>Bought</Button>
                    </Card.Footer>
                </Card>
            </div>
        )    
    }
}