/*
Prática 5: Preparando uma mensagem de WhatsApp com JavaScript
Dada as mesmas variáveis que você utilizou para a prática 1:

seu nome
seu email
sua profissão
sua idade
o lugar que você sonha um dia conhecer (pode ser um país, cidade ou um local mesmo)
Coloque-as no arquivo pratica-5.js e encaixe-as nessa mensagem de WhatsApp que deve ser exibida na tela com console.log():

Olá, <valor da variável que tem o seu nome>! Somos aqui da agência de turismo Viagem dos Sonhos. Estamos te escrevendo este email, pois acabamos de confirmar as compras das passagens aéreas para <valor da variável que armazena o lugar que você sonha conhecer>. Confirma pra gente alguns dados? A sua idade é <valor da variável que armazena sua idade>, você é <valor da variável que armazena sua profissão> e o seu email é <valor da variável que armazena seu email>? Ficamos no aguardo. Muito obrigado e boa viagem! :D

Utilize neste exercício template strings para exibir o email.

SOLUÇÃO:
*/

const nome = "Maria Augusta"
const email = "mariaaugusta@gmail.com"
const profissao = "Programadora"
const idade = 32
const lugarDosSonhos = "Nova Iorque"

const mensagemWhatsApp = `Olá, ${nome}! Somos aqui da agência de turismo Viagem dos Sonhos. Estamos te escrevendo este email, pois acabamos de confirmar as compras das passagens aéreas para ${lugarDosSonhos}. Confirma pra gente alguns dados? A sua idade é <valor da variável que armazena sua idade>, você é ${profissao} e o seu email é ${email}? Ficamos no aguardo. Muito obrigado e boa viagem! :D`

console.log(mensagemWhatsApp)