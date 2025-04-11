const Animal = require('./Animal');

class Cat extends Animal {
    makeSound() {
        return `${this.name} 냐 ~~ 옹`;
    }
}

module.exports = Cat; //어떤 클래스를 내보낼 것인지
