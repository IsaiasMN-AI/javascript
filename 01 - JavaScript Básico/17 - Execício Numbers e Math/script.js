let number = prompt('Digite um número:');
number = Number(number); // O 'prompt' sempre retorna a resposta em String, então devemos converter para Number
const elementNumber = document.getElementById('number'); // Guarda na variável exatamente o elemento HTML que tem o id="number"
                                                       // Nesse caso: const numberTitle = <span id="number">0</span>
const elementDiv = document.getElementById('texto');

elementNumber.innerHTML = number // O conteúdo de <span id="number">0</span> recebe o valor da variável number
elementDiv.innerHTML = `<p>Seu número menos 2 é: ${number - 2}<p>`
elementDiv.innerHTML += `${number} é inteiro: ${Number.isInteger(number)}<p>`
elementDiv.innerHTML += `<p>É um resultado inválido (NaN): ${Number.isNaN(number)}<p>`
elementDiv.innerHTML += `<p>Arredondado para baixo: ${Math.floor(number)}<p>`
elementDiv.innerHTML += `<p>Arredondado para cima: ${Math.ceil(number)}<p>`
elementDiv.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)}<p>`