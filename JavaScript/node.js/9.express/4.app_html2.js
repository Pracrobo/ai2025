const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;
fs.readFileSync('index.html', 'utf-8' , (err, data)=> {
    console.log('파일 읽기 : ',data);
    res.send(data);
});

//
//app.get('/', (req, res) => {
//    res.send(index);
//});


app.listen(port, () => {
    console.log('서버 레디');
});