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
console.log('===============EXERCÍCIO 2==================================');

