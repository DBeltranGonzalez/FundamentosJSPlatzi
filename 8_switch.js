let fruta = 'Uvas';

switch(fruta) {
    case 'Naranjas':
        console.log('Naranjas: $20/kg')
        break;
    case 'Manzanas':
        console.log('Manzanas: $16/kg')
        break;
    case 'Bananos':
        console.log('Bananos: $25/kg')
        break;
    case 'Papayas':
    case 'Mangos':
        console.log('Papayas y Mangos: $30/kg')
        break;
    default:
        console.log(`No me quedan ${fruta}.`)
}