var number = [98, 89, 65, 38, 52, 97];

// ? 1. Get element value by Index
var element = number[3];
var second = number[1];
console.log(second);
console.log(element);
// ? 2.set element value by index
number[1] = 99;
// number[5] = 100;
number[6] = 105; // ? add new value
console.log(number);

// ? find index of an element 
var positionIndexof = number.indexOf(52);
console.log(positionIndexof);