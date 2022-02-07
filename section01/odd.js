function solution(arr){
    let answer=0;
    let arr1 =[];
    let answer0=[];
    for(let i=0;i<arr.length ; i++){
        let sum = 0;
        if(arr[i]%2 ==1){
            sum+= Number(arr[i])
            arr1.push(arr[i]);
        }
        answer +=sum;
    }
    console.log(arr1)
    let answer1 = Math.min(...arr1);
    return answer1;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));