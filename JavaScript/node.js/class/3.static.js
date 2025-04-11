class MathOps {
    static add(a,b) {
        return a + b;
    }
    static sub(a,b) {
        return a - b;
    }
}
// const myMathOps = new MathOps();
// const result = myMathOps.add(3,4);
// console.log(result);

// 객체를 새로 계속 찍어내지 않고 공통 함수를 제공하는 것
const sum = MathOps.add(2,3);
console.log(sum);