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
