"use strict";
/*Crear una clase que se llame Movie con los siguientes atributos públicos
• title
• releaseYear
• actors
• nacionality
• director
• writer
• language
• plataform
• isMCU
• mainCharacterName
• producer
• distributor
• genre*/
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    //• Los únicos parámetros del constructor son: title, releaseYear,nacionality, genre
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors;
        this.nacionality = nacionality;
        this.director;
        this.writer;
        this.language;
        this.plataform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre;
    }
    //• Crear un método que muestre todos los datos de las peliculas
    Movie.prototype.printMovie = function () {
        return ("Title: " + this.title + "\n" + "Año de lanzamiento: " + this.releaseYear + "\n" + "Actores: " + this.actors + "Nationality: " + this.nacionality + "\n" + "Director: " + this.director + "\n" + "Writer: " + this.writer + "\n" + "Language: " + this.language + "\n" + "Platform: " + this.plataform + "\n" + "Marvel Cinematic Universe (MCU): " + this.isMCU + "\n" + "Main Character Name: " + this.mainCharacterName + "\n" + "Producer: " + this.producer + "\n" + "Distributor: " + this.distributor + "\n" + "Genre: " + this.genre + "\n");
    };
    return Movie;
}());
exports.Movie = Movie;
