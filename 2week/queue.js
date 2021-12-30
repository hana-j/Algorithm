class CircularQueue {
    constructor(size){
        this.element =[];
        this.size = size;
        this.length = 0;
        this.front =0
        this.back=-1
    }
    isEmpty(){
        return (this.length ==0)
    }
    enqueue(element){
        if(this.length >= this.size) throw (new Error('배열 크기 넘김'));
        this.back++;
        this.element[this.back%this.size] = element;
        this.length++;
    }
    dequeue(){
        if(this.isEmpty()) throw (new Error("큐에 값이 없음"))
        const value = this.getFront();
        this.element[this.fron % this.size] = null;
        this.front++;
        this.length--
        return value;
    }
    getFront(){
        if(this.isEmpty()) throw (new Error("큐에 값 없음"));
        return this.element[this.front%this.size];
    }
    clear(){
        this.element = new Array();
        this.length =0;
        this.back = 0;
        this.front = -1;
    }
}


// * 공주구하기
function solution(n, k){
    let answer;
    let queue=Array.from({length:n}, (v, i)=>i+1); 
    while(queue.length){
        for(let i=1; i<k; i++) queue.push(queue.shift());
        queue.shift(); //그냥 큐에서 삭제
        if(queue.length===1) answer=queue.shift();
    }  
    return answer;
}

console.log(solution(8, 3));


// * 교육과정설계
function solution(need, plan){
    let answer="YES";
    let queue=need.split('');
    for(let x of plan){
        if(queue.includes(x)){
            if(x!==queue.shift()) return "NO";
        }
    }
    if(queue.length>0) return "NO";  
    return answer;
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));