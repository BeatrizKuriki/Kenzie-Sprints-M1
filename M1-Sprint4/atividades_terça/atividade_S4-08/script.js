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
        
        if(i == 0){
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
        }
        
    }    


}

incrementText('Backend');

//EXERCÍCIO 3
console.log('============================EXERCÍCIO 3============================');