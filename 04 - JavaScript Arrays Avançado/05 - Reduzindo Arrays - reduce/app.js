const numeros = [5, 10, 80, 20, 1, 2, 3, 7, 4, 12, 0, 27, 78];

const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
    return acumulador;
}, 0); // 0 é o valor inicial do acumulador

console.log(total); // 249

// ================================================================================

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Luana', idade: 48 },
    { nome: 'Matheus', idade: 12 },
    { nome: 'Carlos', idade: 6 },
    { nome: 'Ana', idade: 15 },
    { nome: 'Pedro', idade: 80 },
    { nome: 'João', idade: 60 },
    { nome: 'Marcos', idade: 30 },
    { nome: 'Lino', idade: 45 }
]

const pessoaMaisVelha = pessoas.reduce((acumulador, valor, indice, array) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
    console.log(acumulador, valor)
}); // Quando não passamos um valor para o acumulador, ele assume o primeiro valor da Array
console.log(pessoaMaisVelha);
