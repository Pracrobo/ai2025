const express = require('express');
const morgan = require('morgan');

const mainRouter = require('./router/mainRouter');
const userRouter = require('./router/userRouter');
const productRouter = require('./router/productRouter');

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/products', productRouter); // path 박아둘수도 있음(구조화)

app.listen(port, () => {
    console.log("서버 레디");
});