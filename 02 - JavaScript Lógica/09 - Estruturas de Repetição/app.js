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