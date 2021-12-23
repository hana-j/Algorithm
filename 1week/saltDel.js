// var fs = require('fs');
// var input = parseInt(fs.readFileSync('/dev/stdin'));

const N = 18;
let bag;

if(N%5 ==0){
    bag = parseInt(N/5);
}else if(N%5 ==1){
    bag = parseInt(N/5)+1;
}else if(N%5 ==2 && N>=12){
    bag =  parseInt(N/5) +2;
}else if(N%5==3){
    bag = parseInt(N/5)+1;
}else if(N%5==4 && N >=9){
    bag = parseInt(N/5)+2;
}else {
    bag = -1;
}
console.log(bag);