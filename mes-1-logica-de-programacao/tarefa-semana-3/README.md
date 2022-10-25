# Tarefa - Semana 3 - Lógica de programação: iterando e processando

Saudações novamente, estudante do nosso bootcamp! Esta é a 3ª tarefa do nosso bootcamp, estamos quase finalizando o 1º mês. 🙏😁

Como você deve ter percebido, as tarefas estão ganhando corpo e ficando cada vez mais úteis para resolver problemas reais com programação. Além disso, tudo é muito complementar, então o que você aprendeu na 1ª semana, foi reforçado na 2ª e será ainda mais nesta 3ª semana.

## Sobre a tarefa

Vamos programar! Na tarefa da semana 3, teremos as seguintes etapas:

- **[Etapa 1:](#etapa-1-preparando-se-para-programar)** Preparando-se para programar
- **[Etapa 2:](#etapa-2-dominando-loops-e-iteração)** Dominando loops e iteração
- **[Etapa 3:](#etapa-3-iterando-e-processando-listas)** Iterando e processando listas
- **[Enviando sua tarefa no Discord](#enviando-a-sua-tarefa-no-discord)**

## Antes de começar, se aprofundando um pouco em ciência da computação

Como já falamos, o que você está aprendendo é a base de qualquer software no mundo. Para realmente resolver qualquer tipo de problema solucionável com programação, você precisa unicamente desses 3 elementos:
- Variáveis
- Condicionais
- Loops

Estes são os elementos primordiais da programação. Sem eles você não consegue fazer nada, pois são eles que concretizam a [máquina de Turing](https://pt.wikipedia.org/wiki/M%C3%A1quina_de_Turing) (sim, concebida pelo Alan Turing, o "big boss" da computação), também conhecida como máquina universal, capaz de resolver qualquer [problema lógico solucionável](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_computer_science) do mundo.

Mas e as funções? Bom, elas são importantíssimas para organização do código e ter coesão, escala e sustentabilidade no que você constrói, por isso nunca em hipótese nenhuma deixe de utilizá-las ao máximo, pois é impossível um time de engenharia de sucesso sobreviver sem o uso de funções e outras estruturas que nos ajudam a organizar o código.

Agora, voltando à questão da Máquina de Turing, quando um conjunto de regras (i.e, linguagem de programação) satisfaz o funcionamento de uma Máquina de Turing, ele é chamado de Turing-completo. Neste caso, variáveis, condicionais e loops é o suficiente para satisfazer isto. Depois, se tiver interesse, não deixe de conferir [este vídeo](https://www.youtube.com/watch?v=G4MvFT8TGII) do Fabio Akita que explica muito bem o que é uma Máquina de Turing. Isso é mais de curiosidade, caso queira se aprofundar nas raízes da ciência da computação.

### Como as variáveis que eu declaro se relacionam com a memória do computador?

Não sei se você já se fez essa pergunta, mas, sim, cada variável que você declara em um programa é um espaço de memória sendo consumida no seu computador. As memórias do computador são normalmente dividas em 3:
- *Memória do processador:* a mais rápida que existe, pois fica no coração do processador. Elas são chamadas de **registradores**. Ela **só funciona** com o computador ligado.
- *Memória primária:* é a famosa memória RAM. Ela é muito rápida, mas não como uma memória do processador. Quando te perguntam "quanto de memória tem o seu celular?", você responde "ele tem 2GB de memória RAM". É dessa memória aí. Assim como a memória do computador, ela também **só funciona** com o computador ligado.
- *Memória secundária:* esta é o famoso HD ou SSD. Não é tão rápida igual a memória RAM, mas é capaz de armazenar muuuuitos gigas de dados e consegue guardar os dados mesmo sem energia.

Mas então, qual memória meu computador utiliza quando eu declaro uma variável? Por padrão, elas são armazenadas na memória primária. Porém, o compilador, no nosso caso o NodeJS (lembre-se que você executa o código com `node nomedoarquivo`), pode colocar uma variável em um registrador do processador caso ela esteja sendo acessada com muita frequência, melhorando a performance. Ou seja, geralmente uma variável que está em uso direto e frequente fica armazenada nos registradores do processador, em contato direto com o núcleo de processamento da máquina.

Gostou desse papo? Se sim, envia um emoji de 👌 lá no canal da tarefa pra gente saber e assim trazer mais informações desse tipo. Quem sabe este assunto não vira uma aula extra pra você se aprofundar e entender melhor como funcionam os bits e bytes do computador? 🙂 

## Etapa 1: Preparando-se para programar

Como vimos na última tarefa:

- Você criou um repositório local: `bootcamp-full-stack-ituring`
- Criou um repositório remoto no GitHub
- Vinculou o seu repositório local ao repositório remoto
- Criou a solução para os exercícios
- Subiu as alterações para o repositório remoto

A sua organização após a finalização da tarefa da 2ª semana ficou algo semelhante a:

```
📦 bootcamp-full-stack-ituring
 ┗ 📂 mes-1-logica-de-programacao
   ┗ 📂 tarefa-semana-1
     ┗ 📜 <arquivos da semana 1...>
   ┗ 📂 tarefa-semana-2
     ┗ 📜 <arquivos da semana 2...>
```

A tarefa da semana 3 será entregue neste mesmo repositório. Vamos relembrar os principais comandos e criar a estrutura para a solução dos exercícios.

### Subindo o resumo da semana

1. Utilizando o terminal (no Windows, o "git bash"), navegue para a pasta que você está desenvolvendo as tarefas `bootcamp-full-stack-ituring`.
1. Navegue para a pasta `mes-1-logica-de-programacao` e crie o diretório com o nome de `tarefa-semana-3` e navegue para dentro dele
1. Dentro de `tarefa-semana-3`, crie um arquivo chamado `resumo-semana-3.md`
1. Continuando... agora abra o arquivo `resumo-semana-3.md` em um editor de texto (ou seja, no VSCODE)
1. Em seguida, copie e cole o conteúdo abaixo nesse arquivo no editor de texto. Salve a alteração

```markdown
## Resumo Semana 3 - Lógica de programação: iterando e processando

### O que são Loops ?
- Um loop é uma forma de repetir um código diversas vezes.
- Você pode pensar em alguns exemplos cotidianos como: o código de um inimigo em um jogo que deve repetir a ação de te atacar enquanto você tiver vida; ou enquanto houverem items no carrinho de compra, continuar somando os valores.

#### Há diferentes formas de fazer um loop: while, for e forEach.

##### while
while (condicao) { 
	//codigo a ser executado
	i += 1
}

Enquanto a condição for verdadeira, o código dentro do loop será executado. Nesses cenários é muito comum que condição seja algo do tipo `i < tamanhoDeUmaLista`. Sendo assim, é fundamental atualizar o valor de `i` a cada execução. Caso contrário, a condição `i < tamanhoDeUmaLista` será verdadeira para sempre e teremos um erro. Essa variável `i`, chamamos de contador.

while (i < tamanhoDeUmaLista) { 
	//codigo a ser executado
	i += 1 //atualizando o valor de n
}


##### for
for (let i = 0; i < tamanho_da_lista; i++) {
	//código a ser executado
	//Note que aqui não é necessário somar 1 ao i, o loop for já da conta disso.
}

O loop `for` funciona de forma muito semelhante ao loop `while`. Contudo, a variável contador já é automaticamente atualizada a cada repeitção.

##### for (usando of)
for (let item of lista) {
	//codigo a ser executado
}

Fazendo o loop dessa forma não precisamos nos preocupar com o contador. A variável `item` que declaramos passa por todos os elementos de uma lista, um de cada vez, e executará o código entre chaves.

### Listas

- Lista é uma estrutura de dados que agrupa vários dados.
- A lista pode conter dados de quaisquer tipo, inclusive outras listas.

Na prática, listas são muito comuns quando precisamos passar grupos de dados.

_Declaração_

Listas são declaradas assim como declaramos outras variáveis, com a diferença de que o grupo de valores deve ficar entre colchetes. Para declarar uma lista simples, defina como:

let listaDeNumeros = [0,1,2,3,4,5,6,7,8,9]

Para saber mais, acesse:

- [Array](https://www.w3schools.com/js/js_arrays.asp)
- [Métodos](https://www.w3schools.com/js/js_array_methods.asp)

### O que são os métodos nativos
Métodos nativos são funções que já vêm prontas no JavaScript para utilizarmos.
Existem muitas delas e é praticamente impossível decorar todas, de forma que é muito comum recorrermos constantemente a documentação para encontrar uma função que nos ajude a resolver um problema.

A utlização básica de um método nativo é sempre a mesma, juntamos o método ao objeto ou variável no qual queremos aplicá-lo com o uso de um `.`
<objeto ou variável>.<método>

<nome_da_lista>.length

É interessante perceber que quando tentamos usar um método em algo ao qual ele não pertence, um erro é retornado. Por exemplo, a propriedade `length` guarda o tamanhno de uma lista. Caso tente usar `.length` em algo que não é uma lista, como por exemplo um `number`, o JavaScript responde com um erro, ou com `undefined`.
> a = 5
> console.log(a.length)
returns: undefined

#### `.forEach()` 
É muito parecido com o loop `for..of`
Diferenças:
 - Ele é um método, veja que usamos ele da mesma forma que usamos `.length`, colocando um `.forEach` na nossa lista.
 - Esse método recebe uma função como parâmetro. Essa função será executada uma vez para cada item da lista.
 - Para acessarmos os elementos da lista, utilizamos um parâmetro dentro da função que está dentro do `.forEach`.
 
<nome_da_lista>.forEach((parametro) => { 
	//Esse código é executado uma vez para cada item da lista.
})

#### `.filter()`
Outro método que temos é o `.filter`. Da mesma forma, podemos utilizá-lo em listas colocando `.filter` nelas. Assim como o `.forEach` o `.filter`:
- recebe uma função, que será executada uma vez para cada item da lista
- Essa função recebida, tem um parametro para acessarmos o item da lista.
	
A diferença é que no filter, essa função deve retornar `true` ou `false`.

let listaFiltrada = <nome_da_lista>.filter((parametro) => {
	if (parametro) {
		return true
		//o item é adicionado na lista listaFiltrada 
	} else {
		return false
		//o item não é adicionado na lista listaFiltrada
	}	
})

#### `.map()`
O `.map` aplica um pedaço de código para cada item de uma lista. A diferença entre ele o `.forEach`, é que depois de aplicar essa código ao item, ele automaticamente coloca esse elemento modificado em uma nova lista. Ou seja, o retorno do map é uma nova lista modificada.

let listaModificada = <nome_da_lista>.map((parametro) => {
	//codigo para ser executado com o parametro
		return parametroModificado 
})
```

8. Confira se está tudo certo, em seguida faça o commit e suba esta alteração para o seu GitHub

### Criando a estrutura para a entrega

Antes de começar a programar, vamos organizar a pasta onde você está desenvolvendo as tarefas:

1. Vá para a pasta `tarefa-semana-3` e crie os seguintes arquivos (novamente, pelo terminal com o comando `touch nomedoarquivo` :D) `pratica-1.js` a até `pratica-12.js`. Muito comando para executar, certo? Veja a seguir um atalho
1. Execute `for i in {1..12}; do touch pratica-${i}.js; done` no seu terminal na pasta `tarefa-semana-3` e veja a mágica acontecer
1. Agora faça o commit e suba esta alteração para o seu GitHub

**Importante** A estrutura de pastas do seu repositório de tarefas `bootcamp-full-stack-ituring` deverá ficar da seguinte forma:

```
📦 bootcamp-full-stack-ituring
 ┗ 📂 mes-1-logica-de-programacao
   ┗ 📂 tarefa-semana-1
     ┗ 📜 <arquivos da semana 1...>
   ┗ 📂 tarefa-semana-2
     ┗ 📜 <arquivos da semana 2...>
   ┗ 📂 tarefa-semana-3
     ┣ 📜 resumo-semana-3.md
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
     ┗ 📜 pratica-12.js
```

Pronto, agora finalmente bora programar!

## Etapa 2: Dominando loops e iteração

Se existe algo ainda mais poderoso que as estruturas condicionais que você aprendeu na semana passada, são as estruturas de repetição.

Comandos de repetição, ou loops, fazem jus ao nome que damos para o núcleo "pensante" de qualquer computador: o processador ou microprocessador. São com as estruturas de repetição que nós programadores somos capazes de processar megas, gigas ou até terabytes de informações. Aí "o processador que lute!". 😅

Mas, com grandes poderes, vem grandes responsabilidades. As estruturas de repetição também exercem um papel fundamental na performance de aplicações. Quando mal projetadas, elas podem acarretar em um software lento. Mas na verdade não são elas as culpadas, mas sim a pessoa programadora que desenvolveu uma solução pouco performática.

Empresas como Google, Apple e outras big techs são bastante exigentes nas entrevistas sobre [análise e complexidade de algoritmos](https://pt.wikipedia.org/wiki/An%C3%A1lise_de_algoritmos) por conta disso. Para elas, é crucial que o software que elas projetam sejam o suprassumo da performance e qualidade, pois seus software estão atendendo a milhões e até bilhões de usuários.

"Nossa, então eu tenho que me preocupar com isso agora também?". Não! Esqueça performance neste início. Aliás, esqueça performance por um bom tempo. Foque no básico, no simples. Estamos te contando essa história, pois queremos te trazer a consciência de que isso um dia poderá ser importante na sua carreira. E também porque queremos que você seja uma pessoa programadora de muito sucesso.

Agora vamos para a primeira prática para você dominar loops. 👊

### Prática 1: Implementando meu primeiro comando de repetição

1. Certifique-se que você está na pasta `tarefa-semana-3` no terminal
2. Abra o arquivo `pratica-1.js` com o VSCODE ou o editor de código de sua preferência
3. Este problema nós trabalhamos em aula: criar uma tabuada. Crie uma função que receba apenas 1 argumento de entrada: o número que você utilizará para fazer a tabuada
5. Nossa tabuada deverá ir de 1 ao 10
6. Neste problema, você deverá utilizar o comando `while`
9. Dentro da função, exiba a tabuada no terminal. Por exemplo, se o valor de entrada da função for `9`, você deverá exibir o seguinte resultado na tela com `console.log()`:
```
Tabuada de 9
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45
9 x 6 = 54
9 x 7 = 63
9 x 8 = 72
9 x 9 = 81
9 x 10 = 90
```
8. Teste o seu código, veja se está funcionando, e depois faça o commit e suba ele no seu GitHub

### Prática 2: Exiba os ímpares

Crie uma função no arquivo `pratica-2.js` que recebendo como argumento um número inteiro maior que zero, exiba com `console.log()` todos os números ímpares até chegar neste número. Veja um exemplo abaixo.

**Dado de entrada da função:**
```javascript
17
```
**Valores exibidos pela função:**
```javascript
1
3
5
7
9
11
13
15
17
```

### Prática 3: É um número primo?

Números primos são aqueles que são divisíveis apenas pelo número 1 e por ele mesmo. Os números primos cumprem um papel essencial na área da criptografia, pois é [por meio deles que conseguimos hoje criptografar informações](https://pt.stackoverflow.com/questions/66513/como-n%C3%BAmeros-primos-s%C3%A3o-importantes-na-criptografia).

Agora é com você! Crie uma função no arquivo `pratica-3.js` que recebendo como argumento um número inteiro maior que zero, retorne `true` se este número for primo e `false` se ele não for um número primo. Veja abaixo alguns exemplos.

**Dados de entrada da função:**
```javascript
17
2
7
8
5
23
15
1500450271
```
**Chamando a função:**
```javascript
suaFuncao(17)
suaFuncao(2)
suaFuncao(7)
suaFuncao(8)
suaFuncao(5)
suaFuncao(23)
suaFuncao(15)
suaFuncao(1500450271)
```
**Retorno (ou seja, utilize o comando `return`) esperado de cada uma das chamadas:**
```
true
true
true
false
true
true
false
true
```
Teste o seu código, veja se está funcionando, e depois faça o commit e suba ele no seu GitHub.

**Dica se estiver com dificuldade:** se um número primo é divisível apenas por 1 e por ele mesmo, então basta verificar se algum número entre `1` e `n` são divisíveis por `n`, sendo `n` o número que você quer saber se é primo. Como verificar se é divisível? Se o resto da divisão for zero, significa que ele é divisível. Ou seja, utilize uma estrutura de repetição que vai verificando cada um dos números entre `1` e `n`. Se encontrar algum, então você pode retornar `true` imediatamente. Se não encontrar nenhum, então deverá retornar `false` após o loop.

## Etapa 3: Iterando e processando listas

Você está assistindo sua série favorita na Netflix, mas ficou sabendo de uma outra série que estreou recentemente e quer salvar para assistir mais tarde. Você adiciona a série pretendida em *Minha lista*. Já parou para pensar o quanto utilizamos listas em nosso dia-a-dia? Além desse exemplo, você consegue pensar em mais dois para citar como exemplo? Lista de tarefas, lista de compras, etc.

Resolvemos problemas com código. Códigos capazes de gerar, processar e devolver informações relevantes para seus usuários. Nessa seção, vamos criar exercícios com o intuito de declarar, criar e percorrer listas, exercitando e dominando comandos de repetição.

Agora vamos aprender a processar listas!

### Prática 4: Minha lista de seriados

Crie uma função no arquivo `pratica-4.js` que recebendo como argumento uma lista de seriados quaiquer, exiba na tela cada um dos seriados com o índice de cada um na lista. Para exibir, utilize o `console.log()` dentro da função.

**Dado de entrada da função:**
```javascript
["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
```
**Chamando a função:**
```javascript
suaFuncao(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"])
```
**Valor exibido pela função:**
```
[0] Breaking Bad
[1] Game of Thrones
[2] Stranger Things
[3] Chernobyl
[4] Dexter
[5] The Last Dance
[6] This is Us
```

Teste o seu código, veja se está funcionando, e depois faça o commit e suba ele no seu GitHub.

### Prática 5: Procurando um seriado especial

Sua amiga quer assistir um seriado, mas ela queria saber se o seriado está na sua lista de favoritos.

Para isso, vamos aprender a fazer buscas. Buscar um elemento é muito comum em sistemas de software, tanto aplicativos de celular, quanto páginas e aplicações web.

Crie uma função no arquivo `pratica-5.js` que recebendo como argumento uma lista de seriados e o seriado que esteja querendo pesquisar, retorne a posição que se encontra o seriado. Caso não tenha encontrado o seriado, retorne `undefined`. Veja um exemplo abaixo.

#### Exemplo 1
**Dados de entrada da função:**

Lista:
```javascript
["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
```
Elemento a ser buscado:
```javascript
"Dexter"
```
**Chamando a função:**
```javascript
suaFuncao(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Dexter")
```
**Retorno (ou seja, utilize o comando `return`) esperado da função:**
```
4
```

#### Exemplo 2
**Dados de entrada da função:**

Lista:
```javascript
["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
```
Elemento a ser buscado:
```javascript
"Friends"
```
**Chamando a função:**
```javascript
suaFuncao(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Friends")
```
**Retorno (ou seja, utilize o comando `return`) esperado da função:**
```
undefined
```

Teste o seu código, veja se está funcionando, e depois faça o commit e suba ele no seu GitHub.

### Prática 6: Melhorando o processo de busca

Aproveitando o código da Prática 5, crie uma função no arquivo `pratica-6.js` que recebendo como argumento uma lista de seriados e um termo de pesquisa, retorne uma lista com todos os seriados que possuem aquele termo. Veja o exemplo abaixo.

**Dados de entrada da função:**

Lista:
```javascript
["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
```
Termo a ser buscado:
```javascript
"Th"
```
**Chamando a função:**
```javascript
suaFuncao(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Th")
```
**Retorno (ou seja, utilize o comando `return`) esperado da função:**
```javascript
["Game of Thrones", "Stranger Things", "The Last Dance", "This is Us"]
```

Teste o seu código, veja se está funcionando de acordo com o exemplo de entrada e saída, e depois faça o commit e suba ele no seu GitHub.

**Dica:** pesquise o termo `verificar se string contém outra string javascript` no Google e aprenda a utilizar o método de string que vai te ajudar a resolver este problema. Se não conseguir encontrar ou se tiver dificuldade, fale com os mentores no nosso Discord.

### Prática 7: Calculando o saldo final

Crie uma função no arquivo `pratica-7.js` que recebendo como argumento uma lista de depósitos e retiradas como no exemplo abaixo, exiba o saldo final da conta via `console.log()` dentro da função.

**Dado de entrada da função:**
```javascript
[100, -20, -30, 10, -7, -21, -5]
```
**Saída esperada:**
```
O saldo final de sua conta foi positivo no valor de R$ 27.
```

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

### Prática 8: Calculando um extrato do banco simples

Aproveite o seu código da Prática 7 e crie uma função no arquivo `pratica-8.js` que recebendo uma lista de depósitos e retiradas, exiba o resumo do extrato mensal de sua conta com as seguintes informações no exemplo abaixo. Para exibir, utilize o `console.log()` dentro da função.

**Dado de entrada da função:**
```javascript
[100, -20, -30, 10, -7, -21, -5]
```
**Saída esperada:**
```
O valor total depositado foi de: R$ 110
O valor total retirado foi de: R$ 83
O saldo final de sua conta foi positivo no valor de R$ 27
```

**Sugestão:** caso sinta necessidade, fique à vontade de criar funções auxiliares para resolver este problema

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

#### Veja essas dicas se estiver com dificuldade:
**Dica 1 -** crie 2 variáveis:
- uma para ir armazenando os valores positivos (depósitos) no loop
- uma outra para ir armazenando os valores negativos (retiradas) no loop
- o saldo final basta somar o valor resultante dessas 2 variáveis após o término do loop

**Dica 2 -** use 1 comando `if-elfe` para:
- verificar se o número atual da lista é positivo e com isso atualizar a variável de depósito
- e o outro para verificar se o número atual da lista é negativo e com isso atualizar a variável de retirada

### Prática 9: Calculando um extrato do banco completo

Aproveite o seu código da Prática 8 e crie uma função no arquivo `pratica-9.js` que recebendo uma lista de depósitos e retiradas, exiba um resumo completo do extrato mensal de sua conta com as seguintes informações no exemplo abaixo. Para exibir, utilize o `console.log()` dentro da função.

**Dado de entrada da função:**
```javascript
[100, -20, -30, 10, -7, -21, -5]
```
**Saída esperada:**
```
Total de depósitos: 2
Total de retiradas: 5
O valor total depositado foi de: R$ 110
O valor total retirado foi de: R$ 83
O saldo final de sua conta foi positivo no valor de R$ 27
```

**Sugestão:** caso sinta necessidade, fique à vontade de criar funções auxiliares para resolver este problema.

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

#### Veja essas dicas se estiver com dificuldade:
**Dica 1 -** crie 4 variáveis:
- uma para ir contabilizando a quantidade de depósitos no loop
- uma outra para ir contabilizando a quantidade de retiradas no loop
- uma para ir armazenando os valores positivos (depósitos) no loop
- uma outra para ir armazenando os valores negativos (retiradas) no loop
- o saldo final basta somar o valor resultante dessas 2 variáveis anteriores após o término do loop

**Dica 2 -** use 1 comando `if-elfe` para:
- verificar se o número atual da lista é positivo e com isso atualizar a variável de cálculo do total de depósitos e da quantidade de depósitos
- e o outro para verificar se o número atual da lista é negativo e com isso atualizar a variável de cálculo do total retiradas e da quantidade de retiradas 

### Prática 10: Registrando a quantidade de votos

Em uma contagem de votos para os preferidos para ganhar a próxima Copa do Mundo de futebol, foi feita uma votação por meio de **códigos** que obedecem as seguintes regras:

- Código 1: Brasil
- Código 2: Argentina
- Código 3: Espanha
- Código 4: Portugal

Os votos foram computados e registrados em uma lista.

Agora eles precisam de uma pessoa que saiba programar para computar o resultado. Ou seja, de você!

Por isso, crie uma função no arquivo `pratica-10.js` que recebendo como argumento uma lista de votos, exiba na tela quantos votos recebeu cada país com base no código acima. Para exibir, utilize o `console.log()` dentro da função.

**Dados de entrada da função:**
```javascript
[1, 1, 1, 4, 4, 2, 3, 2]
```
**Chamando a função:**
```javascript
suaFuncao([1, 1, 1, 4, 4, 2, 3, 2])
```
**Valor exibido pela função:**
```
Brasil: 3 voto(s)
Argentina: 2 voto(s)
Espanha: 1 voto(s)
Portugal: 2 voto(s)

Resultado:
Brasil é o preferido para ganhar a Copa do Mundo!
```

**Sugestão:** caso sinta necessidade, fique à vontade de criar funções auxiliares para resolver este problema

Teste o seu código, veja se está funcionando de acordo com o exemplo de entrada e saída, e depois faça o commit e suba ele no seu GitHub.

### Prática 11: Ordenação

Ordene uma sequência de números não ordenados em ordem crescente. Tão comum no nosso cotidiano, parece algo simples, mas definitivamente não é. O algoritmo de ordenação mais rápido e utilizado no mundo é o [Quicksort](https://pt.wikipedia.org/wiki/Quicksort). Ele foi descoberto em 1960 por [Charles Hoare](https://pt.wikipedia.org/wiki/Charles_Antony_Richard_Hoare), um cientista da computação britânico.

Algoritmos de ordenação estão presentes em milhares de aplicações ao redor do mundo. Um exemplo bastante comum é o "ordene os produtos por preço", como vemos em sites de compras.

Agora é a sua vez. Não se preocupe com performance. Tente escrever um algoritmo próprio de ordenação, ou seja, uma solução de ordenação que você mesmo implementou. Não importa se ele não estiver eficiente. Além disso, não tente replicar o Quicksort neste primeiro momento, faça o seu algoritmo de ordenação. Esta prática será desafiadora, mas ela **não é opcional**. Não tem problema nenhum se não conseguir resolver. Qualquer coisa, vamos quebrar a cabeça juntos lá no nosso Discord.

Crie uma função no arquivo `pratica-11.js` que recebe como argumento uma lista de números que representam a contagem de visualizações de vídeos de um canal no Youtube. Retorne a lista com os números ordem crescente. **Tente escrever um algoritmo de ordenação para resolver este problema.** Se não conseguir de forma alguma, não se preocupe, pois é desafiante mesmo. Neste caso, tente utilizar o [método de ordenação que já existe](https://www.w3schools.com/jsref/jsref_sort.asp) dentro da linguagem JavaScript.

**Dado de entrada da função:**
```javascript
[10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824]
```
**Chamando a função:**
```javascript
suaFuncao([10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824])
```
**Retorno (ou seja, utilize o comando `return`) esperado da função:**
```javascript
[10, 18, 32, 45, 45, 56, 98, 121, 123, 232, 1392824]
```

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

### Prática 12: Dividindo em grupos

Algo muito comum em trabalhos de escola é dividir a turma em grupos. Este método também é utilizado na computação, mais especificamente na hora de compactar arquivos para deixá-los com um tamanho menor. Não é o propósito aprender a compactar arquivos aqui, por isso vamos focar no 1º exemplo e dividir uma lista de pessoas em grupos.

Crie uma função no arquivo `pratica-12.js` que recebe como argumento uma lista de pessoas e exibe na tela os grupos formados com 2 pessoas. Utilize o `console.log()` dentro da função para exibir os grupos. Se faltar alguém, acrescente-a no último grupo. Veja abaixo um exemplo.

**Dado de entrada da função:**
```javascript
["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"]
```
**Chamando a função:**
```javascript
suaFuncao(["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"])
```
**Valor exibido pela função:**
```
Grupo 1: Anderson Luz, Fabio Vechia 
Grupo 2: Claudia Lopes, Rafael Alves
Grupo 3: Maria Mansano, Jairo Ferreira, Vitor Ribeiro
```

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

## Enviando a sua tarefa no Discord

Para enviar a tarefa, basta copiar o link do seu repositório `bootcamp-full-stack-ituring` no GitHub e colar no formulário solicitado no [Discord do curso](https://discord.gg/FXage6t99U) no canal **#💪 │ tarefa-semana-3**.

Ao final de todas as etapas, o seu repositório deverá ter as seguintes pastas e arquivos:

```
📦 bootcamp-full-stack-ituring
 ┗ 📂 mes-1-logica-de-programacao
   ┗ 📂 tarefa-semana-1
     ┗ 📜 <arquivos da semana 1...>
   ┗ 📂 tarefa-semana-2
     ┗ 📜 <arquivos da semana 2...>
   ┗ 📂 tarefa-semana-3
     ┣ 📜 resumo-semana-3.md
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
     ┗ 📜 pratica-12.js
```
