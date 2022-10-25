/*
Prática 12: Dividindo em grupos

Algo muito comum em trabalhos de escola é dividir a turma em grupos. Este método também é utilizado na computação, mais especificamente na hora de compactar arquivos para deixá-los com um tamanho menor. Não é o propósito aprender a compactar arquivos aqui, por isso vamos focar no 1º exemplo e dividir uma lista de pessoas em grupos.

Crie uma função no arquivo `pratica-12.js` que recebe como argumento uma lista de pessoas e exibe na tela os grupos formados com 2 pessoas. Se faltar alguém, acrescente-a no último grupo. Veja abaixo um exemplo.

Dado de entrada da função:
["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"]

Chamando a função:
suaFuncao(["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"])

Valor exibido pela função:
Grupo 1: Anderson Luz, Fabio Vechia 
Grupo 2: Claudia Lopes, Rafael Alves
Grupo 3: Maria Mansano, Jairo Ferreira, Vitor Ribeiro


Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.
*/

/* IMPORTANTE: a melhor solução é a solução 4! Se não quiser ver as soluções anteriores, pode pular direto pra solução 4.

/* SOLUÇÃO 1 (Solução simples, mas de lógica não muito completa) */
let exibeGruposFormadosS1 = lista => {
    for (let i = 0; i < lista.length - 1; i += 2) {

        // Colocando as 2 pessoas para ser exibida no grupo atual
        let resultadoGrupoAtual = `Grupo ${i/2 + 1}: ${lista[i]}, ${lista[i+1]}`

        // Se eu estiver no último grupo e sobrar uma última pessoa, adicionar ela neste último grupo
        const sobrouAlguem = lista.length - i === 3
        if (sobrouAlguem) resultadoGrupoAtual += `, ${lista[lista.length-1]}`
        
        // Exibindo o valor do grupo atual
        console.log(resultadoGrupoAtual)
    }
}
/* 
COMENTÁRIOS GERAIS SOBRE A SOLUÇÃO 1:
• Esta é uma solução mais simples. Lembrando que há outras formas de se resolver este problema, talvez até de mais fácil leitura.
• Veja que para verificar se sobrou, verificamos se o tamanho da lista menos o valor de i é igual a 3. Se for, adicionamos na string resultadoGrupo (veja que nesse caso a vírgula na string vem primeiro)
*/

/* SOLUÇÃO 2 (Solução um pouco mais completa, mas ainda assim não muito inteligente) */
let exibeGruposFormadosS2 = lista => {
    const tamGrupo = 5

    for (let i = 0, numGrupo = 1; i + tamGrupo < lista.length; i += tamGrupo, numGrupo++) {
        let resultadoGrupoAtual = `Grupo ${numGrupo}: `

        // Colocando cada pessoa para ser exibida no grupo atual
        for (let j = i; j < i + tamGrupo - 1; j++)
            resultadoGrupoAtual += lista[j] + ", "

        const indiceUltimoMembroGrupoAtual = i + tamGrupo - 1
        resultadoGrupoAtual += lista[indiceUltimoMembroGrupoAtual]

        // Se eu estiver no último grupo e sobrar alguém, adicionar ela(s) no último grupo
        const estouNoUltimoGrupo = lista.length - i < tamGrupo*2
        const sobrouAlguem = lista.length - i > tamGrupo
        if (estouNoUltimoGrupo && sobrouAlguem) {
            for (let j = i + tamGrupo; j < lista.length; j++)
                resultadoGrupoAtual += ", " + lista[j]
        }
        
        // Exibindo o valor do grupo atual
        console.log(resultadoGrupoAtual)
    }
}
/* 
COMENTÁRIOS GERAIS SOBRE A SOLUÇÃO 2:
• Esta é uma solução que considera a possibilidade de tamanhos de grupo variados. Ou seja, imagina que podemos evoluir essa função para receber o tamanho dos grupos como parâmetro. Ou seja, a soluçnao considera isso, visto que colocamos dessa vez o tamanho do grupo na variável `tamGrupo`
• Uma outra forma de resolver este problema é usando o método .slice(). Com esta forma, fica mais fácil a leitura do código, além de ser mais rápido a solução. Deixo pra você pensar numa solução mais simples do que a proposta acima usando o método .slice().
• Veja que precisamos colocar um for dentro do outro para ir exibindo cada pessoa no grupo
• Observe que essa questão de exibir a vírgula no texto é bem chatinho. Tivemos que tratar isso
• IMPORTANTE: considerando então grupos de tamanhos variados, não temos mais garantido que vai sobrar sempre 1 no final, né? Por exemplo, para 11 pessoas e formando grupos de 3, vai sobrar 2 pessoas no final. O que fazer neste caso? Neste caso, o problema diz "se faltar mais alguém, adicione ela no último grupo". Com isso, para um grupo de 11 pessoas e formando grupos de 3, o último grupo terá 5 pessoas. Neste caso, a solução é ainda mais complicadinha e evolve pensar em uma lógica de como tratar esse último grupo. Colocamos uma solução para isso no código, mas com certeza existem outras formas de resolver este problema que talvez seja mais simples, como por exemplo usando o método .slice(). Usamos o .slice() na solução 4.
*/

/* SOLUÇÃO 3 (Solução completa, mas de difícil leitura e entendimento) */
let exibeGruposFormadosS3 = lista => {
    const tamGrupo = 5
    let grupos = []

    // Montando os grupos e colocando dentro de `grupos`
    for (let i = 0; i + tamGrupo < lista.length; i += tamGrupo) {

        // Montando o grupo atual (este 'for' faz a mesma coisa que o método .slice() faria)
        let grupo = []
        for (let j = i; j < i + tamGrupo; j++)
            grupo.push(lista[j])

        // Se eu estiver no último grupo e sobrar alguém, adicionar ela(s) no último grupo
        const estouNoUltimoGrupo = lista.length - i < tamGrupo*2
        const sobrouAlguem = lista.length - i > tamGrupo
        if (estouNoUltimoGrupo && sobrouAlguem) {
            for (let j = i + tamGrupo; j < lista.length; j++)
                grupo.push(lista[j])
        }

        // Adicionado o grupo atual na lista de grupos
        grupos.push(grupo)
    }

    // Exibindo cada pessoa de cada grupo montado
    for (let i = 0; i < grupos.length; i++) {

        // Exibindo o valor do grupo atual (observe como essa questão de ter que exibir as vírgulas no console.log() deixa o código mais complicado de ler e entender o que ele faz)
        // Existe uma solução mais prática para essa questão das vírgulas. Veremos na solução 4
        let resultadoGrupoAtual = `Grupo ${i+1}: `
        for (let j = 0; j < grupos[i].length - 1; j++)
            resultadoGrupoAtual += grupos[i][j] + ", "
            
        const indiceUltimoMembroGrupoAtual = grupos[i].length - 1
        resultadoGrupoAtual += grupos[i][indiceUltimoMembroGrupoAtual]

        console.log(resultadoGrupoAtual)
    }
}
/* 
COMENTÁRIOS GERAIS SOBRE A SOLUÇÃO 3:
• Já esta seria uma solução mais completa ainda, pois além de exibir cada grupo, ela monta esses grupos numa lista de listas. Depois dá um console.table(grupos) logo depois do 1º for pra você ver os grupos montados em uma lista de listas
• Uma outra forma de resolver este problema é usando o método .slice(). Com esta forma, fica mais fácil a leitura do código, além de ser mais rápido a solução
• Essa solução completa é a que faz mais sentido de ser utilizada, pois nela nós temos os grupos realmente formados na memória do computador por meio da lista de listas
• Porém, a solução 4 é melhor ainda!
*/

/* SOLUÇÃO 4 (Melhor solução. Completa, de fácil leitura e entendimento) */
let exibeGruposFormadosS4 = (lista, tamGrupo) => {
    let grupos = []
    const tamLista = lista.length
    const qtdGrupos = parseInt(tamLista/tamGrupo)
    const qtdGruposMenosUm = qtdGrupos - 1

    // Montando os grupos e colocando dentro de `grupos`
    for (let i = 0; i < qtdGruposMenosUm; i++) {
        const indiceInicioGrupoAtual = i*tamGrupo
        const indiceFimGrupoAtual = indiceInicioGrupoAtual + tamGrupo
        const grupoAtual = lista.slice(indiceInicioGrupoAtual, indiceFimGrupoAtual)
        grupos.push(grupoAtual)
    }

    const indiceInicioUltimoGrupo = qtdGruposMenosUm*tamGrupo
    grupos.push(lista.slice(indiceInicioUltimoGrupo, tamLista))

    // Exibindo cada pessoa de cada grupo montado (veja que com o método .join() fica muito mais fácil colocar a vírgula entre os membros do grupo)
    for (let i = 0; i < grupos.length; i++) {
        console.log(`Grupo ${i + 1}: ${grupos[i].join(', ')}`)
    }
}
/* 
COMENTÁRIOS GERAIS SOBRE A SOLUÇÃO 4:
• Veja que não precisamos usar nenhuma verificação com 'if'
• Veja como que o uso do método .slice() e .join() deixou tudo muito mais prático
*/

/* TESTANDO AS SOLUÇÕES */
let lista = ["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro", "Pedro Abreu", "Gilberto Machado", "Guilherme Rodrigues", "Augusto Roberto"]
exibeGruposFormadosS1(lista)
exibeGruposFormadosS2(lista)
exibeGruposFormadosS3(lista)
exibeGruposFormadosS4(lista, 1)
exibeGruposFormadosS4(lista, 2)
exibeGruposFormadosS4(lista, 3)
exibeGruposFormadosS4(lista, 4)