class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log('El animal emite un sonido');
    }
}

class Perro extends Animal{ //El extends hereda la construcción de la clase Animal
    constructor(nombre, tipo, raza) {
        super(nombre, tipo); //super es quien llama al constructor de la clase Animal
        this.raza = raza;
    }
    emitirSonido() {
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