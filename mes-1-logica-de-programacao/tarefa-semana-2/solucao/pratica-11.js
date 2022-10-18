/*
### Prática 11: Exibindo a cor RGB (Aprendendo o comando switch)

O objetivo do aprendizado de estruturas condicionais é muito além de decorar a sintaxe do seu código. É compreender como a combinação de funções com comandos de decisão permitem a flexibilidade e o desenho de fluxo da sua aplicação, construindo coisas cada vez maiores e mais organizadas. Uma alternativa à estrutura `if/else`, é o `switch`.

1. Pesquise ou acesse o [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#breaking_and_fall-through) para conhecer mais e aprender sobre o comando `switch`
2. Nos próximos meses, você conhecerá mais sobre CSS e como estilizar e criar interfaces de aplicações web. Por agora, saiba que o computador não entende cores, a gente codifica cores com números. A partir dos números é que o computador consegue exibir a cor correta. Algumas opções de codificação de cores pode ser o [RGB](https://pt.wikipedia.org/wiki/RGB) (Reg, Green, Blue).
3. No arquivo `pratica-11.js`, crie uma função que recebe uma cor escrita em texto como parâmetro e retorna o valor no formato RGB
4. As cores possíveis que a função poderá receber serão as seguintes:
- `"vermelha"`
- `"laranja"`
- `"amarela"`
- `"verde"`
- `"azul claro"`
- `"azul marinho"`
- `"rosa"`
5. Para cada uma delas, a sua função deverá retornar o seguinte valor em `string`:
- `"vermelha"` -> `"rgb(255,0,0)"`
- `"laranja"` -> `"rgb(255,128,0)"`
- `"amarela"` -> `"rgb(255,255,0)"`
- `"verde"` -> `"rgb(0,255,0)"`
- `"azul claro"` -> `"rgb(0,255,255)"`
- `"azul marinho"` -> `"rgb(0,0,255)"`
- `"rosa"` -> `"rgb(255,0,255)"`

Caso a cor informada no parâmetro não coincida com nenhuma das informadas, informe o seguinte valor padrão: `"rgb(255,255,255)"`.

SOLUÇÃO:
*/

/* Solução 1 */
function conversaoParaRGB1(cor) {
    let rgbResultante
    switch (cor) {
        case "vermelha":
            rgbResultante = "rgb(255,0,0)"
            break
        case "laranja":
            rgbResultante = "rgb(255,128,0)"
            break
        case "amarela":
            rgbResultante = "rgb(255,255,0)"
            break
        case "verde":
            rgbResultante = "rgb(0,255,0)"
            break
        case "azul claro":
            rgbResultante = "rgb(0,255,255)"
            break
        case "azul marinho":
            rgbResultante = "rgb(0,0,255)"
            break
        case "rosa":
            rgbResultante = "rgb(255,0,255)"
            break
        default:
            rgbResultante = "rgb(255,0,255)"
    }
    return rgbResultante
}

/* Solução 2 (Mais enxuta) */
function conversaoParaRGB2(cor) {
    switch (cor) {
        case "vermelha":
            return "rgb(255,0,0)"
        case "laranja":
            return "rgb(255,128,0)"
        case "amarela":
            return "rgb(255,255,0)"
        case "verde":
            return "rgb(0,255,0)"
        case "azul claro":
            return "rgb(0,255,255)"
        case "azul marinho":
            return "rgb(0,0,255)"
        case "rosa":
            return "rgb(255,0,255)"
        default:
            return "rgb(255,0,255)"
    }
}

console.log(conversaoParaRGB1("vermelha"))
console.log(conversaoParaRGB2("laranja"))
console.log(conversaoParaRGB1("amarela"))
console.log(conversaoParaRGB2("verde"))
console.log(conversaoParaRGB1("azul claro"))
console.log(conversaoParaRGB2("azul marinho"))
console.log(conversaoParaRGB1("rosa"))
console.log(conversaoParaRGB2())