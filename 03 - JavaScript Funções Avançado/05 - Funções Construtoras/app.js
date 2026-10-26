// =======================================================================
// Funções Construtoras
// =======================================================================
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodoNomeCompleto = function() {
        console.log(this.nome, this.sobrenome);
    };

    const metodoInterno = function() {
        console.log('Esse método só pode ser usado dentro dessa função construtora.');
    }
}

const pessoa1 = new Pessoa('Luiz', 'Otávio');
pessoa1.metodoNomeCompleto();
