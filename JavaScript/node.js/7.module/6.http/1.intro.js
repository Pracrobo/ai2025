const http = require('http');


const server = http.createServer();
server.on('request',  (req, res) => {
   console.log('요청 왔음'); 
   res.writeHead(200);
   res.end("Hello");
});

server.on('connection', () => {
    console.log('연결되어있음'); 
});

server.on('close', () => {
    console.log('연결 종료'); 
});
server.listen(3000); //서버 대기 -< 소켓 // 기본값 3000
// 소켓 프로그래밍(c언어)