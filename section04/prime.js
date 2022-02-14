//뒤집은 소수
function isPrime(num){
   if(num===1) return false;
   for(let i=2;i<parseInt(Math.sqrt(num));i++){
       if(num%i===0) return false;
   }
   return true;
}
function solution(arr){
    let answer=[];
    let reverse =[];
    for(let i =0 ; i<arr.length; i++){
        let re = Number(arr[i].toString().split('').reverse().join(''))
        console.log(re)
        if(isPrime(re)) answer.push(re)
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));