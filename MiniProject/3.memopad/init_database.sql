CREATE TABLE IF NOT EXISTS memo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    contents TEXT,
    filename TEXT,
    filepath TEXT,
    filesize INTEGER
);

INSERT INTO memo(title, contents) VALUES ('test', 'test중입니다.');