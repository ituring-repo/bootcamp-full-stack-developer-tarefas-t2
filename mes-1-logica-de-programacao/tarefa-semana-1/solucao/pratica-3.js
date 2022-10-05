/*
Prática 3: Verificando se é uma string ou não
Dada as mesmas variáveis que você utilizou para a prática 1:

• seu nome
• seu email
• sua profissão
• sua idade
• o lugar que você sonha um dia conhecer (pode ser um país, cidade ou um local mesmo)

Coloque-as no arquivo pratica-3.js e exiba o valor true com console.log() se a variável for do tipo string e false se a variável não for do tipo string. Neste caso, a resposta deve ser a seguinte:

true
true
true
false
true
Dica: utilize os operadores de comparação. Eles retornam true ou false.

Lembrando: teste o código, veja se ele está funcionando e depois suba ele no GitHub.

SOLUÇÃO:
*/

const nome = "Maria Augusta"
const email = "mariaaugusta@gmail.com"
const profissao = "Programadora"
const idade = 32
const lugarDosSonhos = "Nova Iorque"

console.log(typeof nome === "string")
console.log(typeof email === "string")
console.log(typeof profissao === "string")
console.log(typeof idade === "string")
console.log(typeof lugarDosSonhos === "string")