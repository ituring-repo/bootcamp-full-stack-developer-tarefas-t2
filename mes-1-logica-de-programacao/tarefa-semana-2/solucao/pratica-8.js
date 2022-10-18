/*
### Prática 8: Par ou ímpar?

1. Crie uma função no arquivo `pratica-8.js` que receberá um número como parâmetro e deverá, a partir do valor de entrada, verificar e retornar se o número é ímpar ou par.
2. Caso o número seja par, exiba na tela `O número ${numero} é par`
3. Caso o número seja ímpar, exiba na tela `O número ${numero} é ímpar`
4. Teste, veja se está funcionando, e depois faça o commit do seu código e suba ele no seu GitHub

**Dica:** utilize o operador resto `%` para descobrir se o número é par ou ímpar.

SOLUÇÃO:
*/

function parOuImpar(numero) {
    const ehPar = numero%2 === 0
    if (ehPar)
        console.log(`O número ${numero} é par`)
    else
        console.log(`O número ${numero} é ímpar`)
}

parOuImpar(-2)
parOuImpar(-1)
parOuImpar(0)
parOuImpar(1)
parOuImpar(2)