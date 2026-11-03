function Produto(nome, valor, estoque) {
    this.nome = nome;
    this.valor = valor;
    this.estoque = estoque;
//  this.nomeMaisValor = () => {this.nome + ': ' + this.valor};
}//              |
//                |
//                 |
//                  |
//                   |
//                    |
//                     ↓
Produto.prototype.nomeMaisValor = function() {
    return this.nome + ': ' + this.valor;
};

const p1 = new Produto('TV', 150, 5);
console.log(p1.nomeMaisValor()); // TV: 150

const p2 = {
    nome: 'Caneca',
    valor: 15,
    estoque: 2
}
Object.setPrototypeOf(p2, Produto.prototype); // setPrototypeOf([Objeto que recebe], [Objeto que será o prototype])
console.log(p2.nomeMaisValor()); // Caneca: 15

// =======================================================================================

const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

Object.setPrototypeOf(objB, objA); // setPrototypeOf([Objeto que recebe], [Objeto que será o prototype])

console.log(Object.getPrototypeOf(objB)); //{ chaveA: 'A' }
console.log(objB.chaveA); // 'A'

// =======================================================================================


