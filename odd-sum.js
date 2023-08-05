// function getSumOfAnArray(numbers)

//  { let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     const index = i;
//     const element = numbers[index];
//     sum = sum + element;
    
    
    
//   }
//   return sum;
// }



function getOddNumbersOfAnArray(numbers){
    let sum = 0;
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element%2 ===1){
        console.log(index,element);
    oddNumbers.push(element);
    sum = sum + element;
    }
    }
    return sum;
}
const myNumbers =[ 12, 65, 45,78,32,45,91 ];
const sum = getOddNumbersOfAnArray(myNumbers);
console.log(sum);

// const oddNumbersSum = getSumOfAnArray(myNumbers);
// console.log('odd numbers sum', oddNumbersSum)