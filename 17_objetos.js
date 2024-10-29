/*
    OBJETOS

    Estructura de datos que ayuda a guardar datos del modo key (propiedad) / value (valor)

    objeto {
        propiedad: valor,
        propiedad: valor,
        propiedad: valor
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