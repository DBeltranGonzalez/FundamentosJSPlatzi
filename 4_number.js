// 1. Tipo entero y decimal

const entero = 42;
const decimal = 3.14;
console.log(typeof entero, typeof decimal);

// 2. Notación científica
const cientifico = 5e3;

// 3. Infinitos y Nan
const infinito = Infinity;
const noEsUnNumero = NaN;

// Operaciones aritméticas

// 1. Suma, resta, multiplicación y división
const suma = 3 + 4;
const resta = 4 - 3;
const multiplicacion = 4 * 3;
const division = 3 / 4;

// 2. Módulo y exponenciación
const modulo = 10 % 2;
const exponenciacion = 10 ** 2;
console.log(modulo);
console.log(exponenciacion);

// 3. Problemas de precisión JS
const precision = 0.1 + 0.2;
console.log(precision); // 0.3000000000004
console.log(precision.toFixed(1)); // 0.3
console.log(precision === 0.3); // false

// 4. Operaciones avanzadas
const raizCuadrada = Math.sqrt(16);
console.log(raizCuadrada);
const valorAbsoluto = Math.abs(-43);
console.log(valorAbsoluto);
const aleatorio = Math.random();
console.log(aleatorio);