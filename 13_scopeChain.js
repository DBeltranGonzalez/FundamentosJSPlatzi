const productName = 'Smartphone';
const price = 499;
const brand = 'TechCo';

function getProductDetails() {
    const productName = 'Laptop';
    const price = 899;

    return `The ${productName} costs $${price} and is from the brand ${brand}`
}

console.log(getProductDetails()) // The Laptop costs $899 and is from the brand TechCo

console.log(`The ${productName} costs $${price} and is from the brand ${brand}`) 