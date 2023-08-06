
function findLeapYears (years){

    const leapYears = [];
    for(let i = 1; i <= years.length ; i++){
        const index = i;
        const element = years[index];
        if (element%4 ===0){
        console.log(index,element);
    leapYears.push(element);

    }
    }
    return leapYears;
}
const givenYears =[ 2023, 2024, 2025,2028, 2030 ];
const output = findLeapYears(givenYears);
console.log(output);