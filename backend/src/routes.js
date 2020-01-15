const { Router } = require('express');
const axios = require('axios');

const routes = Router();

const devs = [];

/* routes.get('/devs', (req, res) => {
  return res.json(devs);
})
 */
routes.post('/devs', async (req, res) => {
  const { github_username } = req.body;
  devs.push(req.body);
  console.log(github_username);

  const response = await axios.get(`https://api.github.com/users/${github_username}`);
  console.log(response.data);

  return res.json();
})

module.exports = routes;







// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Qyery Params: request.query (Filtros, ordenação, paginação...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

//acessar http://portquiz.net:27017/ para testar a conexão