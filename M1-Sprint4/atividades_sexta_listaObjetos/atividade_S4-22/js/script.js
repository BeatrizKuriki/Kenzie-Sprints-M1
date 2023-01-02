let pessoa = {
    nome: 'Beatriz Alencar Kuriki',
    anoNascimento: 1987,
    cpf: '01004021951',
    cidade: 'londrina',
    estado: 'paraná',
    logradouro: 'rua antonio dias adorno',

}

let escola = {
    nome: 'Professora Maria do Rosário Castaldi',
    cnpj: '000216569451',
    areaAtuacao: 'educação profissional',
    cidade: 'londrina',
    logradouro: 'av. Arthur Thomas',
    curso: 'anos iniciais'

}

let curso = {
    nome: 'frontend',
    duracao: 1,
    turma: 17,
    modulos: 6,

}

let endereco = {
    cidade: 'londrina',
    estado: 'paraná',
    logradouro:'antonio dias adorno',
    cep: '86187020',
}

const figure = {  
    name: "Carl",   
    classes: ["Warrior"],  
    leader_trend: true,
    power: 6, 
    allied: true  
}
console.log("=================EX 1=============================");
function returnName(){
    return figure.name;
}
console.log(returnName());


console.log("=================EX 2=============================");
function verifyClasses(){
    if(figure.classes.length ===1){
        return figure.classes[0];
    }else{
        return figure.classes;
    }
}

console.log(verifyClasses());

console.log("=================EX 3=============================");
function realPower(){
    if(figure.leader_trend ==true){
        return figure.power**2;
    }
   return figure.power;
}
console.log(realPower());

console.log("=================EX 4=============================");
function insertNewClass(str){
    const classePermitida = [
        'Warrior',
        "Barbarious",
        "Arch",
        "Hunter",
        "Survivor"
    ]
    const insereClasse = str;
    if(figure.classes.length > 3){
        return 'Este personagem já atingiu o limite de classes para ser inserido'
    }
    if(!classePermitida.includes(insereClasse)){
        return `O personagem já pertence à classe ${str}`
    }
        figure.classes.push(insereClasse);
        return ` Classe ${str} inserida`
    }

    
    console.log(insertNewClass('Warrior'))






