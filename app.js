var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

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