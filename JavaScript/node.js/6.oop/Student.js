//학생은 이름, 전공있고 인사시 나의 이름과 전공을 말한다.
const Person = require('./Person');

class Student extends Person{
    // name="";
    // major="";
    constructor(name,major) {
        super(name);
        this.major = major;
    }
    greet() { //내걸 정의(define)하거나 또는 부모함수를 재정의 (overriding) 하거나
        console.log(`안녕하세요. 저는 ${this.name}이고, 저의 전공은 ${this.major} 입니다.`);
    }
}

module.exports = Student;