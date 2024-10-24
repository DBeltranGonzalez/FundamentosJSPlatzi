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