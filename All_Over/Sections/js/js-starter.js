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

// // FOR LOOP QUIZ
// // 1. Print even mumber from 132 to 148 on the console

// for (var i = 132; i <= 148; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// // 2. Print numbers between 25 and 100, divisible (podzielne) by 7, to the console

// for (var i = 25; i <= 100; i++) {
//     if ((i % 7 === 0) && (i % 5 === 0)) {
//         console.log(i);
//     }
// }

// CONTINUE AND BREAK STATEMENTS
//1. Print numbers from 1 to 10 divisable by 2, print only even numbers
//2. print numbers from 1 to 10 divisible by 2, print only one number and then stop. 

// console.log('Continue Statement');

// for (var i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) continue;
//     console.log(i);
// }

// console.log('Break Statement');

// for (var i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         break;
//     }
// }

// // FUNCTIONS

// function doSomething() {
//     console.log('Hello World!');
//     console.log('Goodbye World!');
//     console.log('How are you?');
// }

// doSomething();

// // FUNCTIONS WITH ARGUMENTS

// function sayHi(name) {
//     console.log('Hi' + ' ' + name);
// }

// sayHi('Marcin');
// sayHi('Ania');

// function cube(number) {
//     console.log(number * number * number);
// }

// cube(14);

// function bmi(height, weight) {
//     console.log(weight / (height * height));
// }

// bmi(1.85, 90)

// function checkUserInfo(email, password) {
//     if () {

//     }
// }

// // FUNCTION RETURN KEYWORD

// console.log('Cube formula with the lenght of 5');
// function cube(number) {
//     return (number * number * number);
// }

// var num = cube(5);
// console.log(num);

// console.log('Age Calculator for birth year 1987');
// function calculateAge(birthYear) {
//     return 2022 - birthYear;
// }
// var age = calculateAge(1987);
// console.log('You are', age, 'years of age');

// console.log('If you are an adult based on your age, you can enter the cafe');
// function enterCafe(Age) {
//     if (Age < 18) {
//         return 'You CAN NOT enter the cafe!';
//     }
//     return 'You CAN enter the cafe!';
// }

// var cafe = enterCafe(35);
// console.log(cafe);

// FUNCTION DELCARATION AND EXPRESSION 

//function delcaration
function calculateAge(birthYear) {
    return 2020 - birthYear;
}

// //function expression
// var calculateAge = function (birthYear) {
//     return 2020 - birthYear;
// }

// var age = calculateAge(1981);
// console.log(age);

// calculateAge = 'John';
// console.log(calculateAge);

// var Age = calculateAge(1990);

// // FUNCTION QUIZ
// // 1. Create a function called 'substraction', this function takes 
// // two arguments X and Y, then substracts one of these arguent from the
// // other and returns the result. Then console log the result. 

// function substraction(X, Y) {
//     return X - Y;
// }
// var arguments = substraction(10, 5);
// console.log(arguments);

// // 2. Declare a function called 'is Odd', this function is gonna take one
// // argument and it is gonna check if that argument is an 'odd number',
// // then it needs to return a Boolean and console that.

// var isOdd = function (number) {
//     if (number % 2 !== 0) {
//         return 'number is odd';
//     }
//     return 'number is even';
// }

// console.log(isOdd(5));


// // function isOdd(i) {
// //     if (i % 2 !== 0) {
// //         return 'is odd number';
// //     }
// //     return 'is even number'
// // }
// // var result = isOdd(3);
// // console.log(result);

// // 3. Declare a function called 'addition', it is gonna take one argument,
// // then it needs to sum up all numbers from 1 to that argument and return
// // the total value. Then you need to console log that total.

// var addition = function (number) {
//     var res = 0;
//     for (var i = 1; i <= number; i++) {
//         res = res + i;
//     }
//     return res;
// }

// var addResult = addition(5);
// console.log(addResult);

// //FUNCTION SCOPE

// function sayName() {
//     var Name = 'Sheldon';
//     console.log(Name);
// }

// var Name = 'Leonard'
// console.log(Name);
// sayName();

// var Count = 18;
// console.log(Count);

// function writeCount() {
//     console.log(Count);
// }

// writeCount();

// function sayHi() {
//     var myWord = 'Hello World';
//     console.log(myWord);
//     sayBye();

//     function sayBye() {
//         var yourWord = 'Bye';
//         console.log(myWord);
//     }
// }

// sayHi();

// var sentence = 'Hello Wolrd!';

// function saySentence() {
//     var sentence = 'Bye bye!';
//     console.log(sentence);
// }

// saySentence();
// console.log(sentence);

// function writeNumber() {
//     var myx = 30;
//     console.log(myx);
// }

// function doSomething() {
//     console.log(myx);
// }

// writeNumber();
// doSomething();

// // ARRAYS

// var students = ['Sheldon', 'Leonard', 'Penny', 'Raj'];
// console.log(students);
// // console.log(students[0]);

// students[0] = 'Amy';
// console.log(students);

// students[4] = 'Howard';
// console.log(students);

// var commonData = ['John', 25, true, null];
// commonData[1];

// var cars = ['Mercedes', 'Audi', 'BMW', 'Volvo'];
// var cars_length = cars.length;
// console.log(cars_length);

// ARRAY METHODS

// var students = ['Sheldon', 'Leonard', 'Penny', 'Raj'];

// //push method adds a new item to the end of an array
// // students.push('Bernadette');
// console.log(students);

// //pop method removes the last item from array
// var lastStudent = students.pop();
// console.log(lastStudent);

// //unshift method adds new item to the beginning of array
// var cats = ['cat1', 'cat2', 'cat3'];
// cats.unshift('cat4');
// console.log(cats);

// //shift method removes new item to the beginning of array
// cats.shift();
// console.log(cats);

// //indexOf
// console.log(students.indexOf('Sheldon'));
// console.log(students.indexOf('Leonard'));

// //slice
// var friends = ['Ross', 'Rachel', 'Joey', 'Chandler'];
// var closeFriends = friends.slice(1, 3);
// var realCloseFriends = friends.slice();
// console.log(friends);
// console.log(closeFriends);
// console.log(realCloseFriends);

// ARRAY QUIZ 
// 01. Access the last element of books array

// var books = ['Harry Potter', 'Hobbit', 'Hunger Games', 'Little Prince'];
// // solution from tutorial
// console.log(books[books.length - 1]);

// // my solutions - a little bit longer, definitely not DRY (do not repeat yourself)
// // var books_length = books.length;
// // console.log(books_length);
// // console.log(books[3]);

// // 02. Print the godFather3 film from the films array to the console

// var films = [
//     ['hobbit1', 'hobbit2', 'hobbit3'],
//     ['matrix1', 'matrix2', 'matrix3'],
//     ['godFather1', 'godFather2', 'godFather3'],
// ]

// console.log(films[2][2]);

// ARRAY ITERATION

var books = ['Harry Potter', 'Hobbit', 'Hunger Games', 'Little Prince'];
// for (var i = 0; i < books.length; i++) {
//     console.log(books[i]);
// }

books.forEach(function (book) {
    console.log(book);
})