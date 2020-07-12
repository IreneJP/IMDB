"use strict";
/*• Crear una clase denominada Professional con los siguientes atributos públicos:
• name
• age
• genre
• weight
• height
• hairColor
• eyeColor
• race
• isRetired
• nationality
• oscarsNumber
• profession*/
exports.__esModule = true;
exports.Imdb = exports.Movie = exports.Professional = void 0;
var Professional = /** @class */ (function () {
    //• Esta clase debe tener un constructor que incluirá en sus parámetros todos estos atributos
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    //• Esta clase tendrá un método que muestre en consola el valor de todos estos atributos*/
    Professional.prototype.printProfesional = function () {
        return ("Name: " + this.name + "\n" + "Age: " + this.age + "\n" + "Genre: " + this.genre + "\n" + "Weight: " + this.weight + "\n" + "Height: " + this.height + "\n" + "Hair Color: " + this.hairColor + "\n" + "Eye color: " + this.eyeColor + "\n" + "Race: " + this.race + "\n" + "Retired: " + this.isRetired + "\n" + "Nationality: " + this.nationality + "\n" + "Profession: " + this.profession + "\n");
    };
    return Professional;
}());
exports.Professional = Professional;
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
//Crear una clase denominada Imdb cuyo constructor reciba un array de objetos de la clase Movie 
//Con un único atributo publico denominado películas que es un array de objetos de la clase Movie
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    return Imdb;
}());
exports.Imdb = Imdb;
