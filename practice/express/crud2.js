const express = require('express');
const path = require('path');

const port = 3000;
const app = express();
app.use(express.json());

let idx = 1; 
const users = {}; 


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/users', (req, res) => {
    const userList = [];

    for (let id in users) {
        userList.push({
            id: id,
            name: users[id].name,
            nickName: users[id].nickName,
            age: users[id].age
        });
    }

    res.json(userList);
});

app.post('/users', (req, res) => {

    const name = req.body.userName;
    const nickName = req.body.nickName;
    const age = req.body.age;

    users[idx] = { name, nickName, age };

    res.send(`사용자 등록 완료! ID: ${idx}`);
    idx++; 
});

app.put('/users/:id', (req, res) => {
    const userId = req.params.userId; // url에서 가져오기
    const newName = req.body.userName; // k-v 가져오기
    const newNickName = req.body.nickName;
    const age = req.body.age;

    if (!users[userId]) {
        return res.status(404).send('사용자를 찾을 수 없다.');
    }
    users[userId].name = newName;
    users[userId].nickName = newNickName;
    users[userId].age =age;

    res.send(`ID : ${userId} 수정완료`);
});


app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    if(!users[userId]) {
        return res.status(404).send('사용자를 찾을 수 없음');
    }
    delete users[userId];
    res.send(`ID : ${userId} 삭제`);
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`서버 요청 완료 port ${port}입니다.`);
});