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
let resultado = ""
function acessaElemento(number){
    for(let i = 0; i <= arr.length-1; i++){
        if(number == i){
            resultado = arr[i];
        /*}else{
            resultado = 'Valor não encontrado'
        }*/

        }   
    }
    return resultado;

}

    

console.log(acessaElemento(1));

//EXERCÍCIO 3
console.log('=====================EXERCÍCIO 3============================');
let arr2=[1,2,3,4,5,6,7,8,9,10];
function testeParImpar(numero){
    let confere = '';
    for(let i = 0; i<= arr.length; i++){
        if(numero == i && i % 2 == 0 ){
            confere = 'O valor encontrado é par'
           }else{
            confere = 'O valor encontrado nessa posição é impar'
            }
        }
        return confere;
    }
    


console.log(testeParImpar(10));