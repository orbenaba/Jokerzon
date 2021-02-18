export default function getDateFormatted(date){
    let localeString = (new Date(Number(date))).toLocaleString();
    return localeString.split(',')[0];
}