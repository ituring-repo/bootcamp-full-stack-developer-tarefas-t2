# Tarefa - Semana 2: Construindo a interface com CSS

Saudações, estudante do nosso bootcamp! Esta é a 2ª tarefa do nosso segundo mês do nosso Bootcamp Full Stack Developer do ITuring. Como você já sabe, dessa vez, nossas tarefas serão orientadas para você desenvolver um projeto de front-end.

## Sobre a tarefa

Na tarefa da Semana 2 do **Mês 2 - Dominando Front-End**, teremos as seguintes etapas:

- **[Etapa 1:](#etapa-1-preparando-se-para-o-projeto)** Preparando-se para o projeto
- **[Etapa 2:](#etapa-2-definindo-as-classes-da-tela-pedirlavagemhtml-e-criando-os-primeiros-códigos-de-css)** Definindo as classes da tela `pedirlavagem.html` e criando os primeiros códigos de CSS
- **[Etapa 3:](#etapa-3-colocando-o-código-css-em-um-arquivo-separado-e-conectando-com-a-página-pedirlavagemhtml)** Colocando o código CSS em um arquivo separado e conectando com a página `pedirlavagem.html`
- **[Etapa 4:](#etapa-4-dimensionando-e-posicionando-os-elementos-da-interface-da-tela-pedirlavagemhtml)** Dimensionando e posicionando os elementos da interface da tela `pedirlavagem.html`
- **[Etapa 5 (Opcional):](#etapa-5-opcional-aplicando-as-etapas-de-2-3-e-4-para-as-telas-restantes)** Aplicando as etapas de 2, 3 e 4 para as telas restantes
- **[Enviando sua tarefa no Discord](#enviando-a-sua-tarefa-no-discord)** 

## Etapa 1: Preparando-se para o projeto

A sua organização após a finalização da Semana 1 do Mês 2 do bootcamp ficou algo semelhante a:

```
📦 bootcamp-full-stack-ituring
 ┗ 📂 mes-1-logica-de-programacao
   ┗ 📂 <pastas das tarefas da do mês 1>
 ┗ 📂 mes-2-dominando-frontend
   ┗ 📂 resumos
     ┗ 📜 resumo-semana-1.md
```

```
📦 turingwash-frontend
 ┣ 📜 pedirlavagem.html
 ┣ 📜 meuscarros.html
 ┣ 📜 adicionarcarro.html (opcional)
 ┗ 📜 minhaslavagens.html (opcional)
```

A tarefa da Semana 2 do Mês 2 será entregue nestes mesmos repositórios. Vamos criar a estrutura para continuar a execução do projeto.

### Subindo o resumo da semana

1. Utilizando o terminal, navegue para a pasta que você está desenvolvendo as tarefas `bootcamp-full-stack-ituring`.
1. Navegue para `mes-2-dominando-frontend` e depois para `resumos`
1. Dentro de `resumos`, crie o arquivo `resumo-semana-2.md`
1. Copie e cole [este conteúdo](resumo/resumo-semana-2.md) nesse arquivo no editor de texto. Salve a alteração
1. Confira se está tudo certo, em seguida faça o commit e suba esta alteração para o seu GitHub

### Criando a estrutura para a entrega

Antes da gente continuar o desenvolvimento do projeto, vamos organizar os arquivos criando algumas pastas internas do projeto. Depois trataremos deste assunto de maneira mais aprofundada, mas, de um modo geral, projetos e aplicações de software possuem dezenas de arquivos de código e pastas.

Como organizar e até mesmo nomear esses arquivos e pastas? Organizar e definir essa estrutura é essencial para qualquer pessoa engenheira de sofware de **sucesso**. Reforçando, manter a organização e consistência de nomes e estruturas dos seus arquivos e pastas **é primordial**.

Para o nosso projeto, vamos estruturar seguindo um modelo bastante comum para projetos mais simples:
```
📦 minha-aplicacao-web
 ┣ 📂 styles
 ┣ 📂 scripts
 ┣ 📂 images
 ┗ 📜 <meus arquivos .html>
```
Também é comum nomear da seguinte maneira:
```
📦 minha-aplicacao-web
 ┣ 📂 css
 ┣ 📂 js
 ┣ 📂 img
 ┗ 📜 <meus arquivos .html>
```
Ou seja:
- nomes dos arquivos com tudo em letra minúscula
- dentro de `styles` (ou `css`), você adicionará seus arquivos de CSS do projeto.
- dentro de `scripts` (ou `js`, ou `javascript`), você adicionará seus arquivos JavaScript
- já os arquivos HTML ficam na pasta raiz mesmo, não precisa criar uma pasta para guardá-los

Agora pode organizar as pastas do projeto seguindo essa estrutura. Ao final dessa organização, você deverá ter os seguintes arquivos e/ou pastas:
```
📦 turingwash-frontend
 ┣ 📜 pedirlavagem.html
 ┣ 📜 meuscarros.html
 ┣ 📜 adicionarcarro.html (opcional)
 ┣ 📜 minhaslavagens.html (opcional)
 ┣ 📂 css (ou styles)
 ┣ 📂 js (ou scripts)
 ┗ 📂 img (ou images)
```

A nomeação fica ao seu critério. Não existe certo ou errado, o importante é manter uma boa padronização e coesão dos nomes. 

Pronto, agora finalmente bora continuar o desenvolvimento do projeto TuringWash!

## Etapa 2: Definindo as classes da tela `pedirlavagem.html` e criando os primeiros códigos de CSS

**Está fazendo em dupla?** Confira no final da descrição sobre dicas de como fazer esta etapa em dupla.

Antes de você iniciar o desenvolvimento, tenha sempre em mãos os links que disponibilizamos para as telas e user stories do projeto TuringWash:
- [Design das telas no Figma](https://www.figma.com/file/vLxv5eN0RWQTCIniGv2U9y/Turing-Wash?node-id=0%3A1) (**Importante:** ignore a versão mobile)
- [Escopo do projeto (user stories) e telas no Miro](https://miro.com/welcomeonboard/MjI5NHp5dHd4MXFRVlZhVVFkY1NIcmZTZGk2OHpsa1MyZXg1TjMxMHk2VGNoSW9JS1N3MERmV3BZamlBa1ZwM3wzNDU4NzY0NTMyNDc5MDQzNjU0?share_link_id=28296698674) (utilize o seu Miro)

Na semana 1 do mês 2, você fez o seguinte:
1. Criou os arquivos HTML das telas do projeto: `pedirlavagem.html`, `meuscarros.html`, `adicionarcarro.html`(opcional), e `minhaslavagens.html`(opcional)
2. Delimitou os elementos e os blocos de interface no Miro para criação da estrutura da página em HTML
3. Montou a estrutura em HTML de cada tela

Agora é o momento de fazer o seguinte:
- definir as classes dos elementos e dos blocos de interface para serem estilizadas com CSS **apenas** para a tela `pedirlavagem.html`
- começar a aplicar a estilização do CSS.

Para isso:
- Abra o arquivo `pedirlavagem.html` no VSCODE e defina as classes de cada elemento/bloco que você criou. Como definir as classes? Seguindo o método BEM, conforme instruído pelo instrutor no tópico [[Na prática] Aplicando CSS no projeto de e-commerce](https://youtu.be/if7DXVXiH2w?t=4052) da aula 11. Recomendamos que reassista a aula e em especial este tópico prático para ir aplicando e baseando-se no passo-a-passo que o instrutor fez de definição das classes
- Junto com a definição das classes, vai construindo os primeiros estilos CSS dos elementos com o CSS dentro da tag `<style> seu CSS aqui </style>` no elemento `<head></head>`:
```html
<!-- outras tags aqui -->
<head>
    <!-- outras tags aqui -->
    <style>
        /* seu CSS aqui! */
    </style>
    <!-- outras tags aqui -->
</head>
<!-- outras tags aqui -->
```
Vai seguindo exatamente como o instrutor mostrou no tópico [[Na prática] Aplicando CSS no projeto de e-commerce](https://youtu.be/if7DXVXiH2w?t=4052). Neste caso, aplique as cores de fundo, cor e estilo de fonte, tipo de fonte e outras estilizações simples. Vamos aplicar o posicionamento e espaçamento dos elementos na próxima etapa.
- Você deve estar se perguntando: "Como vou saber exatamente a cor de fundo dos elementos?". Entre no [design das telas no Figma](https://www.figma.com/file/vLxv5eN0RWQTCIniGv2U9y/Turing-Wash?node-id=0%3A1) e faça um login. Ao clicar nos elementos da tela, no painel lateral direito aparecerá o código das cores (**importante:** ignore as informações de altura e largura dos elementos, elas não estão corretas). Em um time de engenharia, o pessoal de design disponibiliza o "Figma" e todas as informações de cor, etc, ficam lá. Se tiver dificuldade, fale com a gente no Discord que te mostramos
- O ícone da aplicação, logo e imagem de perfil dos lavadores você encontra [aqui](imagens-projeto). Pode adicioná-los também, mas lembre-se de colocá-los na pasta `images` (ou `img`)

**Importante 1:** defina as classes e o CSS inicial **apenas** para a tela `pedirlavagem.html`, pois a ideia é que você defina as classes e aplique o CSS nessa tela primeiramente. Depois que você terminar essa tela por inteiro, você perceberá que poderá reutilizar muitos dos estilos e classes que você definiu para `pedirlavagem.html` nas outras telas, `meuscarros.html`, `adicionarcarro.html` (opcional) e `minhaslavagens.html` (opcional). É imprescindível que sempre busque fazer essa reutilização.

**Importante 2:** não esqueça de sempre verificar com a extensão HTMLHint no VSCODE se tem algum erro de sintaxe no seu código HTML.

**Dica:** fique à vontade de adicionar extensões que vão te ajudar na escrita do código. [Aqui](https://css-tricks.com/vs-code-extensions-for-html/) tem algumas bem úteis para você instalar. Explore o VSCODE ao máximo para você ser o mais produtivo possível com ele e com isso escrever código com qualidade e rapidez.

Ao final desta etapa, o seu repositório deverá ter os seguintes arquivos e pastas:
```
📦 bootcamp-full-stack-ituring
 ┗ 📂 mes-1-logica-de-programacao
 ┗ 📂 mes-2-dominando-frontend
   ┗ 📂 resumos
     ┣ 📜 resumo-semana-1.md
     ┗ 📜 resumo-semana-2.md
```

```
📦 turingwash-frontend
 ┣ 📜 pedirlavagem.html
 ┣ 📜 meuscarros.html
 ┣ 📜 adicionarcarro.html (opcional)
 ┣ 📜 minhaslavagens.html (opcional)
 ┣ 📂 css (ou styles)
 ┣ 📂 js (ou scripts)
 ┗ 📂 img (ou images)
    ┣ 🖼️ profile.png
    ┣ 🖼️ turingwash-icon.svg
    ┗ 🖼️ turingwash-logo.svg
```

### Como fazer esta etapa em dupla?

Para fazer esta etapa em dupla, recomendamos que vocês dividam entre vocês qual elemento da página cada um irá trabalhar:
- cabeçalho e menu superior (onde fica a logo do TuringWash e o menu)
- conteúdo principal (onde ficam os cards dos lavadores)
- rodapé (a parte inferior da página)
- etc

Não tem problema de trabalharem em um mesmo arquivo, o mais importante é que **não trabalhem no mesmo trecho de código**. Comecem com o esqueleto do HTML (façam isso juntos) e em seguida cada um vai se dedicar em uma parte da página. Fiquem sempre em contato para alinhar sobre o nome que vocês darão para as classes, etc.

**Lembrem-se sempre:** cada um na sua branch. Para o esqueleto do HTML, podem fazer juntos na branch main, sem problemas.

## Etapa 3: Colocando o código CSS em um arquivo separado e conectando com a página `pedirlavagem.html`

**Está fazendo em dupla?** Confira no final da descrição sobre dicas de como fazer esta etapa em dupla.

Esta etapa é bem direto ao ponto. Na etapa anterior, você adicionou o código CSS dentro do arquivo HTML `pedirlavagem.html` da seguinte maneira:
```html
<!-- outras tags aqui -->
<head>
    <!-- outras tags aqui -->
    <style>
        /* seu CSS aqui! */
    </style>
    <!-- outras tags aqui -->
</head>
<!-- outras tags aqui -->
```

Agora é o momento de você adicionar o seu código CSS em um arquivo externo. Por que? Pois é uma boa prática, principalmente por conta de que colocando o código CSS em um arquivo separado, você poderá reutilizar o código para todas as outras telas! Se não souber fazer isto, dê uma olhada no tópico [Como conectar o código CSS na página HTML?](https://www.youtube.com/watch?v=if7DXVXiH2w&t=1761s). Por enquanto, nosso projeto terá apenas um arquivo CSS. Quando um projeto de aplicação web possui apenas um arquivo, o pessoal costuma nomeá-lo de `styles.css`. Pode nomear dessa maneira o seu arquivo.

Nunca se esqueça de estar sempre testando e comitando o seu código.

**Importante:** quando mover o código CSS de `pedirlavagem.html` para `styles.css`, não esqueça de remover completamente o código CSS da tela `pedirlavagem.html`.

Ao final desta etapa, o seu repositório deverá ter os seguintes arquivos e pastas:
```
📦 turingwash-frontend
 ┣ 📜 pedirlavagem.html
 ┣ 📜 meuscarros.html
 ┣ 📜 adicionarcarro.html (opcional)
 ┣ 📜 minhaslavagens.html (opcional)
 ┣ 📂 css (ou styles)
    ┗ 📜 styles.css
 ┣ 📂 js (ou scripts)
 ┗ 📂 img (ou images)
    ┣ 🖼️ profile.png
    ┣ 🖼️ turingwash-icon.svg
    ┗ 🖼️ turingwash-logo.svg
```

### Como fazer esta etapa em dupla?

Esta etapa recomendamos fazerem juntos por videoconferência, no modo [pair programming](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_em_par) (programação em par). É simples, no pair programming existem dois papéis:
- a pessoa pilota: escreve o código
- a pessoa co-pilota: analisa e orienta o que o piloto deve fazer

Definam quem será a pessoa pilota e o co-pilota e executem a etapa juntos. Pair programming é um método bastante utilizado em equipes de engenharia ao redor do mundo.

## Etapa 4: Dimensionando e posicionando os elementos da interface da tela `pedirlavagem.html`

**Está fazendo em dupla?** Confira no final da descrição sobre dicas de como fazer esta etapa em dupla.

Agora vem a parte mais legal, e também a mais desafiante. Agora você deve deixar a tela `pedirlavagem.html` idêntica à que foi definida no [Design das telas no Figma](www.figma.com/file/vLxv5eN0RWQTCIniGv2U9y/Turing-Wash?node-id=0%3A1). Para isso, assista a nossa aula 12 e baseie-se no passo-a-passo que o nosso instrutor fez para a página do e-commerce, em especial a partir do tópico *[Na prática] Aplicando CSS no projeto de e-commerce*. Claro, assista também a parte teórica pra reforçar e garantir sempre o entendimento de tudo.

**Importante 1:** não é pra seguir o passo-a-passo do instrutor de maneira idêntica, pois, por exemplo, a listagem de produtos do e-commerce é feita na horizontal, enquanto que a listagem de lavadores é na vertical. Por isso, sempre pondere e desenvolva a interface de maneira consciente e sempre aplicando as melhores práticas. Se tiver dificuldade, fale com a gente no Discord.

**Importante 2:** sempre olhe para as delimitações que você definiu no seu Miro para entender melhor como vai se comportar o posicionamento de cada elemento

**Importante 3:** o dimensionamento e espaçamento dos elementos fica ao seu critério sobre a altura, largura e paddings/margins de cada um. O mais importante é que seja o mais próximo possível do que a equipe de design definiu. Se ficar idêntico, perfeito!

### Como fazer esta etapa em dupla?

Da mesma forma que fizeram a etapa 2, recomendamos que vocês dividam entre vocês qual elemento da página cada um irá trabalhar:
- cabeçalho e menu superior (onde fica a logo do TuringWash e o menu)
- conteúdo principal (onde ficam os cards dos lavadores)
- rodapé (a parte inferior da página)
- etc

Não tem problema de trabalharem em um mesmo arquivo, o mais importante é que **não trabalhem no mesmo trecho de código**.

**Lembrem-se sempre:** cada um na sua branch.

## Etapa 5 (Opcional): Aplicando as etapas de 2, 3 e 4 para as telas restantes

**Está fazendo em dupla?** Confira no final da descrição sobre dicas de como fazer esta etapa em dupla.

Se você cumpriu a etapa 4 com sucesso e ainda sobrou um tempo para desenvolver ao longo da semana, agora é o momento de você fazer as etapas 2, 3 e 4 para as telas restantes:
- `meuscarros.html`
- `adicionarcarro.html`
- `minhaslavagens.html`

Ao terminar as etapas 2, 3 e 4 para as telas restantes, fique à vontade de linkar as telas nas tags de links `<a></a>` que você adicionou entre elas. Ou seja, agora você conseguirá navegar entre as telas da aplicação! Claro, por enquanto não tem nada funcionando, mas pelo menos você conseguiu ver suas telas prontas e totalmente navegáveis. E aí, curtiu? :D

Para os links e botões que ainda não vão pra lugar nenhum ("Sair", "Excluir carro", etc), pode colocar `href="#"` no atributo do link que assim, ao clicar no link, não acontecerá nada, você permanecerá na mesma tela.

Nunca se esqueça de estar sempre testando e comitando o seu código.

**Muito importante 1:** Garanta sempre o reuso do código CSS. Veja que o header e o footer é igual para todas as telas. Além disso, alguns elementos da parte principal das telas também são idênticos, como os botões, tamanhos de fontes, etc.

**Importante 2:** Use e abuse do Discord e de nossos mentores se tiver dificuldade em qualquer etapa.

### Como fazer esta etapa em dupla?

Recomendamos que vocês dividam entre vocês qual página cada um irá trabalhar.

## Enviando a sua tarefa no Discord

Para enviar a tarefa, basta copiar o link do seu repositório `bootcamp-full-stack-ituring` no GitHub e colar no formulário solicitado no [Discord do curso](https://discord.gg/FXage6t99U) no canal **#💪 │ tarefa-semana-2** do **Mês 2 - Dominando Front-End**.

Ao final de todas as etapas, o seu repositório deverá ter as seguintes pastas e arquivos:
```
📦 bootcamp-full-stack-ituring
 ┗ 📂 mes-1-logica-de-programacao
 ┗ 📂 mes-2-dominando-frontend
   ┗ 📂 resumos
     ┣ 📜 resumo-semana-1.md
     ┗ 📜 resumo-semana-2.md
```

```
📦 turingwash-frontend
 ┣ 📜 pedirlavagem.html
 ┣ 📜 meuscarros.html
 ┣ 📜 adicionarcarro.html (opcional)
 ┣ 📜 minhaslavagens.html (opcional)
 ┣ 📂 css (ou styles)
    ┗ 📜 styles.css
 ┣ 📂 js (ou scripts)
 ┗ 📂 img (ou images)
    ┣ 🖼️ profile.png
    ┣ 🖼️ turingwash-icon.svg
    ┗ 🖼️ turingwash-logo.svg
```
