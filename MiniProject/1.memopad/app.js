const express = require('express');
const morgan = require('morgan');
const path = require('path');
const sqlite = require('sqlite3');

const app = express();
const port = 3001;
const db = new sqlite.Database('../miniapp.db', (err) => {
    if(!err) console.log('DB 연결 성공')
})

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname, 'public', 'memopad.html'));
});
//전부 다 보여주기
app.get('/api/memo', (req, res) => {
    const query = 'SELECT * FROM memo;';
    db.all(query, [], (err, memo) => {
        if (memo) res.send(memo);
    });
});
//db에 저장된 특정하나만 보여주기
app.get('/memo/:id', (req,res) => {
    const id = req.body;
    db.get('SELECT * FROM WHERE id=?', [id], (err, row) => {
        console.log(row);
    });
    res.send({id, title, contents});
});

//하나 수정하기
app.put('/memo/:id', (req,res) => {
    const id = req.body;
    db.get('SELECT * FROM WHERE id=?', [id], (err, row) => {
        console.log(row);
    });
    res.send({id, title, contents});
});

//하나 지우기
app.delete('/memo/:id', (req,res) => {
    const id = req.body;
    db.get('DELETE * FROM WHERE id=?', [id], (err) => {
        if(err) res.status(500).send({message : '에러'});
        return;
    });
    res.send({message: '성공'});
});


app.post('/memo', (req,res) => {
    console.log('req.body:', req.body);
    const { title, contents } = req.body;
    db.run('INSERT INTO memo (title, contents) VALUES (?, ?)', [title, contents], function(err){
        if(err) {
            console.log('오류');
            res.status(500).send({ message: 'DB 오류 발생'});
            return;
        }
        // this.lastID: 새로 삽입된 레코드의 id 값
        res.send({message : 'insert 성공', title: title, contents: contents, id: this.lastID })
    });
});


app.listen(port, () => {
    console.log(`서버 ON: ${port}`);
});