const Movie = require('../../models/movie');

module.exports = {
    getAllMovies,
    getOneMovie,
    createMovie,
    deleteMovie,
    updateMovie
};

function updateMovie(req, res) {
    Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(movie) {
        res.status(200).json(movie);
    });
}

function deleteMovie(req, res) {
    Movie.findByIdAndRemove(req.params.id).then(function(movie) {
    res.status(200).json(movie)
    });
}

function createMovie(req, res) {
   Movie.create(req.body).then(function(movie) {
    res.status(201).json(movie);
   }); 
}

function getOneMovie(req, res) {
    Movie.findById(req.params.id).then(function(movie) {
        res.status(200).json(movie);
    });
    
}

function getAllMovies (req, res) {
    Movie.find({}).then(function(movies) {
        res.status(200).json(movies);
    });
}



