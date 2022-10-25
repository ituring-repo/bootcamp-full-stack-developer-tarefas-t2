/*
Prática 7: Calculando o saldo final

Crie uma função no arquivo `pratica-7.js` que recebendo como argumento uma lista de depósitos e retiradas como no exemplo abaixo, exiba o saldo final da conta.

Dado de entrada da função:
[100, -20, -30, 10, -7, -21, -5]

Saída esperada:
O saldo final de sua conta foi positivo no valor de R$ 27.

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.
*/

/* SOLUÇÃO */
let exibeSaldoFinal = lista => {
    let saldoFinal = 0
    for (item of lista)
        saldoFinal += item
    const positivoOuNegativo = saldoFinal > 0 ? "positivo" : "negativo"
    console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${Math.abs(saldoFinal)}.`)
}

/* TESTANDO A SOLUÇÃO */
let listaDepositosRetiradas = [100, -20, -30, 10, -7, -21, -5]
exibeSaldoFinal(listaDepositosRetiradas)
listaDepositosRetiradas = [-100, -20, -30, 10, -7, -21, -5]
exibeSaldoFinal(listaDepositosRetiradas)