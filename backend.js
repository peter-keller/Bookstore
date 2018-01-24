'use strict';

const mysql = require('mysql');
const cors = require('cors');
const express = require('express');
const app = express();
const books = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id ';


express.json.type = "application/json";


app.use('/assets', express.static('assets'));
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


app.get('/list', function(request, response) {
    connection.query(books, function(err, rows) {
        if (err) {
            console.log(err.toString());
        };
        response.send({'books': rows});
    });
    console.log("Data received from database");
});


app.get('/books', function(request, response) {
    var dataLocation = books;
    dataLocation = dataLocation + ' WHERE cate_descrip = "' + request.query.category + '";';
    connection.query(dataLocation, function(err, rows) {
        if (err) {
            console.log(err.toString());
        };
        response.send({'books': rows});
    });
});



app.listen(8080);