const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

let users = {}; 
let nextId = 1;

app.use(express.json());  
app.get('/', (req, res) => {
    console.log('메인홈');
    res.sendFile(path.join(__dirname, 'public', 'user.html'));
});
app.use(express.static('public'));

app.get('/users', (req, res) => {
    console.log('사용자 조회');
    res.send(users);
});

// 사용자 생성 라우트 및 함수
app.post('/users', (req, res) => {  
    try{
        const name = req.body.name;
        users[nextId++] = name;  
        res.statusCode(201).send('사용자 생성완료res');
    }catch(error) {
        res.statusCode(500).send('서버 내부 오류'); //handling 한것
    }
});

// 사용자 수정 라우트 및 함수
app.put('/users/:id', (req, res) => {
    try{
        const id = req.params.id;
        users[id] = req.body.name;
        res.statusCode(200).send('사용자 수정res, '+ users);
    }catch(error) {
        res.statusCode(500).send('서버 내부 오류'); //handling 한것
    }
});

// 사용자 삭제 라우트 및 함수
app.delete('/users/:id', (req, res) => {
    try{
        const id = req.params.id;
        if(!users[id]) {  // users[id]=== undefined
            return res.status(404).send(`해당 사용자 ID ${id}는 존재하지 않습니다.`);
        }
        delete users[id];
        res.status(204).send();
    }catch(error) {
        res.statusCode(500).send('서버 내부 오류'); //handling 한것
    }
});

app.listen(port, () => {
    console.log(`서버 레디 on ${port}`);
});