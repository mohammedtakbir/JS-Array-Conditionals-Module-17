// add element to end of the array
var numbers = [43, 95, 67, 45, 56];
numbers.push(99);
console.log(numbers);

var carsBrand = ['BMW', 'Audi', 'Benz', 'porche'];
// carsBrand.push('Porche');
console.log(carsBrand);

// remove element from end of the array
var element = carsBrand.pop();
console.log(carsBrand);
console.log(element); 

// ? add elemnts to the beginning of the array
var favouriteCars = ['RS7', '991 TurboS', 'M8 Competiiton'];
// favouriteCars.unshift('GTR35', 'SVJ');
console.log(favouriteCars);

// ? remove elemnts to the beginning of the array
favouriteCars.shift();
console.log(favouriteCars);