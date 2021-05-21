import React, { useState, useEffect } from 'react';
import api from "./api";

const App = () => {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {

    async function getItems() {
      try {
        const { data } = await api.get("/artigo");
        setArtigos(data);
      } catch (error) {
        alert("Ocorreu um erro ao buscar os items");
      }
    }
    getItems();

  }, []);
    return (
      <div className="App">
        <h1>Listar Artigoss</h1>
        <ul>
          {artigos.map((index) => (
            <li key={index.createdAt}>
              <h2>{index.titulo}</h2>
              <p>{index.conteudo}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  
}

export default App;
