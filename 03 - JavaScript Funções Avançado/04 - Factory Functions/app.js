// =====================================================================
// Factory Functions - Funções Fábrica
// =====================================================================
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura,
        peso,
        get nomeCompleto() { // 
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift(); // Remove o primero nome e retorna esse valor para o atributo
            this.sobrenome = valor.join(' '); // Agrupa todos os elementos do Array em uma única String separando-os por espaço
        },
        imc() {
            const indice = this.peso / this.altura ** 2;
            return indice.toFixed(2);
        }
    };
}

const pessoa1 = criaPessoa('Isaias', 'Machado Nunes', 1.80, 80);
pessoa1.nomeCompleto = 'Maria Oliveira Melo'; // Mesmo que tenhamos definido o nome e sobrenome diretamente na função, aqui estamos mudando
console.log(pessoa1.nomeCompleto);
console.log(pessoa1.imc()); // 24.69
