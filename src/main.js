
/*
///////////////////////////////////////////////////////////////////////

class TodoList { //definindo uma classe
  //Aqui podemos definir métodos
  constructor() { // vai ser o primeiro método execultado toda vez que estanciar um novo objeto a partir dessa classe
    this.todos = [];
  }

  //criando um novo método
  addTodo() {
    this.todos.push('Novo todo');
    console.log(this.todos);

    console.log('\n\n');
  }
}


console.log('\n\n');

//vamos criar uma variável que vai armazenar uma nova lista, e vamos instancia-la a classe TodoList
const MinhaLista = new TodoList();

//comunicação do javascript com o html com evento onclick que receberá uma função que vai execultar a MinhaList.addTodo
document.getElementById('novotodo').onclick = function() {
   MinhaLista.addTodo();
}


///////////////////////////////////////////////////////////////////////



//conseguimos utilizar de herança

class Lista {
   constructor() {
      this.data = [];
   }

   add(data) {
    this.data.push(data);
    console.log(this.data);

    console.log('\n\n');
   }
}


console.log('\n\n');
class TodoLista extends Lista { //essa classe vai começar estender essa classe lista, ou seja que herda as propriedades da lista, caso a gente queira adiconar alguma informação a mais, por exemplo um nome. Quando definimos o método constructor numa classe que herda outra classe, é muito bom a gente chamar o metodo constructor da classe pai, chamando a propriedade super()
  constructor() {
    super(); //basicamente chamamos o constructor da classe pai

    //daí podemos criar outras propriedades
    this.usuario = 'Tom';
  }

  mostraUsuario() {
    console.log(this.usuario);

    console.log('\n\n');
  }
}

const MinhaListas = new TodoLista();

document.getElementById('novo-todo').onclick = function() {
   MinhaListas.add('Tudo Novo');
}

MinhaListas.mostraUsuario();
console.log('\n\n');
///////////////////////////////////////////////////////////////////////


//Também temos os métodos estáticos, que quando definimos um métodp estático é basicamente pra gente passar um informação pra ele. e ele retornar outra informação independente do restant da classe. Então geralmente quando tiver métodos estáticos numa classe, a gente nem vai ter constructor, é so uma classe pra ajudar a gente fazer algumas coisas.

class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1, 2));

console.log('\n\n');
///////////////////////////////////////////////////////////////////////


//variável constant

//nesta variável const não podemos reatribuir um valor a variável. Mas o que a gente pode fazer é mutar uma variável.

const pessoa = { nome: 'Tom'};
pessoa.nome = 'Cachorrinhos também choram';
console.log(pessoa);
console.log('\n\n');
//isso é mutação. Quando a gente trabalha com o mesmo formato do objeto, com as mesmas informações, porém a gente altera valores dentro desse objeto, ou desse vetor, a multação é possível dentro de uma constante.


///////////////////////////////////////////////////////////////////////




//Operações em vetores em javaScript com ecma script 6

//Temos algumas funcionalidades em cima dos vetores que conseguimos percorrer, manipular, filtrar de forma bem práticas

const arr = [1, 3, 4, 5, 8, 9];

//Map() -> Serve para percorrer o vetor e retornar alguma coisa de dentro,  uma nova informação

const newArr = arr.map(function(item, index) {
  return item * index; //somando o item com a posição
})

console.log(newArr);
console.log('\n\n');
///////////////////////////////////////////////////////////////////////



//reduce() -> Basicamente é uma forma da gente consumir todo o nosso vetor e transformar em uma única informação, em uma única variável, geralmente um número.

const sum = arr.reduce(function(total, next) {
  //cada vez que ele execultar... ele vai pegar o valor do retorno e vai jogar pro total da próxima função execultada.
  return  total + next;
})

console.log(sum);

console.log('\n\n');

///////////////////////////////////////////////////////////////////////



//filter() -> Vamos supor que queremos pegar todos os números pares do meu array. Ou se tem que ser removido. Sempre trabalharemos aqui com o verdadeiro ou falso.

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter);


console.log('\n\n');

///////////////////////////////////////////////////////////////////////

//find() -> é utilizado para quando a gente quer verificar se existe uma informação dentro do array ou se a gente consegue encontrar a informação que queremos dentro de algum array. Se não tiver a informação pesquisada retornará com indefinido "undefined".


const find = arr.find(function(item) {
  return item === 4;
});

console.log(find);

console.log('\n\n');

///////////////////////////////////////////////////////////////////////




//DESESTRUTURAÇÂO


//REST -> Tem duas aplicações. E serve para pegarmos o resto das propriedades

const usuar = {
  nom: 'Diego',
  idad: 23,
  empresa: 'Rocketseat'
};

//Vamos supor que queremos pegar o nome, e o restante das outras informações desse usuario, eu queira armazenar em outra variável.

//conseguimos utilizar no array

//coseguimos utilizar em parãmetro de funções

//Então utilizaremos de ponto ponto ponto ou seja "..." e o nome da variável que eu quero armazanar

const { nom, ...resto } = usuar;

console.log(nom);
console.log(resto);


console.log('\n\n');

///////////////////////////////////////////////////////////////////////



//SPREAD

//Enquanto o rest pega o resto de alguma desestruturação, ou de uma passagem de parâmetro. O SPREAD faz o papel propagar, de repassar as infromações de algum objeto ou de um array para outra estrutura de dados.


const arr1 = [1, 2, 3];
const arr2 = [4, 5 ,6];

//Como fariamos para unir

const arr3 = [...arr1, ...arr2]; //os três pontos utilizados neste escopo ele vai copiar cada uma das informaç~es do arrays e colocar dentro da variável

console.log(arr3);



console.log('\n\n');
console.log('\n\n');



//Uma grande utilização do SPREAD OPERATOR  quando por exemplo quando queremos criar um novo objeto de usuário e queremos trocar alguma informação.

const usuario1 = {
  nome: 'Diego',
  idade1: 23,
  empr: 'Rocketseat',
};

const usuario2 = { ...usuario1, nome: 'Tom'};

console.log(usuario1);
console.log(usuario2);


console.log('\n\n');

///////////////////////////////////////////////////////////////////////


//Template Literals

//É uma forma de incluir variáveis dentro de strings em javaScript a partir do ES6

const nome1 = 'Diego';
const idade1 = 23;


console.log(`Meu nome é ${nome1} e tenho ${idade1} anos`);


console.log('\n\n');

///////////////////////////////////////////////////////////////////////



//OBJECT SHORT SYNTAX

//Sintaxe Curta de Objetos -> Quano tivermos os nomes das variáveis definidas e elas tiverem os mesmos nomes dentro do objeto, não precisamos repeti-las.

const nome2 = 'Tom';
const idade2 = 31;

const usuario3 = {
  nome2,
  idade2
};

console.log(usuario3);

/*antes nestes casos seria assim:

      const usuario3 = {
        nome2: nome2,
        idade2: idade2
      };


console.log('\n\n');


*/
///////////////////////////////////////////////////////////////////////

//const { title } = require("process");

///////////////////////////////////////////////////////////////////////
/*
import ClasseUsuario, { idade as idadeUsuario } from '../exercicios-modulo_2/functions';

ClasseUsuario.info();
console.log(idadeUsuario);
*/
///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
/* /Async/await

const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('Ok') }, 2000);
})

async function execultaPromise() {
  const response = await minhaPromise();
  console.log(response);
  /*console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

execultaPromise();
*/
///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
/* AXIOS



import axios from 'axios';


class Api {
  static async getUserInfo(username) {
    try {
      const response = await
      axios.get(`https://api.github.com/users/${username}`);

      console.log(response);
    } catch (err) {
      console.warn('Erro na API');
    }
  }
}

 Api.getUserInfo('diego3g');

*/
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
/*
  IMPORTAÇÃO DO ARQUIVO ASYNC/AWAIT.JS

 import umPorSegundo from '../exercicios-modulo_3/asyncAwait';

 umPorSegundo();
*/
//////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
/*
  IMPORTAÇÃO DO ARQUIVO AXIOS.JS

import getUserFromGithub from '../exercicios-modulo_3/axios';

getUserFromGithub();

*/
///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
/*
import { Github } from '../exercicios-modulo_3/axios';

Github.getRepositories('wtomalves/CursoJavaScript');
Github.getRepositories('rocketseat/dslkmskv');
*/
///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
/*
import { buscaUsuario } from '../exercicios-modulo_3/axios';

buscaUsuario('diego3g');
buscaUsuario('diego3g55415')
*/
//////////////////////////////////////////////////////////////////////


//projeto utilizando algumas coisas que aprendemos até aqui em ecma script 6

import api from './api'; //importando o api do arquivo "./api"


//vamos criar uma classe App que servirá para controlar toda a aplicação
class App {
  constructor() {
    this.repositories = []; //criar um array que vai guardar minha lista de repositórios que buscar do github

    this.formEl = document.getElementById('repo-form');//vamos adicionar a referencia a esse elemento form porque queremos saber pelo javaScript quando o usuário deu submit nesse form.

    this.inputEl = document.querySelector('input[name=repository]');//vamos referenciar o input para que possamos pegar o valor dele

    this.listEl = document.getElementById('repo-list'); //regisrar uma referencia para a ul

    this.registerHandlers();
  }

  registerHandlers() { //vai registrar nossos eventos de quando o usuário submitar o form
    this.formEl.onsubmit = event => this.addRepository(event); //então é aqui que vamos ouvir esse evento
  }

  setLoading(loading = true) { //função par criar um elemento em tela escrito "carregando" enquanto estiver fazendo a requisição na api
    if (loading) {
      let loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('Carregando'));
      loadingEl.setAttribute('id', 'loading');

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();//Aqui apagamos o elemento quando estiver concluído a requisição
    }
  }

  //trandformamos em um método assíncrono, para que possamos utilizar a sintaxe do async/await
  async addRepository(event) { //esse evento é para fazer o preventDefault que com isso ele não vai deixar o form ter aquele funcionamento comum que ele tem no html, que é de recarregar á página, ou seja, vai previnir que isto aconteça
    event.preventDefault();

    const repoInput = this.inputEl.value;//pegarmos o valor do input

    if (repoInput === 0) {//vamos ver se tem alguma coisa escrito nele, senão tiver não vai fazer nada, vamos colocar um return para fazer com que a função pare de excultar por aqui
      return;
    }

    this.setLoading();

    try {
      const response = await api.get(`/repos/${repoInput}`);//Aqui fazemos a requisição a nossa api

      const { name, description,  html_url, owner: {avatar_url} } = response.data;//Aqui vamos pegar algumas informações dessa resposta dentro do data, aqui utilizamos da desestruturação


      this.repositories.push({ //adicionar novo repositório dentro do nosso array
        name,
        description,
        avatar_url,
        html_url,
      });

      this.inputEl.value = ''; //Aqui apagamos o conteudo do input
      this.render();

    } catch (err) {
      alert('O repositório não existe');
    }

    this.setLoading(false); //Passamos a função com false aqui no fina dentro do try ou no catch, nós tiramos a informação de loading, porque loading já acabou


  }

  render() {//basicamente vai apagar todo contéudo da nossa lista e renderizar do zero, vai percorrer todo array mostrando cada um dos repositórios lá dentro, então vamos ter que criar os elementos de lista, imagem, strong, link
    this.listEl.innerHTML = '';//para apagar todo conteúdo

    this.repositories.forEach(repo => {// percorrer todos nossos repositórios com forEach

      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
     console.log("repo", repo);
      linkEl.setAttribute('href', repo.html_url);
      linkEl.appendChild(document.createTextNode('Acessar'));


      let listItemEl = document.createElement('li');

      //agota vamos colocar tudo isso dentro do listItemEl
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      //agora por final jogamos tudo isso dentro da nossa lista listEl
      this.listEl.appendChild(listItemEl);
    });
  }
}


//vamos aqui instanciar a classe, porém como não precisamos armazenar essa classe em nunhuma variável, podemos simplesmente aqui em baixo escrever new App, que ele vai execultar a classe sem nenhum problema
new App();




