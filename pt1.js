function hoursToMinutes (hours){
   const totalMinutes = hours * 60;
    return totalMinutes;
}
const myWorkingHours = 7;
const myWorkingMinutes = hoursToMinutes(myWorkingHours);
console.log(myWorkingMinutes);