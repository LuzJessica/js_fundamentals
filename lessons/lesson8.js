//Loops 

//for loop
for(i = 0; i < 5 ; i++){
    console.log("Hello World");
}

var cars = ["Volvo", "BMW", "Tesla"];

for(let car of cars){ //the first car is the iterable variable and receives each value inside arrays values     
    console.log(car);
    if(car == "BMW"){
        break;
    }
}


//another sintaxe that does the same as the one above is. this sintaxe is available from ES6 version OF JS
cars.forEach(car => {//car is the iterable
    console.log(car);
})
