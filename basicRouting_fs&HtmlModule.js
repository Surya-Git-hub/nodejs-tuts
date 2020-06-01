const http = require('http');
const fs = require('fs');
let myObj={
  name:'surya',
  job:'unknown',
  age:'23',
};

const server = http.createServer((req,res) => {
  console.log('requested url' + req.url);
  if (req.url==='/home'|| req.url=='/') {
    myReadStream=fs.createReadStream(__dirname+'/index.html','utf8')
    res.writeHead(200,{'Content-Type':'text/html'});
    myReadStream.pipe(res);
  }
  else if (req.url==='/user') {
  res.writeHead(200,{'Content-Type':'application/json'});
  res.end(JSON.stringify(myObj));
}
else {
  res.writeHead(404,{'Content-Type':'text/html'})
  fs.createReadStream(__dirname+'/404.html').pipe(res);
}
});

server.listen(3000,'127.0.0.1');
console.log('listening port 3000');
