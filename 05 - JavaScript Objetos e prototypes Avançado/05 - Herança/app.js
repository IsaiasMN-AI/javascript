function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(porcentagem) {
    return this.preco = this.preco + (this.preco * porcentagem / 100)
}
Produto.prototype.desconto = function(porcentagem) {
    return this.preco = this.preco - (this.preco * porcentagem / 100)
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco);
    this.material = material;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.aumento = function(porcentagem) {
    return this.preco = this.preco + (this.preco * porcentagem / 100) + ' Alterado';
}

const camiseta = new Camiseta('Regata', 150, 'Preta');
console.log(camiseta); // Camiseta { nome: 'Regata', preco: 150, cor: 'Preta' }
camiseta.aumento(50);
console.log(camiseta); // Camiseta { nome: 'Regata', preco: 225, cor: 'Preta' }

const caneca = new Caneca('Nome qualquer', 14.5, 'Porcelana');
console.log(caneca); // Caneca { nome: 'Nome qualquer', preco: 14.5, material: 'Porcelana' }
caneca.aumento(50);
console.log(caneca); // Caneca { nome: 'Nome qualquer', preco: '21.75 Alterado', material: 'Porcelana' }
