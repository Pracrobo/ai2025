const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead()
    //서버 레디
// your_number=1234; 
// connect.sid=s%3ARYzK68uh5aSlraKS8bGlceV-T6_TvuRA.%2BSlNxVCau%2B6fqrWyZqE0T1p%2FfhiYQevgzRwiU2LNOH0
    res.writeHead(200, {'Set-Cookie': 'your_number=1234'});
    res.end('쿠키받아가시오');
});

server.listen(3000, () => {
    console.log('서버 레디');
});