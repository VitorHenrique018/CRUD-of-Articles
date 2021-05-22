import React, { useState, useEffect } from "react";
import { getArticles } from "./sources/apiArticles";
//import api from "./api";

const App = () => {
  const [artigos, setArtigos] = useState([]);
  const [checkArticle, setCheckArticle] = useState(false);

  async function getA() {
    try {
      const resp = await getArticles();
      setArtigos(resp);
    } catch (err) {
      console.log("erro");
    }
  }

  useEffect(() => {}, []);

  const buscarTodosArtigos = () => {
    getA();
    setCheckArticle((prevCheck) => !prevCheck);
  };

  return (
    <div className="App">
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
    </div>
  );
};

export default App;
