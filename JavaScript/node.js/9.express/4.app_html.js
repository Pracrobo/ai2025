const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title> 헬로우 익스프레스</title>
            </head>
            <body>
                <h1>헬로우 ?? </h1>
                <h2>헬로우 ?? </h2>
                <h3>헬로우 ?? </h3>
            </body>
        </html>
    `);
});


app.listen(port, () => {
    console.log('서버 레디');
});