const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
  console.log(req.url);
  const myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
  res.writeHead(200,{'Content-Type':'text/html'});
  myReadStream.pipe(res)

});

server.listen(3000,'127.0.0.1');
console.log('listening port 3000');
