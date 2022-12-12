//EXERCÍCIO 1
function renderUpToTwenty(){
    for(let i = 0; i <= 20; i++){
        console.log(i);
    }
}

renderUpToTwenty();
console.log("---------------------------------------------------------");
//===================================================================================

//EXERCÍCIO 2
function tenInTenToAHundred(){
    for(let i = 10; i <= 100; i+=10){
        console.log(i);
    }
}

tenInTenToAHundred();

//===================================================================================
console.log("---------------------------------------------------------");

//EXERCÍCIO 3
function oodUpToTwenty(){
    for(let i = 0; i <= 20; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

oodUpToTwenty();

//===================================================================================
console.log("---------------------------------------------------------");
//EXERCÍCIO 4

function evenUpToTwenty(){
    for(let i = 0; i <= 20; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }    
}

evenUpToTwenty();

//===================================================================================
console.log("---------------------------------------------------------");

//EXERCÍCIO 5
function fromNegativeToPositive(){
    for(let i = -10; i <= 0 ; i++){
        console.log(i);
    }
}

fromNegativeToPositive();
//===================================================================================
//EXERCÍCIO 6
console.log("---------------------------------------------------------");
function isDescendingDirection(){
    for(let i = 10; i >= 0; i--){
        console.log(i);
    }
}


isDescendingDirection();

//===================================================================================
console.log("---------------------------------------------------------");
//EXERCÍCIO 7


function toSquare(){
    for(let i = 1; i <= 10; i++){ 
        let resultado = i**2;       
       console.log(resultado);
    }    

}

toSquare();