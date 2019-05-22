const express = require('express');
const path = require('path');
//create express app
const app = express();

//require the fake todo BD
const todoDb = require('./data/todo-db')

//configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Mount middleware (app.use)


//Mount routes
//define a "root" route 
app.get('/', function(req, res) {
    res.redirect('/home');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/todos', function(req, res) {
    res.render('todos/index', {
        todos: todoDb.getAll()
    });
});

//tell app to listen to http request from clients
app.listen(3000, function() {
    console.log('Listening on port 3000');
});
