function meuEscopo() {
    const form = document.querySelector('.form') // Aqui estamos selecionando o elemento form pela classe form que lhe foi atribuida
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) { // Função que recebe o evento
        evento.preventDefault();

        const nome = form.querySelector('#nome'); // nome = <input type="text" id="nome" name="nome" placeholder="Digite seu nome">
        const sobrenome = form.querySelector('#sobrenome');
        const idade = form.querySelector('#idade');
        const altura = form.querySelector('#altura');

        pessoas.push({
            nome: nome.value, // Puxa o valor do "nome = <input type="text" id="nome" name="nome" placeholder="Digite seu nome">"
            sobrenome: sobrenome.value,
            idade: idade.value,
            altura: altura.value
        });

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}: Idade - ${idade.value} | Altura - ${altura.value} cm</p>`
    }
    form.addEventListener('submit', recebeEventoForm); // Adiciona um escutador de evento
                                                      // submit --> será o gatilho para a função
                                                      // recebeEventoForm --> é a função que será executada pelo navegador
}

meuEscopo();