//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

//const A = input.shift();

const A =[3]
const input=[0,1,3]
for (let i = 0; i < A; i++) {
    let zero= 1;
    let one = 0;
    
    for (let j = 1; j <= input[i]; j++) {
        const tmp= zero;
        zero = one;
        one = tmp + one;
    }

    console.log(zero + " " + one);   
}

