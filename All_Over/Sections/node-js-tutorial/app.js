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

// const helper = require('./helper');

// console.log(helper.user('Alex'));
// console.log(helper.id('1234'));
// console.log(helper.email('alex@mail.com'));

// NODE JS - EVENT EMITTER

// const events = require('events');

// const myEmitter = new events.EventEmitter;

// myEmitter.on('test', function (arg) {
//     console.log(arg);
// });

// myEmitter.emit('test', 'hello world');

// // NODE JS - More about Event Emitters

// const events = require('events');
// const util = require('util');

// const teams = function (name) {
//     this.name = name;
// };

// util.inherits(teams, events.EventEmitter);

// const Arsenal = new teams('Arsenal');
// const Juventus = new teams('Juventus');
// const Galatasaray = new teams('Galatasaray');

// const teamArray = [Arsenal, Juventus, Galatasaray];

// teamArray.forEach((team) => {
//     team.on('nation', function (nation) {
//         console.log(team.name + ' is ' + nation + ' football club');
//     });
// });

// Arsenal.emit('nation', 'English');
// Juventus.emit('nation', 'Italian');
// Galatasaray.emit('nation', 'Turkish');

// // NODE JS - READING & WRITING FILES

const fs = require('fs');

// fs.readFile('read-me.txt', 'utf-8', function (error, data) {
//     fs.writeFile('write.txt', data, function (error) {
//         if (error) {
//             console.log(error);
//         }
//     })
// });

// // console.log(text);

// // fs.writeFileSync('write.txt', text); 

// NODE JS - CREATING & REMOVING DIRECTORIES

// fs.unlink('write.txt', (error) => {
//     console.log(error);
// })

// fs.mkdir('my-folder', () => {
//     fs.readFile('read-me.txt', 'utf-8', (error, data) => {
//         fs.writeFile('./my-folder/write-me.txt', data, () => {

//         })
//     })
// });

fs.unlink('./my-folder/write-me.txt', () => {
    fs.rmdir('my-folder', (error) => {
        console.log(error);
    })
})


