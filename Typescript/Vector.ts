
// Crear la Clase Vector con la siguiente estructura:
// • Atributo Privado:
// - elements: array of numbers.
// • El Constructor debe contener los siguientes parámetros:
// - n: number. Longitud del vector.
// - k: number. Máximo valor de los elementos del vector.
// Este constructor tiene que crear el atributo elements formado por n números aleatorios entre 0 y k.
// • Metodos Públicos:
// - print(). Imprime por consola el vector.
// - add(v1:Vector):Vector. Realiza la suma de elements con v1.
// - subs(v1:Vector):Vector. Realiza la resta de elements con v1.
// - mult(v1:Vector):Vector. Realiza el producto de elements y v1.
// - multNumber(n:number):Vector. Realiza el producto entre elements y el número n.

export class Vector {
    private elements: number[];
    constructor( n: number , k : number ) {
        this.elements = [];
        for (let i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * k));
        }
    }

    public print(){
        console.log(this.elements);
    }

    public add(v1:Vector):Vector{
        let v2 = new Vector(v1.elements.length,0);
        for (let i = 0; i < v1.elements.length; i++) {
            v2.elements[i] = this.elements[i] + v1.elements[i];
        }
        return v2;
    }

    public subs(v1:Vector):Vector{
        let v2 = new Vector(v1.elements.length,0);
        for (let i = 0; i < v1.elements.length; i++) {
            v2.elements[i] = this.elements[i] - v1.elements[i];
        }
        return v2;
    }    

    public mult(v1:Vector):Vector{
        let v2 = new Vector(v1.elements.length,0);
        for (let i = 0; i < v1.elements.length; i++) {
            v2.elements[i] = this.elements[i] * v1.elements[i];
        }
        return v2;
    }

    public multNumber(n:number):Vector{
        let v2 = new Vector(this.elements.length,0);
        for (let i = 0; i < this.elements.length; i++) {
            v2.elements[i] = this.elements[i] * n;
        }
        return v2;
    }


}