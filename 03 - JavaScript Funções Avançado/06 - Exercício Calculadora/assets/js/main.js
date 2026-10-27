function Calculadora() {
    this.input = document.querySelector('.input');
    this.table = document.querySelector('.table');

    this.table.addEventListener('click', function(e) {
        const el = e.target;

        if (el.classList.contains('btn-num') || el.classList.contains('btn-op')) {
            btnParaOInput(el.innerText);
        }
        else if (el.classList.contains('btn-clear-all')) {
            clearAll();
        }
        else if (el.classList.contains('btn-clear-one')) {
            clearOneChar();
        }
        else if (el.classList.contains('btn-retorn')) {
            calcNow();
        }
    });

    const btnParaOInput = (valueText) => {
        this.input.value += valueText;
    }

    const clearAll = () => {
        this.input.value = '';
    }

    const clearOneChar = () => {
        this.input.value = this.input.value.slice(0, this.input.value.length - 1);
    }

    const calcNow = () => {
        this.input.value = eval(this.input.value);
    }
}

new Calculadora();