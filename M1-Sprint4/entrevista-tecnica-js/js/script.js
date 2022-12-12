let idade = Number(prompt('Qual sua idade?'))
if(idade>=60){
    alert('Você está autorizado a comprar o ingresso com 50% de desconto!')
}else if(idade>= 18){
    alert('Você está autorizado a comprar!');

}else{
    alert('Você não está autorizado a comprar o ingresso!');
}
