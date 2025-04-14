// 상속 받은 부모의 이름을 덮어쓰는 (오버라이딩) 키워드 무엇인지 찾기

class All {
    constructor(name, say) {
        this.name = name;
        this.say = say;
    }
    saySomething() {
        console.log(`안녕하세요`);
    }
}

class Employee extends All{
    saySomething() {
        return `제 이름은 ${this.name}이고 직급은 ${this.say} 입니다.`;
    }
}

class Student extends All{
    saySomething() {
        return `제 이름은 ${this.name}이고 전공은 ${this.say} 입니다.`;
    }
}
class Person extends All{
    
    saySomething() {
        return `제 이름은 ${this.name}입니다.`;
    }
}

const oop = new Employee();
const aperson = oop.saySomething('시원1', '사원');
console.log(aperson);
