// Explicit Type Casting

const stringNumero = '42';
const integer = parseInt(stringNumero);
console.log(integer);
console.log(typeof integer);

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal);
console.log(float);
console.log(typeof float);

const binary = '1010';
const decimal = parseInt(binary, 2); //El 2 es la base del numero
console.log(decimal);
console.log(typeof decimal);

// Implicit Type Casting

const sum = '5' + 3;
console.log(sum); //53

const sumWithBoolean = '3' + true;
console.log(sumWithBoolean); //3true

const sumWithNumber = 2 + true;
console.log(sumWithNumber); //3

const stringValue = '10';
const numberValue = 10;
const booleanValue = true;

console.log(stringValue + stringValue);
console.log(stringValue + numberValue);
console.log(stringValue + booleanValue);
console.log(numberValue + numberValue);
console.log(numberValue + booleanValue);
console.log(booleanValue + booleanValue);

/*
string + string = concatenación
string + number = concatenación
string + boolean = concatenación
number + number = number
number + boolean = number
boolean + boolean = number
*/
