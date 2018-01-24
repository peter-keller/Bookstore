'use strict';

const mysql = require('mysql');
const cors = require('cors');
const express = require('express');
const app = express();


express.json.type = "application/json";


app.use('assets', express.static('assets'));
app.use(express.json());


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bookstore'
});


connection.connect(function(err){
    if (err) {
        console.log("Cannot connect to database");
    } else {
        console.log("Connection estabilished");
    };
});


app.get('/', function(request, response){
    response.sendFile(__dirname + '/assets/index.html');
});


app.listen(8080);