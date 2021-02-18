import React,{useState, useEffect} from 'react';

import MyProduct from "./MyProduct";
import Title from "../../Shared/Title";
import Review from "../MyArea/Review/Review";
/**
 * 
 * @param {The Address of the current meta - mask wallet in the browser} props.myAccount
 * @param {The Jokerzon DApp contract} props.jokerzonContract 
 */

//props.jokerzonContract.methods.getAllProducts().call()
export default function MyProducts(props) {
    const [products, setProducts] = useState(props.products);
    const [reviewedProduct, setReviewedProduct] = useState(null);
    if(products.length === 0){
        return <Title name="Empty" title="repo"/>
    }
    console.log("reviewProduct = ", reviewedProduct);

    let review = reviewedProduct?<Review product={reviewedProduct} setReviewedProduct={setReviewedProduct}></Review>:null;
    return (<div className="py-5">
                <div className="container">
                <Title name="" title="repo" />
                    <div className="row">
                        {products.map(prd => {
                            return <MyProduct prd={prd} setReviewedProduct={setReviewedProduct}/>;
                        })}
                    </div>
                </div>
                {review}
            </div>
    )
}