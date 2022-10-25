/*
Prática 11: Ordenação

Ordene uma sequência de números não ordenados em ordem crescente. Tão comum no nosso cotidiano, parece algo simples, mas definitivamente não é. O algoritmo de ordenação mais rápido e utilizado no mundo é o [Quicksort](https://pt.wikipedia.org/wiki/Quicksort). Ele foi inventado (ou descoberto?) em 1960 por [Charles Hoare](https://pt.wikipedia.org/wiki/Charles_Antony_Richard_Hoare), um cientista da computação britânico.

Algoritmos de ordenação estão presentes em milhares de aplicações ao redor do mundo. Um exemplo bastante comum é o "ordene os produtos por preço", como vemos em sites de compras.

Agora é a sua vez. Não se preocupe com performance. Tente escrever um algoritmo de ordenação, não importa se ele não estiver eficiente. Esta prática será desafiadora, mas ela não é opcional. Não tem problema nenhum se não conseguir resolver. Qualquer coisa, vamos quebrar a cabeça juntos lá no nosso Discord.

Crie uma função no arquivo `pratica-11.js` que recebe como argumento uma lista de números que representam a contagem de visualizações de vídeos de um canal no Youtube. Retorne a lista com os números ordem crescente.

Dado de entrada da função:
[10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824]

Chamando a função:
suaFuncao([10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824])

Retorno esperado:
[10, 18, 32, 45, 45, 56, 98, 121, 123, 232, 1392824]


Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.
*/

/* SOLUÇÃO */
let ordenaListaDeNumeros = lista => {
    for (let i = 0; i < lista.length; i++) {
        let indiceMenorAtual = i

        for (let j = i+1; j < lista.length; j++)
            if (lista[j] < lista[indiceMenorAtual]) {
                indiceMenorAtual = j
            }

        // trocando os valores
        const aux = lista[i]
        lista[i] = lista[indiceMenorAtual]
        lista[indiceMenorAtual] = aux
    }

    return lista
}
/* 
COMENTÁRIOS GERAIS SOBRE A SOLUÇÃO:
• Este algoritmo da solução proposta é chamado de Selecion Sort. Como ele funciona: você varre a lista e procura pelo menor elemento. Encontrou o menor? Troca ele com o menor índice não ordenado. No início o menor índice não ordenado é o índice 0. Depois que você fez essa troca, o índice 0 está ordenado, pois você colocou nele o menor elemento da lista. Aí segue varrendo a lista novamente e dessa vez você procura o menor elemento e coloca no índice 1. Depois índice 2, 3, 4... até ter toda a lista ordenada. O nome Selection Sort vem de "selecionar" este menor elemento e colocar ele no início da lista.
• Geralmente, quando escrevemos uma solução própria vindo da nossa cabeça de um algoritmo de ordenação, a gente sempre acaba implementando uma dessas soluções: Selection Sort, Bubble Sort ou Insertion Sort. Essas soluções são as mais intuitivas.
*/

/* TESTANDO A SOLUÇÃO */
let lista = [10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824]
console.log(ordenaListaDeNumeros(lista))