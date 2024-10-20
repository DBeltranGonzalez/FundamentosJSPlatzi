/* Existen 10 tipos de datos en JS

PRIMITIVOS
1. string 
2. number 
3. boolean
4. null -> indicar vacío: declarado por el programador
5. undefined -> indicar vacío: normalmente lo retorna JS
6. symbol
7. bigint
*/

// string
let nombre = 'Diego';

// number
let edad = 32;

// boolean
let esMayorDeEdad = true;

// null
let noHayValor = null;

// undefined
let noDefinido = undefined;

// symbol
let simboloUnico = Symbol('único');

// bigint
let numeroGrande = 2n;

/*
COMPLEJOS
8. object
9. array
10. function
*/

// object
let carro = {
    marca: 'Tesla',
    modelo: 'Model S'
}

// array
let frutas = ['Manzana', 'Pera', 'Banano', 'Naranja', 'Uva'];

//function
function saludar(nombre) {
    console.log('Hola ' + nombre)
}