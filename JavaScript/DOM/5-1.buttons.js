function increment() {
    var result = document.getElementById("result")
    // DOM안에 있는건 글자다.
    // 글자를 숫자로 변환하는 함수 : parseInt()  또는 Number;
    // result.innerText = Number(result.innerText) + 1;
    result.innerText++;
    let notice = document.getElementById("notice"); 
   if (typeof notice.innerText == "string") {
        notice.innerText = '';
   }
}
function decrement() {
    var result = document.getElementById("result")
    result.innerText = parseInt(result.innerText) -1;
    let notice = document.getElementById("notice"); 
    if (result.innerText < 0) {
        notice.innerText = "음수는 불가능합니다! 숫자를 올리세요.";
        result.innerText = 0;
    }
}