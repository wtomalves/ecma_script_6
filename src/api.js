import axios from 'axios'; //adicionamos o axios em nosso terminal e aqui importamos


//vamos agora para a configuração do axios
const api = axios.create({
  baseURL: 'https://api.github.com', // Aqui ele cria uma configuração do axios e conseguimos definir uma baseURL pra API. A partir do momento que definimos uma baseURL para API, todas as requisições vão partir desse endereço. OU seja, já podemos deixar pré configurado.
});

export default api; //para conseguirmos chamar dentro de outro arquivo
