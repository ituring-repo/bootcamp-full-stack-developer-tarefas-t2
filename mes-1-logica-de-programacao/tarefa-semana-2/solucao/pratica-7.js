/*
### Prática 7: Tradutor de "Hello World!"

1. Crie uma função no arquivo `pratica-7.js` que:
- receba uma string como parâmetro representando um idioma (ex: "es" para espanhol, "pt" para português", "en" para inglês)
- exiba na tela "Hello World!" em diferentes idiomas, para pelo menos 3 idiomas
- se nenhum idioma for informado, exiba "Olá, Mundo!" por padrão
2. Não esqueça de chamar a função!
3. Teste, veja se está funcionando, e depois faça o commit do seu código e suba ele no seu GitHub

SOLUÇÃO:
*/

function helloWorld(idioma) {
    if (idioma === "en")
        console.log("Hello world")
    else if (idioma === "es")
        console.log("Hola Mundo!")
    else if (!idioma)
        console.log("Olá, Mundo!")
}

helloWorld("en")
helloWorld("es")
helloWorld()