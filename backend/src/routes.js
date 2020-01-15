const { Router } = require('express');

const routes = Router();

routes.get('/users', (req, res) => {
  console.log(req.query);
  return res.json({message: "Hello World"});
})

routes.post('/users', (req, res) => {
  console.log(req.body);
  return res.json({message: "deu boa!"});
})

module.exports = routes;







// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Qyery Params: request.query (Filtros, ordenação, paginação...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

//acessar http://portquiz.net:27017/ para testar a conexão