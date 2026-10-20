const pontuacaoUser = 1000;
const nivelUser = pontuacaoUser >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
//               (       condição      )  (  se true  )   (   se false   ) 

const corUser = 'White'
const corPadrao = corUser || 'Black' // Se corUser estiver definido será usado. Caso contrário, será definido como Black

