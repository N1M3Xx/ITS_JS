const http = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('HELLO World!\n');
});

server.listen(PORT, HOSTNAME, () => {
  console.log('Server running');
});