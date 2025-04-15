const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;


// 로깅을 해주는 라이브러리 = morgan
// 로그의 다양한 포멧들 : 개발할때 편한 로그 dev
///                    운영할땐 웹서버 같은 로그 combined
//                    커스텀 설정 가능 :method :url :status :response-time
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello');
});


app.get('/user', (req, res) => {
    res.send('사용자 정보');
});

app.delete('/user', (req, res) => {
    res.send('사용자 삭제');
});

app.listen(port, () => {
    console.log('서버 레디');
});

