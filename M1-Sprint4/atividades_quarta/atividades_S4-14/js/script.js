const listaDeElementos = [1,5,7,9,3,'10','11','15'];

function retornaTodosElementos(){
    let retornaLista = [];
    for(let i = 0; i<= listaDeElementos.length -1; i++){
        if(i== (listaDeElementos.length -1)){
            retornaLista += listaDeElementos[i]

        }else{
            retornaLista += listaDeElementos[i]+", ";
        }        
    }
    return '['+retornaLista+']';
}

console.log((retornaTodosElementos()));

console.log('====================EXERCÍCIO 2============================');
//EXERCÍCIO 2
function retornaValorEspecífico(num){
    let valor;
    for(let i =0; i<= listaDeElementos.length -1; i++){
        if(num == i){
            valor= listaDeElementos[i];
        }
    }
    return `O valor contido nesta posição é: ${valor}`;

}
console.log(retornaValorEspecífico(5));

console.log('======================EXERCÍCIO 3==========================');
//EXERCÍCIO 3
function retornarTipoElemento(n){
    let tipo;
    for(let i = 0; i <= listaDeElementos.length-1; i++){
        if(n == i){
            tipo +=listaDeElementos[i];
        }

    }
    return ` O elemento ${n} é um elemento do tipo:`+typeof tipo;

}
console.log(retornarTipoElemento(5));



console.log('====================EXERCÍCIO 4============================');
//EXERCÍCIO 4
function removeUltimoElementoString(){
    let ultimoElemento = listaDeElementos[listaDeElementos.length-1];
    if(typeof ultimoElemento === 'string'){
        listaDeElementos.pop();
        return 'Elemento deletado com sucesso!'
    }else{
        return 'Falha ao remover o elemento da lista!'
    }
}
    console.log(removeUltimoElementoString());

console.log('====================EXERCÍCIO 5============================');
//EXERCÍCIO 5

function consultaPosicao(valor){
    let posicao;
     for(let i = 0; i<= listaDeElementos.length; i++){
        if(valor === listaDeElementos[i]){
            posicao = i;
            return `O valor procurado está na posição: ${posicao}`
        }     
        
     }
     return 'Valor não encontrado'
}

console.log(consultaPosicao(15));

console.log('===================EXERCÍCIO 6=============================');
//EXERCÍCIO 6
function removerElementoEspecifico(el){
    let indexElemento;
    
        indexElemento = listaDeElementos.indexOf(el);
        if(indexElemento > -1){
            listaDeElementos.splice(indexElemento, 1);
            return `Elemento ${el} deletado com sucesso `+ '['+ listaDeElementos+ ']';
        }
        return 'Elemento não encontrado'
        

    }
    

console.log(removerElementoEspecifico(1));



console.log('=======================EXERCÍCIO 7==================================');
//EXERCÍCIO 7

function inserirNaPosicaoCorreta(insereValor){
    if(typeof insereValor == 'string'){
        listaDeElementos.push(insereValor);
    }else if(typeof insereValor == 'number'){
        listaDeElementos.unshift(insereValor)
    }
    return `Lista atualizada com sucesso!`;
}
    

console.log(inserirNaPosicaoCorreta('2'));
console.log(listaDeElementos);


