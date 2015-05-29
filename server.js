// Imports
var express = require('express'),
    Handlebars = require('express-handlebars'),
    content = require('./content/home');

// Config
var app = express().configure(function () {
    this.use(express.logger('dev'));
    this.use('/public', express.static('public'));
    this.use(express.bodyParser());
    this.listen(process.env.PORT || 5000);
}).engine("hbs", Handlebars({
    defaultLayout: "main",
    extname: ".hbs",
    partialsDir: "views/partials/",
    layoutsDir: "views/layouts/",
    helpers: require("./public/js/libs/handlebars.helpers.js").helpers
})).set("view engine", "hbs");


// Routes
app.get('/', function (req, res) {
    var context = {
        JFB: {
            content: content
        },
        content: content.home
    };

    res.render('index', context);
});