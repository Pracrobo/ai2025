const express = require('express');
const morgan = require('morgan');
const path = require('path')
const port =3000;
const app = express();
//start, count 방법

const data = Array.from({length:200}, (_, i) => `Item ${i+1}`);
const LEN = 10;
const div = data.length/LEN 
console.log(div);
const dataMap = data.map((count, div) => {
    ({ [count]: div })
});
console.log(dataMap);
// for(i = 0; i <= data.length; i++) {
// }
// function myData(_, i) {
//     return `Item ${i+1}`;
// };
// const data = Array.from({length:200}, myData);
// map으로 써도 됨

app.use(morgan('dev'));
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.get('/get-items/:number', (req, res) => {
    // 미션 1. 원하는 갯수만큼만 보내주려면 어떻게 설ㅇ계?
    //  number:1 {
    //    "key": "value"
    //   }
    // 입력 파라미터를 어떻게 정해야 할까?
    const idx = req.params.number;
    const view = data[count].findIndex(data, idx);
    console.log(view);
    res.send(data[idx])
});


app.listen(port, () => {
    console.log('서버 레디');
});