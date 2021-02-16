// Two arrays are given:
// 1) Array of purchases where the seller is myAccount
// 2) Array of purchases where the buyer is myAccount
export default function sumExpendituresAndRevenues(purchases){
    let expenditures = 0, revenues = 0;
    for(let p of purchases.mySold){
        revenues += Number(p.price);
    }
    for(let p of purchases.myBought){
        expenditures += Number(p.price);
    }
    return {expenditures, revenues};
}