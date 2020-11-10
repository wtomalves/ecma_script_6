import axios from 'axios';

/*
export async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response);
  } catch (err){
    console.log('Usuário não existe');
  }
}

getUserFromGithub('wtomalves');
getUserFromGithub('diego3g124123');
*/



/*
export class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data.name);
    } catch(err) {
      console.log('Repositório não existe');
    }
  }
}
*/


export const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`)
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe');
  }
}





