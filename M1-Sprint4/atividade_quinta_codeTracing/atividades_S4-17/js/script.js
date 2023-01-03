let arr = Array(30);

function retornaParImpar(a){
    let par = 0;
    let impar =0;
    for(let i = 0 ; i<= arr.length; i++){
        if(i % 2 == 0){
            par++
        }else{
            impar++;
        }
        
    }
    return ` A lista recebida possui ${par} elementos pares e ${impar} elementos ímpares`

}

console.log(retornaParImpar(arr));

//EXERCÍCIO 2
console.log('===============================EXERCÍCIO 2==========================');
let arrA = Array(10);

function percentualImpar(arrA){
    let impar = 0;
    let percentual =0;
    for(let i =0; i <= arrA.length; i++){
        if(i % 2 != 0){
            impar++
        }
        
    }
    percentual = (impar*100)/10;
    return `O total de valores impares é ${impar} e corresponde a ${percentual.toFixed(2)}% da lista`;
}

console.log(percentualImpar(arrA));

//EXERCÍCIO 3
console.log('===============================EXERCÍCIO 3==========================');
let arrayA = Array(10);
let arrayB = Array(10);

function retornaListaC(arrayA, arrayB){    
    for(let i =0; i<= 10; i++){
        if(i%2==0 && i%3==0){
            console.log(arrayA += i);

        }
    }
}
retornaListaC(arrayA, arrayB)
