class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return "아무 소리 냄~";
    }
}

class Dog extends Animal {
    //상속(inheritance) >> 확장된 개념
    makeSound() { //함수의 overriding, 부모함수를 그대로 또는 재정의해서 사용
        return `${this.name} 멍멍`;
    }
}

class Cat extends Animal {
    makeSound() {
        return `${this.name} 냐 ~~ 옹`;
    }
}

// 1. 
const aAnimal = new Animal('dolly');
const aSound = aAnimal.makeSound();
console.log(aSound);
// 2.
const aDog = new Dog('charlie');
const aDogSound = aDog.makeSound();
console.log(aDogSound);

const bDog = new Dog('brown');
const bDogSound = bDog.makeSound();
console.log(bDogSound);


const aCat = new Cat('Kitty');
const aCatSound = aCat.makeSound();
console.log(aCatSound);