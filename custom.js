//?  declare a array
/* let district = ['Narayanganj', 'Dhaka', 'Gazipur', 'Borisal', 'Noyakhali'];
console.log(district.length); */



//? indexOf
/* let district = ['Narayanganj', 'Dhaka', 'Gazipur', 'Borisal', 'Noyakhali'];
console.log(district.indexOf('Gazipur'));
console.log(district[4]); */





//? change/add element of an array
/* let district = ['Narayanganj', 'Dhaka', 'Gazipur', 'Borisal', 'Noyakhali', 'Coxs Bazar'];
console.log(district);
district[4] = 'Gopalganj';
console.log(district); */

// ? push & pop

/* let carBrand = ['Porche', 'Kia', 'Fiat', 'Volvo', 'Vollswegan'];
console.log(carBrand);
carBrand.push('Audi', 'Nissan');
console.log(carBrand);
let lastElement = carBrand.pop()
console.log(carBrand);
console.log(lastElement); */


// ? unshift & shift

/* var carBrand = ['Porche', 'Kia', 'Fiat', 'Volvo', 'Vollswegan'];
console.log(carBrand);
carBrand.unshift('Nissan', 'Ford');
console.log(carBrand);
let firstElement = carBrand.shift();
console.log(carBrand);
console.log(firstElement); */

// ? condition comparison

/* console.log(6 !== 5);

console.log(5<=5);

 */

// ? differnce between == and ===

/* console.log(20 == '20');
console.log(20 === '20'); */

// ? if statement

/* let iphonePrice = 50000;
let myBudget = 50000;
if(myBudget >= iphonePrice){
    console.log('buy')
}
else{
    console.log('Dont buy')
} */
// ? multi-stage if statement

/* var myBudget = 55;
var rrGhost = 50;
var m8 = 40;
var rs7 = 30;
if(myBudget >= rrGhost){
    console.log('buy rrghost');
}
else if(myBudget >= m8){
    console.log('buy m8');
}
else if(myBudget >= rs7){
    console.log('buy rs7');
}
else{
    console.log('buy probox');
}

 */

// var taka = 55;
// var danishPrice = 50;
// var butterbonePrice = 30;
// var taostBiscuitPrice = 20;
// if(danishPrice < taka){
//     console.log('eat danish');
// }
// else if(butterbonePrice < taka){
//     console.log('eat butter-bone');
// }
// else if(taostBiscuitPrice < taka){
//     console.log('eat toast');
// }
// else{
//     console.log('khali cha is better');
// }

// ? nested if statement 

/* if(condition){
    if(condition){
        if(condition){

        }
        else if(condition){

        }
        else{
            console.log()
        }
    }
    else{
        console.log()
    }
}
else{
    console.log()
}
 */

// ? another example of if....else statement
// * if hour is between 6am to 12am: Good morning
// * if it is 12pm to 6pm: Good Afternoon
// * otherwise good evening

/* let hour = 10;
if(hour >= 6 && hour < 12){
    console.log('Good morning');
}
else if(hour >= 12 && hour < 18){
    console.log('Good Afternoon');
}
else{
    console.log('Good evening')
} */


// ? multiple-conditions
/* var isGraduated = false;
var sallery = 55000;
car = 1;
if((isGraduated === true || sallery > 50000) && car >= 1){
    console.log('Yes');
}
else{
    console.log('Nooooooooooooooooo');
} */
// * Switch case
/* let signal = 'yellow';
switch(signal){
    case 'red':
        console.log('the signal is red');
        break; 
    case 'yellow':
        console.log('the signal is yellow');
        break;
    default:
        console.log('the signal is green');
} */

let month = 9;
switch(month){
    case 1: console.log('January');
    break;
    case 2: console.log('February');
    break;
    case 3: console.log('March');
    break;
    case 4: console.log('April');
    break;
    case 5: console.log('May');
    break;
    case 6: console.log('June');
    break;
    case 7: console.log('July');
    break;
    case 8: console.log('August');
    break;
    case 9: console.log('September');
    break;
    case 10: console.log('Octeber');
    break;
    case 11: console.log('November');
    break;
    case 12: console.log('December');
    break;
    default: console.log('Enter the valid month number');
}