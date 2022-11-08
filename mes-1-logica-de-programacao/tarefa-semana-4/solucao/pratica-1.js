/*
Prática 1: Utilizando o método `.forEach()` (parte 1)

Copie e cole em `pratica-1.js` o código do arquivo `pratica-4.js` da pasta `tarefa-semana-3`. Vamos utilizar o exercício da `Prática 4: Minha lista de seriados` da semana anterior.

Relembrando o problema: "Crie uma função que recebendo como argumento uma lista de seriados quaiquer, exiba na tela cada um dos seriados com o índice de cada um na lista".

Agora, altere o código da solução e utilize o método `.forEach`.

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


Você deve estar se perguntando: "por que o `.forEach()` e não o `.filter()` ou o `.map()`?". Pois só queremos exibir os valores na tela, não queremos retornar e nem filtrar nada.

Dica: você também deve estar se perguntando: "como que eu pego o índice da lista com o `.forEach()`? Que eu saiba só dá pra pegar o item.". Então, se você fizer assim:
listaExemplo.forEach(function(var1, var2) {
    // comandos aqui
})

`var1` receberá o valor atual da lista e `var2` receberá o índice do valor atual da lista! Mas, neste caso, qual o nome de variável mais adequado? Sim, `item` e `indice` (ou `i`):
listaExemplo.forEach(function(item, indice) {
    // comandos aqui
})

Concorda?

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

SOLUCÃO:
*/

let exibeLista = lista => {
    lista.forEach((valorAtual, indice) => {
        console.log(`[${indice}] ${valorAtual}`);
    });
};

/* TESTANDO A SOLUÇÃO */
const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
exibeLista(listaSeriados);