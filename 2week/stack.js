class Stack{
    constructor(){
        this.array = [];
    }
    size(){
        return this.array.length;
    }
    push(item){
        this.array.push(item);
    }
    pop(){
        if(this.array.length ===0){
            throw new Error('Stack is empty');
        }
        return this.array.pop(); // 배열의 값 제거 
    }
}