var misPelis = ({ "peliculas": [
        { "title": "El laberinto del fauno", "releaseYear": 2006,
            "nacionality": "Spanish" },
        { "title": "Joker", "releaseYear": 2019, "nacionality": "United States" },
        { "title": "Star Wars: El despertar de la Fuerza",
            "releaseYear": 2015, "nacionality": "United States" },
        { "title": "La vida es bella", "releaseYear": 2006,
            "nacionality": "Spanish" },
        { "title": "Salvar al soldado Brian", "releaseYear": 2019, "nacionality": "United States" },
        { "title": "Los Vengadores: El despertar de la Fuerza",
            "releaseYear": 2015, "nacionality": "United States" }
    ]
});
var toJson = JSON.stringify(misPelis);
console.log("Se muestra el objeto misPelis en " + typeof (toJson));
console.log(toJson); //(se pasa el objeto mis Pelis a string)
console.log("\n");
//Leer el fichero “imdbBBDD.json” y almacenarlo en una instancia de la clase Imdb
var myMovieJson = JSON.parse(toJson); //(se convierte el string en Json)
console.log("Se muestra el objeto misPelis en Json");
console.log(myMovieJson);
console.log(myMovieJson);
