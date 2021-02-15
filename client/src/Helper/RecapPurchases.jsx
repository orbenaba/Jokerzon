export default function sumExpendituresAndRevenues(purchases, myAccount){
    let expenditures = 0, revenues = 0;
    for(let p of purchases){
        // If the seller is me
        if(p.sellerAddress === myAccount){
            revenues += p.price;
        }
        else{
            // If the buyer is me
            if(p.buyerAddress === myAccount){
                expenditures += p.price;
            }
        }
    }
    return {expenditures, revenues};
}