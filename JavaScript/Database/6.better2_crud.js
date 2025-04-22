const sqlite = require('better-sqlite3');
const db = sqlite('test2.db');

db.exec(`CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT
)`);

//사용자 조회
const allusers = db.prepare('SELECT * FROM users');
const allusers_result = allusers.all();
console.log('조회된 사용자: ', allusers_result);


//신규 사용자 만들기
const newuser = {
    username: 'user1',
    email: 'user1@example.com'
}

// INSERT
const insert = db.prepare('INSERT INTO users (username, email) VALUES (?, ?)');
insert.run(newuser.username, newuser.email);

// 특정 사용자 조회
const userId = 1;
const user = db.prepare('SELECT * FROM users WHERE id = ? ')
const auser = user.get(userId);
console.log('검색된 사용자: ' , auser);
//사용자의 정보 갱ㅅ긴
const updateUser = {
    id: 1,
    username: 'user001',
    email: 'user001@gamil.com'
};

// UPDATE
const update = db.prepare('UPDATE users SET username=?, email=? WHERE id=?');
update.run(updateUser.username, updateUser.email, updateUser.id);


//사용자 삭제
const deletUser = {
    id: 2,
}
// DELETE
const deleteQ = db.prepare('DELETE FROM users  WHERE id=?');
deleteQ.run(deletUser.id);
console.log('삭제완료');

// 연결종료
db.close();
