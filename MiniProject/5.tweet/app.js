const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const sqlite3 = require('sqlite3');
const path = require('path');

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


app.get('/api/tweets', (req, res) => {
    const query = `
    SELECT tweet.*, user.username 
    FROM tweet JOIN user ON tweet.user_id = user.id
    ORDER BY tweet.id DESC
    `;
    db.all(query, [], (err, tweets) => {
        res.json(tweets);
    })
});

app.post('/api/logout', loginRequired, (req, res) => {
    req.session.destroy(() => {
        res.json({message: '로그아웃 성공'})
    });
});

app.post('/api/login', (req, res) => {
    const {email, password}  = req.body;
    const query = "SELECT * FROM user WHERE email = ?";
    db.get(query, [email] ,(err, user) => {
        if(err || !user || user.password !== password) {
            return res.status(401).json({'error' : '로그인에 실패했습니다.'});
        }

        req.session.user = {
            id: user.id,
            username: user.username,
            email: user.email
        }

        res.json({message : '로그인 성공!'})
    })
});

app.post('/api/tweet',loginRequired, (req, res) => {
    const {content} = req.body;

    const query = "INSERT INTO tweet (content, user_id) VALUES (?, ?)";
    db.run(query, [content, req.session.user.id], (err) => {
        if(err) {
            return res.status(500).json({error : '트윗 작성 실패'});
        }else{
            res.json({message : '트윗 작성 완료'});
        }
    })
});



const port = 3000;
app.listen(port, () => {
    console.log('서버시작');
});