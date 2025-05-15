const express = require('express');
const morgan = require('morgan');
const path = require('path');
const todoRoutes = require('./routes/todoRoutes')

const app = express();
const port = 3000;

// 미들웨어 설정
app.use(express.json());
app.use(morgan('dev'))
app.use(todoRoutes)


// 라우팅 설정
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/todos', todoRoutes);
app.post('/api/todos', todoRoutes);
// app.put('/api/todos');
// app.delete('/api/todos');


// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});