const http = require('http');
const q = require('querystring');

const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 3000;

var url = require('url');

const server = http.createServer((req, res) => {

  console.log(1)

  req.on('data', (data) => {
    console.log(2)
  })
  
  req.on('end', () => {
    console.log(3)
  })

  console.log(4)
});

server.listen(PORT, HOSTNAME, () => {
  console.log('Server running');
});