const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const date = Date.now();
const createDate = new Date(date);


let users = []; //객체 생성
app.use(express.json()); //외우기 페이로드를 (즉, data 영역 parsing )
//request.body에 담아달라
//app.use(express.urlencoded({extendeds : true})); // 파싱해주는 미들웨어
// 이걸 써야 HTML <form>에서 보낸 데이터가 req.body에 들어가!
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
    res.json(users);
});

// 사용자 생성 라우트 및 함수
app.post('/users', (req, res) => {
    const name = req.body.name;
    // const pool = Array.from({length:10} , (_, i) => i+1); 
    const id = ids.pop();
    const newUser = {
        id,
        name,
        joinDate : createDate
    }
    users.push(newUser);
    res.send(`사용자 생성 성공, ${JSON.stringify(users)}`);
});

app.put('/users/:id', (req, res) => {
    const findId = parseInt(req.params.id);
    const newUser = req.body;
    console.log(`사용자 수정 시도, id: ${findId}`);
    console.log("body, " +  req.body); //object
    console.log("body console:", newUser);
    res.send(`사용자ID:${findId}  수정 완료`);
});

app.delete('/users/:id', (req, res) => {
    console.log('사용자 삭제 시도', req.params.id);
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.send('사용자 삭제 성공');
});

app.listen(port, () => {
    console.log(`서버 준비 완료: ${port} 사용중입니다`);
});