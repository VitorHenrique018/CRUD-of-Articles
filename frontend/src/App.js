import React, { useState, useEffect } from "react";
import { getArticles } from "./sources/apiArticles";
//import api from "./api";

const App = () => {
  const [artigos, setArtigos] = useState([]);

  async function getA() {
    try {
      const resp = await getArticles();
      setArtigos(resp);
    } catch (err) {
      console.log("erro");
    }
  }

  useEffect(() => {
    getA();
  }, []);

  return (
    <div className="App">
      <h1>Listar Artigoss</h1>
      <ul>
        {artigos.map((index) => (
          <li key={index.createdAt}>
            <h3>{index.titulo}</h3>
            <p>{index.conteudo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
