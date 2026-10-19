const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} está falando oi!`); // A palavra this serve para referenciar o atributo dentro do contexto do objeto
    }
};
console.log(pessoa1.nome) // Puxa o atributo nome da pessoa
pessoa1.fala() // Executa o método fala da pessoa

// ==============================================================================================

function criarPessoa(nome, sobrenome, idade) { // Aqui é uma função para criar pessoas
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
const pessoa2 = criarPessoa('Isaias', 'Machado Nunes', '24')
console.log(pessoa2.nome)