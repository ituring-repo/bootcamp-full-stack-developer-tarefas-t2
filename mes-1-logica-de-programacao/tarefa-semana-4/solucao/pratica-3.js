/*
Prática 3: Utilizando o método `.filter()`

Copie e cole em `pratica-3.js` o código do arquivo `pratica-6.js` da pasta `tarefa-semana-3`. Vamos utilizar o exercício da `Prática 6: Melhorando o processo de busca` da semana anterior.

Relembrando o problema: "Recebendo como argumento uma lista de seriados e um termo de pesquisa, retorne uma lista com todos os seriados que possuem aquele termo. Veja o exemplo abaixo.".

Agora, altere o código da solução e utilize o método `.filter`.

Dados de entrada da função:

Lista:
["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

Termo a ser buscado:
"Th"

Chamando a função:
suaFuncao(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Th")

Retorno esperado da função:
["Game of Thrones", "Stranger Things", "The Last Dance", "This is Us"]

Teste o seu código, veja se está funcionando de acordo com o exemplo de entrada e saída, e depois faça o commit e suba ele no seu GitHub.
*/

/* SOLUÇÃO */
let filtraLista = (lista, valor) => {
    return lista.filter(valorAtual => valorAtual.includes(valor));
};

/* TESTANDO A SOLUÇÃO */
const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
console.log(filtraLista(listaSeriados, "Th"));
console.log(filtraLista(listaSeriados, "xasd"));