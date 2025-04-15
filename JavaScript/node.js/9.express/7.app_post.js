const express = require('express');
// import express from 'express';

const app = express();
const port = 3000;
//const bodyParser = require('body-parser'); //옛날 방식
// app.use(bodyParser.json());  express 4.16 이후 변경

app.use(express.json()); // JSON 데이터 파싱을 위한 미들웨어
// 이 함수가 사용자의 요청에서 온 JSON을 req.body라는 변수에 담아준다.+


app.get('/', (req, res) => {
    res.send('헬로우 Express');
});


app.post('/user', (req, res) => {
    console.log('사용자 생성 요청', req.body);
    res.send('성공');
});


app.listen(port, () => {
    console.log(`서버 포트가 ${port}에서 실행중입니다.`);
});

