// Imports
var express = require('express'),
    Handlebars = require('express-handlebars');

// Config
var app = express().configure(function () {
    this.use(express.logger('dev'));
    this.use('/public', express.static('public'));
    this.use(express.bodyParser());
    this.listen(process.env.PORT ||5000);
}).engine("hbs", Handlebars({
    defaultLayout: "main",
    extname: ".hbs",
    partialsDir: "views/partials/",
    layoutsDir: "views/layouts/"
})).set("view engine", "hbs");


// Routes
app.get('/', function (req, res) {
    res.render('index');
});