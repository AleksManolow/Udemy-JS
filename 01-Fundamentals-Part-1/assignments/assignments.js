//Values and Variables
let country = 'Bulgaria';
let continent = 'Europe';
let population  = 7; 

console.log(country);
console.log(continent);
console.log(population);

//Data Types
let isIsland  = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//Let, const and var
language = 'bulgarian';
const yearOfFoundingOfTheState = 681;
//yearOfFoundingOfTheState = 1978; - error!!

//Basic Operators
console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

let description1  = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;

console.log(description1);