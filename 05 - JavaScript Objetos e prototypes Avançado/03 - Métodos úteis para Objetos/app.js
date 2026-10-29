function Produto(nome, valor, estoque) {
    this.nome = nome,
    this.valor = valor,
    this.estoque = estoque
}

const p1 = new Produto('TV', 150, 5);
console.log(p1.nome, p1.valor, p1.estoque); // TV 150 5

const p2 = {...p1, material: 'Plástico'};
console.log(p2.nome, p2.valor, p2.estoque, p2.material); // TV 150 5 Plástico

console.log(Object.keys(p1)); // [ 'nome', 'valor', 'estoque' ]
console.log(Object.keys(p2)); // [ 'nome', 'valor', 'estoque', 'material' ]

console.log(Object.values(p1)); // [ 'TV', 150, 5 ]
console.log(Object.values(p2)); // [ 'TV', 150, 5, 'Plástico' ]

console.log(Object.entries(p1)); // [ [ 'nome', 'TV' ], [ 'valor', 150 ], [ 'estoque', 5 ] ]
console.log(Object.entries(p2)); // [ [ 'nome', 'TV' ], [ 'valor', 150 ], [ 'estoque', 5 ], [ 'material', 'Plástico' ] ]

Object.freeze(p1); // Irá congelar o objeto em seu estado atual

console.log(Object.getOwnPropertyDescriptor(p1, 'nome')); // { value: 'TV', writable: false, enumerable: true, configurable: false }
