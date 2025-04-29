const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// 값 설정
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size); // 3

// 값 불러오기
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

console.log(myMap.get("a string")); // "value associated with 'a string'", 왜냐하면 keyString === 'a string'
console.log(myMap.get({})); // undefined, 왜냐하면 keyObj !== {}
console.log(myMap.get(function () {})); // undefined, 왜냐하면 keyFunc !== function () {}
