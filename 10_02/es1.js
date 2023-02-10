const http = require('http');
const q = require('querystring');

const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 3000;

var url = require('url');

var a = []

const server = http.createServer((req, res) => {

  var s = true
  var data =''

  req.on('data', (datoPost) => {
    data+=datoPost
  })
  
  req.on('end', () => {
    data = q.parse(data)
    if(req.url == "/add")
    {
      for(x = 0; x < a.length; x++){
        if(a[x] == data.int)
          s = false
      }
      if(s == true)
        a.push(data.int)
    }
    else if(req.url == "/remove")
    {
      for(x = 0; x < a.length; x++){
        if(a[x] == data.int){
          a.splice(x, 1)
        }
      }
    }
    console.log(a)
  })

});

server.listen(PORT, HOSTNAME, () => {
  console.log('Server running');
});