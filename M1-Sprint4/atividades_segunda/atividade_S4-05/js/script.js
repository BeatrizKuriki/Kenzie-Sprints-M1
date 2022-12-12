function fibonacciNumbers(x){
    let anterior =0;
    let atual =1;
    let proximo=0;
    let sequencia = '0, ';
    for(let i = 0; i <= x; i++){ 
        proximo= atual + anterior;
        sequencia = sequencia  + proximo + ', ';
        anterior = atual;
        atual = proximo;      
      
       
    }
    return sequencia;
   
}
console.log(fibonacciNumbers(15));

//========================================================================
//EXERCÍCIO 2
console.log('===============EXERCÍCIO 2==================================')