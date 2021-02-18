export default function calculatePercentageProgress(shipped, days){
    let now = new Date();
    // The diff in days(double) between shipped date and now
    let partial = (now.getTime()/1000 - shipped) / (1000 * 3600 * 24);
    // The diff in days(double) between estimated date and now
    let complete = days;
    return ((partial/complete)*100).toPrecision(1);
}