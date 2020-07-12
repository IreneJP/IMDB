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

export class Movie {
    public title: string
    public releaseYear: number
    public actors: string
    public nacionality: string
    public director: string
    public writer: string
    public language: string
    public plataform: string
    public isMCU: boolean
    public mainCharacterName: string
    public producer: string
    public distributor: string
    public genre: string


//• Los únicos parámetros del constructor son: title, releaseYear,nacionality, genre
constructor(title: string,releaseYear: number, nacionality: string, genre: string)
{
    this.title = title
    this.releaseYear = releaseYear
    this.actors 
    this.nacionality = nacionality
    this.director
    this.writer
    this.language 
    this.plataform
    this.isMCU
    this.mainCharacterName
    this.producer
    this.distributor
    this.genre
}

//• Crear un método que muestre todos los datos de las peliculas

public printMovie(){
    return ("Title: " + this.title + "\n" + "Año de lanzamiento: " + this.releaseYear + "\n" + "Actores: " + this.actors + "Nationality: " + this.nacionality + "\n" + "Director: " + this.director + "\n" + "Writer: " + this.writer + "\n" + "Language: " + this.language + "\n" + "Platform: " + this.plataform + "\n" + "Marvel Cinematic Universe (MCU): " + this.isMCU + "\n" + "Main Character Name: " + this.mainCharacterName + "\n" + "Producer: " + this.producer + "\n"+ "Distributor: " + this.distributor + "\n" + "Genre: " + this.genre + "\n")
}



}