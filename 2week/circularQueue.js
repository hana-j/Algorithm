const fs = require('fs');
const [a,b]= fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const N = a.split(' ');
const K = b.split(' ');

let answer=[];
const arr = Array.from({ length: n }, (v, i) => i + 1);
for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      if (j === k) {
        answer.push(arr.shift());
      } else {
        arr.push(arr.shift());
      }
    }
  }
  
 console.log('<'+answer.join(', ')+'>')