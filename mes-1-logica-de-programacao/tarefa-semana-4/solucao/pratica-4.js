/*
Prática 4: Raiz quadrada dos elementos de uma lista.

No arquivo `pratica-4.js` escreva uma função que recebendo uma lista com valores do tipo `number`, retorne uma lista com a raiz quadrada de cada um dos elementos. Qual método de iteração é o mais apropriado para este problema? `.forEach()`, `.map()` ou `.filter()`? Utilize o método mais apropriado para este problema.

**Dados de entrada da função:**
[4, 9, 16, 25, 36, 49]

**Chamando a função:**
suaFuncao([4, 9, 16, 25, 36, 49])

**Retorno esperado da função:**
[2, 3, 4, 5, 6, 7]


Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

**Dica:** pesquise o termo `raiz quadrada javascript` no Google para descobrir como tirar a raiz quadrada de um número com JavaScript.

**Desafio:** você pode fazer com que esta função tenha apenas uma única linha de comando:
suaFuncao(lista) {
  // um único comando aqui
}

Se quiser resolver este desafio, tente aí! Qualquer coisa, chame os mentores lá no nosso Discord para te dar algumas dicas.
*/

/* SOLUÇÃO 1 */
let geradorRaizQuadradaS1 = lista => {
    return lista.map(Math.sqrt);
};

/* SOLUÇÃO 2 (Resolvendo o desafio) */
let geradorRaizQuadradaS2 = lista => lista.map(Math.sqrt);

/* TESTANDO AS SOLUÇÕES */
const listaNumeros = [4, 9, 16, 25, 36, 49];
console.log(geradorRaizQuadradaS1(listaNumeros));
console.log(geradorRaizQuadradaS2(listaNumeros));