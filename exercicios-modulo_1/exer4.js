const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};

const { nome, endereco: {cidade, estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);
console.log('\n\n\n');


function mostraInfo({name, idade}) {
  return `${name} tem ${idade} anos.`
}

console.log(mostraInfo({ name: 'Diego', idade: 31}));



