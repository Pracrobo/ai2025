CREATE TABLE IF NOT EXISTS memo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT
);

INSERT INTO memo(title, contents) VALUES ('test', 'test중입니다.');