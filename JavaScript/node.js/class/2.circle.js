class Circle {
    constructor(radius) {
        this._radius = radius; //내부선언 함수를 private하게 쓰려고 _를 쓴다. 
    }

    get diameter() { //getter 객체안에 접근이 안되므로 접근가능하게끔 쓰는 것
        return this._radius * 2; // 값이 초기화되는 건 아니지만 변수가 생김
    }
    set diameter(diameter) {
        this._radius = diameter / 2; //setter 
    }
}

const myCircle = new Circle(4); //반지름 4짜리 원
console.log(myCircle.diameter); // 8

myCircle.diameter = 14; //변경
console.log(myCircle._radius); /// 내부변수에 직접 접근해서 radius에 잘 저장되었나 확인, 단, 이렇게 접근하는 것은 좋은 방식이 아니다.
console.log(myCircle.diameter); 
// # 으로 쓰이는 ES2022 https://gdsc-university-of-seoul.github.io/es-2022/
// 그래서 이걸 막고자 ES2022부터는 내부 접근을 막기 위해 #을 쓴다.
// 객체 선언시 #으로 private field, method를 관리한다.
