const numeros = [5, 10, 80, 20, 1, 2, 3, 7, 4, 12, 0, 27, 78];

const numerosFiltrados = numeros.filter((valor, indice, array) => { // A função deve retornar true para os números que irão ficar
    if (indice > 6) {                                               // e false para os números que devem sair
        return valor > 10;                                          // O parâmetro 'array' contém o seu estado atual na iteração corrente
    }
    else {
        return true;
    }
});
console.log(numerosFiltrados);

// ====================================================================================================

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

const pessoasCom5LetrasOuMais = pessoas.filter((obj, indice, array) => {
    return obj.nome.length >= 5;
})
console.log(pessoasCom5LetrasOuMais);

const pessoasComMaisDe50Anos = pessoas.filter((obj, indice, array) => {
    return obj.idade > 50;
})
console.log(pessoasComMaisDe50Anos);

const pessoasNomeTerminaComA = pessoas.filter((obj, indice, array) => {
    return obj.nome.slice(-1) === 'a';
})
console.log(pessoasNomeTerminaComA);