// Escrever uma função chamada fibonacciNumbers(). A função quando chamada deve apresentar os valores da sequência numérica de Fibonacci até o décimo quinto termo.
// A sequência de Fibonacci é formada por:

// ⁠O, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, ... etc.

// Obtendo-se o termo seguinte a partir da soma do termo atual com o termo anterior, e assim sucessivamente.


function fibonacciNumbers(x){
    let anterior =0;
    let atual = 1;
    let proximo =0;
    
    for(let i = 0; i < x; i++){ 
        console.log(proximo);
        anterior = atual + proximo;
        atual = proximo;
        proximo = anterior;       
       
    }   
}
console.log(fibonacciNumbers(15));

//========================================================================
//EXERCÍCIO 2

// Escrever um programa que calcule e apresente o somatório do número de grãos de
//  trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra:

// Colocar um grão de trigo no primeiro quadro e nos quadros seguintes o dobro do quadro
//  anterior.

// Ou seja, no primeiro quadro coloca-se um grão, no segundo quadro colocam-se dois grãos
//  (neste momento, tem-se três grãos), no terceiro quadro 
// colocam-se quatro grãos (tendo neste momento sete grãos), no quarto quadro 
// colocam-se oito grãos (tendo-se então 15 grãos) até o limite de casas que é 64.
//  A quantidade de grãos adicionados é sempre o dobro da quantidade anterior.
console.log('===============EXERCÍCIO 2==================================');

function somaGraos(){
    soma= 0;
    graos =1;
    
    for(let i = 1; i<=64; i++){
        soma += graos;
        graos *=2       

    }
    return soma;
}
console.log(somaGraos())
