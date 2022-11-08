/*
Prática 13: Ordenando movimentações bancárias por data

Crie uma função no arquivo `pratica-13.js` que ordena uma sequência de movimentações bancárias começando com a data mais recente até a data de movimentação mais antiga.

Dado de entrada da função:
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

Retorno esperado da função:
[{
  valor: 5.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-06-08T09:46:36.611Z"
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
  valor: 10.00,
  movimentacao: "deposito",
  dataMovimentacao: "2022-03-02T09:46:36.611Z"
},
{
  valor: 30.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-02-24T09:46:36.611Z"
},
{
  valor: 20.00,
  movimentacao: "retirada",
  dataMovimentacao: "2021-09-17T09:46:36.611Z"
},
{
  valor: 100.00,
  movimentacao: "deposito",
  dataMovimentacao: "2021-08-02T07:46:36.611Z"
}]

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

Dica 1: os valores de `dataMovimentação` (Ex: `"2021-08-02T07:46:36.611Z"`) já estão no formato correto de datas. Com isso, você vai precisar converter essa string em um objeto real do tipo `Date`. Para isso, basta fazer
let varExemplo = new Date("2021-08-02T07:46:36.611Z")

A partir daí, basta comparar uma data com a outra para executar a ordenação.

Dica 2: utilize o método `.sort()` para fazer a ordenação.
*/

/* SOLUÇÃO */
let ordenaExtratoDataDecrescente = listaMovimentacoes => {
    return listaMovimentacoes.sort((valorAnterior, valorAtual) => {
        let dataAnterior = new Date(valorAnterior.dataMovimentacao);
        let dataAtual = new Date(valorAtual.dataMovimentacao);
        if (dataAtual < dataAnterior)
            return -1;
        if (dataAtual > dataAnterior)
            return 1;
        return 0;
    });
}

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
console.log(ordenaExtratoDataDecrescente(listaMovimentacoes));