/*
Prática 14: Criando a média de avaliações

Muitas pessoas utilizam os aplicativos de delivery e buscam as avaliações de clientes para decidir qual restaurante pedir comida.

Pois é, e você foi contratado pelo TomaFood para terminar uma funcionalidade que calcula a média de avaliações de um restaurante. Agora é a sua vez.

Crie uma função no arquivo `pratica-14.js` que recebe um objeto com a lista de avaliações de um restaurante, calcula a média de suas avaliações de acordo com a entrada de cada cliente e exibe a média de avaliação.

**Dado de entrada da função:**
{
  restaurante: "Turing Gourmet",
  tipo: "Comida britânica"
  avaliacoes: [
    {
      cliente: "Thais S."
      nota: 9.8
    },
    {
      cliente: "Thales Gonçalves"
      nota: 8.9
    },
    {
      cliente: "José Lopes"
      nota: 9.9
    },
    {
      cliente: "Cristina Souza"
      nota: 9.3
    },
    {
      cliente: "Leo Garcia"
      nota: 8.5
    }
  ]
}

**Valor exibido pela função:**
A média de avaliações do restaurante Turing Gourmet foi de 9.28.

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.
*/

/* SOLUÇÃO 1 */
let exibeMediaAvaliacoesS1 = dadosRestaurante => {
    let somaAvaliacoes = 0;
    dadosRestaurante.avaliacoes.forEach((avaliacao) => {
        somaAvaliacoes += avaliacao.nota;
    });
    const mediaAvaliacoes = somaAvaliacoes/dadosRestaurante.avaliacoes.length;
    
    console.log(`A média de avaliações do restaurante ${dadosRestaurante.restaurante} foi de ${mediaAvaliacoes.toFixed(2)}.`);
}

/* SOLUÇÃO 2 (Usando o método .reduce())
O método .reduce() pega uma lista e reduz ela em um único valor. A função de callback desse método tem como 1º parâmetro o acumulador e o segundo parâmetro o valorAtual da lista. Além da função de callback, o método .reduce() também possui como parâmetro o valor inicial que você deseja colocar na variável acumuladora
*/
let exibeMediaAvaliacoesS2 = dadosRestaurante => {
    const valorInicial = 0;
    const funcaoRedutora = (acumulador, avaliacaoAtual) => acumulador += avaliacaoAtual.nota;
    const somaAvaliacoes = dadosRestaurante.avaliacoes.reduce(funcaoRedutora, valorInicial);
    const mediaAvaliacoes = somaAvaliacoes/dadosRestaurante.avaliacoes.length;
    
    console.log(`A média de avaliações do restaurante ${dadosRestaurante.restaurante} foi de ${mediaAvaliacoes.toFixed(2)}.`);
}

/* TESTANDO AS SOLUÇÕES */
const dadosRestaurante = {
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliacoes: [
      {
        cliente: "Thais S.",
        nota: 9.8
      },
      {
        cliente: "Thales Gonçalves",
        nota: 8.9
      },
      {
        cliente: "José Lopes",
        nota: 9.9
      },
      {
        cliente: "Cristina Souza",
        nota: 9.3
      },
      {
        cliente: "Leo Garcia",
        nota: 8.5
      }
    ]
};
Teste
exibeMediaAvaliacoesS1(dadosRestaurante);
exibeMediaAvaliacoesS2(dadosRestaurante);