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

alert(`O valor do produto com desconto de 9% é: R$ ${valorProduto.toFixed(2)}`);

//================================================================================

//EXERCÍCIO 3 - RESOLUÇÃO USANDO Destructuring assignment

alert ('exercício 3');

let varA = prompt('Digite um valor:');
let varB = prompt('Digite outro valor:');

[varA, varB] = [varB, varA];

alert(`Os valores foram trocados agora varA tem valor de ${varA} e varB tem valor de ${varB}`);

//================================================================================

//EXERCÍCIO 4

alert('exercício 4');
let quantidadeFitas = Number(prompt('Qual a quantidade de fitas que a locadora possui?'));
let valorCobrado = Number(prompt('Qual o valor de cada aluguel?'));

let faturamento = (quantidadeFitas /3) * 12 *valorCobrado;

let multa = (valorCobrado * 10)/100;
let valorGanhoMultasPorFita = valorCobrado += multa;

let quantidadeTotalMultas = ((quantidadeFitas /3) * 10 ) /100;
let valorGanhoMultasMes = quantidadeTotalMultas * valorGanhoMultasPorFita;

//Sabendo ainda que 2% das fitas se estragam ao longo do ano,
// e um décimo do total é comprado para reposição, 
//exiba a quantidade de fitas que a locadora terá no final do ano.
//AQUI FAÇO 2% DIVIDIDO POR 10 E DAÍ MULTIPLICO PELA QUANTIDADE DE FITAS
//PARA CHEGAR NO RESULTADO

let quantidadeFitasFimAno = quantidadeFitas +(quantidadeFitas * 0.002);
 alert(` O faturamento anual é de R$ ${faturamento.toFixed(2)}`);
 alert(`O valor ganho por mês com multas é de R$ ${valorGanhoMultasMes.toFixed(2)}`);
alert(` A quantidade de fitas no fim do ano é de: ${quantidadeFitasFimAno}`);


//================================================================================

//EXERCÍCIO 6

alert('exercício 5');

let numero = (prompt('Digite um número no formato CDU(centena, dezena e unidade'));


//alert(numero[0]);
let varNum = numero[0];
let varNum1 = numero[1];
let varNum2 = numero[2];
 alert([varNum2, varNum1, varNum]);





//================================================================================

//EXERCICIO 6 outra resolução

//let numero2 = (prompt('Digite um número no formato CDU(centena, dezena e unidade'));
//numero2.split('');
//numero2.reverse();

//alert(numero2);

//================================================================================

//EXERCÍCIO 6
alert('exercício 6');

let numero3 = (prompt('Digite um número no formato CDU(centena, dezena e unidade'));


//alert(numero[0]);
let num = numero3[0];
let num1 = numero3[1];
let num2 = numero3[2];
 alert([`centena: ${num}, dezena: ${num1}, unidades ${num2}`]);









