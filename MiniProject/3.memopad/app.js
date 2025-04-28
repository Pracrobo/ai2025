const express = require("express");
const morgan = require("morgan");
const path = require("path");
const sqlite = require("sqlite3");

const app = express();
const port = 3001;
const db = new sqlite.Database("../miniapp.db", (err) => {
  if (!err) console.log("DB 연결 성공");
});

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "memopad2.html"));
});

// 전체 메모 가져오기
app.get("/api/memo", (req, res) => {
  const query = "SELECT * FROM memo;";
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("전체 조회 실패:", err);
      res.status(500).send({ message: "DB 오류 발생" });
    } else {
      res.send(rows);
    }
  });
});

// 특정 메모 하나 가져오기
app.get("/memo/:id", (req, res) => {
  const { id } = req.params; // req.body 아니라 req.params야!
  db.get("SELECT * FROM memo WHERE id = ?", [id], (err, row) => {
    if (err) {
      console.error("단일 조회 실패:", err);
      res.status(500).send({ message: "DB 오류 발생" });
    } else if (row) {
      res.send(row);
    } else {
      res.status(404).send({ message: "메모를 찾을 수 없습니다." });
    }
  });
});

// 메모 수정하기
app.put("/memo/:id", (req, res) => {
  const { title, contents, filename, filepath, filesize } = req.body;
  const { id } = req.params;

  db.run(
    "UPDATE memo SET title = ?, contents = ?, filename =?, filepath=?, filesize=?  WHERE id = ?",
    [title, contents, filename, filepath, filesize, id],
    function (err) {
      if (err) {
        console.error("수정 실패:", err);
        res.status(500).send({ message: "DB 오류 발생" });
      } else if (this.changes === 0) {
        res.status(404).send({ message: "수정할 메모 없음" });
      } else {
        res.send({
          message: "수정 성공",
          id,
          title,
          contents,
          filename,
          filepath,
          filesize,
        });
      }
    }
  );
});

// 메모 새로 추가하기
app.post("/memo", (req, res) => {
  const { title, contents, filename, filepath, filesize } = req.body;

  db.run(
    "INSERT INTO memo (title, contents, filename, filepath, filesize) VALUES (?, ?, ?, ?, ?)",
    [title, contents, filename, filepath, filesize],
    function (err) {
      if (err) {
        console.error("추가 실패:", err);
        res.status(500).send({ message: "DB 오류 발생" });
      } else {
        res.status(200).send({
          message: "insert 성공",
          id: this.lastID, // 새로 추가된 id
          title,
          contents,
          filename,
          filepath,
          filesize,
        });
      }
    }
  );
});

app.delete("/memo/:id", (req, res) => {
  const { id } = req.params; // 여기도 params에서 id 가져와야 해

  db.run("DELETE FROM memo WHERE id = ?", [id], function (err) {
    if (err) {
      console.error("삭제 실패:", err);
      res.status(500).send({ message: "DB 오류 발생" });
    } else if (this.changes === 0) {
      res.status(404).send({ message: "삭제할 메모 없음" });
    } else {
      res.send({ message: "삭제 성공", id });
    }
  });
});

app.listen(port, () => {
  console.log(`서버 ON: ${port}`);
});
