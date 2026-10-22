// =========================================================================
// Demonstração do TRY e CATCH
// =========================================================================
try {
    console.log(naoExisto);
} catch(err) { // a var err contém a saída do erro
    console.log('naoExisto não existe.');
}

// =========================================================================

try {
    console.log(naoExisto);
} catch(err) { // a var err contém a saída do erro
    console.log('naoExisto não existe.');
} finally {
    console.log('Sempre é executado.')
}

// =========================================================================
// Demonstração do THROW
// =========================================================================

function soma1(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ('x e y precisam ser números.'); // Esse lançamento de erro gera somente uma String 
    }
}

function soma2(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.'); // Esse lançamento de erro gera de fato um erro
    }
}

try {
    console.log(soma('1', 2));
} catch(error) {
    console.log(error);
}