// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');

var A = input[0];
var B = input[1];
var V = input[2];
//문제조건 (1 ≤ B < A ≤ V ≤ 1,000,000,000)
//도착하기 하루전 밤에 최종적으로 올라가는 높이 v-b => 그리고 아침이 되면 무조건 정상에 도착한다
//하루에 올라가는 높이 a-b 
console.log(Math.ceil((V-B)/(A-B)));