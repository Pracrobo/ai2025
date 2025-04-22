const sqlite = require('better-sqlite3');
const db = sqlite('test.db');
//테이블 생성
db.exec(`CREATE TABLE IF NOT EXISTS greetings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT
);`);
//데이터 삽입
const insert  = db.prepare('INSERT INTO greetings (message) VALUES (?)');
insert.run('Hello, BetterSQLite3');

//데이터 조회
const select = db.prepare('SELECT * FROM greetings');
const greetings = select.all();
// console.log(greetings);
// 출력 및 포맷팅
greetings.forEach((row) => {
    console.log(`인사${row.id}: ${row.message}`);
});