const p = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let seg = 0;
let timer;

function getHoraSeg() {
    const data = new Date('2019-04-20 00:00:00' + seg);
    p.innerHTML = `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}`;
    seg++
}

function zeroAEsquerda(num) {
    if (num < 10) {num = `0${num}`};
    return num
}

function iniciarTimer() {
    timer = setInterval(function () {
        getHoraSeg();
    }, 1000);
}

iniciar.addEventListener('click', function () {
    iniciarTimer();
});

pausar.addEventListener('click', function () {
    clearInterval(timer);
});

zerar.addEventListener('click', function () {
    clearInterval(timer);
    seg = 0;
    p.innerHTML = '00:00:00'
});
