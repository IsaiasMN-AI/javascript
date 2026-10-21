// ==================================================================================
// Atribuição Via Desestruturação com ARRAYS
// ==================================================================================
let a = 'A';
let b = 'B';
let c = 'C';

const numeros1 = [b, c, a];
[a, b, c] = numeros1;

console.log(`a = ${a}, b = ${b}, c = ${c}`) // a = B, b = C, c = A

// ==================================================================================

const numeros2 = [1, 2, 3, 4, 5, 6, 7];
const [primeiroNumero, segundoNumero, ...resto] = numeros2;

console.log(`primeiroNumero = ${primeiroNumero}, segundoNumero = ${segundoNumero}, resto = ${resto}`); // primeiroNumero = 1, segundoNumero = 2, resto = 3,4,5,6,7

// ==================================================================================

const numeros3 = [1, 2, 3, 4, 5, 6, 7];
const [um, ,tres, ,cinco] = numeros3; // Cada espaço entre as vígulas está pulando um index

console.log(`um = ${um}, tres = ${tres}, cinco = ${cinco}`) // um = 1, tres = 3, cinco = 5

// ==================================================================================

// index         [    0          1          2    ]
// index          [0  1  2]  [0  1  2]  [0  1  2]
const numeros4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [[,dois], ,[sete]] = numeros4;

console.log(`dois = ${dois}, sete = ${sete}`);

// ==================================================================================
// Atribuição Via Desestruturação com OBJETOS
// ==================================================================================

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 24,
    endereco: {
        rua: 'Av Brasil',
        numero: 867
    }
};

const {
    nome = 'Esse texto aparece caso "nome" seja undefined.',
    sobrenome,
    idade,
    endereco
} = pessoa;
console.log(nome, sobrenome, idade, endereco); // Luiz Otávio 24 { rua: 'Av Brasil', numero: 867 }

// ==================================================================================

const { // Nesse caso vc pode definir um outro nome para a variável
    nome: nome_ = 'Esse texto aparece caso "nome" seja undefined.',
    sobrenome: sobrenome_,
    idade: idade_,
    endereco: {
        rua,
        numero
    }
} = pessoa;
console.log(nome_, sobrenome_, idade_, rua, numero); // Luiz Otávio 24 Av Brasil 867

// ==================================================================================

const {
    nome: nome__,
    ...resto__
} = pessoa;
console.log(nome__, resto__); /*  Luiz {
                                    sobrenome: 'Otávio',
                                    idade: 24,
                                    endereco: { rua: 'Av Brasil', numero: 867 }
                                  }
*/