const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
  console.log('requested url' + req.url);
  res.writeHead(200,{'Content-Type':'application/json'});
  let myObj={
    name:'surya',
    job:'unknown',
    age:'23',
  };
res.end(JSON.stringify(myObj));
});

server.listen(3000,'127.0.0.1');
console.log('listening port 3000');
