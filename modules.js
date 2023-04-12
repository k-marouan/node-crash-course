const { people, age } = require('./people'); // [ 'ahmed', 'ali', 'hamza', 'marouan' ]

console.log(people); // [ 'ahmed', 'ali', 'hamza', 'marouan' ]
console.log(age); // [ 23, 33, 25, 45 ]

const os = require('os'); // node module

console.log(os); // big object
console.log(os.platform()); // win32
console.log(os.homedir()); // C:\Users\MonPc

