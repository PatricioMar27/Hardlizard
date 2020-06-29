const contacto = require('./contacto')
const enCartelera = require('./enCartelera')
const homePage = require('./homePage')
const masVotadas = require('./masVotadas')
const preguntasFrecuentes = require('./preguntasFrecuentes')
const sucursales = require('./sucursales')

let index = {
    homePage:function(res){
        //titulo
        res.write(homePage.titulo)
        res.write('\n')
        res.write('\n\n')
        res.write('Total de películas en cartelera: ' + homePage.cantidad())
        res.write('\n\n')
        res.write('*********************************\n')
        res.write(('Listado de Peliculas disponibles\n').toUpperCase())
        res.write('*********************************')
        res.write('\n\n')

        let pelis = homePage.listarPelis();
        for(peli of pelis){
            res.write(peli)
            res.write('\n')
        }
        res.write('\n')
        res.end(`Recordá que podes visitar las secciones:
        1) En Cartelera
        2) Más Votadas
        3) Sucursales
        4) Contacto
        5) Preguntas Frecuentes`)
    },

    contacto:function(){
        res.write(contacto.titulo);
        res.write('\n')
        res.write('\n\n')
        res.write(contacto.contenido)
        res.write('\n\n')
        res.end()
    },

    enCartelera:function(){
        res.write(enCartelera.titulo);
        res.write('\n')
        res.write('\n\n')
        res.write('Total de películas en cartelera: ' + homePage.cantidad())
        res.write('\n\n')
        res.write('**********************************\n')
        res.write(('Listado de Peliculas en Cartelera\n').toUpperCase())
        res.write('**********************************')
        res.write('\n\n')
        let movies = enCartelera.listarPelis();
        movies.forEach(function(movie) {
            res.write('\n')
            res.write('\n*************************************************************************************************************************\n')
            res.write(movie.title)
            res.write('\n')
            res.write('\n')
            res.write(movie.overview)
            res.write('\n*************************************************************************************************************************\n')
            res.write('\n')
        })
        res.end()
    },
    
    masVotadas:function(){
        res.write(masVotadas.titulo);
        res.write('\n')
        res.write('\n\n')
        res.write('Total de películas en cartelera: ' + masVotadas.cantidad())
        res.write('\n\n')
        res.write('*************************************\n')
        res.write(('Listado de Peliculas de mayor Rating\n').toUpperCase())
        res.write('*************************************')
        res.write('\n\n')
        let movies = masVotadas.listarPelis();
        movies.forEach(function(movie) {
            res.write('\n')
            res.write('\n*************************************************************************************************************************\n')
            res.write(movie.title + "rating: " + movie.vote_average)
            res.write('\n')
            res.write('\n')
            res.write(movie.overview)
            res.write('\n*************************************************************************************************************************\n')
            res.write('\n')
        })
        res.end()
    },

    preguntasFrecuentes:function(){
        res.write(preguntasFrencuentes.titulo)
        res.write('\n')
        res.write('\n\n')
        res.write('Total de preguntas: ' + preguntasFrencuentes.cantidad())
        res.write('\n\n')
        res.write('********************************\n')
        res.write(('Listado de Preguntas Frecuentes\n').toUpperCase())
        res.write('********************************')
        res.write('\n\n')

        let faqs = preguntasFrencuentes.listarFaqs();
        for (faq of faqs) {
            res.write('*****************************************************************\n\n')
            res.write('Pregunta: ' + faq.faq_title)
            res.write('*****************************************************************\n\n')
            res.write('\n')
            res.write('Respuesta: ' + faq.faq_answer)
            res.write('\n')

        }
        res.write('\n')

        res.end()
    },

    sucursales:function(){
        res.write(sucursales.titulo)
        res.write('\n')
        res.write('\n\n')
        res.write('Total de películas en cartelera: ' + sucursales.cantidad())
        res.write('\n\n')
        res.write('*********************************\n')
        res.write(('Listado de Salas disponibles\n').toUpperCase())
        res.write('*********************************')
        res.write('\n\n')
        let theathers = sucursales.listarCines();
        theathers.forEach(function(theather) {
            res.write('\n')
            res.write('\n*************************************************************************************************************************\n')
            res.write(theather.name)
            res.write('\n')
            res.write(theather.address)
            res.write('\n\n')
            res.write(theather.description)
            res.write('\n*************************************************************************************************************************\n')
            res.write('\n')
        })
        res.end()
    }

}
module.exports = index