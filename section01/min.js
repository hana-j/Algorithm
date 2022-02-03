function solution(arr){         
    let answer ='';
    for(let i=0;i<arr.length; i++){
        answer = arr[0];
        if(arr[i]<answer) {
            answer=arr[i]};
    }
    return answer;

}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));