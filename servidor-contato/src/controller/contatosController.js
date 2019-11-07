const contatos = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(contatos.model);
};

// const getById = (request, response) => {
//   const id = request.params.id;
//   response.status(200).send(contatos.find(tarefa => tarefa.id == id));
// };

// const add = (request, response) => {
//   let contato = request.body
//   contato.id = Math.random().toString(36).substr(-8)
//   contatos.model.contatos.push(contato)
//   response.status(200).send(contato)
// }

const verificaDuplicidade = (request, response, nome) => {
  let dados = request.body
  if(dados.nome != contatos.model.contatos.nome){
    dados.id = Math.random().toString(36).substr(-8)
    contatos.model.contatos.push(dados)
    response.status(200).send(dados)
  }
  else{
    console.log("Contato já existe.")
  }
  
}


module.exports = {
  getAll,
  verificaDuplicidade
}

