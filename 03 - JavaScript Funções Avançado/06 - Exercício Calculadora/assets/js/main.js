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
    });

    const btnParaOInput = (valueText) => {
        this.input.value += valueText;
    }

    const clearAll = () => {
        this.input.value = '';
    }

    const clearOneChar = () => {
        let clear = this.input.innerText;
        clear.slice(0, 6);
        this.input.value = clear;
    }
}

new Calculadora();