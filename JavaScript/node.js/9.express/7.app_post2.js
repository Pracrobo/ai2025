const express = require('express');
// import express from 'express';

const app = express();
const port = 3000;

const user = {}; // 요청할 객체

app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('헬로우 Express');
});

app.get('/user', (req, res) => {
    console.log('성공2')
    res.send(user);
});


app.post('/user', (req, res) => {
    console.log('사용자 생성 요청', req.body.name);
    const id = Date.now(); //epoch 값이 나.옴
    user[id] = req.body.name; 
    res.send("성공");
});


app.listen(port, () => {
    console.log(`서버 포트가 ${port}에서 실행중입니다.`);
});

