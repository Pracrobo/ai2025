//미션 . 파일을 읽어서 그내용을 전달하는 서버 만들기
// 1. index.html 파일을 읽어서 변수에 담아두고
// 2. req가 왔을때 그 변수의 내용을 전달한다.


// 0. 모듈 부르기
const fs = require('fs');
const http = require('http');
const index = fs.readFileSync('index.html', 'utf-8');
// 실제로는 예외처리 해줘야하지만 지금은 무시
const server = http.createServer((req, res) => {
    res.writeHead(200); 
    console.log("응답이 완료");
    // res.end(index); 
});

server.listen(3000, () => {
    console.log('서버가 3000번 포트를 listen 하고 있다. 지금부터 사용자의 요청을 기다리겠습니다.'); //앞에인자가 성공했을때 콜백함수가 실행
});