export default function getDateFormatted(date){
    let localeString = date.toLocaleString();
    return localeString.split(',')[0];
}