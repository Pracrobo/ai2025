const fs = require('fs');
const http = require('http');
const index = fs.readFileSync('index.html', 'utf-8');
const server = http.createServer((req, res) => {
    res.writeHead(200); 
    res.end(index); 
});

server.listen(3000, () => {
    console.log('Server ready on port 3000');
});