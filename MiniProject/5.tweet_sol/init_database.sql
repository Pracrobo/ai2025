CREATE TABLE IF NOT EXISTS user(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);


CREATE TABLE IF NOT EXISTS tweet (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    user_id INTEGER NOT NULL, -- user테이블 참조
    likes_count INTEGER DEFAULT 0 -- 3정규화에 의해 like 테이블을 항상 참조하지 않도록 합산컬럼 포함
   -- FOREIGIN KEY(user_id) REFERENCES user(id)  -- ON CASCADE DELETE 회사정책
);

-- 좋아요 테이블
CREATE TABLE IF NOT EXISTS like (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    tweet_id INTEGER NOT NULL
 --   FOREIGIN KEY(user_id) REFERENCES user(id),
 --   FOREIGIN KEY(tweet_id) REFERENCES tweet(id) --ON CASCADE DELETE ,
);


-- 샘플데이터(실무에선 x) 당연히 실무에선 비밀번호 암호화해야 함
INSERT INTO user(username, email, password) VALUES
('user1', 'user1@example.com', 'password1'),
('user2', 'user2@example.com', 'password2'),
('user3', 'user3@example.com', 'password3');


INSERT INTO tweet (content, user_id, likes_count) VALUES
('안녕하세요 첫 글', 1, 0),
('두번째글이야', 2, 0);