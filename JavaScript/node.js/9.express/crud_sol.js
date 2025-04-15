const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


let users = {}; //객체 생성
app.use(express.json()); //외우기 페이로드를 (즉, data 영역 parsing )
//request.body에 담아달라
//app.use(express.urlencoded({extendeds : true}));

let ids = [];
for(i = 1; i <= 10; i++) {
    ids.push(i);
}

app.get('/', (req, res) => {
    console.log('성공');
    res.send('Hello, Express.js');
});

// 사용자 조회 라우트 및 함수
app.get('/users', (req, res) => {
    console.log('user 요청 성공');
    res.send("사용자 조회: ", req.body); // text/html, charset=utf-8 문자열 기본값
    // res.json(users); //application/json
});

// 사용자 생성 라우트 및 함수
app.post('/users', (req, res) => {
    const name = req.body.name;
    const id = ids.pop();
    const date = Date.now();
    console.log(id);
    users[id] = id;
    users[name] = name;
    console.log(date.toLocaleString());

    users[joinDate] = date.toLocaleString();

    res.send('사용자 생성 성공', users);
});

app.put(`/users:id`, (req, res) => {
    const id = req.params.id;
    users[id]
    res.send('사용자 수정 성공');
});

app.delete(`/users:id`, (req, res) => {
    console.log('사용자 삭제 시도', req.params.id);
    const id = req.params.id;
    delete users[id];
    res.send('사용자 삭제 성공');
});

app.listen(port, () => {
    console.log(`서버 준비 완료: ${port} 사용중입니다`);
});