const carros = [
  {
    modelo: "Ka",
    marca: "Ford",
    ano: "2000",
    cor: "Branco",
    completo: false,
    acessorios: ['Vidro Elétrico'],
    preco: 6799.33
  },
  {
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: false,
    acessorios: ['Trava'],
    preco: 12199.13
  },
  {
    modelo: "Palio",
    marca: "Fiat",
    ano: "1995",
    cor: "Verde",
    completo: false,
    acessorios: [],
    preco: 11099.1
  },
  {
    modelo: "Monza",
    marca: "Chevrolet",
    ano: "1993",
    cor: "Vinho",
    completo: false,
    acessorios: [],
    preco: 14578.25
  },
  {
    modelo: "Saveiro",
    marca: "VW",
    ano: "2013",
    cor: "Prata",
    completo: false,
    acessorios: [],
    preco: 28399.13
  },
  {
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 14350.45
  },
  {
    modelo: "Gol",
    marca: "VW",
    ano: "2013",
    cor: "Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 22109.21
  },
  {
    modelo: "Montana",
    marca: "Chevrolet",
    ano: "2011",
    cor: "Azul",
    completo: false,
    acessorios: [],
    preco: 15999.13
  },
  {
    modelo: "Stilo",
    marca: "Fiat",
    ano: "2000",
    cor: "Preto",
    completo: false,
    acessorios: [],
    preco: 17251.36
  }
]
console.log('==================EX 1=================================');
function contaTotal(carros) {

  return `O total de veículos é igual a ${carros.length}`;
}
console.log(contaTotal(carros));

console.log('==================EX 2=================================');
function precoTotal(carros, preco) {
  let sum = 0;

  for (let i = 0; i < carros.length; i++) {
    sum += carros[i].preco
  }

  return ` O valor de todos os veículos é igual a R$ ${sum.toFixed(2)}`
}
console.log(precoTotal(carros));

console.log('==================EX 3=================================');
function filtraPorMarca(carros, marca){
  return carros.filter(carros => carros.marca === marca)

}
console.log(filtraPorMarca(carros, 'Ford'));

console.log('==================EX 4=================================');
function filtraPorAcessorio(carros, acessorios){
  return carros.filter(carros => carros.acessorios.includes(acessorios) );
}
console.log(filtraPorAcessorio(carros, 'Trava'))

console.log('==================EX 5=================================');

function eCarrosCompleto(carros){
  return carros.filter(carros => carros.completo)
}

console.log(eCarrosCompleto(carros));

console.log('==================EX 6=================================');
const newCar = {
  modelo: 'Civic',
  marca: 'Honda',
  ano: '2018',
  cor: 'Preta',
  completo: true,
  acessorios:['Alarme', 'Trava', 'Ar', 'Computador de Bordo', 'Vidro Elétrico'],
  preco: 92500.00
}
function adicionaCarro(carros, newCar){
  return carros.concat(newCar);  
}
console.log(adicionaCarro(carros, newCar));

console.log('==================EX 7=================================');