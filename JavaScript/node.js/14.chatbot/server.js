const express = require('express');
const morgan = require('morgan');

const port = 3000;
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));

app.post('/api/chat', (req, res) => {
    const question = "Echo:" + req.body.question;
    console.log(question);//curl 아마 300초 default (5분)
    //const response = {"answer": question};
    res.json({question}) ; //{question} => {"question" : "question의 value"}
    // res.json(response);
    // curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d "{\"question\": \"hello!\"}"
    // curl encoding : cp949 CJK이슈
    // H에 charset = utf-8

});

app.listen(port, () => {
    console.log(`서버 ON port:${port}`)
})

