//Concatenation
var product = "Car";
var price = 50;
var contactenatedMessageToPrint = "The price for your " + product + " is " + price + " dollars!";
var interpolatedMessageToPrint = `The price for your ${product} is ${price} dollars!`;

console.log(contactenatedMessageToPrint);
console.log(interpolatedMessageToPrint);

var firstName = "Jéssica";
var lastName = "Luz";

var concatenatedName = firstName + " " + lastName;
var interpolatedName = `${firstName} ${lastName}`;

console.log(concatenatedName);
console.log(interpolatedName);
