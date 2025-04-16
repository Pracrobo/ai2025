const express = require('express');
const morgan = require('morgan');
const path = require('path')
const port =3000;
const app = express();
//start, end 방법

const data = Array.from({length:200}, (_, i) => `Item ${i+1}`);


app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/get-items', (req, res) => {
    // 미션 1. 원하는 갯수만큼만 보내주려면 어떻게 설ㅇ계?
    // query  파라미터로 GET , start10, end =20
    // 입력 파라미터를 어떻게 정해야 할까?
  //  const start = req.query.start;
  //  const end = req.query.end;  
    const {start, end} = req.query;
    
   // for(let i = start; i < end; i++) {
   //     userItems.push(data[i]);
   // }

    const userItems = data.slice(start, end);
    res.send(userItems);
});


app.listen(port, () => {
    console.log('서버 레디');
});