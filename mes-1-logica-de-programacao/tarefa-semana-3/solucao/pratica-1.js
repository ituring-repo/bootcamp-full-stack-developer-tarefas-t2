/*
Prática 1: Implementando meu primeiro comando de repetição

1. Certifique-se que você está na pasta `tarefa-semana-3` no terminal
2. Abra o arquivo `pratica-1.js` com o VSCODE ou o editor de código de sua preferência
3. Este problema nós trabalhamos em aula: criar uma tabuada. Crie uma função que receba apenas 1 argumento de entrada: o número que você utilizará para fazer a tabuada
5. Nossa tabuada deverá ir de 1 ao 10
6. Neste problema, você deverá utilizar o comando `while`
9. Dentro da função, exiba a tabuada no terminal. Por exemplo, se o valor de entrada da função for `9`, você deverá exibir o seguinte resultado na tela com `console.log()`:
```
Tabuada de 9
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45
9 x 6 = 54
9 x 7 = 63
9 x 8 = 72
9 x 9 = 81
9 x 10 = 90
```
8. Teste o seu código, veja se está funcionando, e depois faça o commit e suba ele no seu GitHub

SOLUCÃO:
*/

let tabuada = n => {
    for (let i = 1; i <= 10; i++)
        console.log(`${i} x ${n} = ${i*n}`)
}

/* TESTANDO A SOLUÇÃO */
tabuada(9)

/* 
COMENTÁRIOS GERAIS SOBRE A SOLUÇÃO:
• Arrow function é mais moderno, tente utilizá-lo mais.
• Veja que você pode remover os parênteses dos parâmetros APENAS se só tiver um único parâmetro/argumento em uma arrow function
• Como o código é simples e de fácil entendimento, não precisa fazer por exemplo
> let resultado = i*n
• O próprio nome da função já deixa tudo muito óbvio. As operações também são bem simples. Por isso, neste caso, ser mais enxuto é mais elegante e mostra mais profissionalismo e perspicácia.
*/