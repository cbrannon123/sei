 //step2
 var Movie = require('../models/movie');
 
 module.exports = {
    index,
     new: newMovie,
     create
     
 };

 function index(req, res) {
    Movie.find({}, function(err, movies) {
        res.render('movies/index', {
            movies
        });
    });
 }

 function create(req, res) {
     //conver now showing checkbox to boolean
     req.body.nowShowing = !!req.body.nowShowing;
     //remove extra whitspace next to commas
     req.body.cast = req.body.cast.replace(/\s*,\s*/g,',');
     //split if cast is not an empty string
     if(req.body.cast) req.body.cast = req.body.cast.split(',');
     for(let key in req.body) {
         if(req.body[key] === '') delete req.body[key];
     }
     var movie = new Movie(req.body);

     movie.save(function(err) {
         //one way to handle errors in express
         if(err) return res.render('movies/new');
         console.log(movie);
         res.redirect('/movies');
     });
 }

 function newMovie(req, res) {
     res.render('movies/new')
 }