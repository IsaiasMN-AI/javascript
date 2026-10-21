// ==================================================================================================
// OBJETIVO: Pegar o background-color do body e implementar nos paragrafos também
// ==================================================================================================
const div = document.querySelector('.paragrafos');
const paragrafos = div.querySelectorAll('p'); // Atribui para a variável algo semelhante a uma Array com todos os <p></p> encontrados na div

const estilosBody = getComputedStyle(document.body); // Guarda todos os estilos computados pelo browser
const backgroudColorBody = estilosBody.backgroundColor; // Pega apenas o background-color que estaja guardado na var estilosBody

for (let p of paragrafos) {
    p.style.backgroundColor = backgroudColorBody // Atribui a cor do body a cada paragrafo
}
