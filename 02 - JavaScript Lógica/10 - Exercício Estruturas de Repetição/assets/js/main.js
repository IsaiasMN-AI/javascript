const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

function meuEscopo() {
    const section = document.querySelector('.container');

    for (let i = 0; i<elementos.length; i++) {
        const tagEFrase = elementos[i]; // { tag: 'p', texto: 'Frase 1' }
        const {tag, texto} = tagEFrase; // tag = 'p', texto = 'Frase 1'

        const elemento = document.createElement(tag);
        
        //elemento.innerHTML = texto;
        const textoCriado = document.createTextNode(texto);
        elemento.appendChild(textoCriado);
        
        section.appendChild(elemento);
    }
}

meuEscopo();
