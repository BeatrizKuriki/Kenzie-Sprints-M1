console.log("==============EXERCÍCIO 1==============================");
//EXERCÍCIO 1

function resultadoQuadrado(){
    let resultado = []
    for(let i = 15; i <= 200; i++){
        if(i==200){
            resultado += Math.pow(i,2)
        }else{
            resultado += Math.pow(i,2) +', ';
        }       
        
    }
    return '['+resultado+']';
}

console.log(resultadoQuadrado());

//=========================================================================
//EXERCÍCIO 2
console.log("==============EXERCÍCIO 2==============================");

function somaNaturais(){
    let resultadoSoma =0;
    for(let i = 1; i<=100; i++){        
        resultadoSoma = resultadoSoma + i;        

    }    
    return `O resultado da soma dos 100 primeiros números naturais é igual a: ${resultadoSoma}.`; 
}

console.log(somaNaturais());
//=========================================================================
//EXERCÍCIO 3
console.log("==============EXERCÍCIO 3==============================");

function divisivelPorQuatro(){
    let diviseis = [];
    for(let i = 0; i< 200; i++){
        if(i % 4 == 0){
            if(i == 196){
                diviseis += i;
            }else{
                diviseis +=i+', '
            }           
           
        }
    } 
    return '[' + diviseis + ']'

}
console.log(divisivelPorQuatro())
//=========================================================================
//EXERCÍCIO 4
console.log("==============EXERCÍCIO 4==============================");

function resultadoSomaMedia(){
    let soma = 0;
    let media = 0;
    let quantidadePares = 0;
    for (let i = 50; i <=70; i++){
        if(i % 2 == 0){
            quantidadePares++;
            soma = soma + i;
            media = soma/quantidadePares;   
        }       

    }
    return `A soma é igual a ${soma} e a média é igual a ${media}`
}

console.log(resultadoSomaMedia());

//=========================================================================
//EXERCÍCIO 5
console.log("==============EXERCÍCIO 5==============================");

function conversaoFahrenheit(){
    let grausFahrenheit = 0;
    let conversao = [];
    for(let i = 10; i <= 100; i+=10){
        grausFahrenheit = i * 1.8 + 32;
        conversao.push(`${i}C = ${grausFahrenheit}F`);  

    } 
    return conversao
}
console.log(conversaoFahrenheit());