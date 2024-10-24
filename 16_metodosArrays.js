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

// concat([]) para concatenar un array

const newFruits = fruits.concat(['grape', 'kiwi']);
console.log(fruits);
console.log(newFruits);