/*
Prática 9: Listando os melhores avaliados

1. Crie uma função em `pratica-9.js` que recaba uma lista de filmes como parâmetro.
2. Ordene a lista por notas de avaliação.
3. Imprima o item melhor avaliado da lista.

Dado de entrada da função:
[{
  titulo: "Um Sonho de Liberdade",
  notaAvaliacao: 9.2,
  duracao: 142,
  anoPublicacao: 1994,
  categoria: "Drama"
},
{
  titulo: "Clube da Luta",
  notaAvaliacao: 8.7,
  duracao: 139,
  anoPublicacao: 1999,
  categoria: "Drama"
},
{
  titulo: "Toy Story 3",
  notaAvaliacao: 8.3,
  duracao: 103,
  anoPublicacao: 2010,
  categoria: "Animação"
}]

Valor exibido pela função:
O filme de melhor avaliação com nota 9.2 é: Um Sonho de Liberdade.

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.
*/

/* SOLUÇÃO  */
let exibeFilmeMelhorAvaliado = listaFilmes => {
    listaFilmes.sort((filmeAnterior, filmeAtual) => filmeAtual - filmeAnterior);

    const filmeMelhorNota = listaFilmes[0];
    
    console.log(`O filme de melhor avaliação com nota ${filmeMelhorNota.notaAvaliacao} é: ${filmeMelhorNota.titulo}.`);
};

/* TESTANDO A SOLUÇÃO */
const listaFilmes = [
  {
    titulo: "Um Sonho de Liberdade",
    notaAvaliacao: 9.2,
    duracao: 142,
    anoPublicacao: 1994,
    categoria: "Drama"
  },
  {
    titulo: "Clube da Luta",
    notaAvaliacao: 8.7,
    duracao: 139,
    anoPublicacao: 1999,
    categoria: "Drama"
  },
  {
    titulo: "Toy Story 3",
    notaAvaliacao: 8.3,
    duracao: 103,
    anoPublicacao: 2010,
    categoria: "Animação"
}];
exibeFilmeMelhorAvaliado(listaFilmes);