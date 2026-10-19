
// indexação:012345678
let texto = "Um texto. Outro texto.";

console.log(texto[1]); // Mostra o caracter na posição 1

console.log(texto.charAt(1)); // Tbm mostra o caracter na posição 1. Mas não retorna erro se tentar pegar algo fora do range.

console.log(texto.indexOf(texto)); // Mostra o index da primeira letra da palavra "texto"

console.log(texto.indexOf('t', 4)); // Mostra o index da primeira letra da palavra 't', mas começa a busca a apartir do index 4

console.log(texto.lastIndexOf('t', 4)); // Mostra o index da primeira letra da palavra 't', mas começa a busca a apartir do index 4 de trás pra frente

console.log(texto.match(/[a-z]/g)); // Mostra uma array com as letras encontradas de a-z

console.log(texto.replace('Um', 'Outro')); // Substitui a primeira palavra "Um" por "Outro" e mostra

console.log(texto.replace(/t/g, 'x')); // Substitui todo "t" por "x". Por conta da flag 'g'

console.log(texto.length); // Mostra o tamanho da String / Ultimo index

console.log(texto.slice(3, 8)); // Faz um recorte do index 3 ao 7, o 8 ele não pega

console.log(texto.slice(-6, -1)); // Faz um recorte de trás pra frente do index -2 ao -6

console.log(texto.split(' ')); // Torna o espaço em um separador e transforma cada palavra separada, em um item numa array

console.log(texto.split(' ', 2)); // Torna o espaço em um separador e transforma cada palavra separada até o index 2, em um item numa array

console.log(texto.toUpperCase());

console.log(texto.toLowerCase());