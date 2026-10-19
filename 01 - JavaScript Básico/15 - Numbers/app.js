let num1 = 10;
let num2 = 2.56546541;

console.log(num1.toString() + num2); // Transforma o Number em String e acaba concatenando o 10 com o 2.5 = 102.5

console.log(num1.toString(2)); // Transforma em binário

console.log(num2.toFixed(2)); // Deixa com duas casas após a virgula e arredonda a última casa sem alterar seu valor real instânciado

console.log(Number.isInteger(num2)); // Verifica se o número é inteiro e retorna true ou false

let temp = num1 * 'Olá'
console.log(Number.isNaN(temp)); // Verifica se não é um resultado quebrado NaN.
                                 // Atenção, ele não verifica se "não é um número". Ele verifica se o resultado vai dar o erro NaN.