// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//const input = ['2','6 12 10','30 50 72'];

//const A = input.shift();// 첫번째 값 제거
//const n = input[0];

const A = ['5','3 1 4 3 2'];

const arr = A[1].split(' ').map(Number).sort((a,b)=>a-b);
console.log(arr);
let total =0;
let 더할값=0;
for(let i =0; i<arr.length; i++){
    total +=더할값 +arr[i];
    더할값 += arr[i];
}
console.log(total);
