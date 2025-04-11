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
// 에러 만들기1 예외처리는 throw해서 catch하는게 더 좋은 코드
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


// 에러 만들기2 TypeError로 던지기
function divide(a,b) {
    if(typeof a !== 'number' || typeof b!== 'number') {
        throw new TypeError('숫자를 입력하시오'); //type으로 나뉘어서 쓴것
    }
    if((a.toString().length <= 2) || (b.toString().length <= 2)) {
        throw new RangeError('2자리 숫자만 입력하시오')
    }

    if (b === 0 ) throw new Error('0으로 나눌 수 없습니다.'); //일반적으로
    return a / b;
}
//console.log() 이거는 던지기만해서 함수가 끝나버림 // Infinity
try {
    result = divide('a', 'b');  // 잡아낸다
}catch(err) {
    console.log('오류 발생: ', err.message);
}
//오류 발생:  0으로 나눌 수 없습니다.
//오류 발생:  숫자를 입력하시오


// 에러 만들기3 RangeError로 던지기
function divide(a,b) {
    if(typeof a !== 'number' || typeof b!== 'number') {
        throw new TypeError('숫자를 입력하시오'); //type으로 나뉘어서 쓴것
    }
    if((a.toString().length > 2) || (b.toString().length > 2)) {
        throw new RangeError('2자리 숫자만 입력하시오')
    }

    if (b === 0 ) throw new Error('0으로 나눌 수 없습니다.'); //일반적으로
    return a / b;
}
//console.log() 이거는 던지기만해서 함수가 끝나버림 // Infinity
try {
    // result = divide(99, 9);  // 잡아낸다
    result = divide(999, 9);
    console.log('나눗셈 결과: ', result);
}catch(err) {
    console.log('오류 발생: ', err.message);
}