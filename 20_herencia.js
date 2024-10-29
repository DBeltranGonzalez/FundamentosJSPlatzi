class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre; // this se encarga de hacer referencia a ese objeto
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log('El animal emite un sonido');
    }
}

class Perro extends Animal{ //El extends hereda la construcción de la clase Animal
    constructor(nombre, tipo, raza) {
        super(nombre, tipo); //super es quien llama al constructor de la clase Animal, los métodos no es necesario heredarlos de forma explícita
        this.raza = raza;
    }
    emitirSonido() { // Esto sobreescribe el método de la clase Animal
        console.log('El perro ladra');
    }
    correr() {
        console.log(`${this.nombre} corre alegremente`);
    }
}

const perro1 = new Perro('Max', 'Perro', 'Husky');

console.log(perro1);
perro1.correr();
perro1.emitirSonido();

// Este nuevo método solo se añade a la nueva instancia:
perro1.nuevoMetodo = function() {
    console.log('Este es un nuevo método');
}

// Añadir un nuevo prototipo a la clase perro
Perro.prototype.segundoMetodo = function() {
    console.log('Este es un nuevo método');
}

/*
¿Por qué this?
this representa al objeto actual en el contexto en el que se está ejecutando el código. Al declarar this.nombre = nombre, le estamos diciendo a JavaScript que queremos crear o asignar una propiedad llamada nombre al objeto que está siendo instanciado.

Si solo escribiéramos nombre = nombre, estaríamos asignando el parámetro nombre a una variable local también llamada nombre dentro de la función (o al contexto global si no existe un contexto específico). Esto significa que:

No estaríamos asociando la propiedad al objeto que se está creando.
La propiedad no estaría disponible fuera del constructor, ya que solo se declararía una variable temporal.
*/