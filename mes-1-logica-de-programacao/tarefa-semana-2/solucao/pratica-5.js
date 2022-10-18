/*
### Prática 5: Funções como variáveis (Expressão de função)

Podemos construir funções de outras maneiras. Nesta prática, você aprenderá a criar uma função como se fosse uma expressão. Mas, dessa vez não vamos colocar a explicação aqui, a ideia é de você exercitar a pesquisa no Google para aprender a utilizar essa outra forma de construir funções.

De uma forma geral, uma expressão de função funciona exatamente igual a função que ensinamos em aula, a única diferença é que nela nós armazenamos a função dentro de uma variável. Para aprender a utilizá-la, pesquise no Google o termo "expressão de função JavaScript" e procure um artigo que explique bem como funciona.

1. Nesta prática, você irá recriar a prática 4 no arquivo `pratica-5.js` utilizando expressão de função
2. A lógica é a mesma, ou seja, o que você implementou que está entre `{}` continua igual, apenas mude o cabeçalho da função utilizando expressão de função
3. Teste, veja se está funcionando, e depois faça o commit do seu código e suba ele no seu GitHub

SOLUÇÃO:
*/

const calculaDesconto = function(valorProduto, desconto) {
    const valorFinal = valorProduto*(1-desconto/100)
    return valorFinal
}

console.log(calculaDesconto(11000, 25))