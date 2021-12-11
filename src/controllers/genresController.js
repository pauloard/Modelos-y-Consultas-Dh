const path = require('path');
const db = require('../database/models');
const Genre = db.Genre;

module.exports = {
    list: (req,res) => {
        Genre.findAll()
        .then(genres => {
            return res.render(path.resolve(__dirname, '../views/genresList'), {genres})
        })
        .catch(error => res.send(error))        
    },
    detail: (req, res) => {
        Genre.findByPk(req.params.id)
        .then(genre => {
            return res.render(path.resolve(__dirname, '../views/genresDetail'), {genre})
        })
    }
}