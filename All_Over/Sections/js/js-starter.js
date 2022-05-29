/*
console.log("Hello from separated file!")

var name = "Marcin";
console.log(name);

var schoolTeam = "basketball";
var schoolNumber = 20;

var isRegisterd = true;
console.log(isRegisterd);

console.log(name + " " + schoolNumber)

var schoolName, hasCourse;
schoolName = "OAKAcademy";
hasCourse = true;

console.log(schoolName + " has 35 courses. Does it have any courses? " + hasCourse)

schoolNumber = "twenty two";
console.log(schoolNumber);

schoolTeam = "tennis";
console.log(schoolTeam);

alert(schoolTeam);

var age = prompt("How old are you?");
console.log("You are " + age + " years old!");

*/


// Basic Operators //

// var totalDistance, distanceAlex, distanceSam;
// totalDistance = 20;

// distanceAlex = totalDistance - 12;
// console.log(distanceAlex);

// distanceSam = totalDistance - 7;
// console.log(distanceSam);

// // Logical Operators //
// var distanceToSchool, distanceToHome;

// distanceToHome = 14;
// distanceToSchool = 6;

// var isCloser = distanceToHome < distanceToSchool;
// console.log(isCloser);

// Conditional Statements 

// var grade;
// grade = 55; 

// if (grade < 40) {
//     console.log('you can not go to the next class.');
// } else if (grade > 40 && grade < 45) {
//     console.log('you can not go to the next class but you can enter the exam.');
// } else {
//     console.log('You can go to the next class!');
// }

// var age;
// age = 24;

// if (age < 18) {
//     console.log('You can not enter the cafe!');
// } else if (age < 23) {
//     console.log('You can enter the cafe but you can not drink alcohol!');
// } else {
//     console.log('You can enter the cafe and drink alcohol!');
// }


// TERNARY OPERATOR

// var grade = 80;

// grade < 45
//     ? console.log('You can not go to next class')
//     : console.log('You can go to next class')


// var result = grade < 45 ? 'failure' : 'success';
// console.log(result);

// SWITCH STATEMENTS

// var day;
// day = 'monday';

// switch (day) {
//     case 'saturday':
//         console.log('I like Saturdays!');
//         break;
//     case 'monday':
//         console.log('I do not like Mondays!');
//         break;
//     case ('friday'):
//         console.log('I really like Fridays!');
//         break;
//     default:
//         console.log('I do not know the day!');
//         break;
// }

// var grade;
// grade = 55; 

// if (grade < 40) {
//     console.log('you can not go to the next class.');
// } else if (grade > 40 && grade < 45) {
//     console.log('you can not go to the next class but you can enter the exam.');
// } else {
//     console.log('You can go to the next class!');
// }

// var grade = 44;

// switch (true) {
//     case (grade < 40):
//         console.log('You can not go to next class');
//         break;
//     case (grade >= 40 && grade < 45):
//         console.log('You can not go to next class but you can enter the exam');
//         break;
//     default:
//         console.log('You can go to next class');
//         break;

// }

// Code Quiz #2

// var alexGrade, saraGrade, nancyGrade;

// alexGrade = (90 + 80 + 95) / 3;
// console.log('Alex average grade', alexGrade);

// saraGrade = (89 + 76 + 98) / 3;
// console.log('Sara average grade', saraGrade);

// nancyGrade = (42 + 98 + 83) / 3;
// console.log('Nancy average grade', nancyGrade);

// if (alexGrade > saraGrade && alexGrade > nancyGrade) {
//     console.log('Alex has the highest grade', alexGrade);
// } else if (saraGrade > alexGrade && saraGrade > nancyGrade) {
//     console.log('Sara has the higest grade',);
// } else if (nancyGrade > alexGrade && nancyGrade > saraGrade) {
//     console.log('Nancy has the highest grade',);
// } else {
//     console.log('Maybe there is same average');
// }

// LOOPS
// DRY - DO NOT REPEAT YOURSELF

// WHILE LOOPS

// while(situation) {
// if the situation is correct, it will run the code here.
// }

// var number = 1;

// while (number < 11) {
//     console.log(number);
//     number++; //number = number +1

// }

// // WHILE LOOPS QUIZ 

// // 1. Print even mumber from 132 to 148 on the console

// var number = 132;

// while (number <= 148) {
//     console.log(number);
//     number += 2
// }

// // 2. Print numbers between 25 and 100, divisible (podzielne) by 7, to the console

// var count = 25;

// while (count <= 100) {
//     if (count % 7 === 0) {
//         console.log(count);
//     }
//     count++
// }

// FOR LOOPS

// for(init; condition; step) {
// if the condition is correct, it will run the code here.
// }

// for (var number = 1; number < 11; number++) {
//     console.log(number);
// }

// FOR LOOP QUIZ
// 1. Print even mumber from 132 to 148 on the console

for (var i = 132; i <= 148; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 2. Print numbers between 25 and 100, divisible (podzielne) by 7, to the console

for (var i = 25; i <= 100; i++) {
    if ((i % 7 === 0) && (i % 5 === 0)) {
        console.log(i);
    }
}