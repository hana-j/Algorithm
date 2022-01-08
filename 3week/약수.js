// var fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['2','4 2'];
const arr = input[1].split(' ').map(Number).sort((a,b)=>a-b);


    if(arr.length ==1){
        console.log(arr[0]*arr[0]);
    }else{
        console.log(arr[0]*arr[arr.length-1])
    }




