const sqlite = require('better-sqlite3');
const db = sqlite('users.db');

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
    const username = req.body.username;
    const password = req.body.password;
    
    const select_one = db.prepare('SELECT * FROM users WHERE username=? AND password=?');
    const one_user = select_one.get(username, password);
    
    if(one_user) {
        res.send("로그인 성공");
    }else {
        res.send("로그인 실패");
    }
    db.close();
});

app.listen(port, () => {
    console.log("서버ON");
});
// / 접속 index.html 전달
// /login에 post 요청시 db에 접속해ㅑ서 해당 usernane, password 가 있는지 확인
// 맞으면 "로그인 성공"전달
// 틀리면 "로그인 실패"전달

