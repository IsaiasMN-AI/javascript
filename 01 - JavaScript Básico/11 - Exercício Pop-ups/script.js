let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:'); // A resposta vem como String

num1 = Number(num1); // Converter String em Number
num2 = parseFloat(num2); // Tbm converte String em Number

const resultado = num1 + num2;

alert(`O resultado da soma é: ${resultado}`);