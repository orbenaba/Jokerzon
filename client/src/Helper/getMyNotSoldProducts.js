export default function getMyNotSoldProducts(products, myAccount){
    let notSold = [];
    for(let p of products){
        if(p.sellerAddress === myAccount && p.isSold === false){
            notSold.push(p);
        }
    }
    return notSold;
}