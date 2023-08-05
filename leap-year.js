// check whether a year is a leap year or not(simplified way)
function isLeapYear (year){
    const remainder = year % 4;
    if (remainder === 0){
        console.log('the given year is a leap year');
    } 
    else{
        console.log('the given year is not a leap year');
    }
}
isLeapYear(1734);
// using return
function isLeapYear (year){
    const remainder = year % 4;
    if (remainder === 0){
        return true;
    } 
    else{
        return false;
    }
}
const isIt = isLeapYear(1780);
console.log('is my year leap year?', isIt);