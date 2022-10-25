/*
Prática 6: Melhorando o processo de busca

Aproveitando o código da Prática 5, crie uma função no arquivo `pratica-6.js` que recebendo como argumento uma lista de seriados e um termo de pesquisa, retorne uma lista com todos os seriados que possuem aquele termo. Veja o exemplo abaixo.

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

Dica: pesquise o termo `verificar se string contém outra string javascript` no Google e aprenda a utilizar o método de string que vai te ajudar a resolver este problema. Se não conseguir encontrar ou se tiver dificuldade, fale com os mentores no nosso Discord.
*/

/* SOLUÇÃO */
let filtraLista = (lista, valor) => {
    let novaLista = []
    for (item of lista)
        if (item.includes(valor))
            novaLista.push(item)
    return novaLista
}

/* TESTANDO A SOLUÇÃO */
const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
console.log(filtraLista(listaSeriados, "Th"))
console.log(filtraLista(listaSeriados, "xasd"))