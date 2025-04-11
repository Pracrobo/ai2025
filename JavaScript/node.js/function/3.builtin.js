const stringNumber = "42"; //글자임
console.log(stringNumber + 2);
const number = parseInt(stringNumber); //함수의 원형 prototype / radix - 지수의 의미 / 10진수가 기본값  / : - return type
console.log(number+2);

console.log(typeof stringNumber);
console.log(typeof number);

//참고
const number2 = Number(stringNumber); //대문자는 일반적으로 객체(Object), arg가 초기화값을 객체로 받는 것
///https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number
console.log(number2);
console.log(typeof number2); // number(Object)

const User = {
    name: "John",
    age: 30,
}
console.log(typeof User); // Object


/// return 빌트인함수
// setTimeout(function, delay(ms));/
setTimeout(()=> {
    console.log('1초 후에 입력됨');
}, 1000);
console.log('끝');


const timerId = setTimeout(() => {
    console.log('3초 후에 출력됨');
}, 3000);
console.log('진짜 끝'); //대기열인 큐에 들어가서 3초뒤 나온다
clearTimeout(timerId); // 취소시켜서 안나옴
// console.log('타이머 ID:', timerId); // 객체로 나옴


