//덧셈함수
function add(a,b) {
    return a + b;
}
//뺄셈함수
function sub(a,b) {
    return a - b;
}

function mul(a,b) {
    return a * b;
}

function div(a, b) {
    if (b === 0 ) return '0으로 나눌 수 없습니다.';
    return a / b;
}
function printScreen(text) {
    console.log(text);
}

printScreen(add(2, 3));
printScreen(sub(2, 3));
printScreen(mul(2, 3));
printScreen(div(2, 3));

printScreen(mul(2, 0));
printScreen(div(2, 0));
//다음 문제 푸시오
//1. 2 + 3
//2. 2 - 3
//3. 2 * 3
//4. 2 / 3
//5. 2 * 0
//6. 2 / 0
//7. 6의 오류 해결