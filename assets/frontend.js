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