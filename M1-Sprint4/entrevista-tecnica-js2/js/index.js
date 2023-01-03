let words = ["paralelepípedo", "papel", "tesoura", "sol", "otorrinolaringologista", "nuvem", "celular"];
//tam >=7
function countLongWords(arr){
    let maiorPalavras = 0; 
    for(let i = 0; i< arr.length; i++){    
       if(arr[i].length >= 7){
        maiorPalavras++;
       }  
     }
      return maiorPalavras
    }   

console.log(countLongWords(words));