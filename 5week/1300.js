const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = parseInt(input);

function findOrder(n){
    let count = 0;
    for (let i=1; i<N+1; i++){
        count += Math.min(parseInt(n/i), N);
    }
    return count;
}

function findNum(){
    let start = 1;
    let end = K;
    
    while (start <= end){
        let mid = parseInt((start + end) / 2);
        let order = findOrder(mid);
        
        if (order >= K){
            end = mid - 1;
        } else{
            start = mid + 1;
        }
    }
    
    return start;
}

console.log(findNum());