const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('test.db');

function runQuery(query, params = []) {
    new Promise((resolve, reject) => { //pending, fulfiled, rejected
        db.run(query, params, (err) => {
            if(err) reject(err);
                else(resolve());
            });
        }); 
        // promise를 반납하게 만든것
}

(async () => {
    await runQuery('CREATE TABLE IF NOT EXISTS messages (text TEXT);');
    await runQuery('INSERT INTO messages (text) VALUES (?)', ['Hello, SQLite!']);
    console.log('여기는 동기화 실행중');
})();
