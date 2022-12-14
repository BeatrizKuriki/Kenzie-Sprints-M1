//EXERCÍCIO 1
console.log('============================EXERCÍCIO 1============================');

function verticalText(texto){
    let textoVertical = texto.split('');
    for(let i = 0; i <= textoVertical.length-1; i++){
        console.log(textoVertical[i]);

    }


}

verticalText('Frontend');

//EXERCÍCIO 2
console.log('============================EXERCÍCIO 2============================');

function incrementText(palavra){
    let novaPalavra = palavra.split('');
    let str = '';
    for(let i = 0; i <= novaPalavra.length-1; i++){
        str += novaPalavra[i];

        
        /*if(i == 0){
            console.log(novaPalavra[0]);
            console.log(str= novaPalavra[0]+novaPalavra[i+1]);            
        }else if(i == 1){
            console.log(str= novaPalavra[0]+novaPalavra[1]+novaPalavra[i+1]);
        }else if(i == 2){
            console.log(str= novaPalavra[0]+novaPalavra[1]+ novaPalavra[2]+novaPalavra[i+1]);
        }else if(i == 3){
            console.log(str= novaPalavra[0]+novaPalavra[1]+ novaPalavra[2]+novaPalavra[3]+novaPalavra[i+1]);
        }else if(i == 4){
            console.log(str= novaPalavra[0]+novaPalavra[1]+ novaPalavra[2]+novaPalavra[3]+novaPalavra[4]+novaPalavra[i+1]);
        }else if(i == 5){
            console.log(str= novaPalavra[0]+novaPalavra[1]+ novaPalavra[2]+novaPalavra[3]+novaPalavra[4]+novaPalavra[5]+novaPalavra[i+1]);
        }else{
            console.log(str)
        }*/
        console.log(str)
    }    


}

incrementText('Backend');

//EXERCÍCIO 3
console.log('============================EXERCÍCIO 3============================');
//increment text backwards

function incrementTextBackwards(texto2){
    let novoTexto2 = texto2.split('');
    let str2 = '';
    for(let i = texto2.length-1; i >= 0; i--){
        str2 += novoTexto2[i];
        console.log(str2);
    }
}

incrementTextBackwards('Fullstack');

//EXERCÍCIO 4
console.log('============================EXERCÍCIO 4============================');
function padEnd(palavra2, qtdRepeticao, caractere){
    let saida = palavra2;    
    for(let i = 0; i <= qtdRepeticao -1; i++ ){
        saida += caractere;

    }
    return saida;
}

console.log(padEnd('kenzie', 5, 'foo'));

//EXERCÍCIO 5
console.log('============================EXERCÍCIO 5============================');
//function subString(textoSub, posicaoInicial, posicaoFinal){


//EXERCÍCIO 6
console.log('============================EXERCÍCIO 6============================');
function stringRepeater(textoString, number){
    let resultadoTextoString = textoString;
    let adiciona = '';
    for(let i = 0; i <=number -1; i++ ){
        adiciona += resultadoTextoString +" "; 
    }
    return adiciona;
}

console.log(stringRepeater('Because I am happy.', 3));


//EXERCÍCIO 7
console.log('============================EXERCÍCIO 7============================');
function stringCentralizer(palavraString, qtdRepete, elementoRepeticao){
    
}