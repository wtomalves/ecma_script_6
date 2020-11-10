const arr = [1, 2, 3, 4, 5, 6];

const [ x = 1, ...y ] = arr;

console.log(x);
console.log(y);
console.log('\n\n\n');

function soma(...soma) {
  const somados = soma.reduce(function(total, next){
    return total + next;
  })
  return somados;
};

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));
console.log(soma(1));
console.log('\n\n\n');

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario2 = { ...usuario, nome: 'Gabriel'};
const usuario3 = { ...usuario, endereco: { cidade: 'Lontras'}}

//usuario[...usuario2, ...usuario3];
console.log(usuario);
console.log(usuario2);
console.log(usuario3);






