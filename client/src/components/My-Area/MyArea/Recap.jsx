import React from 'react'
import { Card } from 'react-bootstrap';


export default function Recap(props) {
    return (
        <div className="col d-flex justify-content-center">
            <Card className="text-center" style={{fontFamily:"cursive", width:"45rem",backgroundColor:"rgb(224, 224, 224)"}}>
                <Card.Body>
                    <Card.Title style={{color:"blue", fontWeight:"bold"}}>Recap about {props.myAccount}</Card.Title>
                    <Card.Text>Expenditures: <span style={{color:"rgb(100, 0, 0)", fontWeight:"bold"}}>{props.expenditures}</span></Card.Text>
                    <Card.Text>Revenues: <span style={{color:"rgb(100, 0, 0)", fontWeight: "bold"}}>{props.revenues}</span></Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
