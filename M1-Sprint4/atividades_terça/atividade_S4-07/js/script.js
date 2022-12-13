//EXERCÍCIO 1

//let valor = Number(prompt('Digite um valor entre 0 e 10:'));
//while(valor >= 0 || valor < 10){    
   // alert('Código correto!');
    //valor++;
//}
//alert('Valor inválido!');
 //valor= Number(prompt('Digite novamente!'));

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
 alert('Usuário e senha corretos, acessando o sistema...')
