//EXERCÍCIO 1
console.log('=====================EXERCÍCIO 1============================');
function geraArray (palavra){
    let palavraNova =  palavra;
        if(palavraNova.length < 5){
            return 'a palavra deve ter no mímino 5 caracteres'
        }else{
            return '['+palavraNova+']';
      } 
   
}


console.log(geraArray('leite'));

//EXERCÍCIO 2
console.log('=====================EXERCÍCIO 2============================');
let arr = ['Hermanoteu', 'Olonéia', 'Migalatéia', 'Godart'];

function acessaElemento(number) {
    let resultado;
    if( number > arr.length){
        return 'valor não encontrado';

    }  
    for (let i = 0; i <= arr.length; i++) {
        if (number == i) {
            resultado = arr[i];
            return resultado;
        }        
       
    }
    
}      

console.log(acessaElemento(2));



//EXERCÍCIO 3
console.log('=====================EXERCÍCIO 3============================');

// Crie um array de números, contendo os valores de 1 a 10.
//  Crie uma função que recebe um número inteiro.

// Acesse a posição do array de números usando o valor recebido. 
// Teste se o valor contido na posição é par ou ímpar.

// Caso seja par retorne: "O valor encontrado nesta posição é par",
// Caso seja ímpar retorne: "O valor encontrado nesta posição é ímpar".
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function testeParImpar(numero) {

    for (let i = 0; i <= arr2.length; i++) {
        console.log(arr2[numero]);
        //console.log(arr2[i]);
        if(arr2[numero] % 2 == 0){
            return 'Valor par'
        }else{
            return 'Valor impar'
        }           

    }  
}

console.log(testeParImpar(3));


//EXERCÍCIO 4
console.log('=====================EXERCÍCIO 4============================');

let nomes1 =['Pedro', 'Rafael', 'José', "Josefina"];

function quantidadeCaractere(arr){
    arr.sort((a, b) => a.length - b.length)
    return ` O nome ${arr[arr.length-1]} é o maior da lista`
  
    } 


console.log(quantidadeCaractere(nomes1));

//EXERCÍCIO 5
console.log('=====================EXERCÍCIO 5============================');
let numeros2 = [1,4,6,9,11,8];

function soma(arr){
    let soma = 0;
    let novoArray = arr.slice(arr.length - 2);
    for(let i =0; i<= novoArray.length-1; i++){
        console.log(novoArray[i])
        soma += novoArray[i];
    }
    if(soma % 2 ==0){
        return `A soma ${soma} é múltiplo de dois`
    }else{
        return `A soma ${soma} não é múltiplo de dois`
    }

}


console.log(soma(numeros2));

//EXERCÍCIO 6
console.log('=====================EXERCÍCIO 6============================');

let arrNomes = ['Pedro', 'Rafael', 'José', 'Carla', 'Maria', 'Josef', 'Raquel'];

function testaNome(arrNomes,nome, posicao){
   if(posicao >= 0 && posicao < arrNomes.length){
    let nomePosicao = arrNomes[posicao];
    let nomeFormatado = nome.toLowerCase().trim()
    let nomePosicaoFormatado = nomePosicao.toLowerCase().trim()
    if(nomeFormatado === nomePosicaoFormatado){
        return 'Acertei'
    }else{
        return 'Não é quem eu pensava'
    }
   }

}

console.log(testaNome(arrNomes,'Carla',2 ));
console.log(testaNome(arrNomes,'Pedro',0));


//EXERCÍCIO 7
console.log('=====================EXERCÍCIO 7============================');
 let numeros = [1,2,3,4,5,6,10,13,15]
 let outrosNumeros = [5,7,9,4,2,3,9,12]
 function comparaArray(lista1, lista2){
    if(lista1.length > lista2.length){
        return `A maior lista é aquela que o último número é: ${lista1[lista1.length-1]}`
    }else{
        return `A maior lista é aquela que o último número é: ${lista2[lista2.length-1]}`
    }

 }

 console.log(comparaArray(numeros, outrosNumeros));


