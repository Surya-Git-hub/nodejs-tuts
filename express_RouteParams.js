const express = require('express');
const app = express();
app.get('/',function (req,res) {
  res.sendFile(__dirname+'/index.html')
})
app.get('/profile/:id',function (req,res) {
  res.send('requested '+ req.params.id)
})
app.listen(3000);
