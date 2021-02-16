import React, {useState, useEffect } from 'react';


import {Switch, BrowserRouter as Router,Route} from "react-router-dom";

import Sold from "../Sold/Sold";
import Bought from "../Bought/Bought";
import Pending from "../Pending/Pending";
import Spinner from "../../Shared/Spinner";
import Title from "../../Shared/Title";

import sumExpendituresAndRevenues from "../../../Helper/RecapPurchases";
import getMyPurchases from "../../../Helper/getMyPurchases";
import getMyProducts from "../../../Helper/getMyProducts";


import Recap from "./Recap";




export default function MyArea(props) {
    const [myAccount, setMyAccount] = useState(props.myAccount);
    const [jokerzonContract, setJokerzonContract] = useState(props.jokerzonContract);
    const [isLoading, setIsLoading] = useState(true);
    const [myFullName, setMyFullName] = useState("");
    const [expenditures, setExpenditures] = useState(0);
    const [revenues, setRevenues] = useState(0);
    const [myBoughtPurchases, setMyBoughtPurchases] = useState([]);
    const [mySoldPurchases, setMySoldPurchases] = useState([]);
    const [myProducts, setMyProducts] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            let allProducts = await jokerzonContract.methods.getAllProducts().call();
            let allPurchases = await jokerzonContract.methods.getAllPurchases().call();
            
            let myAllPurchases = getMyPurchases(allPurchases, myAccount);
            setMySoldPurchases(myAllPurchases.mySold);
            setMyBoughtPurchases(myAllPurchases.myBought);
            setMyProducts(getMyProducts(allProducts, myAccount));
            
            let recap = sumExpendituresAndRevenues(allPurchases, myAccount);
            setExpenditures(Number(recap.expenditures));
            setRevenues(Number(recap.revenues));
            setMyFullName(await jokerzonContract.methods.getFullName(myAccount).call());
            setIsLoading(false);
        }
        fetchData();
    }, []);

    if(isLoading){
        return <Spinner></Spinner>
    }
    console.log("my account = ", myAccount);
    console.log("my full name = ",myFullName);
    console.log("expenditures = ",expenditures);
    console.log("revenues = ", revenues);
    console.log("my bought purchases = ", myBoughtPurchases);
    console.log("my sold purchases = ", mySoldPurchases);
    console.log("my not sold products = ", myProducts);

    let greeting = myFullName===""? <Title name="Welcome to the" title="private area"></Title>:<Title name="Hello" title={myFullName}></Title>;

    return (
        <React.Fragment>
            {greeting}

            <Router>
                <Switch>
                    <Route exact path="/my-area/sold" component={Sold}></Route>
                    <Route exact path="/my-area/bought" component={Bought}></Route>
                    <Route exact path="/my-area/pending" component={Pending}></Route>
                </Switch>
            </Router>
            <Recap myAccount={myAccount} expenditures={expenditures} revenues={revenues}/>

        </React.Fragment>

    )    
}

//<Button variant="primary">Go somewhere</Button>
//<Card.Footer className="text-muted">2 days ago</Card.Footer>
//<Card.Header>Account overview</Card.Header>