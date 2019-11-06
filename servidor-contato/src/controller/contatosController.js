const contatos = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(contatos.model);
};

// const getById = (request, response) => {
//   const id = request.params.id;
//   response.status(200).send(contatos.find(tarefa => tarefa.id == id));
// };

const add = (request, response, contato) => {
  contatos.model.contatos.push(request.body)
  console.log(request.body)
  response.status(200).send(request.body)
}


module.exports = {
  getAll,
  add
}

