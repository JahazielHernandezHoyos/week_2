class person {
  constructor(peso, estatura, yearOfBirth, hobbies) {
    this.peso = peso;
    this.estatura = estatura;
    this.imc = peso / estatura ** 2;
    this.yearOfBirth = yearOfBirth; 
    this.edad = 2022 - yearOfBirth;
    this.hobbies = [hobbies];

  }
  printAll() {
    console.log(`Peso: ${this.peso} - Estatura: ${this.estatura} - Año de nacimiento: ${this.yearOfBirth} - Edad: ${this.edad} - IMC: ${this.imc} - Hobbies: ${this.hobbies}`);
  }
}

var persona = new person(65, 1.75, 30, ["Ajedrez", "Correr", "Tocar Guitarra"]).printAll();

