// MUTABILIDAD E INMUTABILIDAD DE ARRAYS

/* Métodos para mutar un array

1. push(): para añadir un elemento al final del array
*/

const fruits = Array('apple', 'banana', 'orange');
const pushFruits = fruits.push('watermelon', 'tangerine');
console.log(fruits);
console.log(pushFruits); // Devuelve el fruits.length

// 2. pop(): para quitar el último elemento del array

const removeFruit = fruits.pop();
console.log(fruits);
console.log(removeFruit); // Devuelve el elemento removido

// Inmutabilidad

// 1. concat([]): para concatenar un array

const newFruits = fruits.concat(['grape', 'kiwi']);
console.log(fruits);
console.log(newFruits);

// 2. map(): aplicar una transformación a cada elemento de un array sin mutar el original

const numbersFibonacci = [0,1,1,2,3,5,8,13,21,34];
const squareNumbers = numbersFibonacci.map(element => element * element);

console.log(numbersFibonacci);
console.log(squareNumbers);

// 3. forEach(): recorre el array retornando un valor único

let sumaFibonacci = 0;
numbersFibonacci.forEach(element => {
    sumaFibonacci += element
});
console.log(numbersFibonacci);
console.log(sumaFibonacci);

// 4. filter(): crear un array con los elementos que cumplan la condición en el filter

const tablaDelCinco = [5,10,15,20,25,30,35,40];
const decenas = tablaDelCinco.filter(numero => numero % 10 === 0);

console.log(tablaDelCinco);
console.log(decenas);

// 5. reduce(): Devuelve un valor único

//reduce caso 1

let acumulador = 0
const factoriales = [1,2,6,24,120]
const sumaFactoriales = factoriales.reduce((acumulador, valorActual) => acumulador + valorActual, 0); // 0 es el valor inicial

console.log(factoriales)
console.log(sumaFactoriales)

// reduce caso 2

const paises = ['colombia', 'brasil', 'argentina', 'brasil', 'colombia', 'brasil', 'argentina', 'brasil', 'paraguay', 'brasil', 'colombia', 'argentina', 'colombia']

const paisesFrecuencia = paises.reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]) {
        accumulator[currentValue] ++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator
}, {})

console.log(paisesFrecuencia);