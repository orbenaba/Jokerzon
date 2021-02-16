export default function sumExpendituresAndRevenues(purchases, myAccount){
    let expenditures = 0, revenues = 0;
    for(let p of purchases){
        // If the seller is me
        if(p.sellerAddress === myAccount){
            revenues += Number(p.price);
        }
        else{
            // If the buyer is me
            if(p.buyerAddress === myAccount){
                expenditures += Number(p.price);
            }
        }
    }
    return {expenditures, revenues};
}