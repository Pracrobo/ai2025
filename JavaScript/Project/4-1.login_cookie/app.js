const express = require("express");
const session = require("express-session");
const sqlite3 = require("sqlite3");
const bcrypt = require("bcrypt");
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = 3000;
const db = new sqlite3.Database("shopping.db", (err) => {
  if (!err) console.log("DB 연결 성공");
});

app.use(express.urlencoded());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(
  session({
    secret: "password234",
    resave: false, // warning이 나옴
    saveUninitialized: false,
  })
);
// 각종 라우트
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "cart.html"));
});

app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "products.html"));
});
// 로그인 폼으로 이동
app.get("/signin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// REST-APIs
// 회원가입하기
app.post("/api/sign-up", (req, res) => {
  const user = req.body;
  async function insertUsers(user) {
    const hash = await bcrypt.hash(user.password, 10);
    db.run(
      `INSERT INTO users (username, password) VALUES (?, ?)`,
      [user.username, hash],
      (err) => {
        console.log(`${user.username}: ${hash} 등록 성공`);
      }
    );
  }
  insertUsers(user);
  res.send("회원 가입 성공");
});

// 로그인하기
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);
  db.get(
    "SELECT * FROM users WHERE username=? AND password=?",
    [username, password],
    (err, row) => {
      if (err) console.log("오류");
      if (row) {
        console.log(row);
        req.session.user = { id: row.id, username: row.username };
        console.log(`${username} 로그인 성공`);
        res.json({ message: "로그인 성공", username: row.username });
      } else {
        res.status(401).json({ message: "로그인 실패" });
      }
    }
  );
});

app.get("/api/check-login", (req, res) => {
  const user = req.session.user;
  if (user) {
    res.json({ message: "Welcome, back", username: username });
  } else {
    res.status(401).json({ message: " Not logged in" });
  }
});

app.get("/api/products", (req, res) => {
  const query = "SELECT * FROM products";
  db.all(query, [], (err, rows) => {
    res.json(rows);
  });
});
// 로그아웃하기
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send(`로그아웃...`);
});

const server = app.listen(port, () => {
  console.log(`서버 ON: ${port}`);
});

server.on("error", (err) => {
  console.error("서버 실행 중 오류 발생:", err.message);
});
