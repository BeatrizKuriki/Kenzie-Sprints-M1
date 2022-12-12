//EXERCÍCIO 1

function resultadoQuadrado(){
    for(let i = 15; i <= 200; i++){
        let resultado = Math.pow(i,2);
        console.log(resultado);
    }
}

resultadoQuadrado();

//=========================================================================
//EXERCÍCIO 2
console.log("==============EXERCÍCIO 2==============================");

function somaNaturais(){
    let resultadoSoma =0;
    for(let i = 1; i<=100; i++){        
        resultadoSoma = resultadoSoma + i;        

    }    
    console.log(resultadoSoma); 
}

somaNaturais();
//=========================================================================
//EXERCÍCIO 3
console.log("==============EXERCÍCIO 3==============================");

function divisivelPorQuatro(){
    for(let i = 0; i< 200; i++){
        if(i % 4 == 0){
            console.log(i)
        }
    } 

}
divisivelPorQuatro()
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
    console.log(`A soma é igual a ${soma} e a média é igual a ${media}`)
}

resultadoSomaMedia();

//=========================================================================
//EXERCÍCIO 5
console.log("==============EXERCÍCIO 5==============================");

function conversaoFahrenheit(){
    let grausFahrenheit = 0;
    for(let i = 10; i <= 100; i+=10){
        grausFahrenheit = i * 1.8 + 32;
        console.log(`${i}C = ${grausFahrenheit}F`);      

    } 
}
conversaoFahrenheit();