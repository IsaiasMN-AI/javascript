//===========================================================================
// Funções Geradoras
//===========================================================================
function* geradora1() {
    // Código aqui
    yield 'Valor 1'
    // Código aqui
    yield 'Valor 2'
    // Código aqui
    yield 'Valor 3'
}

const g1 = geradora1();
console.log(g1.next().value); // Valor 1
console.log(g1.next().value); // Valor 2
console.log(g1.next()); // { value: 'Valor 3', done: false }
console.log(g1.next()); // { value: undefined, done: true }
