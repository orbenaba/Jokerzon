import React, {useState, useEffect } from 'react';


import {Switch, BrowserRouter as Router,Route} from "react-router-dom";

import Sold from "./Sold/Sold";
import Bought from "./Bought/Bought";
import Pending from "./Pending/Pending";
import Spinner from "../Shared/Spinner";
import Title from "../Shared/Title";

export default function MyArea(props) {
    const [myAccount, setMyAccount] = useState(props.myAccount);
    const [jokerzonContract, setJokezonContract] = useState(props.jokerzonContract);
    let [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [myFullName, setMyFullName] = useState("");

    useEffect(()=>{
        async function fetchData(){
            let allProducts = await jokerzonContract.methods.getAllProducts().call();
            await setProducts(allProducts);
            let fullName = await jokerzonContract.methods.getFullName(myAccount).call();
            setMyFullName(fullName);
            console.log("my full name = ",fullName);
            console.log("allProducts = ",products);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    if(isLoading){
        return <Spinner></Spinner>
    }

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
        </React.Fragment>

    )    
}