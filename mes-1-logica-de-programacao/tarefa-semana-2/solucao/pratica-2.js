/*
### Prática 2: Funções com parâmetros

As funções permitem o recebimento de argumentos dos quais possibilita uma grande variedade de tratativas, executando um bloco de código a partir de uma entrada de dados. Nessa prática, iremos aplicar na prática os parâmetros de funções. Vamos lá:

Nesta prática, você vai criar e chamar 3 funções no arquivo `pratica-2.js` que irão informar sobre a confirmação de recebimento de um produto por email. Essas 3 funções deverão fazer o seguinte:
- Função 1 - Receber o nome do comprador como parâmetro e exibir na tela a informação `Olá, <nome do comprador>!`.
- Função 2 - Esta função deverá ter 3 parâmetros: nome do produto, nome de quem recebeu o produto e o endereço de entrega. Ela deverá exibir a seguinte informação na tela:
```
Fizemos a entrega do produto NomeDoProduto no endereço EnderecoDeEntrega com sucesso!

O seu produto foi recebido por: NomeDaPessoaQueRecebeuOProduto

Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.
```
- Função 3 - Esta função terá 1 parâmetro: nome de quem enviou o email. Ela deverá exibir a seguinte informação na tela:
```
Atenciosamente,
NomeDaPessoaQueEnviouOEmail
```

Acho que deu pra pegar o que cada uma dessas funções fazem, certo? Então, qual o nome mais apropriado para cada uma delas? Pense nisso, implemente as funções no arquivo `pratica-2.js` e por fim não esqueça de chamá-las para de fato exibir a mensagem de email completa na tela.

SOLUÇÃO:
*/

function saudacao(nomeDoComprador) {
    console.log(`Olá, ${nomeDoComprador}!\n`)
}

function mensagem(nomeDoProduto, nomeDoRecebedor, enderecoEntrega) {
    console.log(
        `Fizemos a entrega do produto ${nomeDoProduto} no endereço ${enderecoEntrega} com sucesso!

        O seu produto foi recebido por: ${nomeDoRecebedor}

        Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.\n`
    )
}

function agradecimento(nomeEnviante) {
    console.log(
        `
        Atenciosamente,
        ${nomeEnviante}
        `        
    )
}

saudacao("João")
mensagem("Camiseta Regata", "Cristina", "Av. Brasil, 100, São Paulo/SP")
agradecimento("Equipe I&T")