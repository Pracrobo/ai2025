const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

let idx = 1; 
const users = {};


app.get('/', (req, res) => {
    res.send('메인');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {

    const name = req.body.userName;
    const nickName = req.body.nickName;
    const userId = idx++;
    users[userId] = {
        name,
        nickName
    }
    res.send(`users id ${userId}등록완료`);
});

app.put('/users/:id', (req, res) => {
    const userId = req.params.userId; // url에서 가져오기
    const newName = req.body.userName; // k-v 가져오기
    const newNickName = req.body.nickName;
    if (!users[userId]) {
        return res.status(404).send('사용자를 찾을 수 없다.');
    }
    users[userId].name = newName;
    users[userId].nickName = newNickName;

    res.send(`ID : ${userId} 수정완료`);
});


app.delete('/users/:id', (req, res) => {
    const userId = req.params.userId;
    if(!users[userId]) {
        return res.status(404).send('사용자를 찾을 수 없음');
    }
    delete users[userId];
    res.send(`ID : ${userId} 삭제`);
});


app.listen(port, () => {
    console.log(`서버 요청 완료 port ${port}입니다.`);
});