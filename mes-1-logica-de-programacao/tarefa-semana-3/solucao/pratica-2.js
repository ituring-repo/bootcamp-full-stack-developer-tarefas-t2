/*
Prática 2: Exiba os ímpares

Crie uma função no arquivo `pratica-2.js` que recebendo como argumento um número inteiro maior que zero, exiba com `console.log()` todos os números ímpares até chegar neste número. Veja um exemplo abaixo.

Dado de entrada da função:
17

Valores exibidos pela função:
1
3
5
7
9
11
13
15
17


SOLUCÃO:
*/

let imparesDe1AteN = n => {
    for (let i = 1; i <= n; i += 2)
        console.log(i)
}

/* TESTANDO A SOLUÇÃO */
imparesDe1AteN(16)

/* 
COMENTÁRIOS GERAIS SOBRE A SOLUÇÃO:
• Mais uma vez, arrow function em ação.
• Veja que você pode remover os parênteses dos parâmetros APENAS se só tiver um único parâmetro/argumento em uma arrow function
• Mais uma vez, código é simples e de fácil entendimento
• Veja que o nome da função que colocamos deixa totalmente claro o que ela faz. Nesse caso, é melhor `imparesDe1AteN` do que `impares` por exemplo como nome de função.
*/