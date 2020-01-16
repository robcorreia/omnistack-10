const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
//index, show, store, update, destroy
//lista, um unico, criar, alterar, deletar
module.exports = {

  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    //vai no banco e procura o usuario que esta sendo recebido na requisição
    let dev = await Dev.findOne({ github_username });

    if (!dev) {

      const response = await axios.get(`https://api.github.com/users/${github_username}`);

      const { name = login, avatar_url, bio } = response.data;

      //pega a string e transforma em array quebrando pela ',' depois
      //com map percorre o array e pra cada tech ele limpa os espaços em branco
      // console.log(techs.split(',').map(tech => tech.trim()));
      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }

      dev = await Dev.create({
        github_username: github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      })
    }




    return res.json(dev);

  }
};