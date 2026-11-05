class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + 'já ligado!');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + 'já desligado!');
            return;
        }
        this.ligado = false;
    }
}

// ==================================================================================================
class Smartphone extends DispositivoEletronico {}

const s1 = new Smartphone('Iphone');
console.log(s1); // Smartphone { nome: 'Iphone', ligado: false }

// ==================================================================================================
class Geladeira extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }
}

const g1 = new Geladeira('Eletrolux D400', 'Branco');
console.log(g1); // Geladeira { nome: 'Eletrolux D400', ligado: false, cor: 'Branco' }
