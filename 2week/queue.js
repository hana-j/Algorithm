// * 공주구하기
function solution(n, k){
    let answer;
    let queue=Array.from({length:n}, (v, i)=>i+1); 
    while(queue.length){
        for(let i=1; i<k; i++) queue.push(queue.shift());
        queue.shift(); //그냥 큐에서 삭제
        if(queue.length===1) answer=queue.shift();
    }  
    return answer;
}

console.log(solution(8, 3));