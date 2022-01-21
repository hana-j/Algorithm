const [N,K] = [3,7];
let start =1;
let end =K;
while(start<=end){
    let mid = parseInt((start+end)/2);
    let cnt=0;
    for(let i=1; i<N+1;i++){
        cnt+=Math.min(N, parseInt(mid/i))
    }

    if(cnt>=K){
        end = mid-1;
    }else{
        start = mid+1;
    }
}

console.log(start)