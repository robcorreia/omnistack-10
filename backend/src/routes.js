const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');


const routes = Router();


routes.get('/devs', (req, res) => {
  return res.json();
})

routes.post('/devs', async (req, res) => {
  const { github_username, techs, latitude, longitude } = req.body;

  const response = await axios.get(`https://api.github.com/users/${github_username}`);

  const { name = login, avatar_url, bio } = response.data;

  //pega a string e transforma em array quebrando pela ',' depois
  //com map percorre o array e pra cada tech ele limpa os espaços em branco
  // console.log(techs.split(',').map(tech => tech.trim()));
  const techsArray = techs.split(',').map(tech => tech.trim());

  const location = {
    type: 'Point',
    coordinates: [longitude, latitude],
  }

  const dev = await Dev.create({
    github_username : github_username,
    name,
    avatar_url,
    bio,
    techs : techsArray,
    location,
  })

  return res.json(dev);

})

module.exports = routes;







// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Qyery Params: request.query (Filtros, ordenação, paginação...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

//acessar http://portquiz.net:27017/ para testar a conexão