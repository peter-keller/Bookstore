'use strict';


const url = 'http://localhost:8080';
const xhr = new XMLHttpRequest();


function ajax(method, resource, callback){
    xhr.open(method, resource, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function(){
        callback(JSON.parse(xhr.response));
    };
    xhr.send();
};


function listDetails(response) {
    response.books.forEach(function(element) {
        const listData = '<tr><td>' + element.book_name +
                         '</td><td>' + element.aut_name +
                         '</td><td>' + element.cate_descrip +
                         '</td><td>' + element.pub_name +
                         '</td><td>' + element.book_price +
                         '</td></tr>';
        tableElement.innerHTML += listData;
    });
};
