let misPelis = ({"peliculas":
    [
        {"title":"El laberinto del fauno","releaseYear":2006,
        "nacionality":"Spanish"},

        {"title":"Joker","releaseYear":2019,"nacionality":"United States"},

        {"title":"Star Wars: El despertar de la Fuerza",
        "releaseYear":2015,"nacionality":"United States"},

        {"title":"La vida es bella","releaseYear":2006,
        "nacionality":"Spanish"},

        {"title":"Salvar al soldado Brian","releaseYear":2019,"nacionality":"United States"},

        {"title":"Los Vengadores: El despertar de la Fuerza",
        "releaseYear":2015,"nacionality":"United States"}
    ]
}
)






let fs = require("fs")
let fichero
let data 
        for (let i=0; i<this.peliculas.length; i++){
            fichero += this.peliculas[i]}    data=fichero


   

let toJson = JSON.stringify(data)
fs.writeFileSync("imdbBBDD.json",toJson)
return toJson