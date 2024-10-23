const productName = 'Smartphone';
const price = 499;
const brand = 'TechCo';

function getProductDetails() {
    const productName = 'Laptop';
    const price = 899;

    return `The ${productName} costs $${price} and is from the brand ${brand}`
}

console.log(getProductDetails()) 
// The Laptop costs $899 and is from the brand TechCo;

console.log(`The ${productName} costs $${price} and is from the brand ${brand}`) 
// The Smartphone costs $499 and is from the brand TechCo;

/* 
Contexto global: variables globales
Contexto local: variables locales, almacenado en bloques {}

    1. function
    2. for
    3. while
    4. if

Del contexto global no se puede acceder a contextos locales, pero los locales si pueden acceder al global
*/
