//EXERCÍCIO 1

let valor = Number(prompt('Digite um valor entre 0 e 10:'));
while(valor < 0 || valor > 10){ 
    alert('Valor inválido!');
    valor = Number(prompt('Digite um valor entre 0 e 10:'));  
}
alert('Código correto!');



 //=======================================================================
 //EXERCÍCIO 2
 alert('exercício 2');

 let nome = prompt('Qual o nome do usuário?');
 let senha = prompt('Digite sua senha:');
 while(nome == senha){
    alert('A senha não poder ser igual ao nome!');
    nome=prompt('Digite o nome do usuário:');
    senha = prompt('Digite a senha:');
 }
 alert('Usuário e senha corretos, acessando o sistema...');

 //=======================================================================
 //EXERCÍCIO 3
 alert('exercício 3');

 let num = parseInt(prompt('Digite um número positivo e menor que 10'));
 let soma = 0;
 let quantidade =0;
 let media =0;
 while(num < 10 && num > 0){
    soma = soma + num;
    num = parseInt(prompt('Digite um número positivo e menor que 10'));
    quantidade++;
 }
 media = soma/quantidade;

 alert(`A soma dos números inteiros e positivos é igual a: ${soma} e a méida é igual a ${media} `)


