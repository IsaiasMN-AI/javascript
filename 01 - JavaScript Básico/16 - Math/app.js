let num1 = 9.54165165;

let floor_ = Math.floor(num1); // Arredonda para baixo
console.log(floor_);

let ceil_ = Math.ceil(num1); // Arredonda para cima
console.log(ceil_);

let round_ = Math.round(num1); // Arredonda para o valor mais próximo
console.log(round_);

console.log(Math.max(1, 5, 8, -10, 9, 150, 0, 45)); // Mostra o maior número
console.log(Math.min(1, 5, 8, -10, 9, 150, 0, 45)); // Mostra o menor número

console.log(Math.random()); // Gera um número aleatório maior ou igual a zero e menor que um, com várias casas decimais
console.log(Math.random() * (10 - 5) + 5) // Gera um número aleatório de 5 até quase 10 com casas decimais. A fórmula é (... * (max - min) + min)
console.log(Math.ceil(Math.random() * (10 - 5) + 5)) // Gera um número aleatório de 6 até 10
