// Requiring an object from another file by destructuring object exported in other file
const { people, ages } = require('./people');

console.log(people);
console.log(ages);

//Operating system module built in NodeJS
const os = require('os');

console.log(os.platform(), os.homedir());