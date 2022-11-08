/*
Prática 11: Calculando um extrato do banco simples

Aproveite o seu código da Prática 10 e crie uma função no arquivo `pratica-11.js` que recebendo uma lista de depósitos e retiradas, exiba o resumo do extrato mensal de sua conta com as seguintes informações no exemplo abaixo.

**Dado de entrada da função:**
[{
  valor: 100.00,
  movimentacao: "deposito",
  dataMovimentacao: "2021-08-02T07:46:36.611Z"
},
{
  valor: 20.00,
  movimentacao: "retirada",
  dataMovimentacao: "2021-09-17T09:46:36.611Z"
},
{
  valor: 30.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-02-24T09:46:36.611Z"
},
{
  valor: 10.00,
  movimentacao: "deposito",
  dataMovimentacao: "2022-03-02T09:46:36.611Z"
},
{
  valor: 7.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-04-20T09:46:36.611Z"
},
{
  valor: 21.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-03-20T09:46:36.611Z"
},
{
  valor: 5.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-06-08T09:46:36.611Z"
}]

**Valor exibido pela função:**
O valor total depositado foi de: R$ 110
O valor total retirado foi de: R$ 83
O saldo final de sua conta foi positivo no valor de R$ 27

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.
*/

/* SOLUÇÃO */
let exibeExtratoSimples = listaMovimentacoes => {
    let saldoFinal = 0;
    let depositos = 0;
    let retiradas = 0;
    listaMovimentacoes.forEach(movimentacao => {
        depositos += movimentacao.movimentacao === "deposito" ? movimentacao.valor : 0;
        retiradas += movimentacao.movimentacao === "retirada" ? movimentacao.valor : 0;
        saldoFinal += movimentacao.movimentacao === "deposito" ? movimentacao.valor : 0;
        saldoFinal += movimentacao.movimentacao === "retirada" ? -movimentacao.valor : 0;
    })
    const positivoOuNegativo = saldoFinal >= 0 ? "positivo" : "negativo";
    
    console.log(`O valor total depositado foi de: R$ ${depositos}`);
    console.log(`O valor total retirado foi de: R$ ${retiradas}`);
    console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${Math.abs(saldoFinal)}`);
};

/* TESTANDO A SOLUÇÃO */
const listaMovimentacoes = [{
    valor: 100.00,
    movimentacao: "deposito",
    dataMovimentacao: "2021-08-02T07:46:36.611Z"
  },
  {
    valor: 20.00,
    movimentacao: "retirada",
    dataMovimentacao: "2021-09-17T09:46:36.611Z"
  },
  {
    valor: 30.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-02-24T09:46:36.611Z"
  },
  {
    valor: 10.00,
    movimentacao: "deposito",
    dataMovimentacao: "2022-03-02T09:46:36.611Z"
  },
  {
    valor: 7.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-04-20T09:46:36.611Z"
  },
  {
    valor: 21.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-03-20T09:46:36.611Z"
  },
  {
    valor: 5.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-06-08T09:46:36.611Z"
}];
exibeExtratoSimples(listaMovimentacoes);