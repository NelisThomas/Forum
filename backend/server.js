const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const port = require('../config/ports').backendPort;


app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.URL, (err, database) => {
    if (err) return console.log(err)
    // Make sure you add the database name and not the collection name
    require('./app/routes')(app, database.db("forum"));
});

app.listen(port, () => {  console.log('We are live on ' + port);});