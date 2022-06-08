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

// const fs = require('fs');

// fs.readFile('read-me.txt', 'utf-8', function (error, data) {
//     fs.writeFile('write.txt', data, function (error) {
//         if (error) {
//             console.log(error);
//         }
//     })
// });

// // console.log(text);

// // fs.writeFileSync('write.txt', text); 

// // NODE JS - CREATING & REMOVING DIRECTORIES

// // fs.unlink('write.txt', (error) => {
// //     console.log(error);
// // })

// // fs.mkdir('my-folder', () => {
// //     fs.readFile('read-me.txt', 'utf-8', (error, data) => {
// //         fs.writeFile('./my-folder/write-me.txt', data, () => {

// //         })
// //     })
// // });

// fs.unlink('./my-folder/write-me.txt', () => {
//     fs.rmdir('my-folder', (error) => {
//         console.log(error);
//     })
// })

// // NODE JS - CLIENTS & SERVERS
// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('hello world');
// });

// console.log('port 3000');
// server.listen(3000, '127.0.0.1');

// NODE JS - STREAMS & BUFFERS

// const http = require('http');
// const fs = require('fs');

// const readStream = fs.createReadStream(__dirname + '/read-me.txt', 'utf-8');
// const writeStream = fs.createWriteStream(__dirname + '/write-me.txt');

// readStream.on('data', (chunk) => {
//     console.log('new data received');
//     console.log(chunk);
//     writeStream.write(chunk);
// });

// // // NODE JS - PIPE
// // readStream.pipe(writeStream);

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     // const readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');

//     // readStream.pipe(res);

//     console.log(req.url);

//     const person = {
//         name: 'alex',
//         email: 'alex@email.com',
//         job: 'designer'
//     };

//     res.end(JSON.stringify(person));
// });

// server.listen(3000, '127.0.0.1');

// // NODE JS - ROUTING

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if (req.url === '/home' || req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     }
//     else if (req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.createReadStream(__dirname + '/about.html').pipe(res);
//     }
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     }
// });

// server.listen(3000, '127.0.0.1');