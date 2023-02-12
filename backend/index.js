var cors = require('cors');
var express = require('express');
require("dotenv").config({path:"./config.env"});
const mongoose = require('mongoose');

var book = require('./endPoints/book');

var app = express();
var corsOptions = {
  origin: 'http://localhost:3000',
  credentials:  true
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.URL).then(() => {
    console.log('connected to Mongo Atlas')
}).catch((err) => console.log(err));
app.use('/book', book);
const port = 4000;
app.listen(port,()=>{
  console.log(`Server running at Port ${port}`);
});

module.exports = app;