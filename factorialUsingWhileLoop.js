// factorial using a while loop or a decrementing loop;
function factorial (number) {
    let num = 1;
    let result = 1;
    while (num <= 5) {
        result = result * num;
        num++;
    }
    return result;
}
const number = 5;
const result = factorial(number);
console.log(result);
// reverse;
function factorial (number) {
    let i = number;
    let result = 1;
    while (i >= 1) {
        result = result * i;
        i--;
    }
    return result;
}
const num = 3;
const fact = factorial(num);
console.log(fact);