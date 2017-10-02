console.log("app.js started......")

const notes = require("./notes.js")
const os = require("os");
const fs = require("fs");
const _ = require('lodash');

console.log(os.userInfo().username);
fs.appendFileSync('myFile.txt','Hello Bro')
console.log(notes.age);
console.log(notes.add(3,4));
var a = _.uniq([1,1,2,2,3,3,4,4,5,6,6,7,7,7]);
console.log(a);