/*
Prática 10: Registrando a quantidade de votos

Em uma contagem de votos para os preferidos para ganhar a próxima Copa do Mundo de futebol, foi feita uma votação por meio de códigos que obedecem as seguintes regras:

- Código 1: Brasil
- Código 2: Argentina
- Código 3: Espanha
- Código 4: Portugal

Os votos foram computados e registrados em uma lista.

Agora eles precisam de uma pessoa que saiba programar para computar o resultado. Ou seja, de você!

Por isso, crie uma função no arquivo `pratica-10.js` que recebendo como argumento uma lista de votos, exiba na tela quantos votos recebeu cada país com base no código acima.

Dados de entrada da função:
[1, 1, 1, 4, 4, 2, 3, 2]

Chamando a função:
suaFuncao([1, 1, 1, 4, 4, 2, 3, 2])

Valor exibido pela função:
```
Brasil: 3 voto(s)
Argentina: 2 voto(s)
Espanha: 1 voto(s)
Portugal: 2 voto(s)

Resultado:
Brasil é o preferido para ganhar a Copa do Mundo!
```

Sugestão: caso sinta necessidade, fique à vontade de criar funções auxiliares para resolver este problema

Teste o seu código, veja se está funcionando de acordo com o exemplo de entrada e saída, e depois faça o commit e suba ele no seu GitHub.
*/

/* SOLUÇÃO */
let verificaPreferidoDaCopa = (votosBrasil, votosArgentina, votosEspanha, votosPortugal) => {
    if (votosBrasil >= votosArgentina && votosBrasil >= votosEspanha && votosBrasil >= votosPortugal)
        return "Brasil"
    else if (votosArgentina >= votosEspanha && votosArgentina >= votosPortugal)
        return "Argentina"
    else if (votosEspanha >= votosPortugal)
        return "Espanha"
    else
        return "Portugal"
}

let exibePreferidoDaCopa = listaVotos => {
    let votosBrasil = 0
    let votosArgentina = 0
    let votosEspanha = 0
    let votosPortugal = 0

    for (voto of listaVotos) {
        votosBrasil += voto === 1 ? 1 : 0
        votosArgentina += voto === 2 ? 1 : 0
        votosEspanha += voto === 3 ? 1 : 0
        votosPortugal += voto === 4 ? 1 : 0
    }
    
    var preferido = verificaPreferidoDaCopa(votosBrasil, votosArgentina, votosEspanha, votosPortugal)

    console.log(`Brasil: ${votosBrasil} voto(s)`)
    console.log(`Argentina: ${votosArgentina} voto(s)`)
    console.log(`Espanha: ${votosEspanha} voto(s)`)
    console.log(`Portugal: ${votosPortugal} voto(s)\n`)

    console.log("Resultado:")
    console.log(`${preferido} é o preferido para ganhar a Copa do Mundo!`)
}

/* TESTANDO A SOLUÇÃO */
let listaVotos = [1, 1, 1, 4, 4, 2, 3, 2]
exibePreferidoDaCopa(listaVotos)