import React,{useState, useEffect} from 'react'


import Spinner from "../Shared/Spinner";


/**
 * 
 * @param {The Address of the current meta - mask wallet in the browser} props.myAccount
 * @param {The Jokerzon DApp contract} props.jokerzonContract 
 */

//props.jokerzonContract.methods.getAllProducts().call()
export default function Shopping(props) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(async() => {
        let allProducts = await props.jokerzonContract.methods.getAllProducts().call();
        setProducts(allProducts);
        setIsLoading(false);
    }, []);
    if(isLoading === true){
        return <Spinner></Spinner>
    }
    else{
        console.log("products[0].price = ",products[0].price);
        return (
            <div>
                <h1>In shopping</h1>
            </div>
        )    
    }
}
