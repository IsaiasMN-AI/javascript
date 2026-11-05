const _velocidade = Symbol('velocidade')
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        return this[_velocidade];
    }

    set velocidade(valor) {
        if(typeof this[_velocidade] !== 'number') return;
        if(valor > 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const carro1 = new Carro('Fusca');
carro1.velocidade = 100;
console.log(carro1.velocidade);
