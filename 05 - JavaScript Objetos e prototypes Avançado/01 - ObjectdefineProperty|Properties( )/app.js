function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;
    // this.estoque = estoque;

    // ===================================================================
    // Usando .defineProperty: Define propriedades de um atributo por vez
    // ===================================================================
    Object.defineProperty(this, 'nome', {
        enumerable: true, // Mostra a chave
        value: nome, // Determina valor
        writable: false, // Se pode ser alterado ou não
        configurable: true // Pode ser reconfigurada logo a baixo
    })

    Object.defineProperty(this, 'nome', {
        enumerable: true, // Mostra a chave
        value: nome, // Determina valor
        writable: true, // Se pode ser alterado ou não
        configurable: false // Não pode ser reconfigurada nem apagada
    })
    // ==========================================================================
    // Usando .defineProperties: Define propriedades de vários atributos por vez
    // ==========================================================================
    Object.defineProperties(this, {
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Determina valor
            writable: true, // Se pode ser alterado ou não
            configurable: false // Não pode ser reconfigurada nem apagada
        },
        estoque: {
            enumerable: true, // Mostra a chave
            value: estoque, // Determina valor
            writable: true, // Se pode ser alterado ou não
            configurable: false // Não pode ser reconfigurada nem apagada
        }
    })
}