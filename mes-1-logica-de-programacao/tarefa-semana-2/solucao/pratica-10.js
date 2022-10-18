/*
### Prática 10: Qual é o maior de 3 números?

1. Crie uma função no arquivo `pratica-10.js` que receberá 3 parâmetros (3 números) e o valor exibido na tela deverá ser o de maior valor. Por exemplo, passando 30, 10 e 20 como parâmetros, o número 30 deverá ser o resultado obtido. Já passando 3 números iguais, você pode exibir qualquer um dos números
2. Chame a função várias vezes para ver se está funcionando com todos os valores possíveis informados
2. Depois faça o commit do seu código e suba ele no seu GitHub

**Dica:** aqui você vai precisar do operador lógico `&&`.

SOLUÇÃO:
*/

function maiorDe3(n1, n2, n3) {
    if (n1 > n2 && n1 > n3)
        console.log(n1)
    else if (n2 > n3)
        console.log(n2)
    else
        console.log(n3)
}

maiorDe3(1, 1, 1)
maiorDe3(1, 2, 1)
maiorDe3(3, 2, 1)