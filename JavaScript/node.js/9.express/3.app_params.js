const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('헬로우, 메인 페이지');
});
// express가 URL경로에 가변인자를 반아 :콜론을 사용하도록 정했음
app.get('/users/:id', (req, res) => {
    const id = req.params.id; // 가변인자는 req.params안에 담겨서 온다.
    res.send(`사용자 정보, ID: ${req.params.id}`);
});


app.get('/users/:id/profile', (req, res) => {
    const id = req.params.id; // 가변인자는 req.params안에 담겨서 온다.
    res.send(`사용자 정보 프로필 상세 페이지, ID: ${req.params.id}`);
});

// searc?keyword=programming&category=javascript
app.get('/search', (req, res) => {
    const keyword = req.query.keyword; //쿼리 파라미터는 req.query 안에 담겨서 온다.
    const category = req.query.category; //쿼리 파라미터의 category라는 key의 값을 가져온다.
    res.send(`키워드 : ${keyword}, 카테고리 : ${category}`);
});


app.listen(port, () => {
    console.log(`서버 레디 on ${port}`);
});