/*
Prática 9: Calculando um extrato do banco completo

Aproveite o seu código da Prática 8 e crie uma função no arquivo `pratica-9.js` que recebendo uma lista de depósitos e retiradas, exiba um resumo completo do extrato mensal de sua conta com as seguintes informações no exemplo abaixo.

Dado de entrada da função:
[100, -20, -30, 10, -7, -21, -5]

Saída esperada:
Total de depósitos: 2
Total de retiradas: 5
O valor total depositado foi de: R$ 110
O valor total retirado foi de: R$ 83
O saldo final de sua conta foi positivo no valor de R$ 27

Sugestão: caso sinta necessidade, fique à vontade de criar funções auxiliares para resolver este problema.

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

#### Veja essas dicas se estiver com dificuldade:
Dica 1 - crie 4 variáveis:
- uma para ir contabilizando a quantidade de depósitos no loop
- uma outra para ir contabilizando a quantidade de retiradas no loop
- uma para ir armazenando os valores positivos (depósitos) no loop
- uma outra para ir armazenando os valores negativos (retiradas) no loop
- o saldo final basta somar o valor resultante dessas 2 variáveis anteriores após o término do loop

Dica 2 - use 1 comando `if-elfe` para:
- verificar se o número atual da lista é positivo e com isso atualizar a variável de cálculo do total de depósitos e da quantidade de depósitos
- e o outro para verificar se o número atual da lista é negativo e com isso atualizar a variável de cálculo do total retiradas e da quantidade de retiradas 
*/

/* SOLUÇÃO */
let exibeExtratoCompleto = lista => {
    let saldoFinal = 0
    let totalDepositos = 0
    let qtdDepositos = 0
    let qtdRetiradas = 0

    for (item of lista) {
        const ehDeposito = item > 0
        qtdDepositos += ehDeposito ? 1 : 0
        qtdRetiradas += !ehDeposito ? 1 : 0
        totalDepositos += ehDeposito ? item : 0
        saldoFinal += item
    }
    const positivoOuNegativo = saldoFinal > 0 ? "positivo" : "negativo"

    console.log(`Total de depósitos: ${qtdDepositos}`)
    console.log(`Total de retiradas: ${qtdRetiradas}`)
    console.log(`O valor total depositado foi de: R$ ${totalDepositos}`)
    console.log(`O valor total retirado foi de: R$ ${totalDepositos - saldoFinal}`)
    console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${Math.abs(saldoFinal)}`)
}

/* TESTANDO A SOLUÇÃO */
let listaDepositosRetiradas = [100, -20, -30, 10, -7, -21, -5]
exibeExtratoCompleto(listaDepositosRetiradas)
listaDepositosRetiradas = [-100, -20, -30, 10, -7, -21, -5]
exibeExtratoCompleto(listaDepositosRetiradas)