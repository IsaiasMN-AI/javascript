// =====================================================================
// Fazendo uma função retornar outra
// =====================================================================
function falaFrase(primeiraPalavra) {
    function falaResto(segundaPalavra) {
        return primeiraPalavra + ' ' + segundaPalavra;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('Mundo!');
console.log(resto); // Olá Mundo!

// =====================================================================

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}

const duplicador = criaMultiplicador(2);
const triplicador = criaMultiplicador(3);

console.log(duplicador(5)); // 10
console.log(triplicador(5)); // 15
