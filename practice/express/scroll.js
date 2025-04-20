const express = require('express');
const morgan = require('morgan');

const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send();
});


app.listen(port, () => {
    console.log(`Server On Port: ${port}`);
});