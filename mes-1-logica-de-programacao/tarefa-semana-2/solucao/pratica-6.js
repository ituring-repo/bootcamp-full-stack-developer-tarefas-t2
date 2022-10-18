/*
### Prática 6: Arrow functions

1. Nesta prática, você irá recriar a prática 4 no arquivo `pratica-6.js` utilizando *arrow function*
2. A lógica é a mesma, apenas mude sua declaração utilizando *arrow function*
3. Teste, veja se está funcionando, e depois faça o commit do seu código e suba ele no seu GitHub

SOLUÇÃO:
*/

const calculaDesconto = (valorProduto, desconto) => valorProduto*(1-desconto/100)

console.log(calculaDesconto(11000, 25))