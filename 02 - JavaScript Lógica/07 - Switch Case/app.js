const data = new Date('2026-10-19 00:00:00');
const diaDaSemana = data.getDay();

let diaDaSemanaTexto;
switch (diaDaSemana) {
case 0:
    diaDaSemanaTexto = 'Domingo';
    break;
case 1:
    diaDaSemanaTexto = 'Segunda';
    break
// ...
default: // Tem o mesmo papel do else
    diaDaSemanaTexto = '' 
}

console.log(diaDaSemanaTexto); // Segunda