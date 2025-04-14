class Car {
    //let make = "";
    //let model = "";
    constructor(make, model) {//초기화 함수
        //객체 안에 저장
        this.make = make; //객체의 내부 변수(속성 property)에 저장
        this.model = model;  //let으로 저장됨
    }
    drive() {
        return `${this.make} ${this.model} is Driving...`;
    }
    doorOpen() {
        return `${this.make} ${this.model}의 문이 열립니다.`;
    }
    
    doorClose() {
        return `${this.make} ${this.model}의 문이 닫힙니다.`;
    }
}

const myCar = new Car('현대' , 'K5');
console.log(myCar.drive()); //현대 K5 is Driving...
const myNewCar = new Car('테슬라', 'Model S');
console.log(myNewCar.drive()); //테슬라 Model S is Driving...
console.log(myNewCar.doorOpen());
console.log(myNewCar.doorClose());


console.log(typeof myCar); //obejct
console.log(myCar instanceof Error); // false
console.log(myCar instanceof Car) // true