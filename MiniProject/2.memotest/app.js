const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3001;
const db = new sqlite3.Database("miniapp.db", (err) => {
  if (!err) console.log("DB 연결 성공");
});

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// multer 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // 파일 저장 경로
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // 파일 이름
  },
});

const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "test.html"));
});

// 메모 새로 추가하기
app.post("/", (req, res) => {
  console.log(req);
  //db.run(
  //  "INSERT INTO memo (file_name, file_path, file_size, file_type, file_lastModifiedDate) VALUES (?, ?, ?, ?, ?)",
  //  [filename, filePath, filesize, filetype, filelastModifiedDate],
  //  function (err) {
  //    if (err) {
  //      console.error("추가 실패:", err);
  //      res.status(500).send({ message: "DB 오류 발생" });
  //    } else {
  //     res.status(200).send({
  //        message: "insert 성공",
  //        id: this.lastID, // 새로 추가된 id
  //      });
  //    }
  //  }
  //);
});

app.listen(port, () => {
  console.log(`서버 ON: ${port}`);
});
