let departmentList = [
    {
        departmentName: 'Financial',
        employees:
            [
                {
                    name: 'Rose',
                    age: 26,
                    responsibility: 'Financial director',
                    salary: 5600
                },
                {
                    name: 'Stevem',
                    age: 32,
                    responsibility: 'Financial manager',
                    salary: 4200
                },
                {
                    name: 'Beca',
                    age: 26,
                    responsibility: 'Financial analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departmentName: 'Expedition',
        employees:
            [
                {
                    name: 'Rooper',
                    age: 35,
                    responsibility: 'Expedition director',
                    salary: 5600
                },
                {
                    name: 'Maggie',
                    age: 22,
                    responsibility: 'Expedition manager',
                    salary: 4200
                },
                {
                    name: 'Thompson',
                    age: 41,
                    responsibility: 'Expedition analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departmentName: 'Capitation',
        employees:
            [
                {
                    name: 'Saory',
                    age: 35,
                    responsibility: 'Capitation director',
                    salary: 5600
                },
                {
                    name: 'Silvia',
                    age: 22,
                    responsibility: 'Capitation manager',
                    salary: 4200
                },
                {
                    name: 'Sonem',
                    age: 41,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Havi',
                    age: 41,
                    responsibility: 'Trainee Capitation manager',
                    salary: 1500
                },
                {
                    name: 'Margie',
                    age: 25,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Victoria',
                    age: 18,
                    responsibility: 'Trainee Capitation analyst',
                    salary: 1500
                }
            ],
        working: true
    },
]


console.log('=======================EX 1=============================');
function howManyDepartments() {
    let quantidadeDepartamento = 0;
    for (let i = 0; i < departmentList.length; i++) {
        departmentList[i].departmentName;
        quantidadeDepartamento++;

    }
    return `A quantidade de departamentos da lista é igual a: ${quantidadeDepartamento}`
}
console.log(howManyDepartments());


console.log('=======================EX 2=============================');

function changeDepartmentName(nome, novoNome) {
    for (let i = 0; i < departmentList.length; i++) {        

        if (departmentList[i].departmentName == nome) {
            departmentList[i].departmentName = novoNome;

            return departmentList[i]      
       }  

    }
    return 'Department not found'
    }   


console.log(changeDepartmentName('Expedition', 'Expedição'));

console.log('=======================EX 3=============================');
function giveTheDepartmentABreak(){

}




console.log('=======================EX 4=============================');





console.log('=======================EX 5=============================');