const arr =['6']
// const fs = require('fs');
// const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => +v);

const MAX = Math.max(...arr);  //스프레드 문법
console.log(MAX)
let dp = [];
dp[0] = 1;
dp[1] = 1;
dp[2] = 1;


for (let i = 3; i <= MAX + 1; i++) {
  dp[i] = dp[i - 3] + dp[i - 2];
}
console.log(dp[arr[i]-1])
for(let i=0; i<arr.length;i++){
    console.log(dp[arr[i]-1]);
}
// arr.forEach(v => {
//   console.log(dp[v - 1]);
// })