const fs = require ("fs") 
let masVotadas = {
    bd: './data/movies.json',
    titulo: "Mas votadas",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    listarPelis: function() {
        let movies = this.leerJSON().movies;
        movies = movies.filter(function(movie) {
            return movie.vote_average > 7
        })
        return movies
    },
    cantidad: function() {
        return this.listarPelis().length
    }
}
module.exports = masVotadas