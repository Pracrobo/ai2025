const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('test.db');

(async () => {
    await new Promise((resolve, reject) => { //pending, fulfiled, rejected
        const ret = db.run('CREATE TABLE IF NOT EXISTS messages (text TEXT);', (err) => {
            if(err) reject(err);
            else(resolve());
        });
        // promise를 반납하게 만든것
        })
        // console.log(ret); //Database {}

        //console.log(result); //Promise { <pending> }
        console.log('헬로');
})(); // 함수호출