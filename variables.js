// integer types

let smallNumber = 12.4;
console.log('the smallNumber is of type', typeof (smallNumber));

let bigNumber = 10453435n;
console.log('the bigNumber is of type', typeof (bigNumber));

// strings can be defined using three definitions
let FavoriteCar = 'mercedes benz'
console.log('the FavoriteCar is of type', typeof (FavoriteCar));

let FavoriteSport = "Badminton"
console.log('the FavoriteSport is of type', typeof (FavoriteSport));

let FavoriteMovie = `batman`
console.log('the FavoriteMovie is of type', typeof (FavoriteMovie));

// boolean value
let LoveCoding = true;
console.log('the LoveCoding is of type', typeof (LoveCoding));

// symbol
let something = Symbol();
console.log('the something is of type', typeof (something));

// objects

let course = {
    name: "masters in cs",
    country: "Italy"
};
console.log('the course is of type', typeof (course));
console.log('the course.name is of type', typeof (course.name));
console.log('the course.country is of type', typeof (course.country));

// undefined
let variableVar;
console.log('the variableVar is of type', typeof (variableVar));

// null
FavoriteCar = null;
console.log('the FavoriteCar is of type', typeof (FavoriteCar));

