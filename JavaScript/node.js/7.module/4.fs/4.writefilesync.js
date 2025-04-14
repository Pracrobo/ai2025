//conmmonjs
const fs = require('fs'); //builtin 모듈의 

const data = "내가 파일에 쓰고 싶은 내용 아무거나... \n 두번째 줄 \n 세번째 줄" //덮어쓴다. options(flag : 'w' 새로 쓰기 , 'a' : append)
console.log('파일 쓰기 전');
fs.writeFileSync('example.txt', data, {encoding : 'utf-8', flag:'a'});
console.log('파일 쓰기 후');