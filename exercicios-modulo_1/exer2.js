const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
  { nome: 'Lucas', idade: 30, empresa: 'Facebook'},
];


const idades = usuarios.map(function(item) {
  return item.idade;
});

console.log(`As idades encontradas foram ${idades}`);
console.log('\n\n');

const funcionarioRocketseat = usuarios.filter(function(item){
  return item.idade > 18 && item.empresa === 'Rocketseat';
});

console.log(funcionarioRocketseat);
console.log('\n\n');

const funcionarioGoogle = usuarios.find(function(item){
  return item.empresa === 'Google';
});

console.log(funcionarioGoogle);
console.log('\n\n');

const multiplicandoIdades = usuarios.filter(function(item){
  item.idade *= 2;
  return item.idade <= 50;
})

console.log(multiplicandoIdades);







