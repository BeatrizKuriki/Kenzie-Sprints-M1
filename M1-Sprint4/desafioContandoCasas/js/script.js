
function gerarNumeroAleatorio(){
    const numeroAleatorio = Math.round(Math.random() * 20);
    return numeroAleatorio;
}  
num = gerarNumeroAleatorio();


function verificarPalpite(num, palpite){
    let tentativa = 1;

    while(num != palpite){
        tentativa++
        return'Tente novamente';
    }

}

console.log(verificarPalpite(num, 2))

