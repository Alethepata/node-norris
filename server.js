const http = require('http');
const port = process.env.Port || 8080;
const host = process.env.Host || 'localhost';

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.end('ciao');
});

server.listen(port, host, () => {
    console.log('Server Online');
});