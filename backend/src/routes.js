const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;







// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Qyery Params: request.query (Filtros, ordenação, paginação...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

//acessar http://portquiz.net:27017/ para testar a conexão