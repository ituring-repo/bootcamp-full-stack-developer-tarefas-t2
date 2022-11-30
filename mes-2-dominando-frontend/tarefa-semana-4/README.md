# Tarefa - Semana 4: Deixando nossa interface dinâmica com JavaScript

Saudações, estudante do nosso bootcamp! Esta é a 4ª e última tarefa do nosso segundo mês do nosso Bootcamp Full Stack Developer do ITuring.

## Sobre a tarefa

Na tarefa da Semana 4 do **Mês 2 - Dominando Front-End**, teremos as seguintes etapas:

- **[Etapa 1:](#etapa-1-deixando-o-nosso-cabeçalho-dinâmico)** Deixando o nosso cabeçalho dinâmico
- **[Etapa 2:](#etapa-2-gerando-dinamicamente-a-lista-de-lavadores-em-pedirlavagemhtml)** Gerando dinamicamente a lista de lavadores em `pedirlavagem.html`
- **[Etapa 3 (opcional):](#etapa-3-opcional-gerando-dinamicamente-a-lista-de-carros-em-meuscarroshtml)** Gerando dinamicamente a lista de carros em `meuscarros.html`
- **[Etapa 4 (opcional):](#etapa-4-opcional-gerando-dinamicamente-a-lista-de-lavagens-em-minhaslavagenshtml)** Gerando dinamicamente a lista de lavagens em `minhaslavagens.html`
- **[Enviando sua tarefa no Discord](#enviando-a-sua-tarefa-no-discord)** 

## Etapa 1: Deixando o nosso cabeçalho dinâmico

Na semana 3 do mês 2, você adicionou responsivididade aos seguintes elementos:
- rodapé
- conteúdo principal
- cabeçalho

A sua organização após a finalização da Semana 3 do Mês 2 do bootcamp ficou algo semelhante a:

```
📦 turingwash-frontend
 ┣ 📜 pedirlavagem.html
 ┣ 📜 meuscarros.html (opcional)
 ┣ 📜 adicionarcarro.html (opcional)
 ┣ 📜 minhaslavagens.html (opcional)
 ┣ 📂 css (ou styles)
    ┣ 📜 normalize.css (caso decidiu adicionar o normalizador no seu CSS)
    ┣ 📜 <outros arquivos .css> (caso decidiu seguir a dica da instrutora Jô sobre como deixar seu código CSS melhor gerenciável)
    ┗ 📜 styles.css
 ┣ 📂 js (ou scripts)
 ┗ 📂 img (ou images)
    ┣ 🖼️ profile.png
    ┣ 🖼️ turingwash-icon.svg
    ┗ 🖼️ turingwash-logo.svg
```

Dessa vez, na tarefa da semana 4, a sua missão será gerar os elementos da interface com base em objetos oriundos de um conjunto de arquivos JavaScript. Considere que esses objetos vieram de uma requisição de uma API, ou seja, não faremos uma requisição em uma API de fato, mas utilizaremos estes objetos para alimentar a nossa interface com os dados passados.

Nesta Etapa 1, você deverá importar o arquivo `usuario.js` e implementar a seguinte solução no menu do cabeçalho da aplicação:

1. Verificar se o usuário está logado
1. Se ele estiver logado, disponibilizar o link "Sair"
1. Se ele estiver deslogado, disponibilizar o link "Entrar"
1. Garanta que a informação de "Sair" ou "Entrar" funcione para todos os tipos de telas

O arquivo `usuario.js` representa as informações de login de um usuário. Por isso, não esqueça de alterar os dados para testar os dois casos:
- usuário logado
- usuário não logado

Para utilizar os dados do arquivo `usuario.js`, primeiro inclua o arquivo na sua pasta de arquivos JavaScript:
```
📦 turingwash-frontend
 ┗ 📂 js (ou scripts)
    ┗ 📜 usuario.js
```

Em seguida, basta importá-lo nos seus arquivos HTML com a seguinte tag:
```html
<script src="js/usuario.js"></script>
```

Por fim, agora é o momento de você escrever código JavaScript **dentro** da página HTML (e não em `usuario.js`) para que a solução dinâmica funcione. Aplique esta solução apenas para o menu do cabeçalho para a página `pedirlavagem.html`. Assista nossas aulas da semana 4 e veja as dicas de como implementar esta solução.

**O de sempre:** nunca se esqueça de estar sempre testando e comitando o seu código.

## Etapa 2: Gerando dinamicamente a lista de lavadores em `pedirlavagem.html`

Agora que você deixou o cabeçalho dinâmico, vamos fazer isso com o conteúdo principal da página `pedirlavagem.html`.

Nesta Etapa 2, você deverá importar o arquivo `lavadores.js` e gerar a lista de lavadores na página. Para isso:

1. Inclua o arquivo `lavadores.js` na sua pasta de arquivos JavaScript:
```
📦 turingwash-frontend
 ┗ 📂 js (ou scripts)
    ┣ 📜 usuario.js
    ┗ 📜 lavadores.js
```
2. Importe o arquivo `lavadores.js` em `pedirlavagem.html`:
```html
<script src="lavadores.js"></script>
```
3. Agora, para cada lavador, você deverá gerar o conteúdo HTML e preenchê-lo na página `pedirlavagem.html`. Para isso, escreva uma solução em JavaScript **dentro** da página `pedirlavagem.html` (e não em `lavadores.js`) que resolva este problema.
1. Assista nossas aulas da semana 4 e veja as dicas de como implementar esta solução

**O de sempre:** nunca se esqueça de estar sempre testando e comitando o seu código.

## Etapa 3 (opcional): Gerando dinamicamente a lista de carros em `meuscarros.html`

Terminou as etapas 1 e 2 e sobrou um tempo para programar? Da mesma forma que você incluiu os lavadores na página `pedirlavagem.html`, agora é o momento de incluir os carros em `meuscarros.html`.

Nesta Etapa 3, você deverá importar o arquivo `carros.js` e gerar a lista de carros na página. Para isso:

1. Inclua o arquivo `carros.js` na sua pasta de arquivos JavaScript:
```
📦 turingwash-frontend
 ┗ 📂 js (ou scripts)
    ┣ 📜 usuario.js
    ┣ 📜 lavadores.js
    ┗ 📜 carros.js
```
2. Importe o arquivo `carros.js` em `meuscarros.html`:
```html
<script src="carros.js"></script>
```
3. Agora, para cada carro, você deverá gerar o conteúdo HTML e preenchê-lo na página `meuscarros.html`. Para isso, escreva uma solução em JavaScript **dentro** da página `meuscarros.html` (e não em `carros.js`) que resolva este problema.
1. Assista nossas aulas da semana 4 e veja as dicas de como implementar esta solução

**O de sempre:** nunca se esqueça de estar sempre testando e comitando o seu código.

## Etapa 4 (opcional): Gerando dinamicamente a lista de lavagens em `minhaslavagens.html`

Terminou as etapas 1 e 2 e sobrou um tempo para programar? Da mesma forma que você incluiu os carros na página `meuscarros.html`, agora é o momento de incluir as lavagens em `minhaslavagens.html`.

Nesta Etapa 4, você deverá importar o arquivo `lavagens.js` e gerar a lista de lavagens na página. Para isso:

1. Inclua o arquivo `lavagens.js` na sua pasta de arquivos JavaScript:
```
📦 turingwash-frontend
 ┗ 📂 js (ou scripts)
    ┣ 📜 usuario.js
    ┣ 📜 lavadores.js
    ┣ 📜 carros.js
    ┗ 📜 lavagens.js
```
2. Importe o arquivo `lavagens.js` em `minhaslavagens.html`:
```html
<script src="lavagens.js"></script>
```
3. Agora, para cada lavagem, você deverá gerar o conteúdo HTML e preenchê-lo na página `minhaslavagens.html`. Para isso, escreva uma solução em JavaScript **dentro** da página `minhaslavagens.html` (e não em `lavagens.js`) que resolva este problema.
1. Assista nossas aulas da semana 4 e veja as dicas de como implementar esta solução

**O de sempre:** nunca se esqueça de estar sempre testando e comitando o seu código.

## Enviando a sua tarefa no Discord

Para enviar a tarefa, basta copiar o link do seu repositório `turingwash-frontend` no GitHub e colar no formulário solicitado no [Discord do curso](https://discord.gg/FXage6t99U) no canal **#💪 │ tarefa-semana-4** do **Mês 2 - Dominando Front-End**.

Ao final de todas as etapas, o seu repositório deverá ter as seguintes pastas e arquivos:
```
📦 turingwash-frontend
 ┣ 📜 pedirlavagem.html
 ┣ 📜 meuscarros.html (opcional)
 ┣ 📜 adicionarcarro.html (opcional)
 ┣ 📜 minhaslavagens.html (opcional)
 ┣ 📂 css (ou styles)
    ┣ 📜 normalize.css (caso decidiu adicionar o normalizador no seu CSS)
    ┣ 📜 <outros arquivos .css> (caso decidiu seguir a dica da instrutora Jô sobre como deixar seu código CSS melhor gerenciável)
    ┗ 📜 styles.css
 ┣ 📂 js (ou scripts)
    ┣ 📜 usuario.js
    ┣ 📜 lavadores.js
    ┣ 📜 carros.js (opcional)
    ┗ 📜 lavagens.js (opcional)
 ┗ 📂 img (ou images)
    ┣ 🖼️ profile.png
    ┣ 🖼️ turingwash-icon.svg
    ┗ 🖼️ turingwash-logo.svg
```
