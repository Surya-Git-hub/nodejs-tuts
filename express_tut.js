const express = require('express');
const app = express();
app.get('/',function (req,res) {
  res.send('string respose')
})
app.listen(3000);
