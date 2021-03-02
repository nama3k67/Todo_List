const express = require('express')
const app = express()

const morgan = require('morgan'); 
app.use(morgan('combined')); 

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 

const mongoose = require("mongoose"); 
require('dotenv/config');

const todoListRoute = require('./route/todoList');
app.use('/todoList', todoListRoute); 

mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true }, () => console.log('connect to DB'));
app.listen(3000);
