const http = require('http');
const fs = require('fs');
let i=0;
const myReadStream = fs.createReadStream(__dirname + '/read.txt');
myReadStream.on('data',(chunk) => {

  console.log(i);
  console.log(i+chunk);//if we concatenate chunk with anything it convert
                       //chunk in string automatically.
  console.log(chunk);  //but if we log chunk itself we get buffer to convert
                       //it we have to define encoding utf8 in createReadStream.
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
