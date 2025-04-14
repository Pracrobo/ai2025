try{
    const result = someVariableName * 2;
    // reference error 

}catch(error) { // 발생하는 오류를 퉁 쳐서 잡은 것
    console.error('오류가 발생했음: ', error.message);
}

console.log('계속 진행중..');

// 에러 구체화 (참조 오류 예시)
try {
    const result = someVariableName * 2;
}catch(err) {
    if (err instanceof ReferenceError) {
        console.log('참조 오류 발생: ', err.message);
    }else {
        console.log('그 외 다른 오류 발생', err.message);
    }
}
// 문법 오류 예시
try {
    eval("alert('Hello)"); //따옴표 의도적 빼기
}catch(err) {
    if(err instanceof SyntaxError) {
        console.log('문법 오류 발생: ', err.message);
    }else {
        console.log('그 외 다른 오류 발생', err.message);
    }
}

//범위 에러 예시
try{
    let arr = new Array(-1); 
//배열은 길이가 양수여야 함
}catch(err) {
    if(err instanceof RangeError) {
        console.log('범위 에러 발생: ', err.message);
    }else{
        console.log('그외 오류', err.message);
    }
}
// 에러 만들기 예외처리는 throw해서 catch하는게 더 좋은 코드
function divide(a,b) {
    if (b === 0 ) throw new Error('0으로 나눌 수 없습니다.');
    return a / b;
}
//console.log() 이거는 던지기만해서 함수가 끝나버림 // Infinity
try {
    result = divide(5, 0);  // 잡아낸다
}catch(err) {
    console.log('오류 발생: ', err.message);
}