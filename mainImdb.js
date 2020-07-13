"use strict";
exports.__esModule = true;
//Crear un fichero main para probar esta clase creando un objeto de tipo Imdb
var clases_1 = require("./clases");
var LaberintoFauno = new clases_1.Movie("El laberinto del fauno", 2006, "Spanish", "Fantastic. Drama. Thriller");
var Joker = new clases_1.Movie("Joker", 2019, "United States", "Drama. Thriller");
var StarWars = new clases_1.Movie("Star Wars: El despertar de la Fuerza", 2015, "United States", "Science fiction");
var misPelis = new clases_1.Imdb([LaberintoFauno, Joker, StarWars]);
console.log(misPelis);
//let fs = require ("fs")
var toJson = JSON.stringify(misPelis);
console.log(toJson);
//let dot = fs.readFileSync("new.json")
//let toString = dot.toString()
//let misPelis1 = JSON.parse(toString)
//console.log(misPelis1)
//let instancia = new Imdb(misPelis1)
