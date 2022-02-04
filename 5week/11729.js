// const fs = require('fs');
// const input = parseInt(fs.readFileSync('/dev/stdin'));
//const N = parseInt(input[0])
const N = 3;
let result = '';
let K=0;
function top(num, start, end, mid){
    if(num===0){
        return;
    }
    top(num-1, start, mid, end);
    result +=`${start} ${end}`+'\n';
    K++;
    top(num-1, mid, end, start);
}
top(N,1,3,2);
console.log(K);
console.log(result);
