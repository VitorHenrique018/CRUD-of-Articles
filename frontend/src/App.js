import React, { useState } from "react";
import {
  getArticles,
  createArticles,
  deleteArticles,
  editArticles,
  getUniqueArticle,
} from "./actions/ApiArticles";
import Header from './components/modules/header/Header.js'

const App = () => {
  const [artigos, setArtigos] = useState([]);
  const [titulo, setTitulo] = useState([]);
  const [conteudo, setConteudo] = useState([]);
  const [checkArticle, setCheckArticle] = useState(false);
  const [id, setId] = useState("60a66ea3fe9f281d2cbc84f6");
  const [buscarArtigo, setBuscarArtigo] = useState("");
  const [uniqueArtigo, setUniqueArtigo] = useState([]);

  async function getA() {
    try {
      const resp = await getArticles();
      setArtigos(resp);
    } catch (err) {
      console.log("erro");
    }
  }

  async function postA() {
    const obj = {
      titulo: titulo,
      conteudo: conteudo,
    };
    try {
      const resp = await createArticles(obj);
      alert(resp.message);
    } catch (err) {
      console.log("erro");
    }
  }

  async function putA() {
    const obj = {
      titulo: titulo,
      conteudo: conteudo,
    };
    try {
      const resp = await editArticles(obj, id);
      alert(resp.message);
    } catch (err) {
      console.log("erro");
    }
  }

  async function deleteA() {
    try {
      const resp = await deleteArticles(id);
      alert(resp.message);
    } catch (err) {
      console.log("erro");
    }
  }

  async function getID() {
    try {
      const resp = await getUniqueArticle(buscarArtigo);
      setUniqueArtigo(resp);
    } catch (err) {
      console.log("erro");
    }
  }

  const buscarTodosArtigos = () => {
    getA();
    setCheckArticle((prevCheck) => !prevCheck);
  };

  const criarArtigo = () => {
    postA();
  };

  const editarArtigo = () => {
    putA();
  };

  const deletarArtigo = () => {
    deleteA();
  };

  const buscarArtigoId = () => {
    getID();
  };

  return (
    <div className="App">
      <Header />
      <h1>Listar Artigos</h1>

      {checkArticle === false ? (
        <button onClick={buscarTodosArtigos}>Buscar Todos os Artigos</button>
      ) : (
        <button onClick={buscarTodosArtigos}>Esconder Todos os Artigos</button>
      )}

      <ul>
        {checkArticle === false ? (
          <p>Nenhum resultado a ser visualizado</p>
        ) : (
          artigos.map((index) => (
            <li key={index.createdAt}>
              <h3>{index.titulo}</h3>
              <p>{index.conteudo}</p>
            </li>
          ))
        )}
      </ul>
      <div>
        <input
          placeholder="Titulo"
          className="input-msg"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          placeholder="Conteúdo"
          className="input-msg"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
        />
        <button onClick={criarArtigo}>Criar Artigo</button>
      </div>
      <div>
        <input
          placeholder="Titulo"
          className="input-msg"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          placeholder="Conteúdo"
          className="input-msg"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
        />
        <button onClick={editarArtigo}>Editar Artigo</button>
      </div>
      <div>
        <button onClick={deletarArtigo}>Excluir Artigo</button>
      </div>
      <div>
        <input
          placeholder="Titulo"
          className="input-msg"
          value={buscarArtigo}
          onChange={(e) => setBuscarArtigo(e.target.value)}
        />
        <button onClick={buscarArtigoId}>Buscar artigo Individual</button>

        {uniqueArtigo === [] ? (
          <p>Nenhum resultado a ser visualizado</p>
        ) : (
          <ul>
            <li key={uniqueArtigo.createdAt}>
              <h3>{uniqueArtigo.titulo}</h3>
              <p>{uniqueArtigo.conteudo}</p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
