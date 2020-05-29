const http = require('http');
const fs = require('fs');
let i=0;
const myReadStream = fs.createReadStream(__dirname + '/read.txt');
const myWriteStream = fs.createWriteStream(__dirname + '/write.txt')
myReadStream.on('data',(chunk) => {

  console.log(i);
  console.log(i+chunk);
  console.log(chunk);
  myWriteStream.write(chunk);
  i++
})








// const server = http.createServer((req,res) => {
//   console.log(req.url);
//   res.writeHead(200,{'Content-Type':'text/plain'});
//   res.end('hey browser');
// });
//
// server.listen(3000,'127.0.0.1');
// console.log('listening port 3000');
