const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt'); // 1

const app = express();
const port = 3000;

// const users = [
//     {id: 1, username: 'user1', password: 'password1'},
//     {id: 2, username: 'user2', password: 'password2'},
// ]

const db = new sqlite3.Database('users.db');

app.use(express.urlencoded());
app.use(morgan('dev'));
app.use(session({ 
    secret: 'this-is-my-password',
    resave: false,
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/user', (req, res) => {
    const user = req.session.user;

    if (user) {
        const { username, password } = req.session.user;
        res.send(`당신은 계정명은 ${username} 이고 비밀번호는 ${password} 입니다.`);
    } else {
        res.send('로그인하고오시오...');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send(`안녕히가세요...`);
});

app.post('/login', async (req, res) => { // 3
    const { username, password } = req.body;
    console.log(username, password);
    
    // const user = users.find((u) => u.username === username && u.password === password);
    //const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, 10); // 2 bcrypt.genSalt(10);  // saltRounds 10
    console.log(hashedPassword);

    // 나의 계정을 가져와서. bcrypt.compare로 해시를 비교한다.
    /*
export declare function compare(data: string | Buffer(문자열이거나 바이너리 데이터를 나타내는 버퍼일 수 있습니다.), encrypted(비교할 대상인 암호화된 데이터): string): Promise<boolean>;
/**
 * @param data The data to be encrypted.
 * @param encrypted The data to be compared against.
 * @param callback A callback to be fire once the data has been compared. Uses eio making it asynchronous.
 * 
**/
/**
 * Promise의 .then()과 .catch()를 사용하여 비동기 처리를 할 수 있습니다.
 *  하지만 async/await는 코드의 가독성을 높이고, 비동기 코드가 동기 코드처럼 보이게 해줘서 디버깅과 이해가 더 쉽습니다.
 * 
 */
    db.get('SELECT * FROM users WHERE username=?', [username], async (err, row) => {
        if (row) {
            const isMatch = await bcrypt.compare(password, row.password);
            if (isMatch) {
                req.session.user = { username: row.username, password: row.password }
                res.json({ message: '로그인 성공'});
            } else {
                res.status(401).json({ message: '(비번이 틀려서) 로그인 실패'});
            }
        } else { // 보안적으로는 계정이 없는건지 비번이 틀린건지 구분해서 알려주지 않는게 좋은것임.
            res.status(401).json({ message: '(계정이 틀려서) 로그인 실패'});
        }
    });

    // db.get('SELECT * FROM users WHERE username=? AND password=?', [username, hashedPassword], (err, row) => {
    //     if (row) {
    //         req.session.user = { username: row.username, password: row.password }
    //         res.json({ message: '로그인 성공'});
    //     } else {
    //         res.status(401).json({ message: '로그인 실패'});
    //     }
    // })
});

app.listen(port, () => {
    console.log('서버레디');
});