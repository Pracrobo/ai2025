const express = require('express');
const morgan = require('morgan');
const path = require('path');
const todoRoutes = require('./routes/todoRoutes');
const chatRoutes = require('./routes/chatbotRoute');

const app = express();
const port = 3000;

// 미들웨어
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(todoRoutes);
app.use(chatRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});