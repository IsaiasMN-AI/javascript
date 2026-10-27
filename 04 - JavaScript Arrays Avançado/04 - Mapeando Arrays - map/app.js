const numeros = [5, 10, 80, 20, 1, 2, 3, 7, 4, 12, 0, 27, 78];

const numerosDobrados = numeros.map((valor, indice, array) => {
    return valor * 2;
})
console.log(numerosDobrados); // [ 10, 20, 160, 40, 2, 4, 6, 14, 8, 24, 0, 54, 156 ]

// ==============================================================================================

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

const arrayComNomes = pessoas.map((obj, indice, array) => {
    return obj.nome;
});
console.log(arrayComNomes); // [ 'Luiz', 'Luana', 'Matheus', 'Carlos', 'Ana', 'Pedro', 'João', 'Marcos', 'Lino' ]

const chaveNomeRemovida = pessoas.map((obj, indice, array) => {
    return {idade: obj.idade};
});
console.log(chaveNomeRemovida);

const chaveIdAdicionada = pessoas.map((obj, indice, array) => {
    obj.id = indice + 10000
    return obj
});
console.log(chaveIdAdicionada);
