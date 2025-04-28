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
    // 아래 내용 줄 때 이 요청자가 좋아한건지 같이 줄수 없을까?

    db.all(query, [], (err, tweets) => {
        if(req.session.user) {
            const userId = req.session.user.id;
            const queryLike = "SELECT tweet_id FROM like WHERE user_id = ?";
            db.all(queryLike, [userId] , (err, likes) => {
                // 내가 좋아하는 목록 전체 가져오기
                const likedTweetIds = likes.map(like => like.tweet_id);
                const result = tweets.map(tweet => ({
                    ...tweet,
                    like_by_current_user: likedTweetIds.includes(tweet.id)
                }));
                res.json(result);
            });
        }else {
            res.json(tweets.map(tweet => ({ ... tweet, like_by_current_user : false})));  //foreach같은것 일괄처리를 넣어준다.
        }
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

app.post('/api/like/:tweet_id', loginRequired, (req,res) => {
    const tweetId = req.params.tweet_id; //req.query
    const query = "INSERT INTO like ( user_id, tweet_id) VALUES (?,?)";
    //like를 증가시켰을때 twwet 테이블의 like_count를 자동으로 증가하도록 trigger 작성해보기

    db.run(query, [req.session.user.id, tweetId] ,(err) => {
        if(err) {
            res.send( {error: "DB 오류" });
        }else{
            const update_query = "UPDATE tweet SET likes_count = likes_count +1 WHERE id =?";
            db.run(update_query, [tweetId]);        
            res.send({message: '좋아요 성공'});
        }
    })
});




app.post('/api/unlike/:tweet_id', loginRequired, (req,res) => {
    const tweetId = req.params.tweet_id; //req.query
    const query = "DELETE FROM like WHERE user_id =? AND tweet_id =?";
    //like를 증가시켰을때 twwet 테이블의 like_count를 자동으로 증가하도록 trigger 작성해보기
    db.run(query, [req.session.user.id, tweetId] ,(err) => {
        if(err) {
            res.send( {error: "DB 오류" });
        }else{
            const update_query = "UPDATE tweet SET likes_count = likes_count - 1 WHERE id =?";
            db.run(update_query, [tweetId]);        
            res.send({message: '싫어요 성공'});
        }
    })
});

const port = 3000;
app.listen(port, () => {
    console.log('서버시작');
});