//브루트포스: 자리수의 합
function solution(n, arr){
    let answer, max= Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        let sum =0;
        let temp=x;
        while(temp){
            sum+=(temp%10);
            temp = Math.floor(temp/10);
        }
        if(sum>max){
            max=sum;
            answer =x;
        }else if(sum ===max){
            if(x>answer) answer = x;
        }
    }
    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));