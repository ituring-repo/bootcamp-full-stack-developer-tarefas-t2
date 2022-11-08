/*
Prática 8: Criando nossa lista de filmes

Crie uma função em `pratica-8.js` que receba uma lista de objetos de filmes como parâmetro. Exiba as informações de cada item da lista de acordo com a saída esperada abaixo.

Dado de entrada da função:
[{
  titulo: "Estrelas Além do Tempo",
  notaAvaliacao: 7.8,
  duracao: 127,
  anoPublicacao: 2016,
  genero: ["Biografia", "Drama", "História"]
},
{
  titulo: "Top Gun",
  notaAvaliacao: 8.6,
  duracao: 130,
  anoPublicacao: 2022,
  genero: ["Ação", "Drama"]
},
{
  titulo: "O Jogo da Imitação",
  notaAvaliacao: 8.0,
  duracao: 114,
  anoPublicacao: 2014,
  genero: ["Biografia", "Drama", "Suspense", "Guerra"]
}]


Valores exibidos pela função:
Estrelas Além do Tempo (Nota: 7.8)
• Duração: 127 minutos
• Ano de publicação: 2016
• Gênero: biografia, drama e história

Top Gun (Nota: 8.6)
• Duração: 130 minutos
• Ano de publicação: 2022
• Gênero: ação e drama

O Jogo da Imitação (Nota: 8.0)
• Duração: 114 minutos
• Ano de publicação: 2014
• Gênero: biografia, drama, suspense e guerra


Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.
*/

/* SOLUÇÃO  */
let exibeInfoFilmes = listaFilmes => {
    listaFilmes.forEach(filme => {
        console.log(`${filme.titulo} (Nota: ${filme.notaAvaliacao})`);
        console.log(`• Duração: ${filme.duracao} minutos`);
        console.log(`• Ano de publicação: ${filme.anoPublicacao}`);

        const generosMenosUltimo = filme.genero.slice(0, -1);
        const ultimoGenero = filme.genero.slice(-1);
        const infoGeneros = generosMenosUltimo.join(', ') + ' e ' + ultimoGenero;

        const resultadoGenero = filme.genero.length > 1 ? infoGeneros : genero[0];

        console.log(`• Gênero: ${resultadoGenero}\n`);
    });
};

/* TESTANDO A SOLUÇÃO */
const listaFilmes = [{
    titulo: "Estrelas Além do Tempo",
    notaAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    genero: ["Biografia", "Drama", "História"]
  },
  {
    titulo: "Top Gun",
    notaAvaliacao: 8.6,
    duracao: 130,
    anoPublicacao: 2022,
    genero: ["Ação", "Drama"]
  },
  {
    titulo: "O Jogo da Imitação",
    notaAvaliacao: 8.0,
    duracao: 114,
    anoPublicacao: 2014,
    genero: ["Biografia", "Drama", "Suspense", "Guerra"]
}];
exibeInfoFilmes(listaFilmes);