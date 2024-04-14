//Importing function
import { printAge } from "../helpers/printHelper.js"
printAge(10);


//Declarative functions
helloOne();//can be invoked any time
function helloOne(){
    console.log("Hello One");
}

//Anonymous functions
var helloTwo = function(){
    console.log("Hello Two");
}
helloTwo();//can be invoked just after its declaration

//Arrow functions (ES6)
var helloThree = () => {
    console.log("Hello Three");
}
helloThree();

printName("Jéssica", 32);
//Functions with arguments
function printName(name, age){
    console.log(name);
    console.log(age);
}

//Function with return
function multiplyByTwo(number){
    var result = number * 2;
    return result;
}

var resultToPrint = multiplyByTwo(5);
console.log(resultToPrint);

