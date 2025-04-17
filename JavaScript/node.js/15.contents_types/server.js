const express = require('express');
const morgan = require('morgan');
const path = require('path');

const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));

// 미들웨어(함수)( 하나씩 실행해봄,미세하게 성능 느릴수 있음)를 통해서 사용자의 입력값의 특정 데이터를 파싱해서 req.body 에 담아준다
app.use(express.json());
app.use(express.urlencoded({extended: true }));
// extended : 객체화해서 덱싱할건지 여부? 를 알려주는건 true, false
app.use(express.text());


app.post('/submit-json', (req, res) => {
    const data = req.body;
    const reply = {
        result : "success",
        message : "잘받음"
    };
    res.json(reply);
    // res.status(201).send('응'); // 응답값의 헤더에 201로 셋팅 ,body 없음
    // res.status(201).end(); // 응답값의 헤더에 201로 셋팅 ,body 없음
});


app.post('/submit-form', (req, res) => {
    const jsonData = req.body;
    console.log(jsonData);
    // res.send(jsonData);
});



app.post('/submit-text', (req, res) => {
    const textData = req.body;
    console.log(textData);
    res.send(textData);
});

app.listen(port, () => {
    console.log(`서버 ON ${port}`);
});