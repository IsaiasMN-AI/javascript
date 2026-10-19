function saudacao1() {
    console.log('Olá, bom dia.');
}
saudacao1(); // Olá, bom dia.

// ==============================================================================================

function saudacao2(nome) {
    console.log(`Olá, bom dia. Como vai ${nome}.`);
}
saudacao2('Isaias'); // Olá, bom dia. Como vai Isaias

// ==============================================================================================

function saudacao3(nome) {
    return `Olá, bom dia. Como vai ${nome}.` // Agora a função pode ser atribuída a uma variável
}
const functionReturn = saudacao3('Isaias');
console.log(functionReturn) // Olá, bom dia. Como vai Isaias. 

// ==============================================================================================

const raiz_1 = function (n) { // Vc pode atribuir uma função anônima para a variável e a variável irá se comportar como função
    return n ** (1/2);
}
console.log(raiz_1(81)); // 9

// ==============================================================================================

const raiz_2 = (n) => n ** (1/2); // Quando temos somente um linha e um parâmetro podemos escrever a função dessa forma
console.log(raiz_2(144)) // 12