/*
Prática 15: Buscando o carro mais próximo

Algo muito comum em nosso cotidiano, é solicitarmos um carro por aplicativo. Quando um motorista é encontrado para realizar a sua corrida, recebemos uma notificação como: `O motorista Joaquim B. com o carro Gol de placa ABC1234 está a caminho. Chega em 3 minutos`. 

Você está tão sob demanda que saiu da TomaFood e recebeu uma oferta irrecusável da Tuber para trabalhar no time de engenharia. E dá-lhe trabalho.

Crie uma função no arquivo `pratica-15.js` que recebe uma lista de motoristas com os dados de cada veículo e o tempo estimado até o cliente (em minutos).

Exiba o motorista que estiver com o menor tempo até você.

Dado de entrada da função:
[{
  motorista: "Thais S."
  avaliacao: 9.8,
  tempoEstimado: 7,
  veiculo: Palio,
  placa: ABC4321
},
{
  motorista: "Thales Gonçalves"
  avaliacao: 8.9,
  tempoEstimado: 4,
  veiculo: Celta,
  placa: ABC0987
},
{
  motorista: "José Lopes"
  avaliacao: 9.9,
  tempoEstimado: 5,
  veiculo: Fox,
  placa: ABC1234
},
{
  motorista: "Cristina Souza"
  avaliacao: 9.3,
  tempoEstimado: 3,
  veiculo: Fox,
  placa: ABC1234
},
{
  motorista: "Leo Garcia"
  avaliacao: 8.5,
  tempoEstimado: 9,
  veiculo: Ka,
  placa: ABC8765
}]


Valor exibido pela função:
Cristina está a caminho com o carro Fox de placa ABC1234. Chega em 3 minutos.

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

Dica: utilize o método `.sort()` para fazer a ordenação.
*/

/* SOLUÇÃO */
let exibeCarroACaminho = listaVeiculos => {
    const veiculoMaisProximo = listaVeiculos.sort((veiculoAnterior, veiculoAtual) => 
        veiculoAnterior.tempoEstimado - veiculoAtual.tempoEstimado
    )[0];

    console.log(`${veiculoMaisProximo.motorista} está a caminho com o carro Fox de placa ${veiculoMaisProximo.placa}. Chega em ${veiculoMaisProximo.tempoEstimado} minutos.`);
}

/* TESTANDO A SOLUÇÃO */
const listaVeiculos = [{
    motorista: "Thais S.",
    avaliacao: 9.8,
    tempoEstimado: 7,
    veiculo: "Palio",
    placa: "ABC4321"
  },
  {
    motorista: "Thales Gonçalves",
    avaliacao: 8.9,
    tempoEstimado: 4,
    veiculo: "Celta",
    placa: "ABC0987"
  },
  {
    motorista: "José Lopes",
    avaliacao: 9.9,
    tempoEstimado: 5,
    veiculo: "Fox",
    placa: "ABC1234"
  },
  {
    motorista: "Cristina Souza",
    avaliacao: 9.3,
    tempoEstimado: 3,
    veiculo: "Fox",
    placa: "ABC1234"
  },
  {
    motorista: "Leo Garcia",
    avaliacao: 8.5,
    tempoEstimado: 9,
    veiculo: "Ka",
    placa: "ABC8765"
}]
exibeCarroACaminho(listaVeiculos);