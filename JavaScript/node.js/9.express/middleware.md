#

req -> 미들웨어 -> resp
req -> 미들 1 -> 미들 2 --> resp


app.use(express.json())


express라이브러리 안에있는 json()하수 호출
HTTP req의 다양한 파라미터를 req.body에 담아준다.


app.use('/', 라우터 핸들러);



### 미들웨어 morgan
app.user(morgan('dev'))



IPv6 : 127.0.0.1

