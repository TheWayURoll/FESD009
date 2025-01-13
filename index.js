const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const course = require('./course');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/course', course);

app.get('/', function(req, res){
    res.send("Hello World");
});

app.listen(3000);