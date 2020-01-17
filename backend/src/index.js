const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//tem que alterar usuario, senha, nome do banco (depois do .net) e passar um segundo parametro para tirar os warnings
mongoose.connect('mongodb+srv://omnistack10:omnistack10@omnistack-t9juu.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
 });

//sempre vir antes
/* app.use(cors({ origin: 'http://localhost:3000'})); */
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);