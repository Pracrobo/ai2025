CREATE TABLE IF NOT EXISTS memo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    contents TEXT
);

INSERT INTO memo(title, contents) VALUES ('test', 'test중입니다.');