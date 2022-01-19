//클래서 선언과 객체 생성

class Person{
    //생성자
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
    testHello(){
        console.log(`Hi ${this.name}`)
    }
}

//객체생성 => 인스턴스 생성
const p1= new Person('hana', 20);
console.log(p1.name);
console.log(p1.age);
p1.testHello();

console.log(p1 instanceof Person)