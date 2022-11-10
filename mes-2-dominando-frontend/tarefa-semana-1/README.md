# Tarefa - Semana 1: Começando com HTML

Saudações, estudante do nosso bootcamp! Esta é a 1ª tarefa do nosso segundo mês do nosso Bootcamp Full Stack Developer do ITuring. Dessa vez, nossas tarefas serão orientadas para você desenvolver um projeto de front-end.

## Sobre a tarefa

Na tarefa da Semana 1 do **Mês 2 - Dominando Front-End**, teremos as seguintes etapas:

- **[Etapa 1:](#etapa-1-preparando-se-para-o-projeto)** Preparando-se para o projeto
- **[Etapa 2:](#etapa-2-delimitando-os-elementos-da-página)** Delimitando os elementos das páginas
- **[Etapa 3:](#etapa-3-criando-o-html-das-páginas)** Criando o HTML das páginas
- **[Enviando sua tarefa no Discord](#enviando-a-sua-tarefa-no-discord)**

## Etapa 1: Preparando-se para o projeto

A sua organização após a finalização da Mês 1 do bootcamp ficou algo semelhante a:

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
     ┗ 📜 <arquivos da semana 3...>
```

A tarefa da Semana 1 do Mês 2 será entregue em um **novo repositório**. Vamos criar a estrutura para a execução do projeto.

### Subindo o resumo da semana

1. Utilizando o terminal, navegue para a pasta que você está desenvolvendo as tarefas `bootcamp-full-stack-ituring`.
1. Crie a pasta `mes-2-dominando-frontend` e navegue para dentro dela
1. Agora crie o diretório com o nome de `resumos` e navegue para dentro dele
1. Dentro de `resumos`, crie um arquivo chamado `resumo-semana-1.md`
1. Agora abra o arquivo `resumo-semana-1.md` em um editor de texto
1. Copie e cole [este conteúdo](resumo/resumo-semana-1.md) nesse arquivo no editor de texto. Salve a alteração
1. Confira se está tudo certo, em seguida faça o commit e suba esta alteração para o seu GitHub

### Criando a estrutura para a entrega

Antes da gente começar a desenvolver o projeto, vamos criar o novo repositório para o projeto:

1. No seu GitHub, crie um novo repositório remoto com o nome `turingwash-front-end`
1. Agora faça o clone deste repositório remoto para a sua máquina local com `git clone url_do_repositorio_remoto`

**Importante:** lembre-se que este é um repositório remoto completamente novo. Ou seja, ele não tem nenhuma relação com o repositório `bootcamp-full-stack-ituring`. Por isso, não faça o clone dentro do repositório local `bootcamp-full-stack-ituring`. Lembre-se, repositórios nunca devem ficar dentro de um outro repositório.

A estrutura de pastas do seu repositório de tarefas `bootcamp-full-stack-ituring` deverá ficar da seguinte forma:

```
📦 bootcamp-full-stack-ituring
 ┗ 📂 mes-1-logica-de-programacao
   ┗ 📂 <pastas das tarefas da do mês 1>
 ┗ 📂 mes-2-dominando-frontend
   ┗ 📂 resumos
     ┗ 📜 resumo-semana-1.md
```

Já o novo repositório por enquanto deverá ficar assim, vazio:
```
📦 projeto-turingwash-frontend
```
Pronto, agora finalmente bora desenvolver o projeto!

## Etapa 2: Delimitando os elementos da página

Antes da gente entrar na parte prática, vamos entender melhor como vai ser o projeto de frontend que você desenvolverá ao longo de todo esse mês de frontend. 

### Entendendo o projeto de frontend

Em nosso projeto, você vai desenvolver uma aplicação web cuja função será permitir com que pessoas solicitem um profissional da empresa de lava-jato TuringWash para ir até a sua localidade e lavar o seu carro sem você precisar sair de onde você está. Para isso, o time de engenharia do qual você faz parte começou a construir as primeiras User Stories que descreverão as funcionalidades deste projeto. Depois de uma longa discussão junto com os gerentes de produto (product managers), o time chegou à conclusão de que as primeiras funcionalidades a serem desenvolvidas serão as seguintes:
```
Feature 1: Listagem de lavadores disponíveis

**Como** uma pessoa que está com o carro sujo
**Quero** ver a lista de profissionais do CarWash disponíveis
**Para** escolher o lavador com melhor avaliação e preço para limpar o meu carro

Feature 2: Meus carros

**Como** uma pessoa que está com o carro sujo
**Quero** adicionar/remover/visualizar informações sobre o(s) meu(s) carro(s) a ser(em) lavado(s)
**Para** permitir que os lavadores saibam qual carro eles vão lavar

Feature 3: Minhas lavagens

**Como** uma pessoa que está com o carro sujo
**Quero** visualizar todas as lavagens que já fiz no meu carro
**Para** ver o quanto já gastei e se já tem muito tempo que não coloquei meu carro para lavar

```

Baseando-se nessas User Stories, o time de design desenvolveu o layout dessas páginas, ou também chamados de mockup. Os layouts você pode conferir [aqui](https://www.figma.com/file/vLxv5eN0RWQTCIniGv2U9y/Turing-Wash?node-id=0%3A1).

Agora é a sua vez:
1. Dentro de `turingwash-frontend`, crie as páginas html para as seguintes telas: `pedirlavagem.html` e `meuscarros.html`
2. Crie uma conta no [Miro](https://miro.com/pt/) e faça uma cópia do [nosso projeto](https://miro.com/welcomeonboard/MjI5NHp5dHd4MXFRVlZhVVFkY1NIcmZTZGk2OHpsa1MyZXg1TjMxMHk2VGNoSW9JS1N3MERmV3BZamlBa1ZwM3wzNDU4NzY0NTMyNDc5MDQzNjU0?share_link_id=28296698674). Para copiar, basta ir no `Ícone de engrenagem` -> `Board` -> `Make a copy`. **Importante:** ao copiar, clique em "Switch team" ao invés de "Duplicate board" para que a cópia só fique visível para você
3. Agora, antes de começar a construir as páginas HTML, faça como o nosso instrutor mostrou em aula: delimite os elementos da página para que fique mais claro quais elementos/tags você deverá criar para estruturar as páginas. Já delimitamos a primeira! Agora faça o mesmo para as outras. Se não tiver certeza se ficou bom, mostre pra gente no Discord que ajudamos!
4. Já delimitamos a página `pedirlavagem.html` para você, agora faça isto para as outras

**Importante 1:** não delimite as páginas definidas para a versão mobile presentes no Miro.

**Importante 2:** por enquanto, ignore a User Story 4 presente no Miro.

Ao final desta etapa, o seu repositório do projeto deverá ter os seguintes arquivos e pastas:
```
📦 turingwash-frontend
 ┣ 📜 pedirlavagem.html
 ┗ 📜 meuscarros.html
```

## Etapa 3: Criando o HTML das páginas

Agora é hora de praticar as tags do HTML. Para cada uma das seguintes páginas:
```
📦 turingwash-frontend
 ┣ 📜 pedirlavagem.html
 ┗ 📜 meuscarros.html
```

Crie apenas a estrutura do HTML das mesmas. Esqueça do CSS, neste momento é apenas o HTML. Lembre-se que por enquanto é apenas a estrutura, ou seja, o layout e design da página neste momento não estará igual ao que a equipe de design disponibilizou.

Se não lembrar muito bem das tags padrões, retorne à aula ou aos slides. A partir de agora, qualquer tag que você quiser adicionar e não lembrar, é o momento de dar uma pesquisada no Google. Se mesmo assim não encontrar, fale com a gente no Discord que ajudamos prontamente! O processo de pesquisa a partir de agora será mais exercitado do que no Mês 1.

Você vai perceber que muitos elementos das páginas se repetem nas outras. Por enquanto, não temos uma solução de reutilizar os elementos parecidos entre as páginas, isto você verá como fazer no futuro (no mês 4 que abordamos React). Por isso, neste momento, não tem problema algum de você copiar e colar os elementos entre as páginas e fazer as adaptações necessárias.

Ao final desta etapa, todos os seguintes arquivos deverão estar com o código HTML construído:
```
📦 turingwash-frontend
 ┣ 📜 pedirlavagem.html
 ┗ 📜 meuscarros.html
```

Nunca se esqueça! Teste o seu código, veja se está funcionando, e depois faça o commit e suba ele no seu GitHub.

**Importante:** lembre-se que o navegador faz de tudo para renderizar corretamente o código HTML, mesmo se você tiver construído ele com vários erros de sintaxe (ex: esqueceu de fechar uma tag). Por isso, instale a extensão HTMLHint no VSCODE para verficiar se tem algum erro de sintaxe no seu código HTML. Para instalar:
1. Vá em extensões no menu lateral esquerdo (é o ícone com 4 quadradinhos, sendo que 1 dele está solto)
1. Digite `HTMLHint` no campo de busca
1. Instale a extensão
1. Agora, no topo direito do VSCode - bem lá no topo mesmo - tem 3 ícones bem pequenos. O ícone que tem um risco horizontal é o que abre o terminal do VSCODE. Clique nele
1. Com o terminal do VSCODE aberto e com o HTMLHint instalado, sempre que você digitar alguma coisa errada no HTML, a aba "PROBLEMS" do terminal vai mostrar o que está errado para que você possa corrigir.

### Sobrou um tempo extra? (opcional)

Se você conseguiu construir as 2 páginas com as tags HTML e ainda sobrou um tempinho até o prazo final da tarefa, fique à vontade de construir as outras duas! Para isso, basta criar os 2 arquivos para as outras 2 páginas no seu projeto e implementar as páginas HTML. Ao final, os arquivos ficarão assim:
```
📦 turingwash-frontend
 ┣ 📜 pedirlavagem.html
 ┣ 📜 meuscarros.html
 ┣ 📜 adicionarcarro.html
 ┗ 📜 minhaslavagens.html
```

## Enviando a sua tarefa no Discord

Para enviar a tarefa, dessa vez, basta copiar o link do seu repositório `turingwash-frontend` no GitHub e colar no formulário solicitado no [Discord do curso](https://discord.gg/FXage6t99U) no canal **#💪 │ tarefa-semana-1** do **Mês 2 - Dominando Front-End**.

Ao final de todas as etapas, os seus 2 repositórios deverão ter as seguintes pastas e arquivos:

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
