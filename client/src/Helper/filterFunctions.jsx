

// Return all the not sold products that are not sold by the given address

import { IS_SOLD, SELLER_ADDRESS } from "../Magic";

// @param 
export function filterByAddressAndNotSold(arrayOfProducts, filterAddress){
    let filteredArray = [];
    for(let p of arrayOfProducts){
        if(p[IS_SOLD] === false && p[SELLER_ADDRESS] !== filterAddress){
            filteredArray.push(p);
        }
    }
    console.log("not filtered array = \n",arrayOfProducts);
    console.log("filtered array = \n",filteredArray);
    return filteredArray;
}