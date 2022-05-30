import { Vector } from "./Vector";

//Crear un Objeto de la clase Vector y probar todos sus atributos y métodos
let v1 = new Vector(3,10);
v1.print();
let v2 = new Vector(3,10);
v2.print();
let v3 = v1.add(v2);
v3.print();
let v4 = v1.subs(v2);
v4.print();
let v5 = v1.mult(v2);
v5.print();
let v6 = v1.multNumber(2);
v6.print();


