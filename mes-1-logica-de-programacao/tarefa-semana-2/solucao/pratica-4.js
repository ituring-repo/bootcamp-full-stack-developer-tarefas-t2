/*
### Prática 4: Funções com parâmetros e retornando valores

Por vezes realizamos cálculos matemáticos e operações repetidas vezes mas com valores diferentes na operação e com o intuito de obter um resultado. Por exemplo: ao fazermos compras, calculamos o desconto baseado no valor parcelado, à vista, com ou sem juros.

1. Nesta prática, você vai criar uma função no arquivo `pratica-4.js` que calcula a quantidade de desconto para um produto. A função deverá receber 2 parâmetros:
- Valor do produto em reais
- Porcentagem de desconto sobre o produto de 0 a 100, sendo 0 significando 0% de desconto e 100 representando 100% de desconto

2. O retorno da função deverá ser o valor que deverá ser pago com o desconto aplicado. Então, considerando que o valor do produto foi 100 e o desconto de 10%, então o retorno deverá ser 90

3. Chame a função e exiba o valor retornado pela função com `console.log` para ver se o seu código está funcionando

4. Por fim, o de sempre, faça o commit do seu código e suba ele no seu GitHub

SOLUÇÃO:
*/

function calculaDesconto(valorProduto, desconto) {
    const valorFinal = valorProduto*(1-desconto/100)
    return valorFinal
}

console.log(calculaDesconto(11000, 25))