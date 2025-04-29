// callback 함수를 인자로 받는 비동기 함수
setTimeout(() => console.log("1초 후 실행"), 1000);
//setInterval은 일정한 시간 간격마다 함수를 반복 실행합니다.

setInterval(() => {
    console.log("1초마다 실행됩니다");
  }, 1000); // 1000ms = 1초
  
//반환값은 interval ID로, clearInterval()로 멈출 수 있습니다.
let count = 0;
const id = setInterval(() => {
  count++;
  console.log(count);
  if (count >= 5) {
    clearInterval(id); // 멈춤
    console.log("끝!");
  }
}, 1000);
