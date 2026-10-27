const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

nomes.splice(4, 1); // Remove a partir do index 4, 1 item em diante
console.log(nomes); // [ 'Maria', 'João', 'Eduardo', 'Gabriel' ]

nomes.splice(2, 2, 'Luiz') // Remove a partir do index 2, 2 itens em diante e adiciona 'Luiz' no index 2
console.log(nomes); // [ 'Maria', 'João', 'Luiz' ]
