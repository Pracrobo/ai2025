//conmmonjs
const fs = require('fs'); //builtin 모듈의 

const data = "내가 파일에 쓰고 싶은 내용" //덮어쓴다. options(flag : 'w' 새로 쓰기 , 'a' : append)
console.log('파일 쓰기 전');
fs.writeFile('example.txt', data, {encoding : 'utf-8', flag: 'a'}, (err) => {
    if(err) {
        console.error('에러가 있음', err);
    }else {
        console.log('에러가 없음, 쓰기 완료');
    }
});
console.log('파일 쓰기 후');