/*
### Prática 14: Cálculo do IMC

1. No arquivo `pratica-14.js`, crie uma função que recebendo o peso (em kg) e altura (em metros) de uma pessoa como parâmetros, retorne a classificação do IMC de acordo com o seguinte cálculo: IMC = PESO / (ALTURA * ALTURA)
2. A classificação deverá obedecer os seguintes critérios:
- "Abaixo do Peso" -> IMC abaixo de 18.5
- "Peso Normal" -> IMC entre 18.5 e 25
- "Sobrepeso" -> IMC entre 25 e 30
- "Obesidade" -> IMC maior que 30
3. A função deverá retornar um dos textos informados ("Abaixo do Peso", "Peso Normal", etc)
4. Teste bastante, veja se está funcionando completamente, e depois faça o commit do seu código e suba ele no seu GitHub

SOLUÇÃO:
*/

/* Solução 1 */
function checagemImc1(peso, altura) {
    const imc = peso / (altura * altura)
    let classificacaoImc

    if (imc < 18.5)
        classificacaoImc = "Abaixo do Peso"
    else if (imc < 25)
        classificacaoImc = "Peso Normal"
    else if (imc < 30)
        classificacaoImc = "Sobrepeso"
    else
        classificacaoImc = "Obesidade"

    return classificacaoImc
}

/* Solução 2 (Mais enxuta) */
function checagemImc2(peso, altura) {
    const imc = peso / (altura * altura)

    if (imc < 18.5)
        return "Abaixo do Peso"
    if (imc < 25)
        return "Peso Normal"
    if (imc < 30)
        return "Sobrepeso"

    return "Obesidade"
}

console.log(checagemImc1(70, 1.7))
console.log(checagemImc2(70, 1.7))
