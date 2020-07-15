//Crear un fichero main para probar esta clase creando un objeto de tipo Imdb
import {Imdb, Movie} from "./clases"

let LaberintoFauno = new Movie("El laberinto del fauno", 2006, "Spanish", "Fantastic. Drama. Thriller")
LaberintoFauno.actors = "Ivana Baquero, Maribel Verdú,Pablo Adán, Sergi López"
LaberintoFauno.director = "Guillermo del Toro"
LaberintoFauno.writer = "Guillermo del Toro"
LaberintoFauno.language = "Spanish"
LaberintoFauno.plataform = "Netflix"
LaberintoFauno.isMCU = false
LaberintoFauno.mainCharacterName = "Ofelia"
LaberintoFauno.producer = "Estudios Picasso"
LaberintoFauno.distributor = "Warner Bros Pictures España "



let Joker = new Movie("Joker",2019,"United States", "Drama. Thriller")
Joker.actors = "Joaquin Phoenix, Robert De Niro, Zazie Beetz"
Joker.director ="Todd Phillips"
Joker.writer = "Todd Phillips, Scott Silver"
Joker.language = "English"
Joker.plataform =  "HBO Max"
Joker.isMCU = false
Joker.mainCharacterName = " Arthur Fleck"
Joker.producer = "DC Films"
Joker.distributor = "Warner Bros"


let StarWars = new Movie("Star Wars: El despertar de la Fuerza", 2015, "United States", "Science fiction")

StarWars.actors = "Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac"
StarWars.director = "J. J. Abrams"
StarWars.writer = " Lawrence Kasdan, Abrams y Michael Arndt"
StarWars.language = "English"
StarWars.plataform = "Disney+"
StarWars.isMCU = false
StarWars.mainCharacterName
StarWars.producer = "Lucasfilm"
StarWars.distributor = "Walt Disney Pictures"

let dolorGloria = new Movie("Dolor y Gloria", 2019, "Spanish", "Drama")

dolorGloria.actors = "Penélope Cruz y Antonio Banderas"
dolorGloria.director = "Pedro Almodóvar"
dolorGloria.writer = "Pedro Almodóvar"
dolorGloria.language = "Spanish"
dolorGloria.plataform = "Netflix, Movistar+, VodafoneTV y Filmin"
dolorGloria.isMCU = false
dolorGloria.mainCharacterName = "Salvador Mallo"
dolorGloria.producer= "El Deseo"
dolorGloria.distributor = "Sony Pictures Motion Picture Group"



let misPelis = new Imdb ([LaberintoFauno, Joker, StarWars, dolorGloria])

console.log(misPelis)



























/*Convertir a JSON el objeto Imdb • Guardar dicho objeto en un fichero JSON con el nombre “imdbBBDD.json”.

let fs = require("fs")
let toJson = JSON.stringify(misPelis)
fs.writeFileSync("imdbBBDD.json",toJson)





//console.log("resultado esribir en fichero Json")

//console.log(misPelis.escribirEnFicheroJSON("fichero"))//(se pasa el objeto mis Pelis a string)

console.log("\n") 

/*Leer el fichero “imdbBBDD.json” y almacenarlo en una instancia de la clase Imdb

let myMovieJson = JSON.parse(toJson) /*(se convierte el string en Json)

console.log("Se muestra el objeto misPelis en Json")
console.log(myMovieJson)



let pelisJson = new Imdb(myMovieJson)


console.log("se muestra la instancia de la clase Imdb")
console.log(pelisJson)


console.log(misPelis.escribirEnFicheroJSON("title"))
*/












