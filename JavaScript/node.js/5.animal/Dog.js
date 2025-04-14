const Animal = require('./Animal');

class Dog extends Animal {
    //상속(inheritance) >> 확장된 개념
    makeSound() { //함수의 overriding, 부모함수를 그대로 또는 재정의해서 사용
        return `${this.name} 멍멍`;
    }
}


module.exports = Dog; //어떤 클래스를 내보낼 것인지
