const express = require('express');
const router = express.Router();


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

module.exports = router;