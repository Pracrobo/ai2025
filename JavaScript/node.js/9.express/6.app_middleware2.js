const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(function myMiddleware(req, res, next) {
    console.log(`MyLog1: ${req.method}, ${req.url}`); 
    req.myData = 1234;
    next();
});
app.use(function myMiddleware(req, res, next) {
    console.log(`MyLog2: ${req.method}, ${req.url}`); 
    req.requestTime = Date.now(); // epoch라는 값, 1970년 1월 1일 00:00:00 기준
    next();
});
app.use(function myMiddleware(req, res, next) {
    console.log(`MyLog3: ${req.method}, ${req.url}`); 
    next();
});


app.get('/', (req, res) => {
    const htmlFilePath = path.join(__dirname, 'public', 'index.html');
    console.log(req.myData);
    const date = new Date(req.requestTime);
    console.log(req.requestTime);
    console.log(`요청 시간: ${date.toLocaleString()}`); // 시간 초까지 나타냄 
    res.sendFile(htmlFilePath);
});

app.use(express.static('public')); 

app.listen(port, () => {
    console.log('서버 레디');
});