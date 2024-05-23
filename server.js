const http = require('http');
const port = process.env.Port || 8080;
const host = process.env.Host || 'localhost';

const apiUrl = 'https://api.chucknorris.io/jokes/random';

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.end('ciao');
});

server.listen(port, host, () => {
    console.log('Server Online');
});

const fetchData = () => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data.value))
}
fetchData();