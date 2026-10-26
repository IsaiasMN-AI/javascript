function funcao1() {
    console.log(arguments[5]); // 6
}
funcao1(1, 2, 3, 4, 5, 6);

// ========================================================================

function funcao2() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total); // 21
}
funcao2(1, 2, 3, 4, 5, 6);

// ========================================================================

function funcao3(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c); // 21 1 2 3
}
funcao3(1, 2, 3, 4, 5, 6);

// ========================================================================

function funcao4(a, b = 2, c = 4) { // caso b ou c não sejam definidos, receberão valores de 2 e 4 respectivamente
    console.log(a + b + c);
}
funcao4(2, undefined, 20); // undefined serve para nao definir um valor

// ========================================================================

function funcao5({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
funcao5({ nome: 'Luiz', sobrenome: 'Otávio', idade: 24})

// ========================================================================

function funcao6([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao6(['Luiz', 'Miranda', 24])

// ========================================================================

function funcao7(operador, acumulador, ...numeros) { // o parâmetro numeros pega todos os argumentos para si
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
    }
    console.log(acumulador);
}
funcao7('+', 1, 15, 12, 0, 8)
