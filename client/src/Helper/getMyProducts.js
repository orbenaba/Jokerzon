export default function getMyProducts(products, myAccount){
    let myProducts = [];
    for(let p of products){
        if(p.sellerAddress === myAccount){
            myProducts.push(p);
        }
    }
    return myProducts;
}