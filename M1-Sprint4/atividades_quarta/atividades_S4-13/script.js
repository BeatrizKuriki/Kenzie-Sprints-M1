//EXERCÍCIO 1
console.log('=====================EXERCÍCIO 1============================');
function geraArray (palavra){
    let palavraNova = palavra.split('');
  
    
    return palavraNova;
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

console.log(acessaElemento(1));



//EXERCÍCIO 3
console.log('=====================EXERCÍCIO 3============================');
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

let nomes1 =['Pedro', 'Rafael', 'José'];

function quantidadeCaractere(arr){
    let maior = 0;
    for(let i =0; i<= arr.length-1; i++){
       console.log(arr[i])
       if(arr[0].length > 0){
        maior = arr[0];
       } else if(arr[1].length > arr[0].length){
        maior = arr[i]

       }

        }
        console.log("-----"+maior+"-------")

    } 


quantidadeCaractere(nomes1);

//EXERCÍCIO 5
console.log('=====================EXERCÍCIO 5============================');
numeros = [1,4,6,9,11,8];

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


console.log(soma(numeros));