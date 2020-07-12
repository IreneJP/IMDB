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


export class Professional {
        public name: string
        public age: number
        public genre: string
        public weight: number
        public height: number
        public hairColor: string
        public eyeColor: string
        public race: string
        public isRetired: boolean
        public nationality: string
        public oscarsNumber: number
        public profession: string

//• Esta clase debe tener un constructor que incluirá en sus parámetros todos estos atributos
    constructor(name: string,age: number,genre: string,weight: number,height: number,hairColor: string,eyeColor: string,race: string,isRetired: boolean,nationality: string,oscarsNumber: number,profession: string)
    {
        this.name = name
        this.age = age
        this.genre = genre
        this.weight =weight 
        this.height = height
        this.hairColor = hairColor
        this.eyeColor = eyeColor
        this.race = race
        this.isRetired = isRetired
        this.nationality = nationality
        this.oscarsNumber = oscarsNumber
        this.profession = profession
    }

    //• Esta clase tendrá un método que muestre en consola el valor de todos estos atributos*/
    public printProfesional(){
        return ("Name: " + this.name + "\n" + "Age: " + this.age + "\n" + "Genre: " + this.genre + "\n" + "Weight: " + this.weight + "\n" + "Height: " + this.height + "\n" + "Hair Color: " + this.hairColor + "\n" + "Eye color: " + this.eyeColor + "\n" + "Race: " + this.race + "\n" + "Retired: " + this.isRetired + "\n" + "Nationality: " + this.nationality + "\n" + "Profession: " + this.profession + "\n")
    }

}

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

//Crear una clase denominada Imdb cuyo constructor reciba un array de objetos de la clase Movie 
//Con un único atributo publico denominado películas que es un array de objetos de la clase Movie

export class Imdb {
    public peliculas: Movie[]
    constructor(peliculas: Movie[]) { 
        this.peliculas = peliculas
    }



}
