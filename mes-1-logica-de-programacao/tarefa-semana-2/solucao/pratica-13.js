/*
### Prática 13: Aprendendo o operador ternário

O operador ternário é uma outra forma de trabalharmos com comandos condicionais. Ele é super enxuto, pois com ele você consegue fazer um comando condicional em uma única linha. A utilidade do operador ternário está em retornar um valor para uma variável de uma maneira rápida e eficiente, sem precisar escrever muitas linhas de código.

Mas, como funciona esse bendito "operador ternário"? Sua sintaxe é assim:
```javascript
condição ? expressão1 : expressão2 
```
Este operador é uma expressão, ou seja, ele **sempre** termina com um valor. `expressão1` é o valor retornado caso `condição` seja `true`. Já `expressão2` é o valor retornado caso `condição` seja `false`. Por exemplo:
```javascript
let a = 1
let b = 2
let maior = a > b ? a : b
```
Neste exemplo, se `a` for maior que `b`, ele retorna o valor de `a`. Caso contrário, ele retorna o valor de `b`. Portanto, neste caso, o valor armazenado em `maior` é o valor `b`, pois `a` não é maior que `b`, ou seja, a condição `a > b` é `false`. Como você faria pra retornar o menor valor? Esta será a prática 13.

1. Crie uma função que receba 2 números no arquivo `pratica-13.js`. 
2. Utilize o operador ternário para retornar o menor valor entre os 2 números
3. Chame a função e teste se ela está funcionando corretamente com o comando `console.log`
4. Por fim, faça o commit do seu código e suba ele no seu GitHub

SOLUÇÃO:
*/

const menorDe2 = (n1, n2) => n1 < n2 ? n1 : n2

console.log(menorDe2(1, 2))
console.log(menorDe2(2, 2))
console.log(menorDe2(2, 1))
console.log(menorDe2(-1, -2))