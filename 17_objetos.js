/*
    OBJETOS

    Estructura de datos que ayuda a guardar datos del modo key (propiedad) / value (valor)

    objeto {
        propiedad: valor,
        propiedad: valor,
        propiedad: valor,

        metodos()
    }
*/

const persona = {
    nombre: 'Diego',
    edad: 32,
    direccion: {
        calle: 'calle 82 107 - 33',
        ciudad: 'Bogotá'
    },
    saludar() {
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    }
}

console.log(persona);
persona.saludar();

persona.telefono = '555-555-5555'; //Agregar propiedades al objeto
console.log(persona.telefono);

persona.despedir = () => { // Agregar un método al objeto
    console.log('Adiós'); 
}

persona.despedir();

delete persona.telefono; // Eliminar una propiedad del objeto
delete persona.despedir; // Eliminar un método del objeto