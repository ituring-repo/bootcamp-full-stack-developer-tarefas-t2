/*
Prática 5: Procurando um seriado especial

Sua amiga quer assistir um seriado, mas ela queria saber se o seriado está na sua lista de favoritos.

Para isso, vamos aprender a fazer buscas. Buscar um elemento é muito comum em sistemas de software, tanto aplicativos de celular, quanto páginas e aplicações web.

Crie uma função no arquivo `pratica-5.js` que recebendo como argumento uma lista de seriados e o seriado que esteja querendo pesquisar, retorne a posição que se encontra o seriado. Caso não tenha encontrado o seriado, retorne `undefined`. Veja um exemplo abaixo.

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

Teste o seu código, veja se está funcionando, e depois faça o commit e suba ele no seu GitHub.
*/

/* SOLUÇÃO 1 */
let procuraItemEmListaS1 = (lista, valor) => {
    for (var i = 0; i < lista.length; i++)
        if (lista[i] === valor)
            return i
    return undefined
}

/* SOLUÇÃO 2 (versão mais enxuta da solução 1) */
let procuraItemEmListaS2 = (lista, valor) => {
    // Perceba que no final do for, precisamos acrescentar um ';'. Sabe por que? Pois se não tivesse o ';', o computador entederia que o comando 'return i == n ? true : false' está dentro do loop for. O ';' ajuda a delimitar um comando. No caso dessa solução, veja que o comando for não tem nenhum comando dentro dele, ou seja, ele apenas faz a varredura mesmo e para apenas quando o resto de n por i for diferente de zero.
    for (var i = 0; i < lista.length && lista[i] !== valor; i++);
    return i < lista.length ? i : undefined
}

/* SOLUÇÃO 3 */
let procuraItemEmListaS3 = (lista, valor) => {
    // usando um método que já existe para listas
    const indice = lista.indexOf(valor)

    // o método .indexOf() retorna -1 quando ele não encontra nenhum valor na lista. Como queremos retornar undefined, precisamos usar um ternário pra verificar isso
    return indice !== -1 ? indice : undefined
}

/* TESTANDO AS SOLUÇÕES */
const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
console.log(procuraItemEmListaS1(listaSeriados, "Game of Thrones"))
console.log(procuraItemEmListaS1(listaSeriados, "Friends"))
console.log(procuraItemEmListaS2(listaSeriados, "Game of Thrones"))
console.log(procuraItemEmListaS2(listaSeriados, "Friends"))
console.log(procuraItemEmListaS3(listaSeriados, "Game of Thrones"))
console.log(procuraItemEmListaS3(listaSeriados, "Friends"))