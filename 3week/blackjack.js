// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const one = input[0].split(' ');
// const two = input[1].split(' ').map(el => parseInt(el));
// const N = parseInt(one[0]);
// const M = parseInt(one[1]);
const N = 10;
const M = 500;
const two = [93, 181, 245 ,214, 315, 36 ,185, 138 ,216 ,295];
// *부루트포스 => 처음부터 끝까지 계산해가면서 해를 찾는 방식
let max =0;
for(let i =0; i< N; i++){
    for(let j =0; j<N;j++){
        for(let k =0; k<N; k++){
            if(i ===j || i ===k || j ===k){
                continue; //같은 카드는 뽑을수 없음
            }
            const sum = two[i]+two[j]+two[k]
            if(sum > max && sum <=M){   //합이 max보다는 큰데 M보다 작을 때 다시 할당 
                max = sum
            }
            if(max==M){
                break;
            }
        }
    }
}
console.log(max);