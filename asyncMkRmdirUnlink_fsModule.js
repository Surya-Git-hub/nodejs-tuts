const fs = require('fs');

// ***unlink==delete file async ,mkdir==make directory async,mkdirSync==synchronously***

// fs.unlink('readme.txt',(err) => {
//
// });
// fs.mkdir('stuff',function() {
//   fs.readFile('read.txt','utf8',function(err,data) {
//     fs.writeFile('./stuff/write.txt',data,(err) => {
//
//     })
//   })
// })
// ***empty directory can not be deleted so we have to delete the file first
//    using unlink***
fs.unlink('./stuff/write.txt',() => {
  fs.rmdir('stuff',(err) => {}); //rmdir==deletes empty directory async,for
                                 //synchronously use rmdirSync
})
