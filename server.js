//Dependencies
const orm = require("./config/orm.js");
const express = require('express');
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8666;


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var lunches = [{
    lunch: "Beet & Goat Cheese Salad with minestrone soup."
}, {
    lunch: "Pizza, two double veggie burgers, fries with a Big Gulp"
}];

// Routes
app.get("/weekday", function(req, res) {
    res.render("index", lunches[0]);
});

app.get("/weekend", function(req, res) {
    res.render("index", lunches[1]);
});

app.get("/", function(req, res) {
    res.render("all-burgers", {
        foods: lunches,
        eater: "david"
    });
});



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