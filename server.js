//Dependencies
const mysql = require("mysql");
const express = require('express');
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8666;

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});


//Express App
//
//app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/db'));
//
////Listen
//app.listen(PORT, function() {
//    console.log('App listening on PORT ' + PORT);
//});