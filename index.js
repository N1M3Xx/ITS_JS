const http = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 3000;

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
var a = []

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if(req.url == "/nome")
    res.end("Gonzalo");
  else if(req.url == "/cognome") 
    res.end('Perez Brisco');
  else if(req.url == "/data")
    res.end('16/12/2002');
  else if(req.url == "/add")
    {
      a.append(q.query.stringa)
      res.end(a)
    }
    else if(req.url == "/remove")
    {
      a.remove(q.query.stringa)
      res.end(a)
    }
    else
      res.end('Ciao Mondo!');
});

server.listen(PORT, HOSTNAME, () => {
  console.log('Server running');
});