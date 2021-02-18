import getDateFormatted from "./getDateFormatted";

export default function getEstimatedDateFormatted(purchasedDate, days){
    let copied = new Date(Number(purchasedDate)*1000);
    copied.setDate(copied.getDate() + Number(days));
    return getDateFormatted(copied);
}