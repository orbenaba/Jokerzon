export default function getMyPurchases(purchases, myAccount){
    let mySold = [], myBought = [];
    for(let p of purchases){
        if(p.sellerAddress === myAccount){
            mySold.push(p);
        }
        else{
            if(p.buyerAddress === myAccount){
                myBought.push(p);
            }
        }
    }
    return {mySold, myBought};
}