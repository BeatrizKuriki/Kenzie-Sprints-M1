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

function returnName(){
    return figure.name;
}
console.log(returnName());

function verifyClasses(){
    return figure.classes.join();
}

console.log(verifyClasses());

function realPower(){
    if(figure.leader_trend ==true){
        return figure.power**2;
    }
   return figure.power;
}
console.log(realPower());

function insertNewClass(str){
    if(figure.classes.length > 3){
        return 'Este personagem não pode estar em mais classes!'
    for(let i = 0; i<= 3; i++){
        figure.classes.push(str);
    }
    
    
}
}

console.log(insertNewClass('Priest', 'Soldier', 'Player', 'Mage'));
console.log(figure)