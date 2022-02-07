function solution(day, arr){
    let answer=0 ;
    for(let i of arr){
        if(i%10 === day) answer++;
    }
    return answer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

//forEach

a=[10,11,12,13,14,15]
a.forEach(function(v,i){ //값, 인덱스
    console.log(v,i, this)
},[1,2]);
