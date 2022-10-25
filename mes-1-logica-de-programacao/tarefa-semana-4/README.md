# Tarefa - Semana 4 - Lógica de programação: construindo soluções modernas (objetos e métodos)

Estamos quase lá, estudante do nosso bootcamp! Esta é a última tarefa do 1º mês do nosso bootcamp. 🙌

Nas tarefas anteriores, você aprendeu a trabalhar com variáveis, funções, estruturas condicionais, loops e listas. Como falamos, para você realmente resolver qualquer tipo de problema solucionável com programação, é necessário unicamente desses 3 elementos:
- Variáveis
- Condicionais
- Loops

Porém, conforme você começar a desenvolver soluções maiores, você vai perceber que precisará trazer mais recursos para que suas soluções estejam sempre organizadas, fáceis de ler e de aplicar melhorias. O uso de funções é uma forma de melhorar isso, mas com objetos e métodos, alcançamos um outro patamar em termos de organização do código para o domínio do problema que queremos solucionar.

Portanto, vamos trabalhar na prática o uso e criação de objetos e métodos!

## Sobre a tarefa

Na tarefa da semana 4, teremos as seguintes etapas:

- **[Etapa 1:](#etapa-1-preparando-se-para-programar)** Preparando-se para programar
- **[Etapa 2:](#etapa-2-avançando-em-loops-com-foreach-filter-e-map)** Avançando em loops com `.forEach`, `.filter` e `.map`
- **[Etapa 3:](#etapa-3-iterando-e-processando-listas-com-objetos)** Iterando e processando listas com objetos
- **[Enviando sua tarefa no Discord](#enviando-a-sua-tarefa-no-discord)**

**Importante 2:** realize a etapa 3 apenas depois da 2ª aula da semana.

## Etapa 1: Preparando-se para programar

A sua organização após a finalização da tarefa da 3ª semana ficou algo semelhante a:

```
📦 bootcamp-full-stack-ituring
 ┗ 📂 mes-1-logica-de-programacao
   ┗ 📂 tarefa-semana-1
     ┗ 📜 <arquivos da semana 1...>
   ┗ 📂 tarefa-semana-2
     ┗ 📜 <arquivos da semana 2...>
   ┗ 📂 tarefa-semana-3
     ┗ 📜 <arquivos da semana 3...>
```

A tarefa da semana 4 será entregue neste mesmo repositório. Vamos criar a estrutura para a solução dos exercícios.

### Subindo o resumo da semana

1. Utilizando o terminal (no Windows, o "git bash"), navegue para a pasta que você está desenvolvendo as tarefas `bootcamp-full-stack-ituring`.
1. Navegue para a pasta `mes-1-logica-de-programacao` e crie o diretório com o nome de `tarefa-semana-4` e navegue para dentro dele
1. Dentro de `tarefa-semana-4`, crie um arquivo chamado `resumo-semana-4.md`
1. Agora abra o arquivo `resumo-semana-4.md` em um editor de texto
1. Copie e cole o conteúdo abaixo nesse arquivo no editor de texto. Salve a alteração

~~~
## Resumo Semana 4 - Lógica de programação: construindo soluções modernas (objetos e métodos)

### O que são Objetos ?
- É uma entidade independente, com propriedades e valores
- Tem propriedades ou métodos associadas a ele, que definem suas características e comportamento
- A sua estrutura é consistida em `chave: valor`.

### Criando um objeto

Você pode definir as propriedades do objeto, atribuindo um valor a cada chave. Veja este exemplo:

```javascript
let meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;
```

Você também pode definir objetos com a seguinte sintaxe:

```javascript
let meuCarro = {
  fabricacao: "Ford",
  modelo: "Mustang",
  ano: 1969
}
```

#### Acessando as propriedades

```javascript
meuCarro.fabricacao // Ford
```

Você também pode acessar desta maneira:

```javascript
meuCarro["fabricacao"] // Ford
```

Caso você acesse uma propriedade que não existe, seu retorno será `undefined`.

```javascript
meuCarro.minhaPropriedade // undefined
```

#### Criando e chamando métodos

Você também pode criar métodos dentro de objetos. Olha este exemplo:

```javascript
let meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;
meuCarro.mostrarDescricao = function() {
  const descricaoDoCarro = `Carro ${this.fabricacao}, modelo ${this.modelo} e ano ${this.ano}`
  console.log(descricaoDoCarro)
}
```

Chamando o método:
```javascript
meuCarro.mostrarDescricao()
```

Veja que **dentro de qualquer método** que esteja dentro de um objeto (no nosso exemplo, o método`mostrarDescricao()`, para acessar as propriedades do objeto, usamos a palavra reservada `this`. Se utilizar `meuCarro.fabricacao`, por exemplo, vai funcionar, mas e se você resolver mudar o nome da variável? Por isso, **sempre** utilize `this` para acessar as propriedades do objeto.

Agora, criando o método daquela outra maneira:

```javascript
let meuCarro = {
  fabricacao: "Ford",
  modelo: "Mustang",
  ano: 1969,
  mostrarDescricao: function() {
    const descricaoDoCarro = `Carro ${this.fabricacao}, modelo ${this.modelo} e ano ${this.ano}`
    console.log(descricaoDoCarro)
  }
}
```

A chamada do método é da mesma maneira:
```javascript
meuCarro.mostrarDescricao()
```

### Replicando objetos

Ok! Vamos para um novo patamar de organização de solução do código? Veja que essa estrutura dos objetos é perfeitamente replicável, concorda? Ou seja, podemos criar vários outros carros com vários outros valores quanto a fabricação, modelo e ano. Mas imagina ter que criar vários objetos manualmente com essas propriedades? Será que tem um jeito da gente deixar esse "esqueleto" de objeto replicável, de forma que a gente só informa os valores de `fabricacao`, `modelo` e `ano` e assim criamos mais um objeto? Sim, é possível! Com construtores de objetos. Veja como:
```javascript
function Carro(fabricacao, modelo, ano)
  this.fabricacao = fabricacao
  this.modelo = modelo
  this.ano = ano

  this.mostrarDescricao = function() {
    const descricaoDoCarro = `Carro ${this.fabricacao}, modelo ${this.modelo} e ano ${this.ano}`
    console.log(descricaoDoCarro)
  }
}
```

Algumas considerações e regras importantes:
- A função `Carro` é justamente esse "esqueleto" replicável de um objeto
- Veja que **usamos a palavra reservada `this`** para acessar as propriedades! Isso é importantíssimo, nunca se esqueça de usar o `this` quando quiser acessar algo de dentro de um objeto.

Ok, mas então como que eu crio um novo objeto a partir desse "esqueleto"? Da seguinte maneira:
```javascript
let meuCarro = new Carro("Ford", "Mustang", 1969)
```

Se dermos um `console.log()` em `meuCarro`, ele vai mostrar justamente a estrutura de um objeto criado! Quando criamos um objeto de um "esqueleto", o termo técnico para isso é **instanciar um objeto**. Ou seja, quando fazemos
```javascript
let meuCarro = new Carro("Ford", "Mustang", 1969)
```

Estamos **instanciando** um objeto de `Carro`. No caso, instanciamos o objeto `meuCarro` do esqueleto de objetos `Carro`. Podemos considerar então que `Carro` é meio que um tipo de dado? Sim! Da mesma forma que podemos atribuir números e palavras a variáveis, com este código nós também conseguimos atribuir carros a variáveis. :)
~~~

8. Confira se está tudo certo, em seguida faça o commit e suba esta alteração para o seu GitHub

### Criando a estrutura para a entrega

Antes de começar a programar, vamos organizar a pasta onde você está desenvolvendo as tarefas:

1. Vá para a pasta `tarefa-semana-4` e crie os seguintes arquivos (novamente, pelo terminal com o comando `touch nomedoarquivo` :D) `pratica-1.js` a até `pratica-16.js`. Muito comando para executar, certo? Veja a seguir um atalho
1. Execute `for i in {1..16}; do touch pratica-${i}.js; done` no seu terminal na pasta `tarefa-semana-4` e veja a mágica acontecer
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
     ┗ 📜 <arquivos da semana 3...>
   ┗ 📂 tarefa-semana-4
     ┣ 📜 resumo-semana-4.md
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
     ┣ 📜 pratica-15.js
     ┗ 📜 pratica-16.js
```

Pronto, agora finalmente bora programar!

## Etapa 2: Avançando em loops com `.forEach`, `.filter` e `.map`

Como vimos em aula, os métodos `.forEach`, `.filter` e `.map` presentes nos objetos de tipo lista (ou array/vetor) são recursos poderosos para percorrer a lista e efetuar operações.

Também mostramos como funciona essa tal de função de *callback*, ou seja, uma função que passamos como parâmetro. Mais pra frente o entendimento de funções de *callback* será melhor solidificado, mas, por enquanto, o que você precisa saber é que:
- Para percorrer uma lista e não retornar nenhum valor, utilizamos o `.forEach()`:
```javascript
let listaExemplo = [1, 5, 2]
listaExemplo.forEach(function(item) {
  console.log(`Valor: ${item} | Tipo: ${typeof(item)}`)
})
```
- Já quando queremos retornar uma nova lista, utilizamos `.map()`:
```javascript
let listaExemplo = [1, 5, 2]
let novaLista = listaExemplo.map(function(item) {
  return item + 1
})
console.log(novaLista) // exibe [2, 6, 3, 10]
```
- Por fim, quando queremos filtrar uma lista, ou seja, retornar uma nova lista, mas filtrada por alguma condição, utilizamos o `.filter()`:
```javascript
let listaExemplo = [1, 5, 2]
let novaLista = listaExemplo.filter(function(item) {
  const ehPar = item % 2 == 0
  return ehPar
})
console.log(novaLista) // exibe [2]
```

Lembrando que o `.filter()` funciona da seguinte maneira (leia como se fosse o método `.filter()` se explicando):
- se a função de *callback* me retornar `true`, eu coloco o valor atual na nova lista
- agora se a função de **callback** me retornar `false`, então não coloco este valor atual e percorro o próximo valor na lista

Ou seja, no código de exemplo do `.filter()`, o computador executou as seguintes ações :
```javascript
/*
AÇÃO 1: vou declarar uma variável chamada listaExemplo e colocar a lista [1, 5, 2, 9] dentro dela
Memória do computador:
• Variável 1: listaExemplo com o valor [1, 5, 2, 9]

AÇÃO 2: vou declarar uma outra variável chamada novaLista e colocar nela o valor que foi retornado pelo método filter
Memória do computador:
• Variável 1: listaExemplo com o valor [1, 5, 2, 9]
• Variável 2: novaLista sem valor por enquanto

AÇÃO 3: agora vou executar o método filter, mas antes preciso colocar na memória a função de callback pra ser chamada durante o método filter
Memória do computador:
• Variável 1: listaExemplo com o valor [1, 5, 2, 9]
• Variável 2: novaLista sem valor por enquanto
• Variável 3: comandos da função de callback

AÇÃO 4: [executando o método filter - 1ª iteração]
• primeiro elemento é 1, vou colocar o resultado de 1 % 2 == 0 na variável ehPar
• no caso ehPar será false
• agora vou retornar ehPar
• método filter não vai colocar elemento na nova lista
• vou pro próximo elemento da lista
Memória do computador:
• Variável 1: listaExemplo com o valor [1, 5, 2, 9]
• Variável 2: novaLista sem valor por enquanto
• Variável 3: comandos da função de callback
• Variável 4: variável item com o valor 1
• Variável 5: variável 'xyz' dentro do método filter com o valor []

AÇÃO 5: [executando o método filter - 2ª iteração]
• segundo elemento da lista é 5, colocando 5 % 2 == 0 na variável ehPar
• no caso ehPar será false
• agora vou retornar ehPar
• método filter não vai colocar elemento na nova lista
• vou pro próximo elemento da lista
Memória do computador:
• Variável 1: listaExemplo com o valor [1, 5, 2, 9]
• Variável 2: novaLista sem valor por enquanto
• Variável 3: função de callback
• Variável 4: variável item com o valor 5
• Variável 5: variável 'xyz' dentro do método filter com o valor []

AÇÃO 6: [executando o método filter - 3ª iteração]
• terceiro elemento da lista é 2, colocando 2 % 2 == 0 na variável ehPar
• no caso ehPar será true
• agora vou retornar ehPar
• método filter dessa vez vai colocar elemento na nova lista! :)
• vou pro próximo elemento da lista
• opa! Não tem mais próximo elemento da lista. Encerro o método filter aqui.
Memória do computador:
• Variável 1: listaExemplo com o valor [1, 5, 2, 9]
• Variável 2: novaLista sem valor por enquanto
• Variável 3: função de callback
• Variável 4: variável item com o valor 2
• Variável 5: variável 'xyz' dentro do método filter com o valor [2]

AÇÃO 7: agora sim, vou retornar o valor da variável 'xyz' que está dentro do método filter e colocar na variável novaLista
Memória do computador:
• Variável 1: listaExemplo com o valor [1, 5, 2, 9]
• Variável 2: novaLista com o valor [2]

```
Agora vamos para a primeira prática para você começar a dominar estes métodos. 👊

### Prática 1: Utilizando o método `.forEach()` (parte 1)

Copie e cole em `pratica-1.js` o código do arquivo `pratica-4.js` da pasta `tarefa-semana-3`. Vamos utilizar o exercício da `Prática 4: Minha lista de seriados` da semana anterior.

Relembrando o problema: "Crie uma função que recebendo como argumento uma lista de seriados quaiquer, exiba na tela cada um dos seriados com o índice de cada um na lista".

Agora, altere o código da solução e utilize o método `.forEach`.

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

Você deve estar se perguntando: "por que o `.forEach()` e não o `.filter()` ou o `.map()`?". Pois só queremos exibir os valores na tela, não queremos retornar e nem filtrar nada.

**Dica:** você também deve estar se perguntando: "como que eu pego o índice da lista com o `.forEach()`? Que eu saiba só dá pra pegar o item.". Então, se você fizer assim:
```javascript
listaExemplo.forEach(function(var1, var2) {
    // comandos aqui
})
```
`var1` receberá o valor atual da lista e `var2` receberá o índice do valor atual da lista! Mas, neste caso, qual o nome de variável mais adequado? Sim, `item` e `indice` (ou `i`):
```javascript
listaExemplo.forEach(function(item, indice) {
    // comandos aqui
})
```
Concorda?

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

### Prática 2: Utilizando o método `.forEach()` (parte 2)

Copie e cole em `pratica-2.js` o código do arquivo `pratica-5.js` da pasta `tarefa-semana-3`. Vamos utilizar o exercício da `Prática 5: Procurando um seriado especial` da semana anterior.

Relembrando o problema: "Crie uma função que recebendo como argumento uma lista de seriados e o seriado que esteja querendo pesquisar, retorne a posição que se encontra o seriado. Caso não tenha encontrado o seriado, retorne `undefined`.".

Agora, altere o código da solução e utilize o método `.forEach`.

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
**Retorno esperado da função:**
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
**Retorno esperado da função:**
```
undefined
```

Você deve estar se perguntando: "por que o `.forEach()` e não o `.filter()`, ou o `.map()`?". Pois o retorno da função deve ser o índice de onde está o elemento, e não o elemento em si. `.map()` **sempre** retorna a lista manipulada e `.filter()` **sempre** retorna a lista filtrada. Ou seja, não tem como retornar o índice de onde está o elemento com `.map()` e `.filter()`.

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

### Prática 3: Utilizando o método `.filter()`

Copie e cole em `pratica-3.js` o código do arquivo `pratica-6.js` da pasta `tarefa-semana-3`. Vamos utilizar o exercício da `Prática 6: Melhorando o processo de busca` da semana anterior.

Relembrando o problema: "Recebendo como argumento uma lista de seriados e um termo de pesquisa, retorne uma lista com todos os seriados que possuem aquele termo. Veja o exemplo abaixo.".

Agora, altere o código da solução e utilize o método `.filter`.

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
**Retorno esperado da função:**
```javascript
["Game of Thrones", "Stranger Things", "The Last Dance", "This is Us"]
```

Teste o seu código, veja se está funcionando de acordo com o exemplo de entrada e saída, e depois faça o commit e suba ele no seu GitHub.

### Prática 4: Raiz quadrada dos elementos de uma lista.

No arquivo `pratica-4.js` escreva uma função que recebendo uma lista com valores do tipo `number`, retorne uma lista com a raiz quadrada de cada um dos elementos. Qual método de iteração é o mais apropriado para este problema? `.forEach()`, `.map()` ou `.filter()`? Utilize o método mais apropriado para este problema.

**Dados de entrada da função:**
```javascript
[4, 9, 16, 25, 36, 49]
```
**Chamando a função:**
```javascript
suaFuncao([4, 9, 16, 25, 36, 49])
```
**Retorno esperado da função:**
```javascript
[2, 3, 4, 5, 6, 7]
```

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

**Dica:** pesquise o termo `raiz quadrada javascript` no Google para descobrir como tirar a raiz quadrada de um número com JavaScript.

**Desafio:** você pode fazer com que esta função tenha apenas uma única linha de comando:
```javascript
suaFuncao(lista) {
  // um único comando aqui
}
```
Se quiser resolver este desafio, tente aí! Qualquer coisa, chame os mentores lá no nosso Discord para te dar algumas dicas.

### Prática 5: Ordenando uma lista de números

Bom, na tarefa da semana passada, você desenvolveu um algoritmo de ordenação! Agora você irá usar o algoritmo de ordenação padrão do JavaScript. Escreva uma função no arquivo `pratica-5.js` que, dado uma lista de números, retorne a lista em ordem crescente de valor.

**Dados de entrada da função:**
```javascript
[4, 9, 7, 1, 8, 12]
```
**Chamando a função:**
```javascript
suaFuncao([4, 9, 7, 1, 8, 12])
```
**Retorno esperado da função:**
```javascript
[1, 4, 7, 8, 9, 12]
```

Para isso, utilize o método `.sort()` de JavaScript. Pesquise o termo `ordenar array javascript` no Google e descubra como utilizar este método. Se tiver dificuldades, fale com a gente no Discord que nós te ajudamos.

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

**Importante:** realize a etapa 3 apenas depois da 2ª aula da semana.

## Etapa 3: Iterando e processando listas com objetos

Como já falamos anteriormente, com objetos nós alcançamos um novo patamar no que tange organização do código e capacidade de resolver problemas maiores e mais complexos.

Em ciência da computação, tipos de dados que armazenam **mais do que um único valor** nós chamamos de **estruturas de dados**. String é um exemplo de uma estrutura de dados, pois ela armazena vários valores: um conjunto de caracteres. Listas também são um outro exemplo de estrutura de dados. Além de listas e strings, no JavaScript, também temos os objetos! Como já falamos, objetos são uma coleção de pares de chaves e valores. 

Utilizamos as chaves para acessar os valores, como neste exemplo:
```javascript
let exemploDeObjeto = {
  linguagem: "JavaScript" // chave: linguagem | valor: "JavaScript"
  anoCriacao: 1995 // chave: anoCriacao | valor: 1995
}
console.log(exemploDeObjeto.linguagem) // Exibe "JavaScript"
console.log(exemploDeObjeto["linguagem"]) // Exibe "JavaScript
```

Com objetos, nós conseguimos estruturar nosso código de uma maneira muito melhor e mais organizada, além de permitir construir e permitir que esses objetos interajam entre si. Além disso, o nosso código passa a ter uma semântica muito mais alinhada com o domínio do problema, já que conseguimos agrupar valores que representam algo. Por exemplo, um objeto que representa um carro pode ter as seguintes chaves:
- marca
- modelo
- ano
- potencia
- cor

Enfim, as possibilidades são imensas para implementar soluções com objetos. Vamos aprender na prática a trabalhar com objetos? Bora programar.

### Prática 6: Criando nosso primeiro objeto

Os objetos representam algo do nosso cotidiano e é, juntamente a outros itens apresentados até agora, pilares fundamentais para a manipulação de dados e representação dessas informações que traduzem do nosso cotidiano para linguagens de programação.

Seguindo a nossa série de filmes e seriados, vamos criar a nossa lista customizada, acrescentando itens que representem filmes de cinema para o nosso código. [No IMDb](https://www.imdb.com/), você pode encontrar notas, títulos, tempo de duração para o filme e recomendações.

Para essa prática, crie uma função em `pratica-6.js` que recebe como argumento um objeto que tem informações de um filme e exibe o nome do filme o seu tempo de duração. O objeto deverá ter as seguintes propriedades:
- Titulo (string)
- Nota de avaliação (number)
- Duração (number)
- Ano de publicação (number)
- Categoria (string)

**Exemplo de dado de entrada da função:**
```
Objeto que tem as seguintes informações de um filme:
- Título: "Estrelas Além do Tempo"
- Nota de avaliação: 7.8
- Duração: 127
- Ano de publicação: 2016
- Categoria: "Drama"
```

**Chamando a função:**
```javascript
suaFuncao(seuObjetoAqui)
```

**Valor exibido pela função:**
```
O filme Estrelas Além do Tempo que estreou em 2016 tem a avaliação de 7.8 pelo IMDb.
```

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

### Prática 7: Descobrindo as chaves do objeto

Uma prática comum quando trabalhamos com objetos é listar as propriedades que um determinado objeto possui.

Crie uma função em `pratica-7.js` que receba um objeto como parâmetro e imprima a lista de chaves que ele possui.

**Dado de entrada da função:**
```javascript
{
  marca: "Tramontina",
  produto: "Jogo de talheres",
  preco: 500,
  quantidade: 132,
  categoria: "Utensilhos domésticos"
}
```

**Retorno esperado da função:**
```javascript
['marca', 'produto', 'preco', 'quantidade', 'categoria']
```

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

**Dica:** pesquise o termo `buscar chaves javascript` no Google e veja como obter as chaves de um objeto. Se não conseguir encontrar ou se tiver dificuldade, fale com os mentores no nosso Discord.

### Prática 8: Criando nossa lista de filmes

Crie uma função em `pratica-8.js` que receba uma lista de objetos de filmes como parâmetro. Exiba as informações de cada item da lista de acordo com a saída esperada abaixo.

**Dado de entrada da função:**
```javascript
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
```

**Valores exibidos pela função:**
```
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
```

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

### Prática 9: Listando os melhores avaliados

1. Crie uma função em `pratica-9.js` que recaba uma lista de filmes como parâmetro.
2. Ordene a lista por notas de avaliação.
3. Imprima o item melhor avaliado da lista.

**Dado de entrada da função:**
```javascript
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
```

**Valor exibido pela função:**
```
O filme de melhor avaliação com nota 9.2 é: Um Sonho de Liberdade.
```

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

### Prática 10: Calculando o saldo final

Crie uma função no arquivo `pratica-10.js` que recebendo como argumento uma lista de objetos com depósitos e retiradas como no exemplo abaixo, exiba o saldo final da conta.

**Dado de entrada da função:**
```javascript
[{
  valor: 100.00,
  movimentacao: "deposito",
  dataMovimentacao: "2021-08-02T07:46:36.611Z"
},
{
  valor: 20.00,
  movimentacao: "retirada",
  dataMovimentacao: "2021-09-17T09:46:36.611Z"
},
{
  valor: 30.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-02-24T09:46:36.611Z"
},
{
  valor: 10.00,
  movimentacao: "deposito",
  dataMovimentacao: "2022-03-02T09:46:36.611Z"
},
{
  valor: 7.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-04-20T09:46:36.611Z"
},
{
  valor: 21.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-03-20T09:46:36.611Z"
},
{
  valor: 5.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-06-08T09:46:36.611Z"
}]
```

**Valor exibido pela função:**
```
O saldo final de sua conta foi positivo no valor de R$ 27.
```

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

### Prática 11: Calculando um extrato do banco simples

Aproveite o seu código da Prática 10 e crie uma função no arquivo `pratica-11.js` que recebendo uma lista de depósitos e retiradas, exiba o resumo do extrato mensal de sua conta com as seguintes informações no exemplo abaixo.

**Dado de entrada da função:**
```javascript
[{
  valor: 100.00,
  movimentacao: "deposito",
  dataMovimentacao: "2021-08-02T07:46:36.611Z"
},
{
  valor: 20.00,
  movimentacao: "retirada",
  dataMovimentacao: "2021-09-17T09:46:36.611Z"
},
{
  valor: 30.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-02-24T09:46:36.611Z"
},
{
  valor: 10.00,
  movimentacao: "deposito",
  dataMovimentacao: "2022-03-02T09:46:36.611Z"
},
{
  valor: 7.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-04-20T09:46:36.611Z"
},
{
  valor: 21.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-03-20T09:46:36.611Z"
},
{
  valor: 5.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-06-08T09:46:36.611Z"
}]
```

**Valor exibido pela função:**
```
O valor total depositado foi de: R$ 110
O valor total retirado foi de: R$ 83
O saldo final de sua conta foi positivo no valor de R$ 27
```

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

### Prática 12: Calculando um extrato do banco completo

Aproveite o seu código da Prática 11 e crie uma função no arquivo `pratica-12.js` que recebendo uma lista de depósitos e retiradas, exiba um resumo completo do extrato  de sua conta com as seguintes informações no exemplo abaixo.

**Dado de entrada da função:**
```javascript
[{
  valor: 100.00,
  movimentacao: "deposito",
  dataMovimentacao: "2021-08-02T07:46:36.611Z"
},
{
  valor: 20.00,
  movimentacao: "retirada",
  dataMovimentacao: "2021-09-17T09:46:36.611Z"
},
{
  valor: 30.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-02-24T09:46:36.611Z"
},
{
  valor: 10.00,
  movimentacao: "deposito",
  dataMovimentacao: "2022-03-02T09:46:36.611Z"
},
{
  valor: 7.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-04-20T09:46:36.611Z"
},
{
  valor: 21.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-03-20T09:46:36.611Z"
},
{
  valor: 5.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-06-08T09:46:36.611Z"
}]
```

**Valor exibido pela função:**
```
Total de depósitos: 2
Total de retiradas: 5
O valor total depositado foi de: R$ 110
O valor total retirado foi de: R$ 83
O saldo final de sua conta foi positivo no valor de R$ 27
```

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

### Prática 13: Ordenando movimentações bancárias por data

Crie uma função no arquivo `pratica-13.js` que ordena uma sequência de movimentações bancárias começando com a data mais recente até a data de movimentação mais antiga.

**Dado de entrada da função:**
```javascript
[{
  valor: 100.00,
  movimentacao: "deposito",
  dataMovimentacao: "2021-08-02T07:46:36.611Z"
},
{
  valor: 20.00,
  movimentacao: "retirada",
  dataMovimentacao: "2021-09-17T09:46:36.611Z"
},
{
  valor: 30.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-02-24T09:46:36.611Z"
},
{
  valor: 10.00,
  movimentacao: "deposito",
  dataMovimentacao: "2022-03-02T09:46:36.611Z"
},
{
  valor: 7.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-04-20T09:46:36.611Z"
},
{
  valor: 21.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-03-20T09:46:36.611Z"
},
{
  valor: 5.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-06-08T09:46:36.611Z"
}]
```

**Retorno esperado da função:**
```javascript
[{
  valor: 5.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-06-08T09:46:36.611Z"
},
{
  valor: 7.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-04-20T09:46:36.611Z"
},
{
  valor: 21.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-03-20T09:46:36.611Z"
},
{
  valor: 10.00,
  movimentacao: "deposito",
  dataMovimentacao: "2022-03-02T09:46:36.611Z"
},
{
  valor: 30.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-02-24T09:46:36.611Z"
},
{
  valor: 20.00,
  movimentacao: "retirada",
  dataMovimentacao: "2021-09-17T09:46:36.611Z"
},
{
  valor: 100.00,
  movimentacao: "deposito",
  dataMovimentacao: "2021-08-02T07:46:36.611Z"
}]
```

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

**Dica 1:** os valores de `dataMovimentação` (Ex: `"2021-08-02T07:46:36.611Z"`) já estão no formato correto de datas. Com isso, você vai precisar converter essa string em um objeto real do tipo `Date`. Para isso, basta fazer
```javascript
let varExemplo = new Date("2021-08-02T07:46:36.611Z")
```
A partir daí, basta comparar uma data com a outra para executar a ordenação.

**Dica 2:** utilize o método `.sort()` para fazer a ordenação.

### Prática 14: Criando a média de avaliações

Muitas pessoas utilizam os aplicativos de delivery e buscam as avaliações de clientes para decidir qual restaurante pedir comida.

Pois é, e você foi contratado pelo TomaFood para terminar uma funcionalidade que calcula a média de avaliações de um restaurante. Agora é a sua vez.

Crie uma função no arquivo `pratica-14.js` que recebe um objeto com a lista de avaliações de um restaurante, calcula a média de suas avaliações de acordo com a entrada de cada cliente e exibe a média de avaliação.

**Dado de entrada da função:**
```javascript
{
  restaurante: "Turing Gourmet",
  tipo: "Comida britânica",
  avaliacoes: [
    {
      cliente: "Thais S.",
      nota: 9.8
    },
    {
      cliente: "Thales Gonçalves",
      nota: 8.9
    },
    {
      cliente: "José Lopes",
      nota: 9.9
    },
    {
      cliente: "Cristina Souza",
      nota: 9.3
    },
    {
      cliente: "Leo Garcia",
      nota: 8.5
    }
  ]
}
```

**Valor exibido pela função:**
```
A média de avaliações do restaurante Turing Gourmet foi de 9.28.
```

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

### Prática 15: Buscando o carro mais próximo

Algo muito comum em nosso cotidiano, é solicitarmos um carro por aplicativo. Quando um motorista é encontrado para realizar a sua corrida, recebemos uma notificação como: `O motorista Joaquim B. com o carro Gol de placa ABC1234 está a caminho. Chega em 3 minutos`. 

Você está tão sob demanda que saiu da TomaFood e recebeu uma oferta irrecusável da Tuber para trabalhar no time de engenharia. E dá-lhe trabalho.

Crie uma função no arquivo `pratica-15.js` que recebe uma lista de motoristas com os dados de cada veículo e o tempo estimado até o cliente (em minutos).

Exiba o motorista que estiver com o menor tempo até você.

**Dado de entrada da função:**
```javascript
[{
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
```

**Valor exibido pela função:**
```
Cristina está a caminho com o carro Fox de placa ABC1234. Chega em 3 minutos.
```

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

**Dica:** utilize o método `.sort()` para fazer a ordenação.

### Prática 16: Procurando fotos no Google Fotos

O Google Photos utiliza reconhecimento de imagens para criar tags para as suas fotos e permitir que você busque e encontre fotos de cachorro quando você pesquisa por "cachorro" no campo de busca. Ele utiliza machine learning e outros recursos computacionais avançados para criar essas tags.

Pois é, adeus Tuber e bem-vindo ao time de engenharia do Google! Agora você terá que criar uma função no arquivo `pratica-16.js` que receba dois parâmetros:
• a lista de fotos
• o termo de busca

Com os dados de entrada fornecidos, retorne os itens que correspondem a busca.

**Dados de entrada da função:**
Lista de fotos:
```javascript
[{
  endereco: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80",
  tags: ["cachorro"],
  dataCriacao: "2022-06-08T09:46:36.611Z"
},
{
  endereco: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
  tags: ["óculos", "cachorro", "livro"],
  dataCriacao: "2022-06-02T09:46:36.611Z"
},
{
  endereco: "https://images.unsplash.com/photo-1504826260979-242151ee45b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  tags: ["coleira", "praia", "cachorro"],
  dataCriacao: "2022-06-13T09:46:36.611Z"
},
{
  endereco: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
  tags: ["gato", "óculos"],
  dataCriacao: "2022-06-12T09:46:36.611Z"
},
{
  endereco: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  tags: ["gato"],
  dataCriacao: "2022-06-10T09:46:36.611Z"
}]
```
Termo de busca:
```javascript
"cachorro"
```

**Retorno esperado da função:**
```javascript
[{
  endereco: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80",
  tags: ["cachorro"],
  dataCriacao: "2022-06-08T09:46:36.611Z"
},
{
  endereco: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
  tags: ["óculos", "cachorro", "livro"],
  dataCriacao: "2022-06-02T09:46:36.611Z"
},
{
  endereco: "https://images.unsplash.com/photo-1504826260979-242151ee45b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  tags: ["coleira", "praia", "cachorro"],
  dataCriacao: "2022-06-13T09:46:36.611Z"
}]
```

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

## Enviando a sua tarefa no Discord

Para enviar a tarefa, basta copiar o link do seu repositório `bootcamp-full-stack-ituring` no GitHub e colar no formulário solicitado no [Discord do curso](https://discord.gg/FXage6t99U) no canal **#💪 │ tarefa-semana-4**.

Ao final de todas as etapas, o seu repositório deverá ter as seguintes pastas e arquivos:

```
📦 bootcamp-full-stack-ituring
 ┗ 📂 mes-1-logica-de-programacao
   ┗ 📂 tarefa-semana-1
     ┗ 📜 <arquivos da semana 1...>
   ┗ 📂 tarefa-semana-2
     ┗ 📜 <arquivos da semana 2...>
   ┗ 📂 tarefa-semana-3
     ┗ 📜 <arquivos da semana 3...>
   ┗ 📂 tarefa-semana-4
     ┣ 📜 resumo-semana-4.md
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
     ┣ 📜 pratica-15.js
     ┗ 📜 pratica-16.js
```
