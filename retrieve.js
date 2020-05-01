const express = require("express");
const app = express();
var mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/credence');

var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {

    connection.db.collection("movie", function(err, collection){
        collection.find({}).toArray(function(err, data){
            console.log(data); // it will print your collection data
        })
    });

});