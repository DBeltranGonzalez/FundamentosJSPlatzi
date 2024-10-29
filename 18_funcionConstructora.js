function Personas(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

// Generar instancias de un objeto con la función constructora
const persona1 = new Personas('Juan', 'Perez', 30); 
const persona2 = new Personas('Elizabeth', 'Garcia', 21);

console.log(persona1); 
console.log(persona2);

// Añadir un prototipo a la función constructora
Personas.prototype.telefono = '555-555-5555';

// Añadir una propiedad al objeto ya creado
persona1.nacionalidad = 'Mexicano';

// Añadir un método a la instancia
Personas.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
}

persona1.saludar()
persona2.saludar()