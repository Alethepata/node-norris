const http = require('http');
const port = process.env.Port || 8080;
const host = process.env.Host || 'localhost';

const apiUrl = 'https://api.chucknorris.io/jokes/random';

const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'norrisDb.json');

const write = (file, text) => { 
    const fileString = JSON.stringify(text);
    fs.writeFileSync(file, fileString);
}
const read = (file) => {
    const fileData = fs.readFileSync(file, "utf-8");
    return JSON.parse(fileData);
}

const fetchData = () => {
    const data = read(filePath);

    fetch(apiUrl)
    .then(response => response.json())
        .then(res => {
            write(filePath, [...data, res.value]);       
        })
    return data[data.length - 1 ]
}

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(404);
        res.end();
        return
    }
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.end(`<h1>${fetchData()}</h1>`);
});

server.listen(port, host, () => {
    console.log('Server Online');
});


