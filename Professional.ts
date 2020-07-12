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


