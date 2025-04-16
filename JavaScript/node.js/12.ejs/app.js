const express= require('express');
const app = express();
const port = 3000;


// 템플릿 엔진 설정, ejs 라는 것 사용(express 가 기본 지원)
app.set('view engine', 'ejs');


app.get('/',(req, res) => {
    console.log("홈");
    // res.send('<h1> 헬로우 </h1>'); // 이걸 브라우저가 파싱해서 보여주는 것(string 을 주고 받는 것)
    // 절대 경로 대신 path라이브러리로 path.join으로 index.htm 가져옴
    //   res.sendFile(path.join(__dirname, 'index.html'));
    // index를 찾아서 .ejs 변수로  치환(replace)
    res.render('index', {title : '나의 타이틀', message : 'EJS학습중입니다.'});
});

app.listen(port, ()=> {
    console.log('서버 레디');
});