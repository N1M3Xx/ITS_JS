const http = require('http');
const q = require('querystring');

const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 3000;

var url = require('url');

const server = http.createServer((req, res) => {

  var a = []
  var s = true

  req.on('data', (data) => {
    if(req.url == "/add")
    {
      for(x = 0; x < a.length; x++){
        if(a[x] == data)
          s = false
      }
      if(s == true)
        a.push(data)
    }
    else if(req.url == "/remove")
    {
      for(x = 0; x < a.length; x++){
        if(a[x] == data){
          a.splice(x, 1)
        }
      }
    }
  })
  
  req.on('end', () => {
    console.log(a)
  })

});

server.listen(PORT, HOSTNAME, () => {
  console.log('Server running');
});