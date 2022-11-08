/*
Prática 7: Descobrindo as chaves do objeto

Uma prática comum quando trabalhamos com objetos é listar as propriedades que um determinado objeto possui.

Crie uma função em `pratica-7.js` que receba um objeto como parâmetro e imprima a lista de chaves que ele possui.

Dado de entrada da função:
{
  marca: "Tramontina",
  produto: "Jogo de talheres",
  preco: 500,
  quantidade: 132,
  categoria: "Utensilhos domésticos"
}

Retorno esperado da função:
['marca', 'produto', 'preco', 'quantidade', 'categoria']

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

Dica: pesquise o termo `buscar chaves javascript` no Google e veja como obter as chaves de um objeto. Se não conseguir encontrar ou se tiver dificuldade, fale com os mentores no nosso Discord.
*/

/* SOLUÇÃO  */
let exibeChavesObjeto = objeto => {
    console.log(Object.keys(objeto));
};

/* TESTANDO A SOLUÇÃO */
const produto = {
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos"
};
exibeChavesObjeto(produto);