/* 
ARRAY

Formas de crear un array
1. new Array() or Array()
*/

const fruits = Array('apple', 'banana', 'orange');
console.log(fruits);

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

// 2. Array literal syntax

const oneNumber = [5];
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray);

const recipeIngredients = [
    'Flour',
    true,
    13,
    {
        ingredient: 'Milk',
        quantity: 250
    },
    false
]

console.log(recipeIngredients);

// Accediendo a un array

const fourthElement = recipeIngredients[3];
console.log(fourthElement);

// length property

const lenghtProperty = recipeIngredients.length;
console.log(lenghtProperty);