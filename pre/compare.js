var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var n =input[0];
var m = input[1];
console.log(parseInt(n/m));
console.log(parseInt(n%m));

// var a=100;
// var b =6;
// console.log(parseInt(a%b));
// console.log(parseInt(a/b));