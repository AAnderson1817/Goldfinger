//Dependencies
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');

//Initialize app using Express
const app            = express();

//Initialize server and start listening for HTML requests
const port = 8000;

app.use(bodyParser.urlencoded({ extended:true }));

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log('Spinning on Port ' + port);
});
