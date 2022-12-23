console.log("--------------------EXERCÍCIO 1-------------------------------------");

//EXERCÍCIO 1
function renderUpToTwenty(){
    let resultado = [];
    for(let i = 0; i <= 20; i++){
        if(i ==20 ){
            resultado +=i;
        }else{
            resultado +=i +', ';
        }     
       
    }
    return '['+ resultado +']'
}

console.log(renderUpToTwenty());

console.log("--------------------EXERCÍCIO 2-------------------------------------");
//===================================================================================

//EXERCÍCIO 2
function tenInTenToAHundred(){
    let dezEmDez = []
    for(let i = 10; i <= 100; i+=10){
        if(i == 100){
            dezEmDez += i;
        }else{
            dezEmDez += i + ', ';
        }
        
    }
    return '['+ dezEmDez + ']'
}

console.log(tenInTenToAHundred());

//===================================================================================
console.log("--------------------EXERCÍCIO 3-------------------------------------");

//EXERCÍCIO 3
function oodUpToTwenty(){
    let impar = [];
    for(let i = 0; i <= 20; i++){
        if(i % 2 != 0){
            if(i == 19){
                impar +=i;
            }else{
                impar += i + ', ';
            }
        }
    }
    return '['+ impar +']'
}

console.log(oodUpToTwenty());

//===================================================================================
console.log("--------------------EXERCÍCIO 4-------------------------------------");
//EXERCÍCIO 4

function evenUpToTwenty(){
    let par = [];
    for(let i = 0; i <= 20; i++){
        if(i % 2 == 0){
            if(i==20){
                par += i;
            }else{
            par += i+', '
            }        
        }   
            
    }
    return '['+par+']'
}    


console.log(evenUpToTwenty());

//===================================================================================
console.log("--------------------EXERCÍCIO 5-------------------------------------");

//EXERCÍCIO 5
function fromNegativeToPositive(){
    let decrementar = [];
    for(let i = -10; i <= 0 ; i++){
        if(i ==0){
            decrementar += i;
        }else{
            decrementar += i + ', '
        }
        
    }
    return '[' + decrementar + ']'
}

console.log(fromNegativeToPositive());
//===================================================================================
//EXERCÍCIO 6
console.log("--------------------EXERCÍCIO 6-------------------------------------");
function isDescendingDirection(){
    let descending = [];
    for(let i = 10; i >= 0; i--){
        if(i ==0){
            descending += i;
        }else{
            descending += i + ', '
        }
        
    }
    return '['+ descending + ']'
}


console.log(isDescendingDirection());

//===================================================================================
console.log("--------------------EXERCÍCIO 7-------------------------------------");
//EXERCÍCIO 7


function toSquare(){
    let arrSquare = []
    for(let i = 1; i <= 10; i++){ 
        if(i==10){
            arrSquare += i**2;
        }else{
            arrSquare += i**2 + ', '
        }         
       
    }    
    return '[' + arrSquare +']'

}

console.log(toSquare());