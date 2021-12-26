// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

// let M = input[0];
// let N = input[1];
let M = 5;
let N = 54;

let arr =[];
let isPrime ='';
for(let i= 1; i<=N;i++){
   arr.push(true);
}
arr[0]= false;

for(let i =2;i<=N; i++){
    if(arr[i]){
        for(let j =2; j<=N/i;j++){
            arr[i*j]= false;
        }
    }
}
for(let i = M; i<=N;i++){
    if(arr[i]) isPrime+=i+'\n';
}
console.log(isPrime.trim())


