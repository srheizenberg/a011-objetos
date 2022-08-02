/*# Exercício 1

Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

```jsx
nome: string;
preco: number;
disponibilidade: boolean;
```

b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
*/

const sacolao = [];
const frutasdosacolao1 = {
    nome: 'abacaxi',
    preço: 15,
    disponibilidade: true,
}
const frutasdosacolao2 = {
    nome: 'goiaba',
    preço: 5,
    disponibilidade: false,
}
const frutasdosacolao3 = {
    nome: 'manga',
    preço: 11,
    disponibilidade: true,
}

sacolao.push(frutasdosacolao1,frutasdosacolao2,frutasdosacolao3);
console.log(sacolao);