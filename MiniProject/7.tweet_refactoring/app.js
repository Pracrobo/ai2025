const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const sqlite3 = require('sqlite3');
const path = require('path');


const routes = require('./routes/')// index.js


const app = express();
const db = new sqlite3.Database('miniapp.db', (err) => {
    if(err) {
        console.log("DB연결 실패");
    }else{
        console.log("DB연결 성공");
        //SQLite 에서도 외래키 기능을 활성화 한다
        db.run('PRAGMA foreign_keys = ON');
    }
});
// 1. 세션 연동
// 2. 로그인 성공
// 3. 로그인한 사용자로 글 작성
app.use(session({
    secret: 'secret-password',
    resave : false, // 변경없어도 저장할거냐?
    saveUninitialized : false //초기화안된것도 저장할겨?
}))

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

//미들웨어 설정
function loginRequired(req, res, next) {
    if(!req.session || !req.session.user) {
        return res.status(401).json({error : "로그인이 필요합니다."})
    }
    next(); // 이부분 다시 살피기
}


app.use('/api', routes);

const port = 3000;
app.listen(port, () => {
    console.log('서버시작');
});