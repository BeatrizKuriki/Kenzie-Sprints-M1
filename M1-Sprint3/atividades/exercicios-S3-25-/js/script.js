let  salarioMinimo = prompt('Qual o valor do salário mínimo?');
let quantidadeKw = prompt('Qual a quantidade de quilowatts gasta na residência?');

let valorKwUnit = (salarioMinimo / 7)/100;

let valorPagar = valorKwUnit * quantidadeKw;

alert(`O valor a Pagar é de ${valorPagar.toFixed(2)}`);

let desconto = valorPagar * 0.1;
let novoValorPagar = valorPagar - desconto;

alert(`O valor a pagar com desconto de 10% é de: R$ ${novoValorPagar.toFixed(2)}`);