function greet(name) {
    const greeting = '안녕하세요 , ' + name;
    return greeting;
}

function printScreen(text) {
    console.log(text);
}
printScreen(greet('아이유'));

//입력 arg, 출력 return
// 3. printScreen('아이유');
// 2. greet('아이유');
// 1. console.log(greet('아이유'));
// loader : wrapping 클래스 (loader:1147)
// 1147
// 파일없음

function add(a,b) {
    return a+b;
}
add(5,7);
printScreen(add(5,7)); //범용적으로 쓰는 함수를 만들어 재사용