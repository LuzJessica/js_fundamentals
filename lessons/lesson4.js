//Objects and Arrays

//Objects are variable that can hold more than one value 

var customer = {
    firstName: "Jéssica",
    lastName: "Luz",
    age: 32,
    dateOfBirth: "27/05/1992",
    sex: "Female",
    isMarried: false
}

console.log(customer);//to see all object information
console.log(`${customer.firstName} ${customer.lastName}`);// to see specific informations of the obj

//we can also overwrite the value of one property of the obj by doing
customer.isMarried = true;

console.log(customer);

//Arrays

var car = ["Volvo", "Toyota", "Tesla"];
console.log(car[0]);
console.log(car[1]);
console.log(car[2]);

car[1] = "BMW";

console.log(car[1]);