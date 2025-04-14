//conmmonjs
const fs = require('fs'); //builtin 모듈의 

console.log('파일 읽기 전');
const data = fs.readFileSync('example.txt', 'utf-8');
console.log('파일 데이터는 : ', data);
console.log('파일 읽기 후');