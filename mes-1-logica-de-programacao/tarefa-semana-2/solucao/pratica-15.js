/*
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

SOLUÇÃO:
*/

const calculoImc = (peso, altura) => peso / (altura * altura)

function classificacaoImc(imc) {
    if (imc < 18.5)
        return "Abaixo do Peso"
    if (imc < 25)
        return "Peso Normal"
    if (imc < 30)
        return "Sobrepeso"

    return "Obesidade"
}

function checagemImc(peso, altura) {
    const imc = calculoImc(peso, altura)
    console.log(classificacaoImc(imc))
}

checagemImc(70, 1.7)
