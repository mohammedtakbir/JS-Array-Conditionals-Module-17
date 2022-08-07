// * Practice challenge 1

function studentGrade(mark) {
    if (mark < 50 && mark > 0) {
        return 'F'
    }
    else if (mark >= 50 && mark< 60) {
        return 'D'
    }
    else if (mark >= 60 && mark< 70) {
        return 'C'
    }
    else if (mark >= 70 && mark< 80) {
        return 'B'
    }
    else if (mark >= 80 && mark< 90) {
        return 'A'
    }
    else {
        return 'A'
    }
}
let aliaGrade = 95;
let daliaGrade = 66;
let saliaGrade = 40;
let maliaGrade = 59;
let liliaGrade = 47;
let jaliaGrade = 77;
let studentGrades = studentGrade(saliaGrade);
console.log(studentGrades);

// * Practice challenge 2
/* function trafficSgnal(signal){
    if(signal==='red'){
        return 'Danger';
    }
    else if(signal ==='yellow'){
        return 'you should Stop';
    }
    else if(signal==='green'){
        return 'cross the road';
    }
}
let signal1='green';
let signal2='yellow';
let signal3='red';
let signals = trafficSgnal(signal2);
console.log(signals); */


// ! Practice 1
let fruits = ['Apple', 'Banana', 'Orange'];
let bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango';
console.log(fruits);

fruits.pop();
fruits.push('Watermelon');
console.log(fruits);
// ! Practice 2
var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var jonScore = 40;
var abulScore = 33;

// ? My Grade
if(myScore >= 80){
    console.log("My Grade is 'A'");
}
else if(myScore >= 60){
    console.log("My Grade is 'B'");
}
else if(myScore >= 50){
    console.log("My Grade is 'C'");
}
else if(myScore >= 40){
    console.log("My Grade is 'D'");
}
else if(myScore <= 39){
    console.log("My Grade is 'E'");
}

// ? Tom's Grade
if(tomScore >= 80){
    console.log("Tom's Grade is 'A'");
}
else if(tomScore >= 60){
    console.log("Tom's Grade is 'B'");
}
else if(tomScore >= 50){
    console.log("Tom's Grade is 'C'");
}
else if(tomScore >= 40){
    console.log("Tom's Grade is 'D'");
}
else if(tomScore <= 39){
    console.log("Tom's Grade is 'E'");
}

// ? Jane's Grade
if(janeScore >= 80){
    console.log("Jane's Grade is 'A'");
}
else if(janeScore >= 60){
    console.log("Jane's Grade is 'B'");
}
else if(janeScore >= 50){
    console.log("Jane's Grade is 'C'");
}
else if(janeScore >= 40){
    console.log("Jane's Grade is 'D'");
}
else if(janeScore <= 39){
    console.log("Jane's Grade is 'E'");
}

// ? Peter's Grade
if(peterScore >= 80){
    console.log("Peter's Grade is 'A'");
}
else if(peterScore >= 60){
    console.log("Peter's Grade is 'B'");
}
else if(peterScore >= 50){
    console.log("Peter's Grade is 'C'");
}
else if(peterScore >= 40){
    console.log("Peter's Grade is 'D'");
}
else if(peterScore <= 39){
    console.log("Peter's Grade is 'E'");
}

// ? Jon's Grade
if(jonScore >= 80){
    console.log("Jon's Grade is 'A'");
}
else if(jonScore >= 60){
    console.log("Jon's Grade is 'B'");
}
else if(jonScore >= 50){
    console.log("Jon's Grade is 'C'");
}
else if(jonScore >= 40){
    console.log("Jon's Grade is 'D'");
}
else if(jonScore <= 39){
    console.log("Jon's Grade is 'E'");
}
// ? Abul's Score
if(abulScore >= 80){
    console.log("Abul's Grade is 'A");
}
else if(abulScore >= 60){
    console.log("Abul's Grade is 'B");
}
else if(abulScore >= 50){
    console.log("Abul's Grade is 'C");
}

else if(abulScore >= 40){
    console.log("Abul's Grade is 'D");
}
else if(abulScore <= 39){
    console.log("Abul's Grade is 'F");
}


// ! Practice 3.1
let num1 = 13;
let num2 = 79;
let num3 = 85;
if(num1 > num2 && num1 > num3){
    console.log('num1 is largest');
}
else if(num2 > num1 && num2 > num3){
    console.log('num2 is largest');
}
else{
    console.log('num3 is largest');
}
// ! Practice 3.2
let side1=11;
let side2=8;
let side3=11;
if(side1 === side2){
    console.log('this triangle is isosceles');
}
else if(side2 === side3){
    console.log('this triangle is isosceles');
}
else if(side3 === side1){
    console.log('this triangle is isosceles');
}
else{
    console.log('this triangle is not isosceles');
}