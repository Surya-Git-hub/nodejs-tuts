const express = require('express');
const app = express();
app.set('view engine','ejs');
app.get('/',function (req,res) {
  res.render('home')
})
app.get('/contact',function (req,res) {
  res.render('contact')
})
app.get('/profile/:id',function (req,res) {
  let data={age:23,job:'unknown'}
  res.render('profile',{person:req.params.id,data:data})
})
app.listen(3000);
