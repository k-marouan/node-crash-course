// Global object

// console.log(global);

// global.setTimeout(() => {
//     console.log('in the timeout!');
// }, 3000);

// it's the same without 'global'

// setTimeout(() => {
//     console.log('in the timeout!'); // one time after 3s
//     clearInterval(int); // stop the int function
// }, 3000);

// const int = setInterval(() => {
//     console.log('in the interval'); // every 1s
// }, 1000);

// show the path:

// console.log(__dirname); // D:\Informatiques\Front-End\NodeJS\node-crash-course
// console.log(__filename); // D:\Informatiques\Front-End\NodeJS\node-crash-course\global.js

//

console.log(document.querySelector); // ReferenceError: document is not defined => because document is in windows object not in global object