/*
### Prática 9: Qual é o maior de 2 números?

A criação de funções alinhado com os comandos condicionais e outras estruturas que serão apresentadas ao longo do curso, são a base para a construção de código. Agora vamos para mais uma prática.

1. Crie uma função no arquivo `pratica-9.js` que receberá dois parâmetros (dois números) e o valor exibido na tela deverá ser o de maior valor. Por exemplo, passando 10 e 20 como parâmetros, o número 20 deverá ser o resultado obtido. Já passando 2 números iguais, você pode exibir qualquer um dos números
2. Teste, veja se está funcionando, e depois faça o commit do seu código e suba ele no seu GitHub

SOLUÇÃO:
*/

function maiorDe2(n1, n2) {
    if (n1 > n2)
        console.log(n1)
    else
        console.log(n2)
}

maiorDe2(1, 2)
maiorDe2(2, 2)
maiorDe2(2, 1)
maiorDe2(-1, -2)