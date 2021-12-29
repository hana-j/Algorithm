// * filter, reduce, forEach, map

a=[13,23,44,22,3];
//for문 돌면서 요소 탐색
a.forEach((el, idx)=>{
    console.log(el, idx);
});
//map => 새로운 배열을 생성
let answer = a.map((el, i)=>{
    return el*el;
})
console.log(answer);

//filter => 콜백요소가 참인 값들만 새로운 배열로 리턴 
 answer = a.filter((el, i)=>{
    return el%2 ==0;  
});
console.log(answer);

//reduce => 값을 생성해서 리턴
answer = a.reduce((acc, val)=>{
    return acc+val;
},10)
console.log(answer);