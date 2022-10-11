# Tarefa - Semana 2 - Lógica de programação: de funções a condicionais

Saudações, estudante do nosso bootcamp! Esta é a 2ª tarefa do Bootcamp Full Stack Developer do ITuring. Em cada semana do nosso bootcamp, você terá uma tarefa com um conjunto de etapas para solucionar ao longo da semana.

Na tarefa da semana 2, teremos as seguintes etapas:
- **[Etapa 1:](#etapa-1-preparando-se-para-programar)** Preparando-se para programar
- **[Etapa 2:](#etapa-2-dominando-a-criação-de-funções)** Dominando a criação de funções
- **[Etapa 3:](#etapa-3-aplicando-fluxos-de-decisões-no-código)** Aplicando fluxos de decisão no código
- **[Enviando sua tarefa no Discord](#enviando-a-sua-tarefa-no-discord)**

**Importante 1:** realize as etapas a partir do conteúdo de pastas e estrutura que você iniciou na 1ª semana.

**Importante 2:** realize a etapa 3 apenas depois da 2ª aula da semana.

## Etapa 1: Preparando-se para programar

Como vimos na última tarefa:
- Você criou um repositório local: `bootcamp-full-stack-ituring`
- Criou um repositório remoto no GitHub
- Vinculou o seu repositório local ao repositório remoto
- Criou a solução para os exercícios
- Subiu as alterações para o repositório remoto

A sua organização após a finalização da tarefa da 1ª semana ficou algo semelhante a:

```
📦 bootcamp-full-stack-ituring
 ┗ 📂 mes-1-logica-de-programacao
   ┗ 📂 tarefa-semana-1
     ┣ 📜 resumo-aula-1.md
     ┣ 📜 index.html
     ┣ 📜 pratica-1.js
     ┣ 📜 pratica-2.js
     ┣ 📜 pratica-3.js
     ┣ 📜 pratica-4.js
     ┣ 📜 pratica-5.js
     ┗ 📜 pratica-6.js
```

A tarefa da semana 2 será entregue neste mesmo repositório. Vamos relembrar os principais comandos e criar a estrutura para a solução dos exercícios.

### Relembrando os comandos de terminal

Antes de começar, caso sinta necessidade, relembre os comandos de terminal assistindo a gravação da 1ª aula ou pelos slides fornecidos. Quando não lembrar de algum comando, assista a aula ou dê uma pesquisada no Google (ou vídeos no Youtube)! Ou então peça ajuda no [nosso Discord](https://discord.gg/FXage6t99U). Vamos lá!

1. Utilizando o terminal (no Windows, o "git bash"), navegue para a pasta que você está desenvolvendo as tarefas `bootcamp-full-stack-ituring`.
1. Navegue para a pasta `mes-1-logica-de-programacao` e crie o diretório com o nome de `tarefa-semana-2` e navegue para dentro dele
1. Dentro de `tarefa-semana-2`, crie um arquivo chamado `resumo-semana-2.md`
1. *Pausa para dica 1:* pressione a seta pra cima e você poderá pegar os comandos anteriores que você digitou
1. *Pausa para dica 2:* quando você começar digitar o nome de uma pasta em um comando (por exemplo, `cd nomedapasta`), pressione 'tab' que o nome da pasta é preenchido automaticamente!
1. Continuando... agora abra o arquivo `resumo-semana-2.md` em um editor de texto (ou seja, no VSCODE)
1. Em seguida, copie e cole o conteúdo abaixo nesse arquivo no editor de texto. Salve a alteração

```markdown
## Resumo Semana 2: Entendendo e criando funções

### Funções

Uma função é um procedimento, um conjunto de instruções que executa uma tarefa, calcula um valor ou realiza alguma ação.
Elas são definidas em JavaScript através da palavra-chave `function`.

Sua sintaxe consiste em:
    - nome da função;
    - argumentos (opcionais);
    - ação (comandos) entre `{ }` - podendo conter ou não um retorno.

Exemplo:
function minhaFuncao(meuArgumento) {
    // comandos aqui
    return meuArgumento // opcional
}

A função acima nomeada não é executada automaticamente, o computador quando passa por ela apenas entende que você está declarando uma função. Para de fato chamar a função, faça:

minhaFuncao(10)

Para saber mais, acesse: 

- [Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
- [Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)

### Comandos Condicionais

Os comandos condicionais permitem a criação de um fluxo de execução a partir de uma condição em seu bloco de código. Podemos definir fluxos específicos em nosso bloco de código a partir da entrada de um registro tomando uma decisão em nosso código.

Sua sintaxe consiste em:

if (condicao)
    bloco_de_execucao

Com uma cláusula else:

if (condicao)
    bloco_de_execucao
else
    bloco_de_execucao_caso_a_primeira_condicao_seja_falsa

Você também pode pesquisar sobre como fazer um comando condicional de uma única linha, o operador ternário. Sua sintaxe é:

condition ? expr1 : expr2

Para saber mais, acesse: 

- [if/else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)
- [operador condicional ternário](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

```

8. Confira se está tudo certo, em seguida faça o commit e suba esta alteração para o seu GitHub

### Criando a estrutura para a entrega

Antes de começar a programar, vamos organizar a pasta onde você está desenvolvendo as tarefas:
1. Vá para a pasta `tarefa-semana-2` e crie os seguintes arquivos (novamente, pelo terminal com o comando `touch nomedoarquivo` :D) `pratica-1.js` a até `pratica-15.js`. Muito comando para executar, certo? Veja a seguir um atalho
1. Execute `for i in {1..15}; do touch pratica-${i}.js; done` no seu terminal na pasta `tarefa-semana-2` e veja a mágica acontecer (dê um `ls` para ver todos os arquivos criados). Isso é programação! Para saber mais: [introdução ao shell script](https://canaltech.com.br/linux/Introducao-ao-Shell-Script/)
2. Agora faça o commit e suba esta alteração para o seu GitHub

**Importante** A estrutura de pastas do seu repositório de tarefas `bootcamp-full-stack-ituring` deverá ficar da seguinte forma:

```
📦 bootcamp-full-stack-ituring
 ┗ 📂 mes-1-logica-de-programacao
   ┗ 📂 tarefa-semana-1
     ┗ 📜 <arquivos da semana 1...>
   ┗ 📂 tarefa-semana-2
     ┣ 📜 resumo-semana-2.md
     ┣ 📜 pratica-1.js
     ┣ 📜 pratica-2.js
     ┣ 📜 pratica-3.js
     ┣ 📜 pratica-4.js
     ┣ 📜 pratica-5.js
     ┣ 📜 pratica-6.js
     ┣ 📜 pratica-7.js
     ┣ 📜 pratica-8.js
     ┣ 📜 pratica-9.js
     ┣ 📜 pratica-10.js    
     ┣ 📜 pratica-11.js   
     ┣ 📜 pratica-12.js   
     ┣ 📜 pratica-13.js  
     ┣ 📜 pratica-14.js  
     ┗ 📜 pratica-15.js
```

Pronto, agora bora programar!

## Etapa 2: Dominando a criação de funções

Uma função é um trecho de código que permite a criação de um bloco que executa uma determinada tarefa para o seu programa e que permite a sua reutilização. Uma vez que a função foi definida, ela pode receber uma entrada de dados e um bloco de execução.

**Funções estão presentes em praticamente todas as linguagens de programação.** Ou seja, é um elemento base, assim como variáveis, comandos de atribuição, tipos de dados, etc. Uma vez aprendida, você pode aplicar em qualquer linguagem, desde que obedecendo suas regras de sintaxe.

Em programação, funções exercem um papel fundamental na reutilização de código e de nos permitir escrever código de uma maneira mais organizada, ou seja, mais modularizada. Escrever um código modular e organizado é imprescindível para uma carreira em programação. Mas, nem sempre uma estrutura modular vem logo de primeira. Muitas vezes é melhor escrever um primeiro código e, assim que perceber a oportunidade, coloque-o em uma função. A partir de agora, vamos juntos trabalhar em cima disso.

Agora vamos para a primeira prática.

### Prática 1: Implementando minha 1ª função

1. Certifique-se que você está na pasta `tarefa-semana-2` no terminal
2. Abra o arquivo `pratica-1.js` com o VSCODE ou o editor de código de sua preferência
3. Declare uma função com o nome de `helloWorld`, que não receberá nenhum argumento de entrada e que exiba na tela o seguinte conteúdo: `Hello, World! :)`
4. Clique em salvar no seu editor de código (ou CTRL+S) e execute o código com `node pratica-1.js` no terminal (**não se esqueça:** o terminal deve estar na pasta onde está o arquivo `pratica-1.js` para conseguir executá-lo com o comando `node`)
5. Deu certo, exibiu o conteúdo `Hello, World! :)`? Faltou chamar a função, não é mesmo? Então agora chame a função e execute o código novamente. Agora vai! :)
6. Por fim, faça o commit e suba esta alteração para o seu GitHub

### Prática 2: Funções com parâmetros

As funções permitem o recebimento de argumentos dos quais possibilita uma grande variedade de tratativas, executando um bloco de código a partir de uma entrada de dados. Nessa prática, iremos aplicar na prática os parâmetros de funções. Vamos lá:

Nesta prática, você vai criar e chamar 3 funções no arquivo `pratica-2.js` que irão informar sobre a confirmação de recebimento de um produto por email. Essas 3 funções deverão fazer o seguinte:
- Função 1 - Receber o nome do comprador como parâmetro e exibir na tela a informação `Olá, <nome do comprador>!`.
- Função 2 - Esta função deverá ter 3 parâmetros: nome do produto, nome de quem recebeu o produto e o endereço de entrega. Ela deverá exibir a seguinte informação na tela:
```
Fizemos a entrega do produto NomeDoProduto no endereço EnderecoDeEntrega com sucesso!

O seu produto foi recebido por: NomeDaPessoaQueRecebeuOProduto

Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.
```
- Função 3 - Esta função terá 1 parâmetro: nome de quem enviou o email. Ela deverá exibir a seguinte informação na tela:
```
Atenciosamente,
NomeDaPessoaQueEnviouOEmail
```

Acho que deu pra pegar o que cada uma dessas funções fazem, certo? Então, qual o nome mais apropriado para cada uma delas? Pense nisso, implemente as funções no arquivo `pratica-2.js` e por fim não esqueça de chamá-las para de fato exibir a mensagem de email completa na tela.

**Ah, o de sempre:** teste o código, veja se ele está funcionando e depois suba ele no GitHub.

**Dica:** utilize [template strings](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals) para construir os textos. :)

### Prática 3: Funções sem parâmetros e retornando valores

Como vimos em aula, funções também podem retornar valores. Nesta prática, você vai criar uma função que retorna um número aleatório entre 0 e 10000. Números aleatórios são muito úteis em jogos, simulação computacional, além de também ser muito importante na área de criptografia e inteligência artificial.

1. Utilize o arquivo `pratica-3.js` e implemente lá uma função que retorna um número aleatório entre 0 e 10000
1. Caso não saiba como gerar um número aleatório, assista a gravação da aula 3 disponibilizada no nosso Discord, na parte de "Funções na prática"
2. Em seguida, chame a função e exiba o valor retornado pela função com `console.log` para ver se o seu código está funcionando
3. Por fim, o de sempre, faça o commit do seu código e suba ele no seu GitHub

### Prática 4: Funções com parâmetros e retornando valores

Por vezes realizamos cálculos matemáticos e operações repetidas vezes mas com valores diferentes na operação e com o intuito de obter um resultado. Por exemplo: ao fazermos compras, calculamos o desconto baseado no valor parcelado, à vista, com ou sem juros.

1. Nesta prática, você vai criar uma função no arquivo `pratica-4.js` que calcula a quantidade de desconto para um produto. A função deverá receber 2 parâmetros:
- Valor do produto em reais
- Porcentagem de desconto sobre o produto de 0 a 100, sendo 0 significando 0% de desconto e 100 representando 100% de desconto

2. O retorno da função deverá ser o valor que deverá ser pago com o desconto aplicado. Então, considerando que o valor do produto foi 100 e o desconto de 10%, então o retorno deverá ser 90

3. Chame a função e exiba o valor retornado pela função com `console.log` para ver se o seu código está funcionando

4. Por fim, o de sempre, faça o commit do seu código e suba ele no seu GitHub

### Prática 5: Funções como variáveis (Expressão de função)

Podemos construir funções de outras maneiras. Nesta prática, você aprenderá a criar uma função como se fosse uma expressão. Mas, dessa vez não vamos colocar a explicação aqui, a ideia é de você exercitar a pesquisa no Google para aprender a utilizar essa outra forma de construir funções.

De uma forma geral, uma expressão de função funciona exatamente igual a função que ensinamos em aula, a única diferença é que nela nós armazenamos a função dentro de uma variável. Para aprender a utilizá-la, pesquise no Google o termo "expressão de função JavaScript" e procure um artigo que explique bem como funciona.

1. Nesta prática, você irá recriar a prática 4 no arquivo `pratica-5.js` utilizando expressão de função
2. A lógica é a mesma, ou seja, o que você implementou que está entre `{}` continua igual, apenas mude o cabeçalho da função utilizando expressão de função
3. Teste, veja se está funcionando, e depois faça o commit do seu código e suba ele no seu GitHub

### Prática 6: Arrow functions

As *arrow functions* ("funções flecha") foram introduzidas no ES6 com uma sintaxe mais curta comparada ao formato da expressão de função (`let nomeDaFuncao = function() {}`) e da função declarada (`function nomeDaFuncao(){}`).

Ela também funciona exatamente igual a expressão de função, mas possui alguns recursos especiais de escopo que você entederá melhor a sua utilidade no Mês 4, onde falaremos sobre React.

Mas, como uma *arrow function* é construída? Veja esta função declarada que soma 2 números:
```javascript
function soma2numeros(a, b) {
  return a+b
}

console.log(soma2numeros(1, 1)) // exibe na tela o valor 2
```
Veja como seria a função como expressão:
```javascript
let soma2numeros = function(a, b) {
  return a+b
}

console.log(soma2numeros(1, 1)) // exibe na tela o valor 2
```
Agora veja como seria a expressão com *arrow function*:
```javascript
let soma2numeros = (a, b) => {
  return a+b
}

console.log(soma2numeros(1, 1)) // exibe na tela o valor 2
```

Com a *arrow function*, nós não utilizamos a palavra reservada *function* e acrescentamos uma "flecha" entre o fechamento de parênteses dos parâmetros e a abertura das chaves do bloco de comandos.

Uma outra coisa interessante da *arrow function* é que ela retorna o valor por padrão caso você coloque **um único comando de uma única linha** e **sem chaves**. Ou seja:
```javascript
let soma2numeros = (a, b) => a+b
```
É a mesma coisa que:
```javascript
let soma2numeros = (a, b) => {
  return a+b
}
```
Atente-se que o retorno só acontecerá implicitamente se você deixar **sem chaves!**. Ou seja, se você fizer assim:
```javascript
let soma2numeros = (a, b) => { a+b }
```
Ele não terá o `return` embutido. Além disso, se a sua função só tem um único parâmetro, você pode também remover os parênteses. Ou seja:
```javascript
let potenciação = a => a*a
```
É a mesma coisa que:
```javascript
let potenciação = (a) => a*a
```
Que também é a mesma coisa que:
```javascript
let potenciação = (a) => {
  return a*a
}
```
Que também é a mesma coisa que:
```javascript
function potenciação(a) {
  return a*a
}
```


Bem diferente, né? O bacana é que economiza na escrita de código, mas o lado ruim é que fica mais difícil de entender para quem está começando agora. Por isso não se preocupe, essas nuances você vai pegar com o tempo.

1. Nesta prática, você irá recriar a prática 4 no arquivo `pratica-6.js` utilizando *arrow function*
2. A lógica é a mesma, apenas mude sua declaração utilizando *arrow function*
3. Teste, veja se está funcionando, e depois faça o commit do seu código e suba ele no seu GitHub

JavaScript é uma linguagem poderosa que traz muitos recursos e você pode fazer a mesma coisa de diferentes maneiras.

**Importante:** realize a etapa 3 apenas depois da 2ª aula da semana.

## Etapa 3: Aplicando fluxos de decisões no código

Enquanto as funções permitem o seu reaproveitamento de código, as estruturas condicionais permitem a alteração no fluxo de execução do seu código a partir de uma condição.

Com os comandos condicionais, nosso código começa a ganhar uma certa "inteligência", pois agora conseguimos permitir que o computador tome decisões e siga um caminho diferente de acordo com a condição avaliada. Isto é um elemento base para qualquer aplicação no mundo. A partir dos comandos condicionais, conseguimos construir e resolver problemas muito maiores com programação!

Em geral, podemos alterar um fluxo de execução através das seguintes estruturas: `if/else`, `switch` e operador ternário. Agora vamos praticar comandos condicionais!

**Sugestão:** experimente fazer os exercícios declarando as funções de diferentes maneiras (normal, *arrow function* ou expressão de função) para memorizar a sintaxe. Em um exercício, faça com a declaração normal. No outro, utilize *arrow function*, por aí vai.

### Prática 7: Tradutor de "Hello World!"

1. Crie uma função no arquivo `pratica-7.js` que:
- receba uma string como parâmetro representando um idioma (ex: "es" para espanhol, "pt" para português", "en" para inglês)
- exiba na tela "Hello World!" em diferentes idiomas, para pelo menos 3 idiomas
- se nenhum idioma for informado, exiba "Olá, Mundo!" por padrão
2. Não esqueça de chamar a função!
3. Teste, veja se está funcionando, e depois faça o commit do seu código e suba ele no seu GitHub

### Prática 8: Par ou ímpar?

1. Crie uma função no arquivo `pratica-8.js` que receberá um número como parâmetro e deverá, a partir do valor de entrada, verificar e retornar se o número é ímpar ou par.
2. Caso o número seja par, exiba na tela `O número ${numero} é par`
3. Caso o número seja ímpar, exiba na tela `O número ${numero} é ímpar`
4. Teste, veja se está funcionando, e depois faça o commit do seu código e suba ele no seu GitHub

**Dica:** utilize o operador resto `%` para descobrir se o número é par ou ímpar.

### Prática 9: Qual é o maior de 2 números?

A criação de funções alinhado com os comandos condicionais e outras estruturas que serão apresentadas ao longo do curso, são a base para a construção de código. Agora vamos para mais uma prática.

1. Crie uma função no arquivo `pratica-9.js` que receberá dois parâmetros (dois números) e o valor exibido na tela deverá ser o de maior valor. Por exemplo, passando 10 e 20 como parâmetros, o número 20 deverá ser o resultado obtido. Já passando 2 números iguais, você pode exibir qualquer um dos números
2. Teste, veja se está funcionando, e depois faça o commit do seu código e suba ele no seu GitHub

### Prática 10: Qual é o maior de 3 números?

1. Crie uma função no arquivo `pratica-10.js` que receberá 3 parâmetros (3 números) e o valor exibido na tela deverá ser o de maior valor. Por exemplo, passando 30, 10 e 20 como parâmetros, o número 30 deverá ser o resultado obtido. Já passando 3 números iguais, você pode exibir qualquer um dos números
2. Chame a função várias vezes para ver se está funcionando com todos os valores possíveis informados
2. Depois faça o commit do seu código e suba ele no seu GitHub

**Dica:** aqui você vai precisar do operador lógico `&&`.

### Prática 11: Exibindo a cor RGB (Aprendendo o comando switch)

O objetivo do aprendizado de estruturas condicionais é muito além de decorar a sintaxe do seu código. É compreender como a combinação de funções com comandos de decisão permitem a flexibilidade e o desenho de fluxo da sua aplicação, construindo coisas cada vez maiores e mais organizadas. Uma alternativa à estrutura `if/else`, é o `switch`.

1. Pesquise ou acesse o [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#breaking_and_fall-through) para conhecer mais e aprender sobre o comando `switch`
2. Nos próximos meses, você conhecerá mais sobre CSS e como estilizar e criar interfaces de aplicações web. Por agora, saiba que o computador não entende cores, a gente codifica cores com números. A partir dos números é que o computador consegue exibir a cor correta. Algumas opções de codificação de cores pode ser o [RGB](https://pt.wikipedia.org/wiki/RGB) (Reg, Green, Blue).
3. No arquivo `pratica-11.js`, crie uma função que recebe uma cor escrita em texto como parâmetro e retorna o valor no formato RGB
4. As cores possíveis que a função poderá receber serão as seguintes:
- `"vermelha"`
- `"laranja"`
- `"amarela"`
- `"verde"`
- `"azul claro"`
- `"azul marinho"`
- `"rosa"`
5. Para cada uma delas, a sua função deverá retornar o seguinte valor em `string`:
- `"vermelha"` -> `"rgb(255,0,0)"`
- `"laranja"` -> `"rgb(255,128,0)"`
- `"amarela"` -> `"rgb(255,255,0)"`
- `"verde"` -> `"rgb(,255,)"`
- `"azul claro"` -> `"rgb(0,255,255)"`
- `"azul marinho"` -> `"rgb(0,0,255)"`
- `"rosa"` -> `"rgb(255,0,255)"`

Caso a cor informada no parâmetro não coincida com nenhuma das informadas, informe o seguinte valor padrão: `"rgb(255,255,255)"`.

6. Teste bastante com `console.log`, veja se está funcionando, e depois faça o commit do seu código e suba ele no seu GitHub

### Prática 12: Exibindo o dia da semana 

Um dos termos comuns de desenvolvimento é traduzir em código os desafios do cotidiano. Para lidar com os meses, por exemplo, indicamos número 1 para janeiro, 2 para fevereiro ou outra nomenclatura dependendo de cada sistema. Para fortalecer o aprendizado, vamos criar um escopo menor com o seguinte desafio e links extras de leitura:

1. Crie uma função que receba um número de 1 a 7 no arquivo `pratica-10.js`. 
2. Caso esse parâmetro seja diferente do valor informado, exiba na tela `O número ${parâmetro} não é válido para dia de semana`.
3. Caso o valor esteja entre os valores permitidos, siga a regra a seguir para apresentar o retorno:

- 01: Segunda
- 02: Terça
- 03: Quarta
- 04: Quinta
- 05: Sexta
- 06: Sábado
- 07: Domingo

O objetivo desse exercício é fortalecer o tratamento de parâmetros, realizando o processamento de uma informação e retornando um valor de acordo com o resultado esperado.

4. Teste, veja se está funcionando, e depois faça o commit do seu código e suba ele no seu GitHub

### Prática 13: Aprendendo o operador ternário

O operador ternário é uma outra forma de trabalharmos com comandos condicionais. Ele é super enxuto, pois com ele você consegue fazer um comando condicional em uma única linha. A utilidade do operador ternário está em retornar um valor para uma variável de uma maneira rápida e eficiente, sem precisar escrever muitas linhas de código.

Mas, como funciona esse bendito "operador ternário"? Sua sintaxe é assim:
```javascript
condição ? expressão1 : expressão2 
```
Este operador é uma expressão, ou seja, ele **sempre** termina com um valor. `expressão1` é o valor retornado caso `condição` seja `true`. Já `expressão2` é o valor retornado caso `condição` seja `false`. Por exemplo:
```javascript
let a = 1
let b = 2
let maior = a > b ? a : b
```
Neste exemplo, se `a` for maior que `b`, ele retorna o valor de `a`. Caso contrário, ele retorna o valor de `b`. Portanto, neste caso, o valor armazenado em `maior` é o valor `b`, pois `a` não é maior que `b`, ou seja, a condição `a > b` é `false`. Como você faria pra retornar o menor valor? Esta será a prática 13.

1. Crie uma função que receba 2 números no arquivo `pratica-13.js`. 
2. Utilize o operador ternário para retornar o menor valor entre os 2 números
3. Chame a função e teste se ela está funcionando corretamente com o comando `console.log`
4. Por fim, faça o commit do seu código e suba ele no seu GitHub

### Prática 14: Cálculo do IMC

1. No arquivo `pratica-14.js`, crie uma função que recebendo o peso (em kg) e altura (em metros) de uma pessoa como parâmetros, retorne a classificação do IMC de acordo com o seguinte cálculo: IMC = PESO / (ALTURA * ALTURA)
2. A classificação deverá obedecer os seguintes critérios:
- "Abaixo do Peso" -> IMC abaixo de 18.5
- "Peso Normal" -> IMC entre 18.5 e 25
- "Sobrepeso" -> IMC entre 25 e 30
- "Obesidade" -> IMC maior que 30
3. A função deverá retornar um dos textos informados ("Abaixo do Peso", "Peso Normal", etc)
4. Teste bastante, veja se está funcionando completamente, e depois faça o commit do seu código e suba ele no seu GitHub

### Prática 15: Cálculo do IMC (modularizado)

Nesta prática, nós vamos te mostrar como deixar o código que você criou na prática 14 ainda mais modularizado e organizado. Mas, queremos que você tente fazer isso agora, sem a nossa dica explícita presente abaixo. Para isso, perceba que a sua função está fazendo 2 coisas, você sabe me dizer quais são? Isso! Ela está calculando o IMC (uma coisa) e depois verificando e retornando a classificação (outra coisa). Seguindo os [princípios do Clean Code (Código Limpo)](https://www.amazon.com.br/dp/B001GSTOAM/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1), uma função deve ser simples e sempre fazer apenas uma **única** coisa. O desafio que eu deixo pra você é de dividir essa função em duas, garantindo que cada função fará apenas uma única coisa. Tente aí, se não conseguir, não tem problema nenhum, só seguir os passos abaixo.

Depois vamos falar mais sobre isso, mas clean code (código limpo) foi um termo cunhado por Robert C. Martin. Robert, também conhecido como Uncle Bob, é uma grande personalidade da área de desenvolvimento de software, métodos ágeis e [software craftsmanship](https://manifesto.softwarecraftsmanship.org/). Seus ensinamentos se fazem presentes nas melhores equipes de engenharia de software do mundo.

Agora vamos para a prática.

1. No arquivo `pratica-15.js`, crie uma função que recebendo o peso (em kg) e altura (em metros) de uma pessoa como parâmetros, retorne o IMC de acordo com o seguinte cálculo: IMC = PESO / (ALTURA * ALTURA)
2. Teste a função de cálculo do IMC e veja se ela está funcionando corretamente 
3. Ainda no arquivo `pratica-14.js`, agora crie uma outra função que vai receber o IMC como parâmetro e vai retornar os seguintes textos:
- "Abaixo do Peso" -> IMC abaixo de 18.5
- "Peso Normal" -> IMC entre 18.5 e 25
- "Sobrepeso" -> IMC entre 25 e 30
- "Obesidade" -> IMC maior que 30
4. Agora utilize as duas funções para, dado o peso e altura de uma pessoa, informar com `console.log` qual é a classificação resultante.
5. Teste bastante, veja se está funcionando completamente, e depois faça o commit do seu código e suba ele no seu GitHub

## Enviando a sua tarefa no Discord

Para enviar a tarefa, basta copiar o link do seu repositório `bootcamp-full-stack-ituring` no GitHub e colar no formulário solicitado no [Discord do curso](https://discord.gg/FXage6t99U) no canal **#💪 │ tarefa-semana-2**.

Ao final de todas as etapas, o seu repositório deverá ter as seguintes pastas e arquivos:

```
📦 bootcamp-full-stack-ituring
 ┗ 📂 mes-1-logica-de-programacao
   ┗ 📂 tarefa-semana-1
     ┗ 📜 <arquivos da semana 1...>
   ┗ 📂 tarefa-semana-2
     ┣ 📜 resumo-semana-2.md
     ┣ 📜 pratica-1.js
     ┣ 📜 pratica-2.js
     ┣ 📜 pratica-3.js
     ┣ 📜 pratica-4.js
     ┣ 📜 pratica-5.js
     ┣ 📜 pratica-6.js
     ┣ 📜 pratica-7.js
     ┣ 📜 pratica-8.js
     ┣ 📜 pratica-9.js
     ┣ 📜 pratica-10.js    
     ┣ 📜 pratica-11.js   
     ┣ 📜 pratica-12.js   
     ┣ 📜 pratica-13.js  
     ┣ 📜 pratica-14.js  
     ┗ 📜 pratica-15.js
```
