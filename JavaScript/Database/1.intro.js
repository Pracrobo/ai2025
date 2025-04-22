const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('test.db');
// run은 실행만 하고 결과를 받아올 수 있음
db.run('CREATE TABLE IF NOT EXISTS messages (text TEXT);');
db.run('INSERT INTO messages (text) VALUES (?)', ['Hello, SQLite!']);


//each는 실행 결과를 받아올 수 잇음 // 비동기로 동작
db.each('SELECT * FROM messages', (err, row) => {
    console.log(row.text);
});
db.close();
