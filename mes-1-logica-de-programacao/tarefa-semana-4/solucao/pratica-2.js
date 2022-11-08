/*
Prática 2: Utilizando o método `.forEach()` (parte 2)

Copie e cole em `pratica-2.js` o código do arquivo `pratica-5.js` da pasta `tarefa-semana-3`. Vamos utilizar o exercício da `Prática 5: Procurando um seriado especial` da semana anterior.

Relembrando o problema: "Crie uma função que recebendo como argumento uma lista de seriados e o seriado que esteja querendo pesquisar, retorne a posição que se encontra o seriado. Caso não tenha encontrado o seriado, retorne `undefined`.".

Agora, altere o código da solução e utilize o método `.forEach`.

#### Exemplo 1
Dados de entrada da função:

Lista:
["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

Elemento a ser buscado:
"Dexter"

Chamando a função:
suaFuncao(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Dexter")

Retorno esperado da função:
4


#### Exemplo 2
Dados de entrada da função:

Lista:
["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

Elemento a ser buscado:
"Friends"

Chamando a função:
suaFuncao(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Friends")

Retorno esperado da função:

undefined


Você deve estar se perguntando: "por que o `.forEach()` e não o `.filter()`, ou o `.map()`?". Pois o retorno da função deve ser o índice de onde está o elemento, e não o elemento em si. `.map()` sempre retorna a lista manipulada e `.filter()` sempre retorna a lista filtrada. Ou seja, não tem como retornar o índice de onde está o elemento com `.map()` e `.filter()`.

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.
*/

/* SOLUÇÃO */
let procuraItemEmLista = (lista, valor) => {
    let indiceValorEncontrado = undefined;

    // Obs: o lado ruim do forEach é que não tem como usar o comando `return` pra retornar o índice encontrado. Ou seja, você vai sempre precisar varrer toda a lista, o que é menos eficiente.
    lista.forEach((valorAtual, indice) => {
        if (valorAtual === valor)
            indiceValorEncontrado = indice;
    });

    return indiceValorEncontrado;
};

/* TESTANDO A SOLUÇÃO */
const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
console.log(procuraItemEmLista(listaSeriados, "Game of Thrones"));
console.log(procuraItemEmLista(listaSeriados, "Friends"));