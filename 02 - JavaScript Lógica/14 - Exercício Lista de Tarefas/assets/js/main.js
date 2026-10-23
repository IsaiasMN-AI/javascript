const input = document.querySelector('.input-tarefa');
const ul = document.querySelector('.tarefas');

function criarP() {
    const p = document.createElement('p');
    return p;
}

function criarLi() {
    const li = document.createElement('li');
    return li;
}

function criarButton() {
    const button = document.createElement('button');
    const botaoConcluir = document.createTextNode('Concluir');
    button.appendChild(botaoConcluir);
    button.setAttribute('class', 'apagar'); // Cria class="apagar" para o botão
    button.setAttribute('title', 'Concluir esta tarefa');
    return button;
}

function limpaInput() {
    input.value = ''; // Torna o valor do input em uma String vazia
    input.focus(); // Cursor volta para o input
}

function criarTarefa(textoInput) {
    const li = criarLi();
    const button = criarButton();

    const nomeTarefa = document.createTextNode(textoInput.trim()); // .trim() serve para tirar qualquer espaço ao final
    
    li.appendChild(nomeTarefa);
    li.appendChild(button);
    ul.appendChild(li);

    salvarTarefas()
    limpaInput();
}

function salvarTarefas() {
    const liTarefas = ul.querySelectorAll('li');
    const listaLiTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Concluir', '');
        listaLiTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaLiTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function carregarTarefas() {
    const tarefas = localStorage.getItem('tarefas'); // Pega as tarefas no formato JSON

    if (tarefas) {
        const listaDeTarefas = JSON.parse(tarefas); // Transforma as tarefas em Array do JavaScript
        for (let tarefaTexto of listaDeTarefas) {
            criarTarefa(tarefaTexto);
        }
    }
}

input.addEventListener('keypress', function (event) { // Esse event listener retorna ao console todos os dados do evento quando qualquer tecla é pressionada
    //console.log(event);                               // Nesse evento inclui tbm o keyCode que precisamos para usar como inicializador da função
})

input.addEventListener('keypress', function (event) {
    const keyCode = event.keyCode; // Aqui pegamos o valor do keyCode
    if (keyCode === 13) {
        criarTarefa(input.value);
    }
})

document.addEventListener('click', function (e) {
    const el = e.target; // el vai conter o elemento que vc clicou
    // console.log(el) | Ex saída: <input class="input-tarefa" type="text">

    if (el.classList.contains('apagar')) {
        el.parentElement.remove(); // .parentElement puxa o pai do elemento, e .remove remove o elemento 
        salvarTarefas()
    }
})

carregarTarefas();