//Logical Operators

//AND

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//OR

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

var ageIsMoreThanEighteen = true;
var isUSCitizen = false;

var elegibilityDiverLicence = ageIsMoreThanEighteen || isUSCitizen;
console.log("Is user elegible to drive? " + elegibilityDiverLicence);

var elegibilityTravelLicence = ageIsMoreThanEighteen && isUSCitizen;
console.log("Is user elegible to travel? " + elegibilityTravelLicence);