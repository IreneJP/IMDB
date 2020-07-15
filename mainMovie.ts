// Tomando estas clases crear un fichero main que muestre todos los datos de las películas
import {Movie} from "./clases"

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




console.log(dolorGloria.printMovie())


