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
app.use(express.json())
app.use(express.static('public'));

app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname, 'public', 'memopad.html'));
});
app.get('/api/memo', (req, res) => {
    const query = 'SELECT * FROM memo;';
    db.all(query, [], (err, memo) => {
        if (memo) res.send(memo);
    });
});

app.get('/memo/:id', (req,res) => {
    const id = req.body;
    db.get('SELECT * FROM WHERE id=?', [id], (err, row) => {
        console.log(row);
    });
    res.send({id, title, contents});
});

app.post('/memo', (req,res) => {
    // console.log(req);
    db.run('INSERT INTO memo (title, contents) VALUES (?, ?)', [req.body.title, req.body.contents], (err, row) => {
        if(err) console.log('오류');
        if(row) res.send({'title': row.title, 'contents': row.contents});
    });
});



app.listen(port, () => {
    console.log(`서버 ON: ${port}`);
});