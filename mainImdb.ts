//Crear un fichero main para probar esta clase creando un objeto de tipo Imdb
import {Imdb, Movie} from "./clases"

let LaberintoFauno = new Movie("El laberinto del fauno", 2006, "Spanish", "Fantastic. Drama. Thriller")
let Joker = new Movie("Joker",2019,"United States", "Drama. Thriller")
let StarWars = new Movie("Star Wars: El despertar de la Fuerza", 2015, "United States", "Science fiction")

let misPelis = new Imdb ([LaberintoFauno, Joker, StarWars])


console.log(misPelis)




