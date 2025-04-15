const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

let users = {}; //객체 생성
let nextId = 1;

app.use(express.json());  //req.body에 넣어준다.
// 밑의 미들웨어를 안탄다.
// 순서바꾸기
app.get('/', (req, res) => {
    console.log('메인홈');
    res.sendFile(path.join(__dirname, 'public', 'user.html'));
});
// 제일 밑에 넣는게 제일 좋음
app.use(express.static('public')); //이름 정의는 마음대로 , 라우트를 미리 정의해둔게 public > index.html이라 
// 정의한 라우트가 없음(’/path’)
//app.get('/user.js', (req, res) => {
//    res.sendFile(path.join(__dirname, 'public', 'user.js'));
//});
// app.use(express.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
    console.log('사용자 조회');
    res.send(users);
});

// 사용자 생성 라우트 및 함수
app.post('/users', (req, res) => {
    console.log('사용자 생성: ', req.body);
    const name = req.body.name;
    users[nextId++] = name;  // 나의 key 도 이름, value 도 이름이다.
    res.send('사용자 생성');
});

// 사용자 수정 라우트 및 함수
app.put('/users/:id', (req, res) => {
    console.log('사용자 수정');
    const id = req.params.id;
    users[id] = req.body.name;
    res.send('사용자 수정');
});

// 사용자 삭제 라우트 및 함수
app.delete('/users/:id', (req, res) => {
    console.log('사용자 삭제, ', req.params.id);
    const id = req.params.id
    delete users[id];
    res.send('사용자 삭제');
});

app.listen(port, () => {
    console.log(`서버 레디 on ${port}`);
});