class Persona { // Para generar instancias de una forma más actualizada en JS
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad
    } //Lo mismo de las funciones constructoras de la clase anterior
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona('Diego', 'Castillo', 11);
console.log(persona1);
persona1.saludar();