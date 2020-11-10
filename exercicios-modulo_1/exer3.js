const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => {
  return item + 10;
});

console.log(newArr);
console.log('\n\n\n');

const usuario = { nome: 'Diego', idade: 23};

 const mostraIdade = (usuario) => {
  return usuario.idade;
};

console.log(mostraIdade(usuario));
console.log('\n\n\n');

const nome = 'Diego';
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => {
  return { nome, idade };
};

console.log(mostraUsuario(nome));
console.log(mostraUsuario(nome));
console.log('\n\n\n');

const promise = () => {
  return new Promise((resolve, reject) =>{
    return resolve();
  })
};

promise().then(() => {
  console.log('Funcionou!')
});








