// indexação:     0       1        2
const nomes = ['Luiz', 'Maria', 'João'];

console.log(nomes); // [ 'Luiz', 'Maria', 'João' ]

console.log(nomes[1]); // Puxa Maria que está no index 1

nomes[0] = 'Marcos'; // Substinui Luiz por Marcos
console.log(nomes); // [ 'Marcos', 'Maria', 'João' ]

nomes.push('Jonny'); // Adiciona ao final da array
console.log(nomes); // [ 'Marcos', 'Maria', 'João', 'Jonny' ]

nomes.unshift('Pedro'); // Adiciona ao início da array
console.log(nomes); // [ 'Pedro', 'Marcos', 'Maria', 'João', 'Jonny' ]

nomes.pop(); // Remove o ultimo item
console.log(nomes); // [ 'Pedro', 'Marcos', 'Maria', 'João' ]

nomes.shift(); // Remove o primeiro item
console.log(nomes); // [ 'Marcos', 'Maria', 'João' ]

delete nomes[1]; // Remove item da array sem alterar o index deixando-o vazio
console.log(nomes) // [ 'Marcos', <1 empty item>, 'João' ]

console.log(nomes.length); // Mostra o tamanho da array

console.log(nomes instanceof Array); // Mostra se é uma array retornando true ou false

// As funções de manipulação de String (13 - Manipulação de Strings) tbm se aplicam nas arrays