export class Person {
    public name: string;
    public age: number;
    private address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public printName() {
        console.log(this.name);
    }

    public yearOfBirth(currentYear: number) {
        return currentYear - this.age;
    }

    public setAddress(address: string) {
        this.address = address;
    }

    public getAddress() {
        return this.address;
    }
}

let person = new Person("Juan", 32, "Calle falsa 123");
console.log(person.name);
console.log(person.age);
console.log(person.yearOfBirth(2019));
console.log(person.getAddress());
person.setAddress("Calle verdadera 123");
console.log(person.getAddress());