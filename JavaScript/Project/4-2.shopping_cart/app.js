// 라이브러리 로딩
const express = require('express')
const session = require('express-session');
const morgan = require('morgan');
const sqlite = require('sqlite3');
const path = require('path');

// 변수 선언
const app = express();
const port = 3000;
const db = new sqlite.Database('shopping.db', (err) => {
    if (!err) console.log('DB연결 성공');
});

// 각종 미들웨어 등록
// app.use가 미들웨어가 아니라 app.use()의 인자안의 함수가 미들웨어
// Express 앱에서 항상 실행하는 미들웨어 역할, 해당 경우에는 URL에 상관없이 매번 실행된다.
// use(), Method()함수를 이용해 응용프로그램 수준의 미들웨어를  app객체의 인스턴스에 바인딩Method = get or post
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public')); // public 폴더 노출
app.use(session({
    secret: 'password1234',
    resave: false,
    saveUninitialized: false
}));

// 각종 라우트
app.get('/', (req, res) => res.redirect('/home'));
app.get('/home', (req, res) => res.sendFile(path.join(__dirname, 'public', 'home.html')));
app.get('/cart', (req, res) => res.sendFile(path.join(__dirname, 'public', 'cart.html')));
app.get('/products', (req, res) => res.sendFile(path.join(__dirname, 'public', 'products.html')));

// REST-APIs
app.post('/api/login', (req, res) => {
    const {username, password} = req.body;
    // console.log(username, password);
    const query = 'SELECT * FROM users WHERE username=? AND password=?';

    db.get(query, [username, password], (err, row) => {
        if (err) console.log('오류');
        if (row) {
            req.session.user = { id: row.id, username: row.username };
            res.json({message: '로그인 성공', username: row.username});
        } else {
            res.status(401).json({message: '로그인 실패'});
        }
    })
});

app.get('/api/check-login', (req, res) => {
    const user = req.session.user;
    if (user) {
        res.json({ message: 'Welcome back', username: user.username });
    } else {
        res.status(401).json({ message: 'Not logged in' });
    }
});

app.get('/api/products', (req, res) => {
    const query = 'SELECT * FROM products';
    db.all(query, [], (err, rows) => {
        // 나중에 여기에 에러체크 추가할것
        res.json(rows);
    });
});

app.post('/api/cart/:productId', (req, res) => {
    const productId = req.params.productId;
    const cart = req.session.cart || [];
    const query = 'SELECT * FROM produts WHERE id=?';
    db.get(query, [productId], (err, product) => {
        if (!product) { return res.status(404).json({ message: '상품을 찾을 수 없습니다.'} )};

        const existing = cart.find(item => item.id == productId); // == 로 타입 맞춤
        //자바스크립트의 객체는 참조형
        // 깊은 복사가 필요한 경우는 새배열을 만드는 경우나 json으로 통째로 복사할때 
        
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1})
        }

        req.session.cart = cart;
        res.json({message: '상품 추가 완료'});
    });
});

app.get('/api/cart', (req, res) => {
    const cart = req.session.cart || []; // 장바구니에 물건 담은적이 없이 카트를 올수도 있음.
    console.log('내카트: ', cart);
    res.json({ cart });
});

// 메인 서버 시작
app.listen(port, () => {
    console.log('서버 레디');
}).on('error', (err) => {
    console.error('서버 실행 중 오류 발생:', err.message);
});