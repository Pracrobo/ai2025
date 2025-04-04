function increment() {
//    console.log("증가버튼 클릭");
    var result = document.getElementById("result")
    console.log(result)   
    // result.innerText = result.innerText + 1; 0111 이런식으로 나옴
    // DOM안에 있는건 글자다.
    result.innerText++;
    //글자를 숫자로 변환하는 함수 : parseInt()  또는 Number;
//    result.innerText = Number(result.innerText) + 1;
    
}
function decrement() {
//    console.log("감소버튼 클릭");
    var result = document.getElementById("result")
    console.log(result)
    result.innerText = parseInt(result.innerText) -1;
    // 음수로 안가게 하는 방법 만들기(if 비교)
}