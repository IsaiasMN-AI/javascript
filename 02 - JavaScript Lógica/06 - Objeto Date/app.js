const data1 = new Date(); // Pega data e hora atual
console.log(data1.toString()); // Tue Oct 20 2026 12:18:01 GMT-0400 (Horário Padrão do Amazonas)

const data2 = new Date(2019, 3, 20, 15, 14, 27, 999); // (ano, mês(0-11), dia, hora, min, seg, miliseg)
console.log(data2.toString()); // Sat Apr 20 2019 15:14:28 GMT-0400 (Horário Padrão do Amazonas)

const data3 = new Date('2019-04-20 20:20:59');
console.log(data3.toString()); // Sat Apr 20 2019 20:20:59 GMT-0400 (Horário Padrão do Amazonas)

console.log('Dia', data1.getDate());
console.log('Mês', data1.getMonth());
console.log('Ano', data1.getFullYear());
console.log('Horas', data1.getHours());
console.log('Min', data1.getMinutes());
console.log('Seg', data1.getSeconds());
console.log('Miliseg', data1.getMilliseconds());
console.log('Dia da semana', data1.getDay());

console.log(Date.now()); // Da em milesimos de segundos da data de início até a data atual

// FORMATAR DATAS

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth())
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataAgora = formataData(data1);
console.log(dataAgora);
