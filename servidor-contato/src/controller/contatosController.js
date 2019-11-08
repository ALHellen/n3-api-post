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

const verificaDuplicidade = (request, response) => {

  let dados = request.body
  let meuBanco = contatos.model.contatos
  dados.id = Math.random().toString(36).substr(-8)

  if(dados.nome === undefined || dados.dataNascimento === undefined || dados.celular === undefined){
    response.status(400).send("Insira todos os dados solicitados")
  }
  else{

  if(meuBanco.find(dadox => dadox.nome === dados.nome)){
    response.status(400).send("Contato já cadastrado")
  }
  else
  {
    meuBanco.push(dados)
    response.status(200).send(dados)
    console.log("aqui")
  }
}

}

module.exports = {
  getAll,
  verificaDuplicidade
}
