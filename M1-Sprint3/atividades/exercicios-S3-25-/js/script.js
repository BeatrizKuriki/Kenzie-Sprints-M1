let  salarioMinimo = prompt('Qual o valor do salário mínimo?');
let quantidadeKw = prompt('Qual a quantidade de quilowatts gasta na residência?');

let valorKwUnit = (salarioMinimo / 7)/100;

let valorPagar = valorKwUnit * quantidadeKw;

alert(`O valor a Pagar é de ${valorPagar.toFixed(2)}`);

let desconto = valorPagar * 0.1;
let novoValorPagar = valorPagar - desconto;

alert(`O valor a pagar com desconto de 10% é de: R$ ${novoValorPagar.toFixed(2)}`);

//==========================================================================================

//EXERCÍCIO 2

alert('exercício 2');

let valorProduto = prompt('Qual o valor do produto?');
let desconto9 = (valorProduto * 9)/100;
valorProduto -= desconto9;

alert(`O valor do produto com desconto de 9% é: R$ ${valorProduto.toFixed(2)}`)