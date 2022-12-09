/* 
Crie três variáveis nome, idade e estaAcompanhado

Atribua valores a estas variáveis recorrendo ao prompt.

estaAcompanhado é uma variável do tipo boolean, mas o usuário não vai digitar true ou false e sim "s" ou "n".

Se o usuário digitar "n" a variável estaAcompanhado recebe false, caso contrário ela recebe true.

Teste se a idade é igual ou acima de 18, caso não seja, deve alertar:
entrada não está permitida para nome : Menor de idade,
Caso contrário, deve verificar se está acompanhado, se sim deve alertar:
Entrada permitida para nome: Conceder desconto
Se não estiver acompanhado deve alertar:
Entrada permitida para nome: Valor integral.

*/

let nome = prompt('Qual seu nome?');
let idade = prompt('Qual sua idade?');
let estaAcompanhado = prompt('Está acompanhado? s/n');
if(estaAcompanhado == 's'){
    estaAcompanhado = true;
}

if(idade < 18){
    alert(`Entrada não permitida para ${nome}: MENOR DE IDADE`);
} else if(idade >= 18 && estaAcompanhado == true){
    alert(`Entrada permitida para ${nome}: Conceder desconto`);
}else{
    alert(`Entrada permitida para ${nome}: Valor integral`)
}
