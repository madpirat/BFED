// NODE JS - GLOBALS

// console.log('hello world!');

// let count = 0;

// const timer = setInterval(() => {
//     count = count + 2;
//     console.log(`${count} seconds have passed`);
//     if (count > 6) {
//         clearInterval(timer);
//     }
// }, 2000);

// console.log(__dirname);

// console.log(__filename);

//// NODE JS - FUNCTION

// function orange() {
//     console.log('hello world');
// }

// orange();

// function callbackFunc(func) {
//     func();
// }

// let red = function () {
//     console.log('hi there');
// }

// callbackFunc(red);

// NODE JS - Module and Require

const helper = require('./helper');

console.log(helper('Alex'));