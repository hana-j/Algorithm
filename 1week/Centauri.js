// var fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['3','0 3','2 3', '45 60'];
const A = parseInt(input.shift());// 첫번째 값 제거
//모든변수 for문 돌기전에 초기화해줘야 시간초과에 안걸린다.
let x; //출발
let y; //도착
let a;
let b;
let answer;
let result =[];
for(let i =0 ; i<A; i++){
    const dis = input[i].split(' ');
    x = parseInt(dis[0]);
    y = parseInt(dis[1]);
 
    if(Math.sqrt(y-x)%1 ===0){      //y-x 가 제곱수
        answer = 2 * Math.sqrt(y-x)-1;
    }
    else{
         a = Math.pow(Math.ceil(Math.sqrt(y-x)),2); //y-x 보다 큰 제곱
        //console.log('a:'+a);
         b = Math.pow(Math.ceil(Math.sqrt(y-x))-1,2); //y-x 보다 작은제곱
        //console.log('b:'+b);

        if((a+b)/2 <= y-x){            // ex) y-x 가14인경우, 작은 제곱은 9, 큰제곱은 16 의 중간값은 13, 14는 13보다 크니까 위의 제곱수와 같은 값
            answer = 2 * Math.ceil(Math.sqrt(y-x))-1;
        }else{                       //작을 때는 -1을 더 해줘야한다.
            answer = 2 * Math.ceil(Math.sqrt(y-x))-2;
        }
    }
    result.push(answer);
    //console.log(result);
    console.log(result[result.length-1]);
}

