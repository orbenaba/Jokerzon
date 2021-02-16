import React, {useState, useEffect } from 'react';

import Spinner from "../../Shared/Spinner";
import Title from "../../Shared/Title";

import sumExpendituresAndRevenues from "../../../Helper/RecapPurchases";
import getMyPurchases from "../../../Helper/getMyPurchases";
import getMyProducts from "../../../Helper/getMyProducts";


import Recap from "./Recap/Recap";
import MyProducts from "./MyProducts";


export default function MyArea(props) {
    const [myAccount, setMyAccount] = useState(props.myAccount);
    const [isLoading, setIsLoading] = useState(true);
    const [myFullName, setMyFullName] = useState(props.fullName);
    const [expenditures, setExpenditures] = useState(0);
    const [revenues, setRevenues] = useState(0);
    const [myBoughtPurchases, setMyBoughtPurchases] = useState([]);
    const [mySoldPurchases, setMySoldPurchases] = useState([]);
    const [myProducts, setMyProducts] = useState(props.myProducts);



    useEffect(()=>{
        async function fetchData(){
            setMySoldPurchases(props.myPurchases.mySold);
            setMyBoughtPurchases(props.myPurchases.myBought);
            

            let recap = sumExpendituresAndRevenues(props.myPurchases, myAccount);
            setExpenditures(Number(recap.expenditures));
            setRevenues(Number(recap.revenues));
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
            <Recap myAccount={myAccount} expenditures={expenditures} revenues={revenues} mySoldPurchases={mySoldPurchases} myBoughtPurchases={myBoughtPurchases}/>
            <MyProducts products={myProducts}></MyProducts>
        </React.Fragment>
    )
}