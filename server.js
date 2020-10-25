// var express = require("express");
// var app = express ();
// const port = 3000;
//
// app.get('/', (req, res) => {
//     res.send('Hello world');
// });
//
// app.get('/flyers', (req, res) => {
//     res.json('Hello world');
// });
//
// app.listen (port, () => {
//     console.log(`app listenint at http://localhost${port}`);
// });

// second test
// 'use strict';
// var path = require('path');
// var express = require('express');
//
// var app = express();
//
// var staticPath = path.join(__dirname, '/');
// app.use(express.static(staticPath));
//
// // Allows you to set port in the project properties.
// app.set('port', process.env.PORT || 3000);
//
// app.get('/flyers', (req, res, next) => {
//     res.json('Hello world');
// });
//
// var server = app.listen(app.get('port'), function() {
//     console.log('listening');
// });

// third test
const express = require('express');
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');

//enable CORS for request verbs
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

//Handle GET method for listing all users
app.get('/flyers', function (req, res) {
  console.log("__dirname", __dirname+ "/" + "flyers.json")

  fs.readFile( __dirname + "/" + "flyers.json", 'utf8', function (err, data) {
    console.log('data', data );
    res.end( data );
  });
})

const server = app.listen(8000, function () {

  const host = server.address().address
  const port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
