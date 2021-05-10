var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose=require('mongoose');
const DB_USER = 'kuldipsah';
const PASSWORD = encodeURIComponent('kuldip1'); 
const DB_URL = `mongodb://${DB_USER}:${PASSWORD}@localhost:27017/newton`;
mongoose.connect(DB_URL).then(()=>{
  console.log("Database connected successfully");
}).catch((err)=>{
  console.log(err);
});

app.get('/home', function (req, res) {

    const jsonObject={
        firstName:"kuldip",
        lastName:"sah"
    }
    res.send(jsonObject)
  });
  
  app.post('/home', function (req, res) {
      console.log(req.body);
    // res.send('This is a POST request')
    res.send(req.body)
  })

app.listen(3000, 'localhost', function run() {
    console.log('App is running 3000 port');
});