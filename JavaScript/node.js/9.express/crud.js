const express = require('express');

const app = express();
const port = 3000;


const users = {}; //객체 생성
app.use(express.json()); //외우기


app.get('/', (req, res) => {
    console.log('성공');
    res.send('Hello, Express.js');
});


app.get('/user', (req, res) => {
    console.log('user 요청 성공');
    res.send(users);
});


app.post('/user', (req, res) => {
    console.log('user 생성 요청 성공, 이름: ',req.body.name);;
    const pool = Array.from({length:10} , (_, i) => i+1); 
    //const pool = [...Array(10)].map((_, i) => i + 1);
    pool.sort(() => Math.random() - 0.5); 
    const id = pool.pop();
    const createDate = Date.now();
    users[id] = req.body.id;
    console.log(users[name]);
    users[createDate] = req.body.joinDate;
    console.log('성공', users);
    res.send(users);
});


app.listen(port, () => {
    console.log(`서버 준비 완료: ${port} 사용중입니다`);
});