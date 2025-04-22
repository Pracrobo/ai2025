const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('users.db');

const morgan = require('morgan');
const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

app.use(express.urlencoded());
app.use(morgan('combined'));
app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.send('index.html')
});


app.post('/login', (req,res) => {
    const {username, password} = req.body;

    db.get('SELECT * FROM users WHERE username=? AND password=?', [username, password], (err, row) => {
        if(row) res.send('로그인 성공');
        else res.send('로그인 실패');
    });
});

app.listen(port, () => {
    console.log("서버ON");
});
// / 접속 index.html 전달
// /login에 post 요청시 db에 접속해ㅑ서 해당 usernane, password 가 있는지 확인
// 맞으면 "로그인 성공"전달
// 틀리면 "로그인 실패"전달

