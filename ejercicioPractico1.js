const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(prompt('Adivina el número secreto entre 1 al 10'));

console.log(`Número con el que juegas ${numeroJugador}`);

if(numeroJugador === numeroSecreto) {
    console.log('¡Felicidades, adivinaste el número secreto!');
} else {
    console.log(`Perdiste, el número secreto era el ${numeroSecreto}`);
}