// =====================================================================================================
// Superclass
// =====================================================================================================
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente!!! Saldo: R$${this.saldo}`);
        return};
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag: ${this.agencia} | C: ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(913, '1263548-5', 9);
conta1.depositar(10); // Ag: 913 | C: 1263548-5 | Saldo: R$19.00
conta1.sacar(80); // Saldo insuficiente!!! Saldo: R$19

// =====================================================================================================
// Childclass - Sobrescreve o método sacar
// =====================================================================================================
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(this.saldo + this.limite < valor) {
        console.log(`Saldo e limite insuficiente!!! Saldo: R$${this.saldo} | Limite R$${this.limite}`);
        return};
    this.saldo -= valor;
    this.verSaldo();
};

const conta2 = new ContaCorrente(914, '654862-5', 9, 100);
conta2.sacar(110); // Saldo e limite insuficiente!!! Saldo: R$9 | Limite R$100
 
