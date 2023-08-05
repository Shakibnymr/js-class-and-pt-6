// Inches to feet
function inchToFeet (inches) {
    const feet = inches / 12;
    return feet
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
console.log(dadaFeet,nanaFeet);
// Miles to Km
function milesToKm (miles) {
    const km = miles * 1.60934;
    return km
}
const johnMiles = 2;
const johnKm = milesToKm(johnMiles);

console.log(johnKm);