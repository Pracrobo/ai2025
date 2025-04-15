const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


function myMiddleware(req, res, next) {
// next 로 다른 미들웨어를 넣을 수도 있음
// 중단, 더 가게 시키기 next()  
    console.log(`MyLog: ${req.method}, ${req.url}`); 
    next();
}

app.use(myMiddleware);
// req => 미들웨어 => {미들웨어 2, ... } => 라우트 => 함수본문 => res
// 미들웨어에 보안(인증 등) 넣을 수 있음
// req -> 인증된 사용자 인지 체크 -> /admin -> 관리자 페이지 -> resp


app.get('/', (req, res) => {
    const htmlFilePath = path.join(__dirname, './public/index.html'); //절대 경로
    res.sendFile(htmlFilePath);
});
// public 있는걸 알아서 줘
// (라우팅으로 계속 줄 수 없으니 public을 통째로 노출, static폴더 정의)
//2. 
app.get('/', (req, res) => {
    const htmlFilePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(htmlFilePath);
});

//3. 이건 말도 안됨(라우팅 게속 주는 방식)
// app.get('/images.jpg', (req, res) => {
//     res.send('고양이사진');
// });

//1. 이게 일반적(미들웨어: 내가 만들 수 있다)
app.use(express.static('public')); // 우리의 홈에 있는 public폴더를 정적 폴더로 정의한다.
//  '/'경로는 index.html이 가장 우선 순위가 높음
// app.use 가 먼저 매칭되어서
//원래는 이거 맨위에있어야함

app.listen(port, () => {
    console.log('서버 레디');
});