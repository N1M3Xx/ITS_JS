const http = require('http');
const q = require('querystring');

const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 3000;

var url = require('url');

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  var uriReq = url.parse(req.url);
  var email = q.parse(uriReq.query);
  var isValidEmail = valida(email.email)
  var risposta = {
    "email": isValidEmail
  }

  console.log(q);
  res.end(JSON.stringify(risposta))
  
});

server.listen(PORT, HOSTNAME, () => {
  console.log('Server running');
});

function valida(s) {
  if(s==undefined || s==null) {
    return false
  }
  var registro = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (s.match(registro)) {
    return true;
  } 
  else {
    return false;
  }
}