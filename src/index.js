const express = require("express");
const mongoose = require("mongoose"); //trazuz os objetos para JS

require("../models/Artigo.js");
const Artigo = mongoose.model(`artigo`);

//cors usado para permissões
const cors = require("cors");

const app = express();

app.use(express.json());

app.use((request, response, next) => {
  //console.log("Acessou o middleware");
  response.header("Access-Control-Allow-Origin","*"); 
  response.header("Access-Control-Allow-Methods",'GET, PUT, POST, DELETE'); 
  /*pode colocar Localhost:3334 | * libera para todos., serve para os metodos tbm, put,get, post*/
  app.use(cors());
  next();
});

mongoose
  .connect("mongodb://localhost/vitor", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Conexão com o MongoDB Realizada com sucesso");
  })
  .catch((error) => {
    console.log("Erro: Conexão não foi Realizada com sucesso");
  });

app.get("/", (request, response) => {
  Artigo.find({})
    .then((artigo) => {
      return response.json(artigo);
    })
    .catch((erro) => {
      return response.status(400).json({
        error: true,
        message: "Nenhum Artigo encontrado",
      });
    });
});

app.post("/artigo", (request, response) => {
  Artigo.create(request.body, (err) => {
    if (err)
      return response.status(400).json({
        error: true,
        message: "Error: Artigo nao foi cadastrado com sucesso!",
      });
    response.status(200).json({
      error: false,
      message: "Artigo cadastrado com sucesso!",
    });
  });
});

app.get("/artigo/:id", (request, response) => {
  Artigo.findOne({ _id: request.params.id })
    .then((artigo) => {
      return response.json(artigo);
    })
    .catch((erro) => {
      return response.status(400).json({
        error: false,
        message: "Nenhum Artigo Encontrado",
      });
    });
});

app.put("/artigo/:id", (request, response) => {
  Artigo.updateOne({ _id: request.params.id }, request.body, (err) => {
    if (err)
      return response.status(400).json({
        error: true,
        message: "Error: Artigo não esta cadastrado!",
      });
    response.status(200).json({
      error: false,
      message: "Artigo Alterado com sucesso!",
    });
  });
});

app.delete("/artigo/:id", (request, response) => {
  Artigo.deleteOne({ _id: request.params.id }, (err) => {
    if (err)
      return response.status(400).json({
        error: true,
        message: "Error: Artigo não esta cadastrado!",
      });
    response.status(200).json({
      error: false,
      message: "Artigo Apagado com sucesso!",
    });
  });
});

app.listen(3333),
  () => {
    console.log("Server Rodando");
  };

module.exports = app;
