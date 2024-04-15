let familySize = 2;
let plannedDistanceToDrive = 100;

function recommendedCar(familySize, plannedDistanceToDrive) {
    var car;
    if(familySize <= 4 && plannedDistanceToDrive < 200){
        car = "Tesla";
    } 
    if(familySize <= 4 && plannedDistanceToDrive >= 200){
        car = "Toyota Camry";
    }
    if(familySize > 4) {
       car = "Minivan";
    }
    return car;
}

console.log(recommendedCar(familySize, plannedDistanceToDrive));