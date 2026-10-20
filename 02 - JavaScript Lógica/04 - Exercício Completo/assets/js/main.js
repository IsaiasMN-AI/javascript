function meuEscopo () {
    const form = document.querySelector('.form');

    function getEvent(event) {
        event.preventDefault();

        let peso = form.querySelector('#peso');
        let altura = form.querySelector('#altura');

        const {imc, resultadoImc, colorResultado} = setImc(peso, altura);

        setResultado(`Seu IMC é ${imc}. (${resultadoImc})`, colorResultado);
        //resultado.innerHTML = `<p>Seu IMC é ${imc}. ${resultadoImc}</p>`
    }

    function setResultado(msg, colorResultado) {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = ''; // Esvazia a div de qualquer conteúdo presente
        const p = document.createElement('p'); // Cria uma variável contendo o elemento <p></p>
        p.classList.add(colorResultado); // Adiciona a classe paragrafo-resultado. Ficando <p class="paragrafo-resultado"></p>
        p.innerHTML = msg; // Adiciona o conteúdo da variável no elemento paragrafo. Ficando <p class="paragrafo-resultado">msg</p>
        resultado.appendChild(p); // Adiciona esse paragrafo montado na div
    }

    function setImc(peso, altura) {
        peso = Number(peso.value);
        altura = Number(altura.value);

        let imc = peso / (altura ** 2);

        let resultadoImc;
        let colorResultado;
        if (imc < 18.5) {
            resultadoImc = 'Abaixo do peso';
            colorResultado = 'fundo-vermelho'
        }
        else if (imc >= 18.5 && imc < 25) {
            resultadoImc = 'Peso normal';
            colorResultado = 'fundo-verde'
        }
        else if (imc >= 25 && imc < 30) {
            resultadoImc = 'Sobrepeso';
            colorResultado = 'fundo-amarelo'
        }
        else if (imc >= 30 && imc < 35) {
            resultadoImc = 'Obesidade grau 1';
            colorResultado = 'fundo-vermelho'
        }
        else if (imc >= 35 && imc < 40) {
            resultadoImc = 'Obesidade grau 2';
            colorResultado = 'fundo-vermelho'
        }
        else {
            resultadoImc = 'Obesidade grau 3';
            colorResultado = 'fundo-vermelho'
        }

        return {
            imc: imc.toFixed(2).slice(0, 4), 
            resultadoImc: resultadoImc, 
            colorResultado: colorResultado
        };
    }

    form.addEventListener('submit', getEvent);
}

meuEscopo();
