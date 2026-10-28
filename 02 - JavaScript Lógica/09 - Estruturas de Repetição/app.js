// =========================================================================
// Estrutura FOR
// =========================================================================
for (let i = 0; i<=5; i++) {
    console.log(i);
}

// =========================================================================
// Estrutura FOR IN
// =========================================================================
const frutas = ['pera', 'banana', 'uva'];
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 24
}

for (let index in frutas) { // var index retorna o index da fruta
    console.log(frutas[index]);
}

for (let chave in pessoa) { // var chave retorna o nome da chave
    console.log(chave, pessoa[chave]);
}

// =========================================================================
// Estrutura FOR OF
// =========================================================================

for (let valor of frutas) { // var valor retorna o valor de cada item
    console.log(valor);
}

// =========================================================================
// Estrutura FOR EACH
// =========================================================================
const numeros = [5, 10, 80, 20, 1, 2, 3, 7, 4, 12, 0, 27, 78];

let acumulador = 0;
numeros.forEach((valor, indice, array) => {
    acumulador += valor;
});
console.log(acumulador); // 249

// =========================================================================
// Estrutura WHILE
// =========================================================================
let i = 0

while (i <= 5) {
    console.log(i);
    i++
}

// =========================================================================
// Estrutura DO WHILE
// =========================================================================
i = 0

do {
    console.log(i)
    i++
} while (i <= 5)