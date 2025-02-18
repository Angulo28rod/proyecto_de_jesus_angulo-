const express = require ('express');
const app = express();
const bodyParser = require('express');
const path = require('path');
const db = require('./db');



app.set('view engine', 'ejs');

app.listen(5000, ()=>{

console.log('SERVER corriendo mamaguebo en http://localhost:5000');


 });