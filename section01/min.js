function solution(arr){         
    let answer = Number.MAX_SAFE_INTEGER; //큰숫자로 미리 선언할때
    for(let i=0;i<arr.length; i++){
        if(arr[i]<answer) {
            answer=arr[i]};
    }
    return answer;

}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));