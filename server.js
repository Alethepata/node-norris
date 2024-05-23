const http = require('http');
const port = process.env.Port || 8080;
const host = process.env.Host || 'localhost';

const apiUrl = 'https://api.chucknorris.io/jokes/random';

const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'norrisDb.json');


const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.end('ciao');
});

server.listen(port, host, () => {
    console.log('Server Online');
});


const write = (file, text) => { 
    const fileString = JSON.stringify(text);
    fs.writeFileSync(file, fileString);
}
const read = (file) => {
    const fileData = fs.readFileSync(file, "utf-8");
    return JSON.parse(fileData);
}


const fetchData = () => {
    const frasi = read(filePath);

    fetch(apiUrl)
    .then(response => response.json())
        .then(data => {
            write(filePath, [...frasi, data.value]);       
        })
}
fetchData();










