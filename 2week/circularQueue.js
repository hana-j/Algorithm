// * 원형큐 구현
// 1. 배열생성
const size =5;
const cq = Array(size).fill(null);

// 2. 포인터 생성
let front = 0;
let rear = 0;
// rear === front 이면 원형큐는 비어있음
const isEmpty = ()=> rear === front;

// 3. enqueue
const enqueue = (item) =>{
    cq[rear] = item;
    rear = (rear +1)%size;
    return item;
};

console.log(enqueue('a'));
console.log(enqueue('b'));
console.log(enqueue('c'));
console.log(enqueue('d'));

//4. dequeue
const dequeue =()=>{
    const val = cq[front];
    cq[front] = null;
    front = (front+1) %size;
    return val;
};
console.log(dequeue('a'));
console.log(dequeue('b'));
console.log(dequeue('c'));
console.log(dequeue('d'));
console.log(dequeue('e'));

const fs = require('fs');
const [n, m, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/).map(v => +v);
let count = 0;

class Node {
  constructor(value) {
    this.value = value;
    this.prevNode = null;
    this.nextNode = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;

    this.enqueue = value => {
      let curNode = new Node(value);
      if (this.front) {
        curNode.prevNode = this.rear;
        curNode.nextNode = this.front;
        this.rear.nextNode = curNode;
        this.front.prevNode = curNode;
        this.rear = curNode;
      } else {
        this.front = curNode;
        this.rear = curNode;
        curNode.prevNode = curNode;
        curNode.nextNode = curNode;
      }
      this.length++;
    };

    this.poll = () => {
      if (this.length === 1) {
        this.front = null;
        this.rear = null;
      } else {
        let secondNode = this.front.nextNode;
        secondNode.prevNode = this.rear;
        this.rear.nextNode = secondNode;
        this.front = secondNode;
        this.length--;
      }
    };

    this.rotateToLeft = (n = 1) => {
      while (n > 0) {
        if (this.length > 1) {
          this.rear = this.front;
          this.front = this.front.nextNode;
        }
        n--;
      }
    };

    this.rotateToRight = (n = 1) => {
      while (n > 0) {
        if (this.length > 1) {
          this.front = this.rear;
          this.rear = this.rear.prevNode;
        }
        n--;
      }
    };

    this.extract = value => {
      if (this.length <= 1) {
        return 0;
      } else {
        let curNode = this.front;
        let leftCount = 0;
        let rightCount = 0;
        while (curNode.value !== value) {
          curNode = curNode.nextNode;
          leftCount++;
        }
        curNode = this.front;
        while (curNode.value !== value) {
          curNode = curNode.prevNode;
          rightCount++;
        }

        if (leftCount < rightCount) {
          this.rotateToLeft(leftCount);
          this.poll();
          return leftCount;
        } else {
          this.rotateToRight(rightCount);
          this.poll();
          return rightCount;
        }
      }
    };
  }
}

dll = new DoublyLinkedList();
for (let i=1; i<=n; i++) dll.enqueue(i);
console.log(arr.reduce((acc, v) => acc + dll.extract(v), 0));