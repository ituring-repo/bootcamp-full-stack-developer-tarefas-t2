/*
Prática 4: Minha lista de seriados

Crie uma função no arquivo `pratica-4.js` que recebendo como argumento uma lista de seriados quaiquer, exiba na tela cada um dos seriados com o índice de cada um na lista.

Dado de entrada da função:
["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

Chamando a função:
suaFuncao(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"])

Valor exibido pela função:
[0] Breaking Bad
[1] Game of Thrones
[2] Stranger Things
[3] Chernobyl
[4] Dexter
[5] The Last Dance
[6] This is Us


Teste o seu código, veja se está funcionando, e depois faça o commit e suba ele no seu GitHub.
*/

/* SOLUÇÃO */
let exibeLista = lista => {
    for (let i = 0; i < lista.length; i++)
        console.log(`[${i}] ${lista[i]}`)
}

/* TESTANDO A SOLUÇÃO */
const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
exibeLista(listaSeriados)