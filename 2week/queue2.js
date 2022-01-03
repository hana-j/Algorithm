// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// input= input.shift();// 첫번째 값 제거
let queue = [];

const input = ['push 1','push 2', 'front','back','size', 'empty', 'pop','pop','pop','size', 'empty','pop','push 3','empty','front']
let answer =[];

for(let i=0; i<input.length;i++){
    if(input[i] ==='pop'){
        if(queue.length !==0){
            answer.push(queue.shift());
        }else{
            answer.push(-1);
        }
    }else if(input[i] === 'size'){
        answer.push(queue.length);
    }else if(input[i] ==='empty'){
        if(queue.length !==0){
            answer.push(0);
        }else{
            answer.push(1)
        }
    }else if(input[i]==='front'){
        if(queue.length !==0){
            answer.push(queue[0])
        }else{
            answer.push(-1);
        }
    }else if(input[i]==='back'){
        if(queue.length !==0){
            answer.push(queue[queue.length -1]);
        }else{
            answer.push(-1)
        }
    }else{
        queue.push(input[i].split(' ')[1])   //push
    }
}
console.log(answer.join('\n'));