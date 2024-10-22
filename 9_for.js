let list = ['eat', 'sleep', 'code', 'repeat'];
console.log('for tradicional:');

// For tradicional
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

/* 
    for of: por cada elemento de cierta cosa, vamos a hacer...

    se utiliza con objetos iterables(arrays y strings)

    for (variable of array) {
        código a ejecutar;
    }
*/

let canasta = ['manzana', 'pera', 'naranja', 'uva'];
console.log('for of:');

for (fruta of canasta) {
    console.log(fruta)
}

/*
    for in ---> iterar sobre objetos innumerables

    objetos: propiedades y valores
    array y strings: elementos

    for (variable in objeto) {
        código a ejecutar;
    }
*/

console.log('for in:')
const listaDeCompras = {
    esferos: 12,
    borradores: 15,
    resmas: 25,
    marcadores: 10
}

for (elemento in listaDeCompras) {
    console.log(elemento); // imprime solo las propiedades del objeto
    console.log(`${elemento}: ${listaDeCompras[elemento]}`); // imprime la propiedad y su valor
}