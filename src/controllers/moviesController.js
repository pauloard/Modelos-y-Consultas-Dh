const path = require('path');
const db = require('../database/models');
const Movie = db.Movie;

module.exports = {
    list: (req,res) => {
        Movie.findAll()
        .then(movies => {
            return res.render(path.resolve(__dirname, '../views/moviesList'), {movies})
        })
        .catch(error => res.send(error))        
    },
    detail: (req, res) => {
        Movie.findByPk(req.params.id)
        .then(movie => {
            return res.render(path.resolve(__dirname, '../views/moviesDetail'), {movie})
        })
    },
    new: (req, res) => {
        Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ]
        })
        .then(movies => {
            return res.render(path.resolve(__dirname, '../views/newestMovies'), {movies})
        })
    },
    recomended: (req, res) => {
        Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
        .then(movies => {
            return res.render(path.resolve(__dirname, '../views/recommendedMovies'), {movies})
        })
    }
}