CREATE TABLE IF NOT EXISTS memo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    file_name TEXT,
    file_path TEXT,
    file_type TEXT,
    file_size INTEGER,
    file_lastModifiedDate DATETIME
);

