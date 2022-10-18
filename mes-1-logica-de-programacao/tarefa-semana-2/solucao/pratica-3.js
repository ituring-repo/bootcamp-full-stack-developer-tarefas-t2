/*
### Prática 3: Funções sem parâmetros e retornando valores

Como vimos em aula, funções também podem retornar valores. Nesta prática, você vai criar uma função que retorna um número aleatório entre 0 e 10000. Números aleatórios são muito úteis em jogos, simulação computacional, além de também ser muito importante na área de criptografia e inteligência artificial.

1. Utilize o arquivo `pratica-3.js` e implemente lá uma função que retorna um número aleatório entre 0 e 10000
1. Caso não saiba como gerar um número aleatório, assista a gravação da aula 3 disponibilizada no nosso Discord, na parte de "Funções na prática"
2. Em seguida, chame a função e exiba o valor retornado pela função com `console.log` para ver se o seu código está funcionando
3. Por fim, o de sempre, faça o commit do seu código e suba ele no seu GitHub

SOLUÇÃO:
*/

function numeroAleatorioEntre0e10000() {
    const min = 0
    const max = 10000
    const numeroAleatorio = Math.floor(Math.random()*(max - min + 1)) + min
    
    return numeroAleatorio
}

console.log(numeroAleatorioEntre0e10000())
