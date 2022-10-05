# Tarefa - Semana 1: Dominando GitHub e começando com Programação

Saudações, estudante do nosso bootcamp! Esta é a 1ª tarefa do nosso Bootcamp Full Stack Developer do ITuring. Em cada semana do nosso bootcamp, você terá uma tarefa com um conjunto de etapas para solucionar ao longo da semana.

Na tarefa da semana 1, teremos as seguintes etapas:
- **[Etapa 1:](#etapa-1-instalando-o-ambiente-de-desenvolvimento-e-preparando-a-caixa-de-ferramentas)** Instalando o ambiente de desenvolvimento e preparando a caixa de ferramentas
- **[Etapa 2:](#etapa-2-praticando-os-comandos-de-terminal)** Praticando os comandos de terminal
- **[Etapa 3:](#etapa-3-trabalhando-com-os-comandos-git)** Praticando os comandos de Git
- **[Etapa 4:](#etapa-4-criando-sua-conta-no-github)** Criando sua conta no GitHub
- **[Etapa 5:](#etapa-5-subindo-as-etapas-anteriores-para-o-seu-repositório-remoto-bootcamp-full-stack-ituring)** Subindo as etapas anteriores para o seu repositório remoto `bootcamp-full-stack-ituring`
- **[Etapa 6:](#etapa-6-dominando-declaração-de-variáveis-atribuição-de-valores-e-operações-com-javascript)** Dominando declaração de variáveis, atribuição de valores e operações com JavaScript
- **[Enviando sua tarefa no Discord](#enviando-a-sua-tarefa-no-discord)**

**IMPORTANTE:** realize as etapas 4, 5 e 6 apenas depois de participar da 2ª aula desta semana.

## Etapa 1: Instalando o ambiente de desenvolvimento e preparando a caixa de ferramentas

Como falamos em aula, para preparar o seu ambiente de desenvolvimento, você vai precisar de instalar 3 coisas:
- o editor de texto VSCODE
- o programa Terminal e Git
- o programa Node

O VSCode é onde vamos de fato escrever códigos. O Git vamos usar pra gente controlar e ver o histórico do que estamos desenvolvendo. Por fim, o Node vamos utilizar para executar os códigos que vamos escrever em JavaScript.

Você pode optar por outro editor texto diferente do VSCode sem problemas, mas os exercícios e exemplos desse curso serão feitos com VSCode.

Vamos lá!

### Instalando o VSCODE

Para instalar o VSCODE, basta entrar [aqui](https://code.visualstudio.com/) e seguir os passos de instalação de acordo com o seu sistema operacional. Se surgir dúvidas, poste lá no [nosso Discord](https://discord.gg/FXage6t99U) ou pode seguir esse [tutorial](https://balta.io/blog/visual-studio-code-instalacao-customizacao). No Windows, não esqueça de marcar a opção "Add to Path".

### Instalando o terminal e o Git no seu computador

Como vimos na 1ª aula, o terminal é onde a gente consegue interagir com o sistema operacional por meio de **comandos de texto**. Estamos acostumados a interagir com o sistema operacional (Windows, MacOS, etc) por meio da interface, onde manipulamos janelas, entramos em programas "clicando 2 vezes" com o mouse, navegamos por pastas, etc. Já a outra forma de interagir com o SO (Sistema Operacional) é por meio de comandos de texto. No terminal nós fazemos isso. Nós digitamos textos para navegar em pastas, abrir e executar arquivos, configurar ferramentas, etc.

**Nunca se esqueça!** no terminal, você **sempre** está em algum lugar! O terminal é como um navegador de pastas. Você sempre estará em alguma pasta do seu computador. Por isso, certifique-se sempre de que está no lugar correto quando for executar algum comando.

Como podemos instalar o terminal? Vamos ver agora. Siga as instruções do SO que você estiver utilizando.

#### Instalando o terminal e o Git no MacOS ou Linux

O MacOS e o Linux já possuem o terminal instalado. Para abrir o terminal no MacOS, [siga estes passos](https://pt.wikihow.com/Abrir-o-Terminal-no-Mac). No Linux, [siga estes passos](https://pt.wikihow.com/Abrir-uma-Janela-do-Terminal-no-Ubuntu).

Além do terminal, você também vai precisar do programa chamado `git`. Para instalar o `git`, tanto para MacOS, como para Linux, basta seguir as instruções [aqui](https://git-scm.com/downloads).

#### Instalando o terminal e o Git no Windows

O Windows possui um terminal padrão, mas ele não é do tipo Unix/Linux. Por conta disso, vamos utilizar o Git Bash como terminal no Windows. Por que usar um terminal do tipo Unix/Linux? Você vai entender melhor lá no Mês 3, mas a razão é porque [mais de 96% dos principais servidores do mundo são do tipo Linux](https://www.zdnet.com/home-and-office/networking/can-the-internet-exist-without-linux/). Por isso, quando você começar a trabalhar com servidores, é importante se acostumar com os comandos que realmente são utilizados nos servidores. Portanto, considere que no Windows o Git Bash é o nosso terminal. 

1. Para instalar o Git Bash no Windows, clique [aqui](https://git-scm.com/downloads)
1. Depois clique em "Download for Windows", em seguida em "Click here to download"
1. Quando terminar de baixar, clique no instalador (começa com "Git-...") e depois clicar em "Sim" e "Next" por **todos** os passos
1. Caso queira, na etapa de escolha do editor de texto padrão, selecione o VSCODE

E o Git? Bom, o Git Bash já vem com o Git instalado. :)

### Instalando o programa Node

O Node nós vamos utilizar diariamente enquanto estivermos programando. Ele é o programa que vai executar o código que a gente vai aprender a escrever em JavaScript! Ele é um programa como qualquer outro, com a diferença de que ele consegue executar códigos que por consequência viram programas (ou software). Chamamos este tipo de programa de 'interpretador' ou 'compilador'.

Um compilador converte um programa inteiro em zeros e uns, o idioma que o computador entende. Já um interpretador é como se fosse uma tradução simultânea, ele vai convertendo partes do código em código binário e executando-os sequencialmente. Todos os programas de computador do mundo passam por este processo de interpretação ou compilação. Programas e aplicativos que você utiliza diariamente foram criados assim.

#### Instalando o Node no Windows

1. Clique [aqui](https://nodejs.org/en/) e em seguida clique no botão de download que tem a sigla "LTS"
1. Seu Windows é uma versão antiga? Então instale o Node com [este instalador](https://nodejs.org/download/release/v13.14.0/node-v13.14.0-win-x64.zip)
1. Em seguida, basta seguir as instruções de instalação e pronto! **Importante:** o Node é um programa você vai executar dentro do terminal. Ou seja, no Windows, dentro do Git Bash!

#### Instalando o Node no Linux
1. Se estiver usando o Ubuntu, execute o comando `sudo apt install nodejs` no terminal
1. Caso contrário, baixe o instalador [aqui](https://nodejs.org/en/download/).  **Importante:** o Node é um programa que não tem um ícone para clicar e executar. Ele na verdade funciona dentro do terminal. Ou seja, no Windows, dentro do Git Bash!

#### Instalando o Node no MacOS
1. Clique [aqui](https://nodejs.org/en/) e em seguida clique no botão de download que tem a sigla "LTS"
1. Em seguida, basta seguir as instruções de instalação e pronto!  **Importante:** o Node é um programa você vai executar dentro do terminal.

Finalmente! Vamos começar a praticar o terminal?

## Etapa 2: Praticando os comandos de terminal

Agora sim. Agora é a hora de praticar o terminal. Vamos começar praticando verificando se as instalações que você fez deram certo!

### Verificando se as instalações deram certo pelo terminal:
Abra o terminal (no Windows, lembre-se que é o programa "Git Bash") e execute os seguintes comandos:
- Digite `git --version` e pressione enter
- Digite `node --version` e pressione enter

Se as instalações tiverem funcionado corretamente, o terminal irá retornar as versões dos programas Git e Node. Fácil né? Para executar os comandos, basta digitar o comando e pressionar enter. Agora é a parte mais divertida. Vamos praticar os vários comandos existentes no terminal! 

### Dominando os comandos de terminal

Antes de começar, relembre os comandos de terminal assistindo a gravação da 1ª aula ou pelos slides fornecidos. Deixe eles num lugar visível. Quando não lembrar de algum comando, assista a aula ou dê uma pesquisada no Google (ou vídeos no Youtube)! Ou então peça ajuda no [nosso Discord](https://discord.gg/FXage6t99U). Vamos lá!
1. Utilizando o terminal (no Windows, o "git bash"), navegue para uma localização desejada (recomendamos o Desktop ou Área de Trabalho) e crie uma pasta chamada `bootcamp-full-stack-ituring`. Esta será a pasta que você vai adicionar todas as suas tarefas ao longo do bootcamp
1. Confira se a pasta realmente foi criada com um comando que você sabe qual (dica: começa com 'l')
1. Navegue para a pasta `bootcamp-full-stack-ituring` e crie o diretório com o nome de `mes-1-logica-de-programacao` e navegue para dentro dele
1. Dentro da pasta `mes-1-logica-de-programacao`, crie o diretório com o nome de `tarefa-semana-1` e navegue para dentro dele
1. Dentro de `tarefa-semana-1`, crie um arquivo chamado `resumo-aula-1.md` no terminal (obs: nada de criar o arquivo com o mouse, viu? haha depois você verá que assim é bem mais rápido que pelo mouse)
1. *Pausa para dica 1:* pressione a seta pra cima e você poderá pegar os comandos anteriores que você digitou
1. *Pausa para dica 2:* quando você começar digitar o nome de uma pasta em um comando (por exemplo, `cd nomedapasta`), pressione 'tab' que o nome da pasta é preenchido automaticamente!
1. Continuando... agora abra o arquivo `resumo-aula-1.md` em um editor de texto (ou seja, no VSCODE)
1. Em seguida, copie e cole o conteúdo abaixo nesse arquivo no editor de texto. Salve a alteração


```
# Resumo Aula 1: Construindo a base de tudo

## O que é programação?
- Programação é um trabalho que hoje se faz presente em todos os setores da sociedade e da indústria. Desde a aviação, sistemas bancários e financeiros, no setor de saúde, serviços públicos, redes sociais. Programar é uma atividade essencial para o mundo digital.
- Programação é a espinha dorsal de praticamente qualquer produto, serviço ou empresa de tecnologia. Praticamente toda inovação no mundo tem programação no meio.
- Programação é a profissão que mais cresce no mundo, e está faltando cada vez mais profissionais qualificados para trabalhar com tecnologia.
- Programar é a arte de resolver problemas com código. Toda pessoa programadora é uma resolvedora de problemas.
- Existem vários títulos para quem trabalha com programação, mas no final todo mundo é programador.
- Programar é instruir o computador o que queremos que ele faça. Para isso, usamos uma linguagem de programação.
- Escrevemos instruções/comandos (código) seguindo as regras de sintaxe de uma linguagem de programação. Em seguida, convertemos este código que conseguimos ler em código que o computador consegue processar e executar por meio de um compilador/interpretador.

## Frontend e Backend
- Frontend é o lado do cliente, onde você interage com interfaces e envia/recebe informações para o/do servidor
- Backend é o lado do servidor, o que recebe/processa/envia informações recebidas do cliente e armazena essas informações normalmente em um banco de dados

## Introdução ao terminal
- Pessoas comuns interagem com o sistema operacional por meio da interface de usuário.
- Em programação, vamos precisar muitas vezes interagir com o sistema operacional por meio de comandos de texto. O Terminal tem esse propósito.

### Vejamos os comandos e termos mais comuns do terminal:
- `pwd` (**p**rint **w**orking **d**irectory): exibe qual é o seu diretório corrente
- Termo 'diretório corrente': no terminal, você sempre está em algum lugar, em alguma pasta do seu computador.  Quando você digita o comando `pwd`, ele mostra em qual pasta você está naquela exato momento. A pasta também é chamada de diretório. Ou seja, o diretório que você está é o diretório corrente.
- `ls` (**l**i**s**t files): lista o que está no seu diretório corrente
- `cd <diretório de destino>` (**c**hange **d**irectory): altera o diretório corrente para o diretório de destino
- `cd ..`: volta para o diretório anterior. Ex: se você está em `/diretorio-pai/diretorio-filho` e executa `cd ..`, o seu diretório corrente passa a ser `/diretorio-pai`
- `cd ../../../`: volta três diretórios. Você pode fazer `../` quantas vezes quiser. O número de vezes determinará quantos diretórios você vai voltar pra trás
- `mkdir <nomedodiretório>` (**m**a**k**e **dir**ectory): cria um novo diretório no diretório corrente

## Controle de versão com Git
- O Git é uma ferramenta para você conseguir controlar o que você está construindo.
- Sem uma ferramenta de controle de versão, fica muito difícil escrever código e principalmente trabalhar em um código que também está sendo trabalhado por outras pessoas
- Os principais comandos do git são 'git init', 'git status', 'git add', 'git commit -m "mensagem"' e 'git log'
```

9. De volta ao terminal, exiba as primeiras 5 linhas do texto do conteúdo do arquivo `resumo-aula-1.md` (dica: o comando `head` exibe mais do que as primeiras 5 linhas do texto. Pesquise no Google "comando head" e veja como mostrar uma quantidade de linhas específica).

1. Agora tente exibir todas as linhas que tem a palavra 'programação' no texto.

1. Desafio opcional: exiba todas as linhas que começam com '-'. Em seguida, exiba todas as linhas que **não** começam com '-'. Pesquise no google sobre o comando `grep` para conseguir resolver esse desafio.

Parabéns! Você já sabe manusear o terminal e executar comandos nele. O terminal é a base de toda pessoa que programa computadores. Nele você pode executar desde um pequeno código a até configurar um sistema super complexo na nuvem. Continue pesquisando por mais comandos no Google (ex: [este artigo](https://towardsdatascience.com/17-terminal-commands-every-programmer-should-know-4fc4f4a5e20e) é bem legal) e exercite a criação e remoção de pastas (comando `rm`), copiar arquivos (comando `cp`), mover arquivos (comando `mv`), etc.

Nas próximas etapas, você vai aprender a utilizar o comando `git` e também a executar o código que você escrever em JavaScript com o comando `node`.

## Etapa 3: Trabalhando com os comandos Git

Como vimos em aula, o Git é a ferramenta mais utilizada no mundo para controlar a versão do software que desenvolvemos. Existem outras ferramentas de controle de versão, mas o Git é dominante em todo o mundo.

Controlar o que estamos desenvolvendo é parte crucial na área de programação, por isso você deve dominar esta habilidade antes mesmo de começar a programar. Além disso, ao aprender a utilizar o Git, com o GitHub você terá o poder de mostrar aos recrutadores e interessados tudo o que você já construiu em sua carreira em programação.

Agora vamos começar a trabalhar com o git:

1. Pelo terminal, entre na pasta `bootcamp-full-stack-ituring` e faça um `git init` nela, ou seja, inicie este repositório para que você consiga controlar a versão do mesmo com os comandos git.

1. Configure o seu nome e email executando os seguintes comandos em sequência (**importante:** coloque o email que você vai registrar sua conta no GitHub):
``` 
  $ git config --global user.name "Seu nome aqui"
  $ git config --global user.email seuemail@aqui.br
```

3. Veja as configurações que você fez com `git config --list`

1. Agora veja quais informações são mostradas com o comando `git status`. Perceba que o arquivo que você trabalhou nas etapas anteriores foi identificado pelo git no "Untracked files:" (arquivos não rastreados). O git identificou esse novo arquivo, mas você ainda não fez o commit, ou seja, você ainda não registrou essa mudança

1. Para fazer o commit, primeiro temos que adicionar o que você criou na área de mudança, também chamado de *staging area*. Para isso, execute o comando `git add .`. O `.` significa "adicione todos os arquivos novos e/ou modificados"

1. Agora execute `git status` novamente e veja que agora o arquivo está em "Changes to be committed:", ou seja, mudanças a serem comitadas

1. Por fim, faça o commit com `git commit -m "sua mensagem de commit"`. Como uma boa prática, coloque na sua mensagem algo que identifique o que você fez, sempre começando com um verbo no infinitivo. Por exemplo: "adicionar resumo da aula 1 e organizar pastas"

1. Agora faça o `git status` novamente e veja foi exibido "nothing to commit, working tree clean", ou seja, nada para comitar, árvore de trabalho limpa

1. Execute `git log` e veja que o commit que você fez apareceu. Para sair, pressione a tecla Q

Pronto! Este é o ciclo básico para registrar mudanças com o git. Inicializamos a pasta raiz do nosso repositório com `git init`, em seguida usamos `git status` para sempre verificar se tem alguma mudança que ainda não registramos. `git add` para adicionar mudanças a serem registradas e `git commit -m "mensagem de commit"` para registrar essa mudança feita. Por fim, `git log` para verificar o histórico de mudanças que fizemos em nossos arquivos.

**IMPORTANTE:** realize as etapas 4, 5 e 6 apenas depois de participar da 2ª aula desta semana.

## Etapa 4: Criando sua conta no GitHub

Agora vamos criar sua conta no GitHub e mostrar como obter o token de acesso para que você consiga subir código no seu perfil do GitHub. Vamos lá!

### Criando sua conta no Github

1. No https://github.com/, clique em "Sign up" e siga os passos de criação de conta
1. Na área de recursos que se interessa, pode pular e em seguida selecionar a conta "free"
1. Pronto! Sua conta está criada. :)

### Obtendo o token de acesso

Para conseguir subir códigos no seu perfil do GitHub, você pode precisar de um token que funciona como uma senha. Fique tranquilo! Nas próximas etapas você entenderá melhor quando você deverá utilizar esse token. Vamos então obter esse token:
1. Logado na sua conta conta no https://github.com/, clique no seu perfil no canto superior direito da tela (onde tem um círculo com uma setinha para baixo)
1. Em seguida, clique no penúltimo item, em "Settings"
1. Depois disso, no menu lateral esquerdo, vá até o último item e clique nele, no "Developer settings"
1. Agora clique em "Personal access tokens"
1. Agora clique em "Generate new token"
1. Em "Note", pode colocar "Token para o curso Aprenda a Programar do ITuring"
1. Pode selecionar a opção "No expiration" no Expiration
1. Em seguida, pode selecionar todos os itens abaixo ("repo", "workflow", "write:packages", "delete:packages", etc).
1. Por fim, clique em "Generate token"
1. Pronto! Este será o token que você utilizará como senha para acessar e subir seus códigos no GitHub. **Importante:** guarde-o em algum lugar pra você utilizar nas próximas etapas
1. Caso você perca o token, basta ir novamente em Seu perfil -> Settings -> Developer settings -> Personal access tokens e gerar um novo token

### Criando o repositório remoto `bootcamp-full-stack-ituring`

Agora vamos criar o seu 1º repositório remoto no GitHub. Você utilizará esse repositório para colocar todas as soluções das tarefas desenvolvidas no nosso curso. Por isso, lembre-se de colocar um nome relevante e busque sempre deixá-lo organizado.

1. Com sua conta criada no https://github.com/, crie um novo repositório remoto com o nome `bootcamp-full-stack-ituring` ou outro nome que julgar relevante. Para isso, basta clicar em "Create repository"
1. Em seguida, preencha o nome do repositório em "Repository name" e deixe uma descrição caso queira
1. Mantenha a marcação "Public", caso contrário, não vamos conseguir ver seu repositório
1. Em seguida, clique em "Create repository"

## Etapa 5: Subindo as etapas anteriores para o seu repositório remoto `bootcamp-full-stack-ituring`

Nas etapas anteriores, você criou seu repositório local `bootcamp-full-stack-ituring`, obteve o token de acesso e criou o seu primeiro repositório remoto no GitHub também chamado de `bootcamp-full-stack-ituring`. Você utilizará esse repositório para colocar todas as soluções das tarefas desenvolvidas no nosso bootcamp.

Agora vamos vincular o seu repositório local com o seu repositório remoto:
1. Entre no repositório que você criou na sua conta do GitHub
1. Assim que entrar, você verá um link na tela começando com `https://github.com/...` e terminando com `.git`. Copie este link que é o link do seu repositório remoto
1. No terminal, entre na sua pasta local `bootcamp-full-stack-ituring` e execute o comando `git remote add origin link_do_seu_repositório_remoto`
1. Em seguida, execute o comando `git push --set-upstream origin master` (se perguntarem a senha, você pode colocar o token que você criou na [Etapa 4](#obtendo-o-token-de-acesso)!). Pronto! Você acabou de conectar o seu repositório local com o seu repositório remoto e subir as mudanças para o seu repositório remoto. Entre no GitHub e veja que agora as mudanças também estão lá! :)
1. Agora crie um arquivo chamado `index.html` dentro de `tarefa-semana-1`. Abra seu editor de texto e cole o conteúdo HTML abaixo no arquivo. Salve.
```
<html>
    <head>
        <title>ITuring</title>
    </head>

    <body>
        <h1>Primeira Página HTML - Aprendendo a Programar do ITuring</h1>
        <p>Esse é o primeiro arquivo e parágrafo do curso Aprenda a Programar do ITuring. ITuring vem de Instituto Turing. Turing vem de Alan Turing.</p>
        <p>Alan Mathison Turing (23 de junho de 1912 – 7 de junho de 1954) foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico. Turing foi altamente influente no desenvolvimento da ciência da computação teórica, proporcionando uma formalização dos conceitos de algoritmo e computação com a máquina de Turing, que pode ser considerada um modelo de um computador de uso geral. Ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial. Apesar dessas realizações ele nunca foi totalmente reconhecido em seu país de origem durante sua vida por ser homossexual e porque grande parte de seu trabalho foi coberto pela Lei de Segredos Oficiais.</p> 
    </body>
</html>
```
13. Utilizando o comando `git status`, o arquivo `index.html` deve aparecer como modificado/criado.
1. Faça o staging dele `git add *`.
1. Agora faça o commit com `git commit -m "mensagem de commit apropriada"`. Novamente, lembre-se de usar uma mensagem sucinta e relevante que deixe clara a alteração que você fez.
1. Agora, cheque o repositório remoto no seu perfil do github.com e veja que os arquivos e as novas pastas ainda **não** estão lá. Vamos subir nossas alterações do local para o remoto.
1. Para isso, execute o comando `git push` no terminal. Lembre-se, todos os comandos é recomendável que faça na pasta raiz `bootcamp-full-stack-ituring`. Se executar o comando fora da pasta, pode não funcionar.
1. Pronto. Agora veja que o arquivo está corretamente no seu repositório remoto! :D

Parabéns por ter chegado até aqui! É este o espírito, programar todos os dias e deixar o GitHub cada vez mais "verdinho". Agora vamos programar pra valer na última etapa da tarefa desta semana.

## Etapa 6: Dominando declaração de variáveis, atribuição de valores e operações com JavaScript

Antes de começar a programar, vamos organizar a pasta onde você está desenvolvendo as tarefas:
1. Vá para a pasta `tarefa-semana-1` e crie os seguintes arquivos (novamente, pelo terminal com o comando `touch nomedoarquivo` :D):
- `pratica-1.js`
- `pratica-2.js`
- `pratica-3.js`
- `pratica-4.js`
- `pratica-5.js`
- `pratica-6.js`
- `pratica-7.js`
2. Agora execute os comandos git (`git status` -> `git add *` -> `git commit -m 'mensagem de commit'` -> `git push`) para subir essa atualização no seu repositório remoto do GitHub

Pronto, agora bora programar!

### Prática 1: Exibindo o tipo da variável

Aqui vai a primeira prática:
1. Abra o arquivo `pratica-1.js` com o VSCODE ou o editor de código de sua preferência.
1. Agora declare 5 variáveis que vão armazenar os seguintes valores:
- seu nome
- seu email
- sua profissão
- sua idade
- o lugar que você sonha um dia conhecer (pode ser um país, cidade ou um local mesmo)
3. Dê um nome apropriado para cada variável. Ou seja, o nome da variável deve sugerir o valor que ela armazena (ex: se você vai armazenar sua idade, então o nome da variável ideal pode ser `idade`). Isso é primordial em programação, pois é muito importante que a gente escreva um código que as outras pessoas consigam entender, não só o computador.
1. Clique em salvar no seu editor de código e execute o código com `node pratica-1.js` no terminal (**importante:** o terminal deve estar na pasta onde está o arquivo `pratica-1.js` para conseguir executá-lo com o comando `node`).
1. Não exibiu nada? Então funcionou! É porque você não utilizou o `console.log()` (ainda, vamos utilizar daqui a pouco).
1. Agora execute os comandos git (`git status` -> `git add *` -> `git commit -m 'mensagem de commit'` -> `git push`) para subir essa atualização no seu repositório remoto do GitHub
1. Agora atribua a cada uma das variáveis o valor de cada uma delas, ou seja, o seu email, sua profissão, sua idade e o lugar que você sonha um dia conhecer. Lembre-se que cada valor precisa ser do tipo mais apropriado. Ou seja, idade deve ser um `Number` ou uma `String`? Assim em diante.
1. Clique em salvar no seu editor de código e execute o código com `node pratica-1.js` no terminal.
1. Agora execute os comandos git para subir essa atualização no seu repositório remoto do GitHub.
1. Agora exiba na tela cada um dos valores que você atribuiu às variáveis com o comando `console.log()` seguindo a seguinte ordem:
```
nome
email
profissao
idade
lugar que sonha conhecer
```
11. Clique em salvar no seu editor de código e execute o código com `node pratica-1.js` no terminal.
1. Agora execute os comandos git para subir essa atualização no seu repositório remoto do GitHub.
1. Agora você deve ajustar o uso do `console.log()` para que exibir qual é o tipo de cada uma das variáveis (**Dica:** pesquise o termo `verify type javascript` no Google). A resposta deve ser a seguinte:
```
string
string
string
number
string
```
14. Clique em salvar no seu editor de código e execute o código com `node pratica-1.js` no terminal.
1. Agora execute os comandos git para subir essa atualização no seu repositório remoto do GitHub.

Este é o processo de programar. Comitar o código é parte integral do processo. Nesta prática, você comitou com bastante frequência e também testou o código em vários pequenos momentos. Pra quem está começando, isso ajuda MUITO a errar menos e acertar mais (mas errar muito também não é problema, pelo contrário).

Por isso, nesse início, escreva partes bem pequenas do código e vai evoluindo aos poucos e sempre testando o código executando-o com `node nomedoarquivo.js`. Mais pra frente você certamente vai querer fazer menos commits, mas neste início, recomendamos que siga esse processo pois vai te ajudar bastante! Agora a próxima prática nós não vamos explicar muito cada um dos passos. Agora é com você.

### Prática 2: Ajude Alan Turing a decifrar o Enigma

O matemático e cientista da computação Alan Turing estava decifrando um dos códigos da máquina de criptografia Enigma durante a 2ª guerra mundial. Ele descobriu que se o código tiver mais que 6110 caracteres, a mensagem codificada não poderia ser decifrada em tempo hábil para derrotar os nazistas. Por isso ele pediu a ajuda dos programadores do ITuring para ajudá-lo a contabilizar quantos caracteres tem essa mensagem para que ele possa verificar se eles terão tempo hábil ou não para derrotar os nazistas.

Sua missão será escrever um programa que, ao receber esse código, informe para Alan Turing quantos caracteres tem a mensagem. Para isso, ele deixou um arquivo com o código imenso. Sua missão será armazenar esse código em uma variável e exibir quantos caracteres que ela tem. Vamos começar? Se quiser fazer sem o nosso passo-a-passo abaixo, apenas garanta que está seguindo as instruções da parte 1 e da parte 4 e 5.

1. Pegue o código que Alan Turing nos enviou [aqui](alanturingcode.js) e armazene esse valor em uma variável, tudo no arquivo `pratica-2.js`. Sim, é um valor muuuito grande, mas não tem problema, pode armazenar na variável que vai funcionar.
1. Agora pesquise no Google "verificar tamanho da string em javascript" e descubra como saber o tamanho de uma string em JavaScript.
1. Descobriu? Utilize esse método no seu código e armazene o valor contabilizado em uma nova variável (pense em um bom nome para essa nova variável)
1. Agora exiba na tela `O código possui <numero de caracteres aqui> caracteres`.
1. Por fim, faça o de sempre: teste o código, veja se ele está funcionando e depois suba ele no GitHub.

Show! Agora as próximas práticas não têm nenhum passo-a-passo a mais.

### Prática 3: Verificando se é uma string ou não

Dada as mesmas variáveis que você utilizou para a prática 1:
- seu nome
- seu email
- sua profissão
- sua idade
- o lugar que você sonha um dia conhecer (pode ser um país, cidade ou um local mesmo)

Coloque-as no arquivo `pratica-3.js` e exiba o valor `true` com `console.log()` se a variável for do tipo `string` e `false` se a variável não for do tipo `string`. Neste caso, a resposta deve ser a seguinte:
```
true
true
true
false
true
```

**Dica:** utilize os [operadores de comparação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_comparacao). Eles retornam true ou false.

**Lembrando:** teste o código, veja se ele está funcionando e depois suba ele no GitHub.

### Prática 4: Convertendo de milhas para quilômetros

Dado que a distância entre a Terra e a Lua em milhas é de 238900, coloque este valor em uma variável e em seguida exiba o valor convertido para quilômetros com `console.log()`. Faça esta prática no arquivo `pratica-4.js`. 

**O de sempre:** teste o código, veja se ele está funcionando e depois suba ele no GitHub.

### Prática 5: Preparando uma mensagem de WhatsApp com JavaScript

Dada as mesmas variáveis que você utilizou para a prática 1:
- seu nome
- seu email
- sua profissão
- sua idade
- o lugar que você sonha um dia conhecer (pode ser um país, cidade ou um local mesmo)

Coloque-as no arquivo `pratica-5.js` e encaixe-as nessa mensagem de WhatsApp que deve ser exibida na tela com `console.log()`:

```Olá, <valor da variável que tem o seu nome>! Somos aqui da agência de turismo Viagem dos Sonhos. Estamos te escrevendo este email, pois acabamos de confirmar as compras das passagens aéreas para <valor da variável que armazena o lugar que você sonha conhecer>. Confirma pra gente alguns dados? A sua idade é <valor da variável que armazena sua idade>, você é <valor da variável que armazena sua profissão> e o seu email é <valor da variável que armazena seu email>? Ficamos no aguardo. Muito obrigado e boa viagem! :D```

Utilize neste exercício [template strings](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals) para exibir o email.

### Prática 6: Exibindo a tabuada de 123

Dada as seguintes variáveis:
```
let numero1 = 1
let numero2 = 2
let numero3 = 3
let numero4 = 4
let numero5 = 5
let numero6 = 6
let numero7 = 7
let numero8 = 8
let numero9 = 9
let numero10 = 10
```

Coloque-as no arquivo `pratica-6.js`, calcula e exiba a tabuada de 1 a 10 de 123 utilizando cada uma dessas variáveis. A resposta deve ser a seguinte:
```
123
246
369
492
615
738
861
984
1107
1230
```

## Enviando a sua tarefa no Discord

Para enviar a tarefa, basta copiar o link do seu repositório `bootcamp-full-stack-ituring` no GitHub e colar no formulário solicitado no [Discord do curso](https://discord.gg/FXage6t99U) no canal **#💪 │ tarefa-semana-1**.

Ao final de todas as etapas, o seu repositório deverá ter as seguintes pastas e arquivos:

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
