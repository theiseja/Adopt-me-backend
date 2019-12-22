const http = require('http');

const hostname = '127.0.0.1';
const port = 3000; // will be changed later


const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Adopt me pet adoption!');
});

app.get('/test', function (req, res) {
    res.send('Hello! :)')
})

app.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});