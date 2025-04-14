// # 으로 쓰이는 ES2022 https://gdsc-university-of-seoul.github.io/es-2022/
// 그래서 이걸 막고자 ES2022부터는 내부 접근을 막기 위해 #을 쓴다.
// 객체 선언시 #으로 private field, method를 관리한다.
class Hello {
    #counter = 0;  // Private field
    #myMethod() {} // Private method
}
const myClass = new Hello();
  
let x = myClass.#counter; // Error
myClass.#myMethod();      // Error