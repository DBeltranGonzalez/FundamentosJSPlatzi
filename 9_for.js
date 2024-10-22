let list = ['eat', 'sleep', 'code', 'repeat'];
console.log('for tradicional:');

// For tradicional
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

/* 
    for of: por cada elemento de cierta cosa, vamos a hacer...

    se utiliza con objetos iterables(arrays y strings)

    for (variable of objeto) {
        código a ejecutar;
    }
*/

let canasta = ['manzana', 'pera', 'naranja', 'uva'];
console.log('for of:');

for (fruta of canasta) {
    console.log(fruta)
}