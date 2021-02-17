import {DATE_OF_PURCHASE, ESTIMATED_DAYS} from "../Magic";
export default function separateArrivedAndDelivered(purchases){
    let arrived = [], delivered = [];
    let now = new Date(), estimatedArrivedDate;
    for(const p of purchases){
        // 1day = 86,400,000 milliseconds
        //p[DATE_OF_PURCHASE] = the reference axis
        estimatedArrivedDate = new Date((Number(p[DATE_OF_PURCHASE]) + 86400*Number(p[ESTIMATED_DAYS])) * 1000);
        // Arrived
        if(estimatedArrivedDate < now){
            arrived.push({purchase:p, arrivedDate: estimatedArrivedDate});
        }
        // Delivered
        else{
            delivered.push({purchase: p, deliveredDate: estimatedArrivedDate});
        }
    }
    return {arrived, delivered};
}