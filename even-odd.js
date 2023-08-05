// check even and odd number using function
function isEven (number){
    const remainder = number % 2;
    if(remainder === 0){
        console.log('number is even')
    }
    else {
        console.log('number is odd')
    }
}
isEven(445);
// using return
function isEven (number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else {
        return false;
    }
}

const myNumberIsEven = isEven(223);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(22442);
console.log(herNumberIsEven);