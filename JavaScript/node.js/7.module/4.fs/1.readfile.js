//conmmonjs
const fs = require('fs'); //builtin 모듈의 
function myCallbackFunction(err, data) {
    if(err) {
        console.error('에러가 있음 ', err);
    }else {
        console.log('에러가 없음, 데이터 :' ,data);
    }
}

//fs.readFile('example.txt', (err, data)); // callback함수가 들어가는 위치
//fs.readFile('example.txt', 'utf-8', myCallbackFunction); 
// fs.readFile('example.txt', 'utf-8', function (err, data) { //익명함수
//     if(err) {
//         console.error('에러가 있음 ', err);
//     }else {
//         console.log('에러가 없음, 데이터 :' ,data);
//     }
// }); 
//fs.readFile('example.txt', 'ascii', myCallbackFunction); 

console.log('파일 읽기 전');
fs.readFile('example.txt', 'utf-8',  (err, data) => { //Arrow 함수
    if(err) {
        console.error('에러가 있음 ', err);
    }else {
        console.log('에러가 없음, 데이터 :' ,data);
    }
}); 
console.log('파일 읽기 후');