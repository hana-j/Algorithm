//내 풀이
// function solution(a, b, c){
//     let answer;
//     if(a>b) answer = b;
//     if(a>c) answer = c;
//     if(b>c) answer = c;
//     return answer;
// }

function solution(a, b, c){
    let answer;
    if(a>b) answer = b;
    else answer = a;
    if(answer>c) answer = c;
    return answer;
}
console.log(solution(6,5,11));
