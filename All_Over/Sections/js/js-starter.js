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

var day;
day = 'monday';

switch (day) {
    case 'saturday':
        console.log('I like Saturdays!');
        break;
    case 'monday':
        console.log('I do not like Mondays!');
        break;
    case ('friday'):
        console.log('I really like Fridays!');
        break;
    default:
        console.log('I do not know the day!');
        break;
}

// var grade;
// grade = 55; 

// if (grade < 40) {
//     console.log('you can not go to the next class.');
// } else if (grade > 40 && grade < 45) {
//     console.log('you can not go to the next class but you can enter the exam.');
// } else {
//     console.log('You can go to the next class!');
// }

var grade = 44;

switch (true) {
    case (grade < 40):
        console.log('You can not go to next class');
        break;
    case (grade >= 40 && grade < 45):
        console.log('You can not go to next class but you can enter the exam');
        break;
    default:
        console.log('You can go to next class');
        break;

}