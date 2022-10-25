/*
Prática 3: É um número primo?

Números primos são aqueles que são divisíveis apenas pelo número 1 e por ele mesmo. Os números primos cumprem um papel essencial na área da criptografia, pois é [por meio deles que conseguimos hoje criptografar informações](https://pt.stackoverflow.com/questions/66513/como-n%C3%BAmeros-primos-s%C3%A3o-importantes-na-criptografia).

Agora é com você! Crie uma função no arquivo `pratica-3.js` que recebendo como argumento um número inteiro maior que zero, retorne `true` se este número for primo e `false` se ele não for um número primo. Veja abaixo alguns exemplos.

Dados de entrada da função:
17
2
7
8
5
23
15
1500450271

Chamando a função:
suaFuncao(17)
suaFuncao(2)
suaFuncao(7)
suaFuncao(8)
suaFuncao(5)
suaFuncao(23)
suaFuncao(15)
suaFuncao(1500450271)

Retorno esperado de cada uma das chamadas:
true
true
true
false
true
true
false
true

Teste o seu código, veja se está funcionando, e depois faça o commit e suba ele no seu GitHub.
*/

/* SOLUÇÃO 1 */
let ehPrimoSolucao1 = n => {
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false

    return true
}

/* 
COMENTÁRIOS GERAIS SOBRE A SOLUÇÃO 1:
• Esta é uma solução bastante enxuta, mas não é a mais eficiente
• Veja que o enunciado do problema pede que a função RETORNE algo e não exiba.
• Neste caso, devemos retornar o valor e não utilizar o console.log() dentro da função.
• Aí pra testar se a função está funcionando, basta exibir com console.log() o que ela retorna. Veja ao final o teste.
*/

/* SOLUÇÃO 2 */
let ehPrimoSolucao2 = n => {
    for (var i = 2; n % i != 0; i++);

    return i == n
}

/* 
COMENTÁRIOS GERAIS SOBRE A SOLUÇÃO 2:
• Esta é uma solução ainda mais enxuta que a solução 1, mas não é a mais eficiente
• Veja que precisamos declarar i como 'var', pois se declarasse como 'let', daria erro, pois quando declaramos como 'let', a variável só existe dentro do for, e não fora dele.
• Perceba que no final do for, precisamos acrescentar um ';'. Sabe por que? Pois se não tivesse o ';', o computador entederia que o comando 'return i == n ? true : false' está dentro do loop for. O ';' ajuda a delimitar um comando. No caso dessa solução, veja que o comando for não tem nenhum comando dentro dele, ou seja, ele apenas faz a varredura mesmo e para apenas quando o resto de n por i for diferente de zero.
• Por fim, veja que o retorno foi i == n. Ou seja, se i for igual a n, significa que o número é primo, pois o loop for varreu e conseguiu chegar até n. Isso significa que de 2 até n, apenas n foi divisívil por n. Ou seja, é primo.
*/

/* SOLUÇÃO 3 */
let ehPrimoSolucao3 = n => {
    // verifica se n é 2 ou 3. Se for, é primo.
    if (n == 2 || n == 3)
        return true

    // verifica se o resto de n com 2 ou 3 é zero. Se for, não é primo.
    if (n % 2 == 0 || n % 3 == 0)
        return false

    // verifica se n é divisível por algum número de 5 à raiz quadrada de n, incrementando i de 6 em 6. Se for, não é primo.
    for (var i = 5; i <= Math.sqrt(n); i += 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return false
    }

    return true
}

/* 
COMENTÁRIOS GERAIS SOBRE A SOLUÇÃO 3:
• Esta é uma solução de melhor performance, pois:
---> a partir de 5, você pode incrementar i com 6, pois matematicamente a partir de 5, N PODE SER divisível apenas por números somados de 6 em 6 (ex: 5, 11, 17, 23, 29, etc)
---> leva em consideração a parte da matemática que diz que N não é divisível por nenhum número acima da raiz quadrada de N
• Essas questões matemáticas nem eu e nem você é obrigado a saber. Mas, é sempre válido dar uma pesquisada pra saber se há alguma solução mais eficiente para algum tipo de problema comum.
*/

/* SOLUÇÃO 4 */
let ehPrimoSolucao4 = n => {
    // verifica se n é 2 ou 3. Se for, é primo.
    if (n == 2 || n == 3)
        return true

    // verifica se o resto de n com 2 ou 3 é zero. Se for, não é primo.
    if (n % 2 == 0 || n % 3 == 0)
        return false

    // função que calcula se n é divisível por i ou por i + 2. Se for, não é primo.
    let ehDivisivel = (n, i) => n % i == 0 || n % (i + 2) == 0

    // verifica se n é divisível por algum número de 5 à raiz quadrada de n, incrementando i de 6 em 6. Se for, não é primo.
    for (var i = 5; i <= Math.sqrt(n) && !ehDivisivel(n, i); i += 6);

    return !ehDivisivel(n, i) || i > Math.sqrt(n)
}

/* 
COMENTÁRIOS GERAIS SOBRE A SOLUÇÃO 4:
• É a mesma solução da soluçnao 3, com a diferença que fizemos uma função interna que verifica se n é divisível por i ou i + 2
• Isso deixou o loop for mais enxuto, mas no final ficou a mesma quantidade de linhas no código.
• Particularmente, a solução 3 é mais fácil de ler. Por isso, nem sempre fazer uma solução mais engenhosa é a melhor opção (só se for pra mostrar astúcia na hora de uma entrevista para uma vaga).
*/


/* TESTANDO AS SOLUÇÕES */
const lista = [17, 2, 7, 8, 5, 23, 15, 1500450271]

for (n of lista)
    console.log(ehPrimoSolucao1(n))
console.log()

for (n of lista)
    console.log(ehPrimoSolucao2(n))
console.log()

for (n of lista)
    console.log(ehPrimoSolucao3(n))
console.log()

for (n of lista)
    console.log(ehPrimoSolucao4(n))
console.log()