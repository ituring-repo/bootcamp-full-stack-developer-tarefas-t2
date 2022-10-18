/*
### Prática 12: Exibindo o dia da semana 

Um dos termos comuns de desenvolvimento é traduzir em código os desafios do cotidiano. Para lidar com os meses, por exemplo, indicamos número 1 para janeiro, 2 para fevereiro ou outra nomenclatura dependendo de cada sistema. Para fortalecer o aprendizado, vamos criar um escopo menor com o seguinte desafio e links extras de leitura:

1. Crie uma função que receba um número de 1 a 7 no arquivo `pratica-10.js`. 
2. Caso esse parâmetro seja diferente do valor informado, exiba na tela `O número ${parâmetro} não é válido para dia de semana`.
3. Caso o valor esteja entre os valores permitidos, siga a regra a seguir para apresentar o retorno:

- 01: Segunda
- 02: Terça
- 03: Quarta
- 04: Quinta
- 05: Sexta
- 06: Sábado
- 07: Domingo

O objetivo desse exercício é fortalecer o tratamento de parâmetros, realizando o processamento de uma informação e retornando um valor de acordo com o resultado esperado.

4. Teste, veja se está funcionando, e depois faça o commit do seu código e suba ele no seu GitHub

SOLUÇÃO:
*/

/* Solução 1 */
function diaDaSemana1(n) {
    if (n === 1)
        return "Segunda"
    else if (n === 2)
        return "Terça"
    else if (n === 3)
        return "Quarta"
    else if (n === 4)
        return "Quinta"
    else if (n === 5)
        return "Sexta"
    else if (n === 6)
        return "Sábado"
    else if (n === 7)
        return "Domingo"

    console.log(`O número ${n} não é válido para dia de semana`)
}

/* Solução 2 */
function diaDaSemana2(n) {
    switch (n) {
        case 1:
            return "Segunda"
        case 2:
            return "Terça"
        case 3:
            return "Quarta"
        case 4:
            return "Quinta"
        case 5:
            return "Sexta"
        case 6:
            return "Sábado"
        case 7:
            return "Domingo"
    }

    console.log(`O número ${n} não é válido para dia de semana`)
}

console.log(diaDaSemana1(1))
console.log(diaDaSemana2(1))

console.log(diaDaSemana1(2))
console.log(diaDaSemana2(2))

console.log(diaDaSemana1(3))
console.log(diaDaSemana2(3))

console.log(diaDaSemana1(4))
console.log(diaDaSemana2(4))